// const GameVersion = [
//     "GOLD",
//     "SILVER",
//     "CRYSTAL",

//     "RUBY",
//     "SAPPHIRE",
//     "FIRE_RED",
//     "LEAF_GREEN",
//     "EMERALD",

//     "DIAMOND",
//     "PEARL",
//     "PLATINUM",
//     "HEART_GOLD",
//     "SOUL_SILVER",

//     "BLACK",
//     "WHITE",
//     "BLACK_2",
//     "WHITE_2",

//     "X",
//     "Y",

//     "OMEGA_RUBY",
//     "ALPHA_SAPPHIRE",

//     "SUN",
//     "MOON",
//     "ULTRA_SUN",
//     "ULTRA_MOON"
// ]

const EncounterType = Object.freeze({
    WALKING: 'walkSlots',
    SURF: 'surfSlots',
    ROCKSMASH: 'rockSmashSlots',
    OLDROD: 'oldRodSlots',
    GOODROD: 'goodRodSlots',
    SUPERROD: 'superRodSlots',
    DARKGRASS: 'darkGrassSlots',
    SHAKINGGRASS: 'shakingGrassSlots',
    RIPPLINGSURF: 'ripplingSurfSlots',
    RIPPLINGFISH: 'ripplingFishSlots',
    TALLGRASS: 'tallGrassSlots',
    REDFLOWERS: 'redFlowerSlots',
    YELLOWFLOWERS: 'yellowFlowerSlots',
    PURPLEFLOWERS: 'purpleFlowerSlots',
    SHALLOWWATER: 'shallowWaterSpots',
    DIVING: 'divingSpots',
    HORDES: 'hordeSpots',
});

// Data
let currMapData;
let pokemonIcons;

// Encounter slots
let slotPrefab; // Slot element to clone
let slotContainer;
let slots = []; // Array of slots cloned from prefab

// Dropdowns
let ddVersion;
let ddMap;
let ddEncounter;

// Extra Options
let timeOfDayParent;
let ddTimeOfDay;

// Repel
let repelLevel;
let repelEncRate; // Encounter rate for current repel level
let repelSlots; // Encounter slots stored to display when 
let repelShown = false;
let repelButton;

let repelEncRateText;
let repelEncRateBar;
let encHeaderText;

// Swarm
let checkSwarm;

// Events

onload = (event) => {
    // Encounter slots
    slotPrefab = document.getElementById("prefab");
    slotContainer = document.getElementById("encounterContainer");

    // Dropdowns
    ddVersion = document.getElementById("ddVersion");
    ddMap = document.getElementById("ddMap");
    ddEncounter = document.getElementById("ddEncounter");

    // Misc Info
    timeOfDayParent = document.getElementById("sectToD");
    ddTimeOfDay = document.getElementById("ddTime");
    ddTimeOfDay.addEventListener("change", mapChanged);
    
    // Repel
    repelLevel = document.getElementById("repelLevel");
    repelLevel.addEventListener("input", updateRepelEncounters);
    repelEncRateText = document.getElementById("encRate");
    repelEncRateBar = document.getElementById("encBar");

    repelButton = document.getElementById("repelButton");
    repelButton.addEventListener("click", displayRepelInfo)

    // Swarm
    checkSwarm = document.getElementById("checkSwarm");
    checkSwarm.addEventListener("input", encounterChanged);

    encHeaderText = document.getElementById("encHeader");

    initSlotElements();

    ddVersion.onchange = versionChanged;
    ddMap.onchange = mapChanged;
    ddEncounter.onchange = encounterChanged;

    $.getJSON("https://raw.githubusercontent.com/msikma/pokesprite/master/data/pokemon.json").done( function(json) {
        pokemonIcons = json;


        translatePage();

        for (let i = 0; i < Object.keys(GameVersion).length; i++)
        {
            var opt = document.createElement('option');
            opt.value = i;
            opt.setAttribute("localeid", Object.keys(GameVersion)[i]);
            translateElement(opt);
            ddVersion.appendChild(opt);
        }
    
        ddVersion.selectedIndex = 0;
        versionChanged();
    });
};

function removeDropdownOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
}

function selectRandomDropdown(dropdown)
{
    let index = getRandomInt(dropdown.options.length);
    return dropdown.selectedIndex = index;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}  

function createDropdownOption(select, innerText, value = -1)
{
    var opt = document.createElement('option');
    if (value == -1)
    {
        if (select.options.length > 0)
        {
            opt.value = select.options[select.options.length - 1].value;
        } else {
            opt.value = 0;
        }
    } else {
        opt.value = value;
    }
    opt.innerText = innerText;
    opt.setAttribute("localeid", innerText);

    translateElement(opt);

    select.appendChild(opt);
}

function getMapEncounters(map, slotName)
{
    let swarmCheck = document.getElementById("checkSwarm");

    if (GameVersion[ddVersion.options[ddVersion.selectedIndex].getAttribute("localeid")].daynight && EncounterType[slotName] === EncounterType.WALKING)
    {
        // Swarm check
        if (map["outbreakMorningSlots"].length > 0 && swarmCheck.checked)
        {
            switch (ddTimeOfDay.selectedIndex)
            {
                case 0:
                    return map["outbreakMorningSlots"];
                case 1:
                    return map["outbreakDaySlots"];
                case 2:
                    return map["outbreakNightSlots"];
            }
        }

        return map[ddTimeOfDay[ddTimeOfDay.selectedIndex].id];
    } else {
        // Swarm check
        if (map["outbreakSurfSlots"].length > 0 && EncounterType[slotName] === EncounterType.SURF && swarmCheck.checked)
        {
            return map["outbreakSurfSlots"];
        }

        return map[EncounterType[slotName]];
    }
}

function showEncounters(slots, repel = false)
{
    let tempSlots = document.getElementsByClassName("encounterSlot");

    // TODO: ugly...........
    for (let i = 0; i < tempSlots.length; i++)
    {
        if (i >= slots.length)
        {
            tempSlots[i].children[0].innerText = ""
            tempSlots[i].children[1].src = "";
            tempSlots[i].children[2].innerText = "";
            tempSlots[i].children[3].innerText = "";
            tempSlots[i].children[4].innerText = "";
            
            tempSlots[i].setAttribute("localeid", "");
            continue;
        }

        tempSlots[i].children[0].innerText = repel? (slots[i].effectivePercent+ "%") : (slots[i].percent + "%");

        tempSlots[i].children[1].src = getPokemonIcon(slots[i]);

        tempSlots[i].children[2].innerText = slots[i].pokemon;
        tempSlots[i].children[2].setAttribute("localeid", slots[i].pokemon + "_" + slots[i].form);

        if (!repel)
        {
            tempSlots[i].children[3].innerText = "Lv. " + slots[i].minLevel;
            tempSlots[i].children[4].innerText = "Lv. " + slots[i].maxLevel;
        } else {
            
            tempSlots[i].children[3].innerText = "";
            tempSlots[i].children[4].innerText = "";            
        }

        translateElement(tempSlots[i].children[2]);
    }
}

function initSlotElements()
{
    slots.push[slotPrefab];

    for (let i = 0; i < 12; i++)
    {
        let slotClone = slotPrefab.cloneNode(true);
        
        slots.push[slotClone];
        slotContainer.appendChild(slotClone);
    }
}


function versionChanged()
{
    $.getJSON("/data/encCalc/" + GameVersion[ddVersion.options[ddVersion.selectedIndex].getAttribute("localeid")].mapName + ".json").done(function( json ) {
        let toIndex = 0;

        if (ddMap.options[ddMap.selectedIndex] != null)
        {
            json.find(function(item, i){
                if(item.id === ddMap.options[ddMap.selectedIndex].getAttribute("localeid")){
                  toIndex = i;
                  return i;
                }
              });
        }

        currMapData = json;

        removeDropdownOptions(ddMap);

        for (let i = 0; i < currMapData.length; i++){
            createDropdownOption(ddMap, currMapData[i].id, i);
        }

        // Enable Time of Day section if version is marked as having DNS
        timeOfDayParent.style.display = GameVersion[ddVersion.options[ddVersion.selectedIndex].getAttribute("localeid")].daynight? "inline" : "none"; 
        
        selectRandomDropdown(ddMap);
        mapChanged();
      });
}

function mapChanged()
{
    let map = getCurrentMap();

    let ddEncounter = document.getElementById("ddEncounter");

    let hasWalk = map.hasOwnProperty(EncounterType.WALKING);

    removeDropdownOptions(ddEncounter);

    if (hasWalk && map[EncounterType.WALKING].length > 0)
    {
        createDropdownOption(ddEncounter, Object.keys(EncounterType)[0]);
    }

    let hasSurf = map.hasOwnProperty(EncounterType.SURF);
    
    if (hasSurf && map[EncounterType.SURF].length > 0)
    {
        createDropdownOption(ddEncounter, Object.keys(EncounterType)[1]);
    }

    let hasOldRod   = map.hasOwnProperty(EncounterType.OLDROD);
    let hasGoodRod  = map.hasOwnProperty(EncounterType.GOODROD);
    let hasSuperRod = map.hasOwnProperty(EncounterType.SUPERROD);

    if (hasOldRod && map[EncounterType.OLDROD].length > 0)
    {
        createDropdownOption(ddEncounter, Object.keys(EncounterType)[3]);
    }

    if (hasGoodRod && map[EncounterType.GOODROD].length > 0)
    {
        createDropdownOption(ddEncounter, Object.keys(EncounterType)[4]);
    }

    if (hasSuperRod && map[EncounterType.SUPERROD].length > 0)
    {
        createDropdownOption(ddEncounter, Object.keys(EncounterType)[5]);
    }

    let hasRockSmash = map.hasOwnProperty(EncounterType.ROCKSMASH);

    if (hasRockSmash && map[EncounterType.ROCKSMASH].length > 0)
    {
        createDropdownOption(ddEncounter, Object.keys(EncounterType)[2]);
    }

    let swarmSect = document.getElementById("sectSwarm");

    let hasSwarm = false;

    if (map["outbreakMorningSlots"].length > 0 || map["outbreakDaySlots"].length > 0 || map["outbreakNightSlots"].length > 0 || map["outbreakSurfSlots"].length > 0)
    {
        hasSwarm = true;
    }

    swarmSect.style.display = hasSwarm ? "inline" : "none";

    let encounters = getMapEncounters(map, ddEncounter.options[0].getAttribute("localeid"));
    showEncounters(encounters);
    updateSwarmCheckmark(map);
    updateRepelEncounters();
}

function encounterChanged()
{
    let map = getCurrentMap();

    let encounters = getMapEncounters(map, ddEncounter.options[ddEncounter.selectedIndex].getAttribute("localeid"));
    showEncounters(encounters);
    updateSwarmCheckmark(map);
    updateRepelEncounters();
}

function updateSwarmCheckmark(map)
{
    let swarmSect = document.getElementById("sectSwarm");

    let hasSwarm = false;

    if ((EncounterType[ddEncounter.options[ddEncounter.selectedIndex].getAttribute("localeid")] === EncounterType.WALKING &&
       (map["outbreakMorningSlots"].length > 0 || map["outbreakDaySlots"].length > 0 || map["outbreakNightSlots"].length > 0)) ||
       (EncounterType[ddEncounter.options[ddEncounter.selectedIndex].getAttribute("localeid")] === EncounterType.SURF && 
       (map["outbreakSurfSlots"].length > 0)) )
    {
        hasSwarm = true;
    }

    swarmSect.style.display = hasSwarm ? "inline" : "none";
}

function getCurrentMap()
{
    return currMapData.find(element => element["id"] === ddMap.options[ddMap.value].getAttribute("localeid"));
}

// Returns image url of icon
// Expects encounter slot from map JSON
function getPokemonIcon(slot)
{    
    let url = "https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/";
    let monName = String(Pokemon[slot.pokemon].valueOf()).padStart(3, '0');
    let iconData = pokemonIcons[monName];
    let iconSlug = iconData.slug.eng;
    let monForm = slot.form;

    let formData;

    // Prioritize getting gen 7 forms for now
    if (iconData.hasOwnProperty("gen-7") && iconData["gen-7"].length > 0)
    {
        formData = iconData["gen-7"].forms;
    } else {
        formData = iconData["gen-8"].forms;
    }

    // If the form is an alias, skip it (Burmy, Eiscue, etc.)
    for (let i = 0; i < formData.length; i++)
    {
        if (formData[i].hasOwnProperty("is_alias_of"))
        {
            formData = formData.splice(i, 1);
        }
    }

    // Get keys of the form data to use indexer
    let formKeys = Object.keys(formData);
    
    // Only add the form slug if form isn't default (0)
    if (monForm > 0)
    {
        iconSlug += "-" + formKeys[monForm];
    }

    url += iconSlug + ".png";
    return url;
}

// 
function calcRepelEncounters(slots, repel)
{
    // Deep copy the slots passed
    let result =  JSON.parse(JSON.stringify(slots));

    // Calc
    result.map((element) => {
        element.percent *= Math.min(Math.max(0, (element.maxLevel - repel + 1) / (element.maxLevel - element.minLevel + 1)), 1);
    });

    // If percent = 0, remove
    result = result.filter(element => element.percent > 0);

    let normalizedResult = normalizeRepelSlots(result);
    
    repelEncRate = sumArray(result, "percent");
    
    return normalizedResult;
}

function normalizeRepelSlots(slots)
{
    let normalizedSlots = [];
    let slots2 = JSON.parse(JSON.stringify(slots));

    let totalPercent = 0;

    while (slots2.length != 0)
    {
        let encounter = slots2[0]
        let percent = encounter.percent;
        let effPercent = percent; //encounter.effectivePercent == 0? percent : encounter.effectivePercent;
        let minLvl = encounter.minLevel;
        let maxLvl = encounter.maxLevel;

        for (let i = 1; i < slots2.length; i++)
        {
            if (encounter.pokemon === slots2[i].pokemon)
            {
                minLvl = Math.min(minLvl, slots2[i].minLevel);
                maxLvl = Math.max(maxLvl, slots2[i].maxLevel);
                percent += slots2[i].percent;
                effPercent += slots2[i].percent;
            }
        }

        normalizedSlots.push({
            "pokemon": encounter.pokemon,
            "form": encounter.form,
            "percent": percent,
            "effectivePercent": effPercent,
            "minLevel": minLvl,
            "maxLevel": maxLvl
        });

        totalPercent += effPercent;

        slots2 = slots2.filter(element => element.pokemon != encounter.pokemon);
    }

    if (totalPercent == 0)
    {
        return [];
    }

    normalizedSlots.map((element) => {
        element.effectivePercent *= 100 / totalPercent;
        element.effectivePercent = Math.round(element.effectivePercent * 100) / 100;
    });

    return normalizedSlots;
}

function updateRepelEncounters()
{
    let map = getCurrentMap();
    let encounters = getMapEncounters(map, ddEncounter.options[ddEncounter.selectedIndex].getAttribute("localeid"));

    repelSlots = calcRepelEncounters(encounters, repelLevel.value);

    if (repelShown)
    {
        showEncounters(repelSlots, true);
    }
}

function displayRepelInfo()
{
    repelShown = !repelShown;
    
    if (!repelShown)
    {
        showEncounters(getMapEncounters(getCurrentMap(), ddEncounter.options[ddEncounter.selectedIndex].getAttribute("localeid")));
    } else {    
        showEncounters(repelSlots, true);
    }

    toggleEncounterBar();
}

function toggleEncounterBar()
{
    repelEncRateText.innerText = repelShown? (repelEncRate + "%") : "--";
    repelEncRateBar.style["width"] = repelShown? (repelEncRate + "%") : "0%";

    repelButton.innerText = repelShown ? "Back" : "Calculate";
    
    if (repelShown)
    {
        repelButton.className += " back";
    } else {
        repelButton.className = repelButton.className.replace(" back", "");
    }

    encHeaderText.innerText = repelShown ? "Encounters (Repel Activated)" : "Encounters";
}

function sumArray(items, property)
{
    return items.reduce( function(a, b)
    {
        return a + b[property];
    }, 0);
}