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
    HORDES: 'hordeSpots'
});

/* Variables/Elements */

// Data
let currentGameData; // All encounters for currently selected game
let pokemonIcons; // PokeSprite JSON data

// Encounter slots
let slotElement; // Slot element to clone
let slotContainer;
let slotClones = []; // Array of slots cloned from prefab

// Dropdowns
let dropVersion;
let dropMap;
let dropEncounter;

// Extra Options
// - Time
let timeDiv;
let dropTime;
// - Ability
let abilityDiv;
let dropAbility;

// Repel
// - Elements
let leadLevel;
let calcButton; // "Calculate"!
let encounterRateText;
let encounterRateBar;
let repelCheck; // Repel Checkbox

// - Data
let repelEncRate; // Encounter rate for current repel level
let repelEncounters; // Encounter slots stored to display when 
let repelDisplay = false; // If the encounters are being displayed
let encHeaderText;

// Swarm
let checkSwarm;
let outbreaks = [
    "outbreakMorningSlots",
    "outbreakDaySlots",
    "outbreakNighhtSlots"
]

/* Functions */

// Events
onload = (event) => {

    // Define element variables
    initElements();
    initSlotElements();

    // TODO: Page load shouldn't depend on sprites loading
    $.getJSON("https://raw.githubusercontent.com/msikma/pokesprite/master/data/pokemon.json").done( function(json) {
        pokemonIcons = json;

        translatePage();

        // Add all versions to dropdown
        for (let i = 0; i < Object.keys(GameVersion).length; i++)
        {
            createDropdownOption(dropVersion, Object.keys(GameVersion)[i]);
        }

        // Select a random game on load
        selectRandomDropdown(dropVersion);

        versionChanged();
    });
};

// Define element variables and assign event listeners
function initElements()
{
    // Encounter slots
    slotElement = document.getElementById("prefab");
    slotContainer = document.getElementById("encounterContainer");

    // Dropdowns
    dropVersion = document.getElementById("ddVersion");
    dropVersion.addEventListener("change", versionChanged);

    dropMap = document.getElementById("ddMap");
    dropMap.addEventListener("change", mapChanged);

    dropEncounter = document.getElementById("ddEncounter");
    dropEncounter.addEventListener("change", encounterChanged);

    // Misc Info
    timeDiv = document.getElementById("sectToD");
    dropTime = document.getElementById("ddTime");
    dropTime.addEventListener("change", encounterChanged);

    abilityDiv = document.getElementById("sectAbility");
    dropAbility = document.getElementById("ddAbility");
    
    // Repel
    leadLevel = document.getElementById("leadLevel");
    encounterRateText = document.getElementById("encRate");
    encounterRateBar = document.getElementById("encBar");
    repelCheck = document.getElementById("checkRepel");

    calcButton = document.getElementById("calcButton");
    calcButton.addEventListener("click", runRepelCalc)


    // Swarm
    checkSwarm = document.getElementById("checkSwarm");
    checkSwarm.addEventListener("input", encounterChanged);

    encHeaderText = document.getElementById("encHeader");
}

// Clone the initial slot element, creating 12 encounter slot elements
// TODO: Replace arbitrary 12 with cap based on version
function initSlotElements()
{
    slotClones.push[slotElement];

    for (let i = 0; i < 12; i++)
    {
        let slotClone = slotElement.cloneNode(true);
        
        slotClones.push[slotClone];
        slotContainer.appendChild(slotClone);
    }
}



function getMapEncounters(map, encounterType)
{
    let swarmCheck = document.getElementById("checkSwarm");
    let versionData = GameVersion[dropVersion.options[dropVersion.selectedIndex].getAttribute("localeid")];

    if (versionData.daynight && EncounterType[encounterType] === EncounterType.WALKING)
    {
        // Swarm check
        // TODO: Better identification for different encounter keys for each generation
        if (map.hasOwnProperty("outbreakMorningSlots") && map["outbreakMorningSlots"].length > 0 && swarmCheck.checked)
        {
            switch (dropTime.selectedIndex)
            {
                case 0:
                    return map["outbreakMorningSlots"];
                case 1:
                    return map["outbreakDaySlots"];
                case 2:
                    return map["outbreakNightSlots"];
            }
        }

        // TODO: Better identification system for versions to avoid string comparisons
        if (dropTime[dropTime.selectedIndex].id != "walkSlots")
        {
            switch (dropVersion.options[dropVersion.selectedIndex].getAttribute("localeid"))
            {
                case "DIAMOND":
                case "PEARL":
                case "PLATINUM":
                    let daySlots = JSON.parse(JSON.stringify(map["walkSlots"]));
                    daySlots[2].pokemon = map[dropTime[dropTime.selectedIndex].id][0].pokemon;
                    daySlots[3].pokemon = map[dropTime[dropTime.selectedIndex].id][1].pokemon;
    
                    return daySlots;
            }
        }

        return map[dropTime[dropTime.selectedIndex].id];
    } else {
        // Swarm check
        if (map.hasOwnProperty("outbreakSurfSlots") && map["outbreakSurfSlots"].length > 0 && EncounterType[encounterType] === EncounterType.SURF && swarmCheck.checked)
        {
            return map["outbreakSurfSlots"];
        }

        return map[EncounterType[encounterType]];
    }
}

function refreshEncounterDisplay(slots, repel = false)
{
    let tempSlots = document.getElementsByClassName("encounterSlot");

    // TODO: ugly...........
    for (let i = 0; i < tempSlots.length; i++)
    {
        // Clear element if we've run out of slots
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

        // 
        tempSlots[i].children[0].innerText = repel? (slots[i].effectivePercent+ "%") : (slots[i].percent + "%");
        
        tempSlots[i].children[1].src = getPokemonIcon(slots[i]);
        tempSlots[i].children[2].setAttribute("localeid", slots[i].pokemon + "_" + slots[i].form);

        // Only show levels if these are repel encounters
        if (!repel)
        {
            // TODO: Lv. -> localeid
            tempSlots[i].children[3].innerText = "Lv. " + slots[i].minLevel;
            tempSlots[i].children[4].innerText = "Lv. " + slots[i].maxLevel;
        } else {
            
            tempSlots[i].children[3].innerText = "";
            tempSlots[i].children[4].innerText = "";            
        }

        translateElement(tempSlots[i].children[2]);
    }
}

function versionChanged()
{
    $.getJSON("/data/encCalc/" + GameVersion[dropVersion.options[dropVersion.selectedIndex].getAttribute("localeid")].mapName + ".json").done(function( json ) {
        let toIndex = 0;

        if (dropMap.options[dropMap.selectedIndex] != null)
        {
            json.find(function(item, i){
                if(item.id === dropMap.options[dropMap.selectedIndex].getAttribute("localeid"))
                {
                    toIndex = i;
                    return i;
                }
            });
        }

        currentGameData = json;

        // Reset map dropdown and populate with each map found in the currentGameData
        removeAllDropdownOptions(dropMap);
        for (let i = 0; i < currentGameData.length; i++){
            createDropdownOption(dropMap, currentGameData[i].id, i);
        }

        // Toggle misc options based on game version
        let versionData = getVersionData();

        // Enable Time of Day section if version is marked as having DNS
        timeDiv.style.display = versionData.daynight? "inline" : "none"; 
        
        // Enable Abilities for Emerald temporarily
        // Number instead of bool for support for games with more abilities
        abilityDiv.style.display = versionData.abilities > 0? "inline": "none";

        // For fun: Select a random map on load
        selectRandomDropdown(dropMap);

        updateEncounterDropdown();
        encounterChanged();
    });
}

// Refresh the encounter type dropdown when the map has changed
function updateEncounterDropdown()
{
    removeAllDropdownOptions(dropEncounter);

    let mapData = getCurrentMapData();

    for (let i = 0; i < Object.keys(EncounterType).length; i++)
    {
        let hasEncounter = mapData.hasOwnProperty(Object.values(EncounterType)[i]);

        if (hasEncounter && mapData[Object.values(EncounterType)[i]].length > 0)
        {
            createDropdownOption(dropEncounter, Object.keys(EncounterType)[i]);
        }
    }

    refreshSwarmCheckmark(mapData);    
}

function mapChanged()
{
    updateEncounterDropdown();
    encounterChanged();
}

function encounterChanged()
{
    let mapData = getCurrentMapData();

    let encounters = getMapEncounters(mapData, dropEncounter.options[dropEncounter.selectedIndex].getAttribute("localeid"));
    refreshEncounterDisplay(encounters);
    refreshSwarmCheckmark(mapData);
}

function refreshSwarmCheckmark(mapData)
{
    let swarmSect = document.getElementById("sectSwarm");
    swarmSect.style.display = "none";

    // Check if mapData contains outbreak properties, break once detected
    for (let i = 0; i < outbreaks.length; i++)
    {
        if (mapData.hasOwnProperty(outbreaks[i]) && mapData[outbreaks[i]].length > 0)
        {
            swarmSect.style.display = "inline";
            break;
        }
    }
}

function getCurrentMapData()
{
    return currentGameData.find(element => element["id"] === dropMap.options[dropMap.value].getAttribute("localeid"));
}

function getVersionData()
{
    return GameVersion[dropVersion.options[dropVersion.selectedIndex].getAttribute("localeid")];
}

// 


function normalizeRepelEncounters(encounters)
{
    let normalizedSlots = [];
    // Deep copy encounters
    let slots = JSON.parse(JSON.stringify(encounters));

    let totalPercent = 0;

    while (slots.length != 0)
    {
        let encounter = slots[0];
        let percent = encounter.percent;
        let effPercent = encounter.effectivePercent;
        let minLvl = encounter.minLevel;
        let maxLvl = encounter.maxLevel;

        for (let i = 1; i < slots.length; i++)
        {
            if (encounter.pokemon === slots[i].pokemon)
            {
                minLvl = Math.min(minLvl, slots[i].minLevel);
                maxLvl = Math.max(maxLvl, slots[i].maxLevel);
                percent += slots[i].percent;
                effPercent += slots[i].effectivePercent;
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

        slots = slots.filter(element => element.pokemon != encounter.pokemon);
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


/* Repel ------------------------------------------------------------------------------------------------------ */

function runRepelCalc()
{
    repelDisplay = !repelDisplay;

    let toggleables = document.getElementsByClassName("toggleable");
    
    for (let i = 0; i < toggleables.length; i++)
    {
        toggleables[i].disabled = repelDisplay;
    }

    if (repelDisplay)
    {
        let map = getCurrentMapData();
        let encounters = getMapEncounters(map, dropEncounter.options[dropEncounter.selectedIndex].getAttribute("localeid"));
    
        // Calc ability before repel if it's active and an ability is selected
        if (getVersionData().abilities > 0 && dropAbility.selectedIndex > 0)
        {
            encounters = calcAbilityEncounters(encounters);
        }

        repelEncounters = calcRepelEncounters(encounters, repelCheck.checked? leadLevel.value : 0);

        refreshEncounterDisplay(repelEncounters, true);
    } else {
        refreshEncounterDisplay(getMapEncounters(getCurrentMapData(), dropEncounter.options[dropEncounter.selectedIndex].getAttribute("localeid")));
    }

    updateEncounterBar();
}

function calcRepelEncounters(encounters, repel)
{
    // Deep copy the encounters passed
    let result =  JSON.parse(JSON.stringify(encounters));

    for (let i = 0; i < result.length; i++)
    {        
        result[i].percent *= Math.min(Math.max(0, (result[i].maxLevel - repel + 1) / (result[i].maxLevel - result[i].minLevel + 1)), 1);
    }


    // If percent = 0, remove
    result = result.filter(element => element.percent > 0);

    let normalizedResult = normalizeRepelEncounters(result);
    
    repelEncRate = sumArray(normalizedResult, "percent");
    
    return normalizedResult;
}

// TODO: Localization
function updateEncounterBar()
{
    encounterRateText.innerText = repelDisplay? (repelEncRate + "%") : "--";
    encounterRateBar.style["width"] = repelDisplay? (repelEncRate + "%") : "0%";

    calcButton.innerText = repelDisplay ? "Back" : "Calculate";
    
    if (repelDisplay)
    {
        calcButton.className += " back";
    } else {
        calcButton.className = calcButton.className.replace(" back", "");
    }

    encHeaderText.innerText = repelDisplay ? "Encounters (Repel Activated)" : "Encounters";
}

function calcAbilityEncounters(encounters)
{
    let slotCount = encounters.length;
    let encCopy = JSON.parse(JSON.stringify(encounters));

    switch (dropAbility.selectedIndex)
    {
        case 1: // Static
            calcAbilityType("ELECTRIC", encCopy);
            break;
        case 2: // Magnet Pull
            calcAbilityType("STEEL", encCopy);
            break;
        case 3: // Hustle / Pressure / Vital Spirit
            let case23 = false;

            for (let i = 0; i < encCopy; i++)
            {
                if (encCopy[i].minLevel != encCopy[i].maxLevel)
                {
                    case23 = true;
                    break;
                }
            }

            if (case23)
            {
                // Case 3
                // Gen 5 (Black = 13) and onwards
                // TODO: Research best way to replace number with form of identifier
                // TODO: Test this proper
                if (getVersionData().index >= 13)
                {
                    for (let i = 0; i < slotCount; i++)
                    {
                        encCopy[i].percent /= 2;
                        let maxLvl = 0;
                        let capped = 0;
                        let lvRange = encCopy[i].maxLevel - encCopy[i].minLevel + 1;
                        let slotData = getPokemonData(encCopy[i]);
                        
                        encCopy.map((val) => {
                            let currData = getPokemonData(val);
                            if (currData.dexNo === slotData.dexNo)
                            {
                                maxLvl = Math.max(maxLvl, val.maxLevel);
                            }
                        });

                        capped = Math.max(Math.min((5 - (maxLvl - encCopy[i].maxLevel)), lvRange), 0);

                        let percent = encCopy[i].percent * (lvRange - capped) / lvRange;
                        encCopy.push({
                            "pokemon": encCopy[i].pokemon,
                            "form": encCopy[i].form,
                            "percent": percent,
                            "effectivePercent": percent,
                            "minLevel": Math.min(encCopy[i].maxLevel, maxLvl),
                            "maxLevel": Math.min(encCopy[i].minLevel + 5, maxLvl)
                        });

                        encCopy.push({
                            "pokemon": encCopy[i].pokemon,
                            "form": encCopy[i].form,
                            "percent": encCopy[i].percent * capped / lvRange,
                            "effectivePercent": encCopy[i].percent * capped / lvRange,
                            "minLevel": maxLvl,
                            "maxLevel": maxLvl
                        });
                    }
                } else { // Case 2 (Before Gen 5)
                    for (let i = 0; i < slotCount; i++)
                    {
                        encCopy[i].percent /= 2;
                        encCopy.push({
                            "pokemon": encCopy[i].pokemon,
                            "form": encCopy[i].form,
                            "percent": encCopy[i].percent,
                            "effectivePercent": encCopy[i].percent,
                            "minLevel": encCopy[i].maxLevel,
                            "maxLevel": encCopy[i].maxLevel   
                        });
                    }
                }
            } else { // Case 1
                for (let i = 0; i < slotCount; i++)
                {
                    let maxLvl = 0;
                    let slotData = getPokemonData(encCopy[i]);

                    encCopy.map((val) => {
                        let currData = getPokemonData(val);
                        if (currData.dexNo === slotData.dexNo)
                        {
                            maxLvl = Math.max(maxLvl, val.maxLevel);
                        }
                    });

                    encCopy.push({
                        "pokemon": encCopy[i].pokemon,
                        "form": encCopy[i].form,
                        "percent": encCopy[i].percent / 2,
                        "effectivePercent": encCopy[i].percent / 2,
                        "minLevel": maxLvl,
                        "maxLevel": maxLvl   
                    });

                    encCopy[i].percent /= 2;
                }
            }
            break;
        case 4: // Keen Eye / Intimidate
            let intimidate = leadLevel.value;
            intimidate -= 4;

            if (intimidate < 1) break;

            for (let i = 0; i < slotCount; i++)
            {
                let s = encCopy[i];
                let lvRange = Math.max(0, Math.min(1, (s.maxLevel - intimidate + 1) / (s.maxLevel - s.minLevel + 1)));
                s.percent /= 2;
                s.effectivePercent = s.percent;
                let p = s.percent * lvRange;

                // TODO: Create function to add new EncounterSlots replicating C# constructor
                let enc = {
                    "pokemon": s.pokemon,
                    "form": s.form,
                    "percent": p,
                    "effectivePercent": p,
                    "minLevel": intimidate,
                    "maxLevel": s.maxLevel
                };

                encCopy.push(enc);
            }    

            encCopy = encCopy.filter(x => x.percent > 0);
            break;
    }

    return encCopy;
}

// Reuse same code for Static and Magnet Pull
function calcAbilityType(type, encounters)
{
    let slotCount = encounters.length;
    let numType = 0;

    encounters.map((val, index) => {
        let data = getPokemonData(val);

        if (data.type1 === type || data.type2 === type)
        {
            numType++;
        }
    });

    if (numType > 0)
    {
        for (let i = 0; i < slotCount; i++)
        {
            let data = getPokemonData(encounters[i])
    
            if (data.type1 === type || data.type2 === type)
            {
                let e = JSON.parse(JSON.stringify(encounters[i]));
                e = setEncounterPercent(e, 50 / numType);

                encounters.push(e);
            }
            
            encounters[i] = setEncounterPercent(encounters[i], encounters[i].percent / 2);
        }
    }

    return encounters;
}

/* Utils ------------------------------------------------------------------------------------------------------ */

// Removes all options from a dropdown
// (Used when changing game versions)
function removeAllDropdownOptions(element) {
    let L = element.options.length - 1;

    for(let i = L; i >= 0; i--) {
       element.remove(i);
    }
}

// Sets passed dropdown selected index to a random integer ranging from 0 to dropdown length
function selectRandomDropdown(dropdown)
{
    let index = getRandomInt(dropdown.options.length);
    dropdown.selectedIndex = index;
}

// Random range int
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Get total value of an array's items based on passed property
function sumArray(items, property)
{
    return items.reduce( function(a, b)
    {
        return a + b[property];
    }, 0);
}

// Add an option to passed dropdown with optional parameter for value override
function createDropdownOption(element, localeid, valueOverride = -1)
{
    let option = document.createElement('option');

    // Automatically set the option value to index if override isn't passed
    if (valueOverride == -1)
    {
        // Prevent index being set to -1
        if (element.options.length > 0)
        {
            option.value = element.options[element.options.length - 1].value;
        } else {
            option.value = 0;
        }
    } else {
        option.value = valueOverride;
    }

    // Don't set innerText, instead set the localeid and translate
    option.setAttribute("localeid", localeid);
    translateElement(option);

    // Finally, add option to the dropdown
    element.appendChild(option);
}

// Returns image url of icon
// Expects encounter slot from map JSON
function getPokemonIcon(encounter)
{    
    let url = "https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/";
    let monName = String(getPokemonData(encounter).dexNo).padStart(3, 0);
    let iconData = pokemonIcons[monName];
    let iconSlug = iconData.slug.eng;
    let monForm = encounter.form;

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

// Returns the species object for an encounter slot's pokemon id/form
function getPokemonData(encounter)
{
    return Pokemon[encounter.pokemon + "_" + encounter.form];
}

function setEncounterPercent(encounter, value)
{
    let val = Math.max(value, 0);

    if (encounter.percent == 0)
    {
        encounter.effectivePercent = val;
    } else {
        encounter.effectivePercent *= val / encounter.percent;
    }

    encounter.percent = val;

    return encounter;
}