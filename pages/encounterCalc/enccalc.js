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

// Repel
// - Elements
let repelElement;
let repelButton; // "Calculate"!
let repelEncRateText;
let repelEncRateBar;

// - Data
let repelEncRate; // Encounter rate for current repel level
let repelEncounters; // Encounter slots stored to display when 
let repelActive = false; // If the encounters are being displayed

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
    
    // Repel
    repelElement = document.getElementById("repelLevel");
    repelElement.addEventListener("input", updateRepelEncounters);
    repelEncRateText = document.getElementById("encRate");
    repelEncRateBar = document.getElementById("encBar");

    repelButton = document.getElementById("repelButton");
    repelButton.addEventListener("click", displayRepelInfo)

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

    if (GameVersion[dropVersion.options[dropVersion.selectedIndex].getAttribute("localeid")].daynight && EncounterType[encounterType] === EncounterType.WALKING)
    {
        // Swarm check
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

        // Enable Time of Day section if version is marked as having DNS
        timeDiv.style.display = GameVersion[dropVersion.options[dropVersion.selectedIndex].getAttribute("localeid")].daynight? "inline" : "none"; 
        
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
    updateRepelEncounters();
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

    let normalizedResult = normalizeRepelEncounters(result);
    
    repelEncRate = sumArray(result, "percent");
    
    return normalizedResult;
}

function normalizeRepelEncounters(encounters)
{
    let normalizedSlots = [];
    // Deep copy encounters
    let slots = JSON.parse(JSON.stringify(encounters));

    let totalPercent = 0;

    while (slots.length != 0)
    {
        let encounter = slots[0]
        let percent = encounter.percent;
        let effPercent = percent;
        let minLvl = encounter.minLevel;
        let maxLvl = encounter.maxLevel;

        for (let i = 1; i < slots.length; i++)
        {
            if (encounter.pokemon === slots[i].pokemon)
            {
                minLvl = Math.min(minLvl, slots[i].minLevel);
                maxLvl = Math.max(maxLvl, slots[i].maxLevel);
                percent += slots[i].percent;
                effPercent += slots[i].percent;
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

function updateRepelEncounters()
{
    let map = getCurrentMapData();
    let encounters = getMapEncounters(map, dropEncounter.options[dropEncounter.selectedIndex].getAttribute("localeid"));

    repelEncounters = calcRepelEncounters(encounters, repelElement.value);

    if (repelActive)
    {
        refreshEncounterDisplay(repelEncounters, true);
    }
}

function displayRepelInfo()
{
    repelActive = !repelActive;
    
    if (!repelActive)
    {
        refreshEncounterDisplay(getMapEncounters(getCurrentMapData(), dropEncounter.options[dropEncounter.selectedIndex].getAttribute("localeid")));
    } else {    
        refreshEncounterDisplay(repelEncounters, true);
    }

    toggleEncounterBar();
}

// TODO: Localization
function toggleEncounterBar()
{
    repelEncRateText.innerText = repelActive? (repelEncRate + "%") : "--";
    repelEncRateBar.style["width"] = repelActive? (repelEncRate + "%") : "0%";

    repelButton.innerText = repelActive ? "Back" : "Calculate";
    
    if (repelActive)
    {
        repelButton.className += " back";
    } else {
        repelButton.className = repelButton.className.replace(" back", "");
    }

    encHeaderText.innerText = repelActive ? "Encounters (Repel Activated)" : "Encounters";
}

/* Util */

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