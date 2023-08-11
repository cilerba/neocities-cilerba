const GameVersion = {
    "GOLD": {
        "index": 0,
        "mapName": "mapsGold",
        "daynight": true,
        "abilities": 0
    },
    "SILVER": {
        "index": 1,
        "mapName": "mapsSilver",
        "daynight": true,
        "abilities": 0
    },
    "CRYSTAL": {
        "index": 2,
        "mapName": "mapsCrystal",
        "daynight": true,
        "abilities": 0
    },
    "RUBY": {
        "index": 3,
        "mapName": "mapsRuby",
        "daynight": false,
        "abilities": 0
    },
    "SAPPHIRE": {
        "index": 4,
        "mapName": "mapsSapphire",
        "daynight": false,
        "abilities": 0
    },
    "EMERALD": {
        "index": 5,
        "mapName": "mapsEmerald",
        "daynight": false,
        "abilities": 1
    },
    "FIRE_RED": {
        "index": 6,
        "mapName": "mapsFirered",
        "daynight": false,
        "abilities": 0
    },
    "LEAF_GREEN": {
        "index": 7,
        "mapName": "mapsLeafgreen",
        "daynight": false,
        "abilities": 0
    }
}

const Pokemon = {
    "BULBASAUR_0": {
      "species": "BULBASAUR",
      "form": 0,
      "dexNo": 1,
      "type1": "GRASS",
      "type2": "POISON"
    },
    "IVYSAUR_0": {
      "species": "IVYSAUR",
      "form": 0,
      "dexNo": 2,
      "type1": "GRASS",
      "type2": "POISON"
    },
    "VENUSAUR_0": {
      "species": "VENUSAUR",
      "form": 0,
      "dexNo": 3,
      "type1": "GRASS",
      "type2": "POISON"
    },
    "VENUSAUR_1": {
      "species": "VENUSAUR",
      "form": 1,
      "dexNo": 3,
      "type1": "GRASS",
      "type2": "POISON"
    },
    "CHARMANDER_0": {
      "species": "CHARMANDER",
      "form": 0,
      "dexNo": 4,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "CHARMELEON_0": {
      "species": "CHARMELEON",
      "form": 0,
      "dexNo": 5,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "CHARIZARD_0": {
      "species": "CHARIZARD",
      "form": 0,
      "dexNo": 6,
      "type1": "FIRE",
      "type2": "FLYING"
    },
    "CHARIZARD_1": {
      "species": "CHARIZARD",
      "form": 1,
      "dexNo": 6,
      "type1": "FIRE",
      "type2": "DRAGON"
    },
    "CHARIZARD_2": {
      "species": "CHARIZARD",
      "form": 2,
      "dexNo": 6,
      "type1": "FIRE",
      "type2": "FLYING"
    },
    "SQUIRTLE_0": {
      "species": "SQUIRTLE",
      "form": 0,
      "dexNo": 7,
      "type1": "WATER",
      "type2": "NONE"
    },
    "WARTORTLE_0": {
      "species": "WARTORTLE",
      "form": 0,
      "dexNo": 8,
      "type1": "WATER",
      "type2": "NONE"
    },
    "BLASTOISE_0": {
      "species": "BLASTOISE",
      "form": 0,
      "dexNo": 9,
      "type1": "WATER",
      "type2": "NONE"
    },
    "BLASTOISE_1": {
      "species": "BLASTOISE",
      "form": 1,
      "dexNo": 9,
      "type1": "WATER",
      "type2": "NONE"
    },
    "CATERPIE_0": {
      "species": "CATERPIE",
      "form": 0,
      "dexNo": 10,
      "type1": "BUG",
      "type2": "NONE"
    },
    "METAPOD_0": {
      "species": "METAPOD",
      "form": 0,
      "dexNo": 11,
      "type1": "BUG",
      "type2": "NONE"
    },
    "BUTTERFREE_0": {
      "species": "BUTTERFREE",
      "form": 0,
      "dexNo": 12,
      "type1": "BUG",
      "type2": "FLYING"
    },
    "WEEDLE_0": {
      "species": "WEEDLE",
      "form": 0,
      "dexNo": 13,
      "type1": "BUG",
      "type2": "POISON"
    },
    "KAKUNA_0": {
      "species": "KAKUNA",
      "form": 0,
      "dexNo": 14,
      "type1": "BUG",
      "type2": "POISON"
    },
    "BEEDRILL_0": {
      "species": "BEEDRILL",
      "form": 0,
      "dexNo": 15,
      "type1": "BUG",
      "type2": "POISON"
    },
    "BEEDRILL_1": {
      "species": "BEEDRILL",
      "form": 1,
      "dexNo": 15,
      "type1": "BUG",
      "type2": "POISON"
    },
    "PIDGEY_0": {
      "species": "PIDGEY",
      "form": 0,
      "dexNo": 16,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "PIDGEOTTO_0": {
      "species": "PIDGEOTTO",
      "form": 0,
      "dexNo": 17,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "PIDGEOT_0": {
      "species": "PIDGEOT",
      "form": 0,
      "dexNo": 18,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "PIDGEOT_1": {
      "species": "PIDGEOT",
      "form": 1,
      "dexNo": 18,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "RATTATA_0": {
      "species": "RATTATA",
      "form": 0,
      "dexNo": 19,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "RATTATA_1": {
      "species": "RATTATA",
      "form": 1,
      "dexNo": 19,
      "type1": "DARK",
      "type2": "NORMAL"
    },
    "RATICATE_0": {
      "species": "RATICATE",
      "form": 0,
      "dexNo": 20,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "RATICATE_1": {
      "species": "RATICATE",
      "form": 1,
      "dexNo": 20,
      "type1": "DARK",
      "type2": "NORMAL"
    },
    "SPEAROW_0": {
      "species": "SPEAROW",
      "form": 0,
      "dexNo": 21,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "FEAROW_0": {
      "species": "FEAROW",
      "form": 0,
      "dexNo": 22,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "EKANS_0": {
      "species": "EKANS",
      "form": 0,
      "dexNo": 23,
      "type1": "POISON",
      "type2": "NONE"
    },
    "ARBOK_0": {
      "species": "ARBOK",
      "form": 0,
      "dexNo": 24,
      "type1": "POISON",
      "type2": "NONE"
    },
    "PIKACHU_0": {
      "species": "PIKACHU",
      "form": 0,
      "dexNo": 25,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "PIKACHU_1": {
      "species": "PIKACHU",
      "form": 1,
      "dexNo": 25,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "RAICHU_0": {
      "species": "RAICHU",
      "form": 0,
      "dexNo": 26,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "RAICHU_1": {
      "species": "RAICHU",
      "form": 1,
      "dexNo": 26,
      "type1": "ELECTRIC",
      "type2": "PSYCHIC"
    },
    "SANDSHREW_0": {
      "species": "SANDSHREW",
      "form": 0,
      "dexNo": 27,
      "type1": "GROUND",
      "type2": "NONE"
    },
    "SANDSHREW_1": {
      "species": "SANDSHREW",
      "form": 1,
      "dexNo": 27,
      "type1": "ICE",
      "type2": "STEEL"
    },
    "SANDSLASH_0": {
      "species": "SANDSLASH",
      "form": 0,
      "dexNo": 28,
      "type1": "GROUND",
      "type2": "NONE"
    },
    "SANDSLASH_1": {
      "species": "SANDSLASH",
      "form": 1,
      "dexNo": 28,
      "type1": "ICE",
      "type2": "STEEL"
    },
    "NIDORAN_F_0": {
      "species": "NIDORAN_F",
      "form": 0,
      "dexNo": 29,
      "type1": "POISON",
      "type2": "NONE"
    },
    "NIDORINA_0": {
      "species": "NIDORINA",
      "form": 0,
      "dexNo": 30,
      "type1": "POISON",
      "type2": "NONE"
    },
    "NIDOQUEEN_0": {
      "species": "NIDOQUEEN",
      "form": 0,
      "dexNo": 31,
      "type1": "POISON",
      "type2": "GROUND"
    },
    "NIDORAN_M_0": {
      "species": "NIDORAN_M",
      "form": 0,
      "dexNo": 32,
      "type1": "POISON",
      "type2": "NONE"
    },
    "NIDORINO_0": {
      "species": "NIDORINO",
      "form": 0,
      "dexNo": 33,
      "type1": "POISON",
      "type2": "NONE"
    },
    "NIDOKING_0": {
      "species": "NIDOKING",
      "form": 0,
      "dexNo": 34,
      "type1": "POISON",
      "type2": "GROUND"
    },
    "CLEFAIRY_0": {
      "species": "CLEFAIRY",
      "form": 0,
      "dexNo": 35,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "CLEFABLE_0": {
      "species": "CLEFABLE",
      "form": 0,
      "dexNo": 36,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "VULPIX_0": {
      "species": "VULPIX",
      "form": 0,
      "dexNo": 37,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "VULPIX_1": {
      "species": "VULPIX",
      "form": 1,
      "dexNo": 37,
      "type1": "ICE",
      "type2": "NONE"
    },
    "NINETALES_0": {
      "species": "NINETALES",
      "form": 0,
      "dexNo": 38,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "NINETALES_1": {
      "species": "NINETALES",
      "form": 1,
      "dexNo": 38,
      "type1": "ICE",
      "type2": "FAIRY"
    },
    "JIGGLYPUFF_0": {
      "species": "JIGGLYPUFF",
      "form": 0,
      "dexNo": 39,
      "type1": "NORMAL",
      "type2": "FAIRY"
    },
    "WIGGLYTUFF_0": {
      "species": "WIGGLYTUFF",
      "form": 0,
      "dexNo": 40,
      "type1": "NORMAL",
      "type2": "FAIRY"
    },
    "ZUBAT_0": {
      "species": "ZUBAT",
      "form": 0,
      "dexNo": 41,
      "type1": "POISON",
      "type2": "FLYING"
    },
    "GOLBAT_0": {
      "species": "GOLBAT",
      "form": 0,
      "dexNo": 42,
      "type1": "POISON",
      "type2": "FLYING"
    },
    "ODDISH_0": {
      "species": "ODDISH",
      "form": 0,
      "dexNo": 43,
      "type1": "GRASS",
      "type2": "POISON"
    },
    "GLOOM_0": {
      "species": "GLOOM",
      "form": 0,
      "dexNo": 44,
      "type1": "GRASS",
      "type2": "POISON"
    },
    "VILEPLUME_0": {
      "species": "VILEPLUME",
      "form": 0,
      "dexNo": 45,
      "type1": "GRASS",
      "type2": "POISON"
    },
    "PARAS_0": {
      "species": "PARAS",
      "form": 0,
      "dexNo": 46,
      "type1": "BUG",
      "type2": "GRASS"
    },
    "PARASECT_0": {
      "species": "PARASECT",
      "form": 0,
      "dexNo": 47,
      "type1": "BUG",
      "type2": "GRASS"
    },
    "VENONAT_0": {
      "species": "VENONAT",
      "form": 0,
      "dexNo": 48,
      "type1": "BUG",
      "type2": "POISON"
    },
    "VENOMOTH_0": {
      "species": "VENOMOTH",
      "form": 0,
      "dexNo": 49,
      "type1": "BUG",
      "type2": "POISON"
    },
    "DIGLETT_0": {
      "species": "DIGLETT",
      "form": 0,
      "dexNo": 50,
      "type1": "GROUND",
      "type2": "NONE"
    },
    "DIGLETT_1": {
      "species": "DIGLETT",
      "form": 1,
      "dexNo": 50,
      "type1": "GROUND",
      "type2": "STEEL"
    },
    "DUGTRIO_0": {
      "species": "DUGTRIO",
      "form": 0,
      "dexNo": 51,
      "type1": "GROUND",
      "type2": "NONE"
    },
    "DUGTRIO_1": {
      "species": "DUGTRIO",
      "form": 1,
      "dexNo": 51,
      "type1": "GROUND",
      "type2": "STEEL"
    },
    "MEOWTH_0": {
      "species": "MEOWTH",
      "form": 0,
      "dexNo": 52,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "MEOWTH_1": {
      "species": "MEOWTH",
      "form": 1,
      "dexNo": 52,
      "type1": "DARK",
      "type2": "NONE"
    },
    "MEOWTH_2": {
      "species": "MEOWTH",
      "form": 2,
      "dexNo": 52,
      "type1": "STEEL",
      "type2": "NONE"
    },
    "PERSIAN_0": {
      "species": "PERSIAN",
      "form": 0,
      "dexNo": 53,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "PERSIAN_1": {
      "species": "PERSIAN",
      "form": 1,
      "dexNo": 53,
      "type1": "DARK",
      "type2": "NONE"
    },
    "PSYDUCK_0": {
      "species": "PSYDUCK",
      "form": 0,
      "dexNo": 54,
      "type1": "WATER",
      "type2": "NONE"
    },
    "GOLDUCK_0": {
      "species": "GOLDUCK",
      "form": 0,
      "dexNo": 55,
      "type1": "WATER",
      "type2": "NONE"
    },
    "MANKEY_0": {
      "species": "MANKEY",
      "form": 0,
      "dexNo": 56,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "PRIMEAPE_0": {
      "species": "PRIMEAPE",
      "form": 0,
      "dexNo": 57,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "GROWLITHE_0": {
      "species": "GROWLITHE",
      "form": 0,
      "dexNo": 58,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "GROWLITHE_1": {
      "species": "GROWLITHE",
      "form": 1,
      "dexNo": 58,
      "type1": "FIRE",
      "type2": "ROCK"
    },
    "ARCANINE_0": {
      "species": "ARCANINE",
      "form": 0,
      "dexNo": 59,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "ARCANINE_1": {
      "species": "ARCANINE",
      "form": 1,
      "dexNo": 59,
      "type1": "FIRE",
      "type2": "ROCK"
    },
    "POLIWAG_0": {
      "species": "POLIWAG",
      "form": 0,
      "dexNo": 60,
      "type1": "WATER",
      "type2": "NONE"
    },
    "POLIWHIRL_0": {
      "species": "POLIWHIRL",
      "form": 0,
      "dexNo": 61,
      "type1": "WATER",
      "type2": "NONE"
    },
    "POLIWRATH_0": {
      "species": "POLIWRATH",
      "form": 0,
      "dexNo": 62,
      "type1": "WATER",
      "type2": "FIGHTING"
    },
    "ABRA_0": {
      "species": "ABRA",
      "form": 0,
      "dexNo": 63,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "KADABRA_0": {
      "species": "KADABRA",
      "form": 0,
      "dexNo": 64,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "ALAKAZAM_0": {
      "species": "ALAKAZAM",
      "form": 0,
      "dexNo": 65,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "ALAKAZAM_1": {
      "species": "ALAKAZAM",
      "form": 1,
      "dexNo": 65,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "MACHOP_0": {
      "species": "MACHOP",
      "form": 0,
      "dexNo": 66,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "MACHOKE_0": {
      "species": "MACHOKE",
      "form": 0,
      "dexNo": 67,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "MACHAMP_0": {
      "species": "MACHAMP",
      "form": 0,
      "dexNo": 68,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "BELLSPROUT_0": {
      "species": "BELLSPROUT",
      "form": 0,
      "dexNo": 69,
      "type1": "GRASS",
      "type2": "POISON"
    },
    "WEEPINBELL_0": {
      "species": "WEEPINBELL",
      "form": 0,
      "dexNo": 70,
      "type1": "GRASS",
      "type2": "POISON"
    },
    "VICTREEBEL_0": {
      "species": "VICTREEBEL",
      "form": 0,
      "dexNo": 71,
      "type1": "GRASS",
      "type2": "POISON"
    },
    "TENTACOOL_0": {
      "species": "TENTACOOL",
      "form": 0,
      "dexNo": 72,
      "type1": "WATER",
      "type2": "POISON"
    },
    "TENTACRUEL_0": {
      "species": "TENTACRUEL",
      "form": 0,
      "dexNo": 73,
      "type1": "WATER",
      "type2": "POISON"
    },
    "GEODUDE_0": {
      "species": "GEODUDE",
      "form": 0,
      "dexNo": 74,
      "type1": "ROCK",
      "type2": "GROUND"
    },
    "GEODUDE_1": {
      "species": "GEODUDE",
      "form": 1,
      "dexNo": 74,
      "type1": "ROCK",
      "type2": "ELECTRIC"
    },
    "GRAVELER_0": {
      "species": "GRAVELER",
      "form": 0,
      "dexNo": 75,
      "type1": "ROCK",
      "type2": "GROUND"
    },
    "GRAVELER_1": {
      "species": "GRAVELER",
      "form": 1,
      "dexNo": 75,
      "type1": "ROCK",
      "type2": "ELECTRIC"
    },
    "GOLEM_0": {
      "species": "GOLEM",
      "form": 0,
      "dexNo": 76,
      "type1": "ROCK",
      "type2": "GROUND"
    },
    "GOLEM_1": {
      "species": "GOLEM",
      "form": 1,
      "dexNo": 76,
      "type1": "ROCK",
      "type2": "ELECTRIC"
    },
    "PONYTA_0": {
      "species": "PONYTA",
      "form": 0,
      "dexNo": 77,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "PONYTA_1": {
      "species": "PONYTA",
      "form": 1,
      "dexNo": 77,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "RAPIDASH_0": {
      "species": "RAPIDASH",
      "form": 0,
      "dexNo": 78,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "RAPIDASH_1": {
      "species": "RAPIDASH",
      "form": 1,
      "dexNo": 78,
      "type1": "PSYCHIC",
      "type2": "FAIRY"
    },
    "SLOWPOKE_0": {
      "species": "SLOWPOKE",
      "form": 0,
      "dexNo": 79,
      "type1": "WATER",
      "type2": "PSYCHIC"
    },
    "SLOWPOKE_1": {
      "species": "SLOWPOKE",
      "form": 1,
      "dexNo": 79,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "SLOWBRO_0": {
      "species": "SLOWBRO",
      "form": 0,
      "dexNo": 80,
      "type1": "WATER",
      "type2": "PSYCHIC"
    },
    "SLOWBRO_1": {
      "species": "SLOWBRO",
      "form": 1,
      "dexNo": 80,
      "type1": "WATER",
      "type2": "PSYCHIC"
    },
    "SLOWBRO_2": {
      "species": "SLOWBRO",
      "form": 2,
      "dexNo": 80,
      "type1": "POISON",
      "type2": "PSYCHIC"
    },
    "MAGNEMITE_0": {
      "species": "MAGNEMITE",
      "form": 0,
      "dexNo": 81,
      "type1": "ELECTRIC",
      "type2": "STEEL"
    },
    "MAGNETON_0": {
      "species": "MAGNETON",
      "form": 0,
      "dexNo": 82,
      "type1": "ELECTRIC",
      "type2": "STEEL"
    },
    "FARFETCH_D_0": {
      "species": "FARFETCH_D",
      "form": 0,
      "dexNo": 83,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "FARFETCH_D_1": {
      "species": "FARFETCH_D",
      "form": 1,
      "dexNo": 83,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "DODUO_0": {
      "species": "DODUO",
      "form": 0,
      "dexNo": 84,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "DODRIO_0": {
      "species": "DODRIO",
      "form": 0,
      "dexNo": 85,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "SEEL_0": {
      "species": "SEEL",
      "form": 0,
      "dexNo": 86,
      "type1": "WATER",
      "type2": "NONE"
    },
    "DEWGONG_0": {
      "species": "DEWGONG",
      "form": 0,
      "dexNo": 87,
      "type1": "WATER",
      "type2": "ICE"
    },
    "GRIMER_0": {
      "species": "GRIMER",
      "form": 0,
      "dexNo": 88,
      "type1": "POISON",
      "type2": "NONE"
    },
    "GRIMER_1": {
      "species": "GRIMER",
      "form": 1,
      "dexNo": 88,
      "type1": "POISON",
      "type2": "DARK"
    },
    "MUK_0": {
      "species": "MUK",
      "form": 0,
      "dexNo": 89,
      "type1": "POISON",
      "type2": "NONE"
    },
    "MUK_1": {
      "species": "MUK",
      "form": 1,
      "dexNo": 89,
      "type1": "POISON",
      "type2": "DARK"
    },
    "SHELLDER_0": {
      "species": "SHELLDER",
      "form": 0,
      "dexNo": 90,
      "type1": "WATER",
      "type2": "NONE"
    },
    "CLOYSTER_0": {
      "species": "CLOYSTER",
      "form": 0,
      "dexNo": 91,
      "type1": "WATER",
      "type2": "ICE"
    },
    "GASTLY_0": {
      "species": "GASTLY",
      "form": 0,
      "dexNo": 92,
      "type1": "GHOST",
      "type2": "POISON"
    },
    "HAUNTER_0": {
      "species": "HAUNTER",
      "form": 0,
      "dexNo": 93,
      "type1": "GHOST",
      "type2": "POISON"
    },
    "GENGAR_0": {
      "species": "GENGAR",
      "form": 0,
      "dexNo": 94,
      "type1": "GHOST",
      "type2": "POISON"
    },
    "GENGAR_1": {
      "species": "GENGAR",
      "form": 1,
      "dexNo": 94,
      "type1": "GHOST",
      "type2": "POISON"
    },
    "ONIX_0": {
      "species": "ONIX",
      "form": 0,
      "dexNo": 95,
      "type1": "ROCK",
      "type2": "GROUND"
    },
    "DROWZEE_0": {
      "species": "DROWZEE",
      "form": 0,
      "dexNo": 96,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "HYPNO_0": {
      "species": "HYPNO",
      "form": 0,
      "dexNo": 97,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "KRABBY_0": {
      "species": "KRABBY",
      "form": 0,
      "dexNo": 98,
      "type1": "WATER",
      "type2": "NONE"
    },
    "KINGLER_0": {
      "species": "KINGLER",
      "form": 0,
      "dexNo": 99,
      "type1": "WATER",
      "type2": "NONE"
    },
    "VOLTORB_0": {
      "species": "VOLTORB",
      "form": 0,
      "dexNo": 100,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "VOLTORB_1": {
      "species": "VOLTORB",
      "form": 1,
      "dexNo": 100,
      "type1": "ELECTRIC",
      "type2": "GRASS"
    },
    "ELECTRODE_0": {
      "species": "ELECTRODE",
      "form": 0,
      "dexNo": 101,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "ELECTRODE_1": {
      "species": "ELECTRODE",
      "form": 1,
      "dexNo": 101,
      "type1": "ELECTRIC",
      "type2": "GRASS"
    },
    "EXEGGCUTE_0": {
      "species": "EXEGGCUTE",
      "form": 0,
      "dexNo": 102,
      "type1": "GRASS",
      "type2": "PSYCHIC"
    },
    "EXEGGUTOR_0": {
      "species": "EXEGGUTOR",
      "form": 0,
      "dexNo": 103,
      "type1": "GRASS",
      "type2": "PSYCHIC"
    },
    "EXEGGUTOR_1": {
      "species": "EXEGGUTOR",
      "form": 1,
      "dexNo": 103,
      "type1": "GRASS",
      "type2": "DRAGON"
    },
    "CUBONE_0": {
      "species": "CUBONE",
      "form": 0,
      "dexNo": 104,
      "type1": "GROUND",
      "type2": "NONE"
    },
    "MAROWAK_0": {
      "species": "MAROWAK",
      "form": 0,
      "dexNo": 105,
      "type1": "GROUND",
      "type2": "NONE"
    },
    "MAROWAK_1": {
      "species": "MAROWAK",
      "form": 1,
      "dexNo": 105,
      "type1": "FIRE",
      "type2": "GHOST"
    },
    "HITMONLEE_0": {
      "species": "HITMONLEE",
      "form": 0,
      "dexNo": 106,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "HITMONCHAN_0": {
      "species": "HITMONCHAN",
      "form": 0,
      "dexNo": 107,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "LICKITUNG_0": {
      "species": "LICKITUNG",
      "form": 0,
      "dexNo": 108,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "KOFFING_0": {
      "species": "KOFFING",
      "form": 0,
      "dexNo": 109,
      "type1": "POISON",
      "type2": "NONE"
    },
    "WEEZING_0": {
      "species": "WEEZING",
      "form": 0,
      "dexNo": 110,
      "type1": "POISON",
      "type2": "NONE"
    },
    "WEEZING_1": {
      "species": "WEEZING",
      "form": 1,
      "dexNo": 110,
      "type1": "POISON",
      "type2": "FAIRY"
    },
    "RHYHORN_0": {
      "species": "RHYHORN",
      "form": 0,
      "dexNo": 111,
      "type1": "GROUND",
      "type2": "ROCK"
    },
    "RHYDON_0": {
      "species": "RHYDON",
      "form": 0,
      "dexNo": 112,
      "type1": "GROUND",
      "type2": "ROCK"
    },
    "CHANSEY_0": {
      "species": "CHANSEY",
      "form": 0,
      "dexNo": 113,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "TANGELA_0": {
      "species": "TANGELA",
      "form": 0,
      "dexNo": 114,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "KANGASKHAN_0": {
      "species": "KANGASKHAN",
      "form": 0,
      "dexNo": 115,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "KANGASKHAN_1": {
      "species": "KANGASKHAN",
      "form": 1,
      "dexNo": 115,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "HORSEA_0": {
      "species": "HORSEA",
      "form": 0,
      "dexNo": 116,
      "type1": "WATER",
      "type2": "NONE"
    },
    "SEADRA_0": {
      "species": "SEADRA",
      "form": 0,
      "dexNo": 117,
      "type1": "WATER",
      "type2": "NONE"
    },
    "GOLDEEN_0": {
      "species": "GOLDEEN",
      "form": 0,
      "dexNo": 118,
      "type1": "WATER",
      "type2": "NONE"
    },
    "SEAKING_0": {
      "species": "SEAKING",
      "form": 0,
      "dexNo": 119,
      "type1": "WATER",
      "type2": "NONE"
    },
    "STARYU_0": {
      "species": "STARYU",
      "form": 0,
      "dexNo": 120,
      "type1": "WATER",
      "type2": "NONE"
    },
    "STARMIE_0": {
      "species": "STARMIE",
      "form": 0,
      "dexNo": 121,
      "type1": "WATER",
      "type2": "PSYCHIC"
    },
    "MR_MIME_0": {
      "species": "MR_MIME",
      "form": 0,
      "dexNo": 122,
      "type1": "PSYCHIC",
      "type2": "FAIRY"
    },
    "MR_MIME_1": {
      "species": "MR_MIME",
      "form": 1,
      "dexNo": 122,
      "type1": "ICE",
      "type2": "PSYCHIC"
    },
    "SCYTHER_0": {
      "species": "SCYTHER",
      "form": 0,
      "dexNo": 123,
      "type1": "BUG",
      "type2": "FLYING"
    },
    "JYNX_0": {
      "species": "JYNX",
      "form": 0,
      "dexNo": 124,
      "type1": "ICE",
      "type2": "PSYCHIC"
    },
    "ELECTABUZZ_0": {
      "species": "ELECTABUZZ",
      "form": 0,
      "dexNo": 125,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "MAGMAR_0": {
      "species": "MAGMAR",
      "form": 0,
      "dexNo": 126,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "PINSIR_0": {
      "species": "PINSIR",
      "form": 0,
      "dexNo": 127,
      "type1": "BUG",
      "type2": "NONE"
    },
    "PINSIR_1": {
      "species": "PINSIR",
      "form": 1,
      "dexNo": 127,
      "type1": "BUG",
      "type2": "FLYING"
    },
    "TAUROS_0": {
      "species": "TAUROS",
      "form": 0,
      "dexNo": 128,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "TAUROS_1": {
      "species": "TAUROS",
      "form": 1,
      "dexNo": 128,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "TAUROS_2": {
      "species": "TAUROS",
      "form": 2,
      "dexNo": 128,
      "type1": "FIGHTING",
      "type2": "FIRE"
    },
    "TAUROS_3": {
      "species": "TAUROS",
      "form": 3,
      "dexNo": 128,
      "type1": "FIGHTING",
      "type2": "WATER"
    },
    "MAGIKARP_0": {
      "species": "MAGIKARP",
      "form": 0,
      "dexNo": 129,
      "type1": "WATER",
      "type2": "NONE"
    },
    "GYARADOS_0": {
      "species": "GYARADOS",
      "form": 0,
      "dexNo": 130,
      "type1": "WATER",
      "type2": "FLYING"
    },
    "GYARADOS_1": {
      "species": "GYARADOS",
      "form": 1,
      "dexNo": 130,
      "type1": "WATER",
      "type2": "DARK"
    },
    "LAPRAS_0": {
      "species": "LAPRAS",
      "form": 0,
      "dexNo": 131,
      "type1": "WATER",
      "type2": "ICE"
    },
    "DITTO_0": {
      "species": "DITTO",
      "form": 0,
      "dexNo": 132,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "EEVEE_0": {
      "species": "EEVEE",
      "form": 0,
      "dexNo": 133,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "EEVEE_1": {
      "species": "EEVEE",
      "form": 1,
      "dexNo": 133,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "VAPOREON_0": {
      "species": "VAPOREON",
      "form": 0,
      "dexNo": 134,
      "type1": "WATER",
      "type2": "NONE"
    },
    "JOLTEON_0": {
      "species": "JOLTEON",
      "form": 0,
      "dexNo": 135,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "FLAREON_0": {
      "species": "FLAREON",
      "form": 0,
      "dexNo": 136,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "PORYGON_0": {
      "species": "PORYGON",
      "form": 0,
      "dexNo": 137,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "OMANYTE_0": {
      "species": "OMANYTE",
      "form": 0,
      "dexNo": 138,
      "type1": "ROCK",
      "type2": "WATER"
    },
    "OMASTAR_0": {
      "species": "OMASTAR",
      "form": 0,
      "dexNo": 139,
      "type1": "ROCK",
      "type2": "WATER"
    },
    "KABUTO_0": {
      "species": "KABUTO",
      "form": 0,
      "dexNo": 140,
      "type1": "ROCK",
      "type2": "WATER"
    },
    "KABUTOPS_0": {
      "species": "KABUTOPS",
      "form": 0,
      "dexNo": 141,
      "type1": "ROCK",
      "type2": "WATER"
    },
    "AERODACTYL_0": {
      "species": "AERODACTYL",
      "form": 0,
      "dexNo": 142,
      "type1": "ROCK",
      "type2": "FLYING"
    },
    "AERODACTYL_1": {
      "species": "AERODACTYL",
      "form": 1,
      "dexNo": 142,
      "type1": "ROCK",
      "type2": "FLYING"
    },
    "SNORLAX_0": {
      "species": "SNORLAX",
      "form": 0,
      "dexNo": 143,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "ARTICUNO_0": {
      "species": "ARTICUNO",
      "form": 0,
      "dexNo": 144,
      "type1": "ICE",
      "type2": "FLYING"
    },
    "ARTICUNO_1": {
      "species": "ARTICUNO",
      "form": 1,
      "dexNo": 144,
      "type1": "PSYCHIC",
      "type2": "FLYING"
    },
    "ZAPDOS_0": {
      "species": "ZAPDOS",
      "form": 0,
      "dexNo": 145,
      "type1": "ELECTRIC",
      "type2": "FLYING"
    },
    "ZAPDOS_1": {
      "species": "ZAPDOS",
      "form": 1,
      "dexNo": 145,
      "type1": "FIGHTING",
      "type2": "FLYING"
    },
    "MOLTRES_0": {
      "species": "MOLTRES",
      "form": 0,
      "dexNo": 146,
      "type1": "FIRE",
      "type2": "FLYING"
    },
    "MOLTRES_1": {
      "species": "MOLTRES",
      "form": 1,
      "dexNo": 146,
      "type1": "DARK",
      "type2": "FLYING"
    },
    "DRATINI_0": {
      "species": "DRATINI",
      "form": 0,
      "dexNo": 147,
      "type1": "DRAGON",
      "type2": "NONE"
    },
    "DRAGONAIR_0": {
      "species": "DRAGONAIR",
      "form": 0,
      "dexNo": 148,
      "type1": "DRAGON",
      "type2": "NONE"
    },
    "DRAGONITE_0": {
      "species": "DRAGONITE",
      "form": 0,
      "dexNo": 149,
      "type1": "DRAGON",
      "type2": "FLYING"
    },
    "MEWTWO_0": {
      "species": "MEWTWO",
      "form": 0,
      "dexNo": 150,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "MEWTWO_1": {
      "species": "MEWTWO",
      "form": 1,
      "dexNo": 150,
      "type1": "PSYCHIC",
      "type2": "FIGHTING"
    },
    "MEWTWO_2": {
      "species": "MEWTWO",
      "form": 2,
      "dexNo": 150,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "MEW_0": {
      "species": "MEW",
      "form": 0,
      "dexNo": 151,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "CHIKORITA_0": {
      "species": "CHIKORITA",
      "form": 0,
      "dexNo": 152,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "BAYLEEF_0": {
      "species": "BAYLEEF",
      "form": 0,
      "dexNo": 153,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "MEGANIUM_0": {
      "species": "MEGANIUM",
      "form": 0,
      "dexNo": 154,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "CYNDAQUIL_0": {
      "species": "CYNDAQUIL",
      "form": 0,
      "dexNo": 155,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "QUILAVA_0": {
      "species": "QUILAVA",
      "form": 0,
      "dexNo": 156,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "TYPHLOSION_0": {
      "species": "TYPHLOSION",
      "form": 0,
      "dexNo": 157,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "TYPHLOSION_1": {
      "species": "TYPHLOSION",
      "form": 1,
      "dexNo": 157,
      "type1": "FIRE",
      "type2": "GHOST"
    },
    "TOTODILE_0": {
      "species": "TOTODILE",
      "form": 0,
      "dexNo": 158,
      "type1": "WATER",
      "type2": "NONE"
    },
    "CROCONAW_0": {
      "species": "CROCONAW",
      "form": 0,
      "dexNo": 159,
      "type1": "WATER",
      "type2": "NONE"
    },
    "FERALIGATR_0": {
      "species": "FERALIGATR",
      "form": 0,
      "dexNo": 160,
      "type1": "WATER",
      "type2": "NONE"
    },
    "SENTRET_0": {
      "species": "SENTRET",
      "form": 0,
      "dexNo": 161,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "FURRET_0": {
      "species": "FURRET",
      "form": 0,
      "dexNo": 162,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "HOOTHOOT_0": {
      "species": "HOOTHOOT",
      "form": 0,
      "dexNo": 163,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "NOCTOWL_0": {
      "species": "NOCTOWL",
      "form": 0,
      "dexNo": 164,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "LEDYBA_0": {
      "species": "LEDYBA",
      "form": 0,
      "dexNo": 165,
      "type1": "BUG",
      "type2": "FLYING"
    },
    "LEDIAN_0": {
      "species": "LEDIAN",
      "form": 0,
      "dexNo": 166,
      "type1": "BUG",
      "type2": "FLYING"
    },
    "SPINARAK_0": {
      "species": "SPINARAK",
      "form": 0,
      "dexNo": 167,
      "type1": "BUG",
      "type2": "POISON"
    },
    "ARIADOS_0": {
      "species": "ARIADOS",
      "form": 0,
      "dexNo": 168,
      "type1": "BUG",
      "type2": "POISON"
    },
    "CROBAT_0": {
      "species": "CROBAT",
      "form": 0,
      "dexNo": 169,
      "type1": "POISON",
      "type2": "FLYING"
    },
    "CHINCHOU_0": {
      "species": "CHINCHOU",
      "form": 0,
      "dexNo": 170,
      "type1": "WATER",
      "type2": "ELECTRIC"
    },
    "LANTURN_0": {
      "species": "LANTURN",
      "form": 0,
      "dexNo": 171,
      "type1": "WATER",
      "type2": "ELECTRIC"
    },
    "PICHU_0": {
      "species": "PICHU",
      "form": 0,
      "dexNo": 172,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "CLEFFA_0": {
      "species": "CLEFFA",
      "form": 0,
      "dexNo": 173,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "IGGLYBUFF_0": {
      "species": "IGGLYBUFF",
      "form": 0,
      "dexNo": 174,
      "type1": "NORMAL",
      "type2": "FAIRY"
    },
    "TOGEPI_0": {
      "species": "TOGEPI",
      "form": 0,
      "dexNo": 175,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "TOGETIC_0": {
      "species": "TOGETIC",
      "form": 0,
      "dexNo": 176,
      "type1": "FAIRY",
      "type2": "FLYING"
    },
    "NATU_0": {
      "species": "NATU",
      "form": 0,
      "dexNo": 177,
      "type1": "PSYCHIC",
      "type2": "FLYING"
    },
    "XATU_0": {
      "species": "XATU",
      "form": 0,
      "dexNo": 178,
      "type1": "PSYCHIC",
      "type2": "FLYING"
    },
    "MAREEP_0": {
      "species": "MAREEP",
      "form": 0,
      "dexNo": 179,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "FLAAFFY_0": {
      "species": "FLAAFFY",
      "form": 0,
      "dexNo": 180,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "AMPHAROS_0": {
      "species": "AMPHAROS",
      "form": 0,
      "dexNo": 181,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "AMPHAROS_1": {
      "species": "AMPHAROS",
      "form": 1,
      "dexNo": 181,
      "type1": "ELECTRIC",
      "type2": "DRAGON"
    },
    "BELLOSSOM_0": {
      "species": "BELLOSSOM",
      "form": 0,
      "dexNo": 182,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "MARILL_0": {
      "species": "MARILL",
      "form": 0,
      "dexNo": 183,
      "type1": "WATER",
      "type2": "FAIRY"
    },
    "AZUMARILL_0": {
      "species": "AZUMARILL",
      "form": 0,
      "dexNo": 184,
      "type1": "WATER",
      "type2": "FAIRY"
    },
    "SUDOWOODO_0": {
      "species": "SUDOWOODO",
      "form": 0,
      "dexNo": 185,
      "type1": "ROCK",
      "type2": "NONE"
    },
    "POLITOED_0": {
      "species": "POLITOED",
      "form": 0,
      "dexNo": 186,
      "type1": "WATER",
      "type2": "NONE"
    },
    "HOPPIP_0": {
      "species": "HOPPIP",
      "form": 0,
      "dexNo": 187,
      "type1": "GRASS",
      "type2": "FLYING"
    },
    "SKIPLOOM_0": {
      "species": "SKIPLOOM",
      "form": 0,
      "dexNo": 188,
      "type1": "GRASS",
      "type2": "FLYING"
    },
    "JUMPLUFF_0": {
      "species": "JUMPLUFF",
      "form": 0,
      "dexNo": 189,
      "type1": "GRASS",
      "type2": "FLYING"
    },
    "AIPOM_0": {
      "species": "AIPOM",
      "form": 0,
      "dexNo": 190,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "SUNKERN_0": {
      "species": "SUNKERN",
      "form": 0,
      "dexNo": 191,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "SUNFLORA_0": {
      "species": "SUNFLORA",
      "form": 0,
      "dexNo": 192,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "YANMA_0": {
      "species": "YANMA",
      "form": 0,
      "dexNo": 193,
      "type1": "BUG",
      "type2": "FLYING"
    },
    "WOOPER_0": {
      "species": "WOOPER",
      "form": 0,
      "dexNo": 194,
      "type1": "WATER",
      "type2": "GROUND"
    },
    "WOOPER_1": {
      "species": "WOOPER",
      "form": 1,
      "dexNo": 194,
      "type1": "POISON",
      "type2": "GROUND"
    },
    "QUAGSIRE_0": {
      "species": "QUAGSIRE",
      "form": 0,
      "dexNo": 195,
      "type1": "WATER",
      "type2": "GROUND"
    },
    "ESPEON_0": {
      "species": "ESPEON",
      "form": 0,
      "dexNo": 196,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "UMBREON_0": {
      "species": "UMBREON",
      "form": 0,
      "dexNo": 197,
      "type1": "DARK",
      "type2": "NONE"
    },
    "MURKROW_0": {
      "species": "MURKROW",
      "form": 0,
      "dexNo": 198,
      "type1": "DARK",
      "type2": "FLYING"
    },
    "SLOWKING_0": {
      "species": "SLOWKING",
      "form": 0,
      "dexNo": 199,
      "type1": "WATER",
      "type2": "PSYCHIC"
    },
    "SLOWKING_1": {
      "species": "SLOWKING",
      "form": 1,
      "dexNo": 199,
      "type1": "POISON",
      "type2": "PSYCHIC"
    },
    "MISDREAVUS_0": {
      "species": "MISDREAVUS",
      "form": 0,
      "dexNo": 200,
      "type1": "GHOST",
      "type2": "NONE"
    },
    "UNOWN_0": {
      "species": "UNOWN",
      "form": 0,
      "dexNo": 201,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "WOBBUFFET_0": {
      "species": "WOBBUFFET",
      "form": 0,
      "dexNo": 202,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "GIRAFARIG_0": {
      "species": "GIRAFARIG",
      "form": 0,
      "dexNo": 203,
      "type1": "NORMAL",
      "type2": "PSYCHIC"
    },
    "PINECO_0": {
      "species": "PINECO",
      "form": 0,
      "dexNo": 204,
      "type1": "BUG",
      "type2": "NONE"
    },
    "FORRETRESS_0": {
      "species": "FORRETRESS",
      "form": 0,
      "dexNo": 205,
      "type1": "BUG",
      "type2": "STEEL"
    },
    "DUNSPARCE_0": {
      "species": "DUNSPARCE",
      "form": 0,
      "dexNo": 206,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "GLIGAR_0": {
      "species": "GLIGAR",
      "form": 0,
      "dexNo": 207,
      "type1": "GROUND",
      "type2": "FLYING"
    },
    "STEELIX_0": {
      "species": "STEELIX",
      "form": 0,
      "dexNo": 208,
      "type1": "STEEL",
      "type2": "GROUND"
    },
    "STEELIX_1": {
      "species": "STEELIX",
      "form": 1,
      "dexNo": 208,
      "type1": "STEEL",
      "type2": "GROUND"
    },
    "SNUBBULL_0": {
      "species": "SNUBBULL",
      "form": 0,
      "dexNo": 209,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "GRANBULL_0": {
      "species": "GRANBULL",
      "form": 0,
      "dexNo": 210,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "QWILFISH_0": {
      "species": "QWILFISH",
      "form": 0,
      "dexNo": 211,
      "type1": "WATER",
      "type2": "POISON"
    },
    "QWILFISH_1": {
      "species": "QWILFISH",
      "form": 1,
      "dexNo": 211,
      "type1": "DARK",
      "type2": "POISON"
    },
    "SCIZOR_0": {
      "species": "SCIZOR",
      "form": 0,
      "dexNo": 212,
      "type1": "BUG",
      "type2": "STEEL"
    },
    "SCIZOR_1": {
      "species": "SCIZOR",
      "form": 1,
      "dexNo": 212,
      "type1": "BUG",
      "type2": "STEEL"
    },
    "SHUCKLE_0": {
      "species": "SHUCKLE",
      "form": 0,
      "dexNo": 213,
      "type1": "BUG",
      "type2": "ROCK"
    },
    "HERACROSS_0": {
      "species": "HERACROSS",
      "form": 0,
      "dexNo": 214,
      "type1": "BUG",
      "type2": "FIGHTING"
    },
    "HERACROSS_1": {
      "species": "HERACROSS",
      "form": 1,
      "dexNo": 214,
      "type1": "BUG",
      "type2": "FIGHTING"
    },
    "SNEASEL_0": {
      "species": "SNEASEL",
      "form": 0,
      "dexNo": 215,
      "type1": "DARK",
      "type2": "ICE"
    },
    "SNEASEL_1": {
      "species": "SNEASEL",
      "form": 1,
      "dexNo": 215,
      "type1": "FIGHTING",
      "type2": "POISON"
    },
    "TEDDIURSA_0": {
      "species": "TEDDIURSA",
      "form": 0,
      "dexNo": 216,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "URSARING_0": {
      "species": "URSARING",
      "form": 0,
      "dexNo": 217,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "SLUGMA_0": {
      "species": "SLUGMA",
      "form": 0,
      "dexNo": 218,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "MAGCARGO_0": {
      "species": "MAGCARGO",
      "form": 0,
      "dexNo": 219,
      "type1": "FIRE",
      "type2": "ROCK"
    },
    "SWINUB_0": {
      "species": "SWINUB",
      "form": 0,
      "dexNo": 220,
      "type1": "ICE",
      "type2": "GROUND"
    },
    "PILOSWINE_0": {
      "species": "PILOSWINE",
      "form": 0,
      "dexNo": 221,
      "type1": "ICE",
      "type2": "GROUND"
    },
    "CORSOLA_0": {
      "species": "CORSOLA",
      "form": 0,
      "dexNo": 222,
      "type1": "WATER",
      "type2": "ROCK"
    },
    "CORSOLA_1": {
      "species": "CORSOLA",
      "form": 1,
      "dexNo": 222,
      "type1": "GHOST",
      "type2": "NONE"
    },
    "REMORAID_0": {
      "species": "REMORAID",
      "form": 0,
      "dexNo": 223,
      "type1": "WATER",
      "type2": "NONE"
    },
    "OCTILLERY_0": {
      "species": "OCTILLERY",
      "form": 0,
      "dexNo": 224,
      "type1": "WATER",
      "type2": "NONE"
    },
    "DELIBIRD_0": {
      "species": "DELIBIRD",
      "form": 0,
      "dexNo": 225,
      "type1": "ICE",
      "type2": "FLYING"
    },
    "MANTINE_0": {
      "species": "MANTINE",
      "form": 0,
      "dexNo": 226,
      "type1": "WATER",
      "type2": "FLYING"
    },
    "SKARMORY_0": {
      "species": "SKARMORY",
      "form": 0,
      "dexNo": 227,
      "type1": "STEEL",
      "type2": "FLYING"
    },
    "HOUNDOUR_0": {
      "species": "HOUNDOUR",
      "form": 0,
      "dexNo": 228,
      "type1": "DARK",
      "type2": "FIRE"
    },
    "HOUNDOOM_0": {
      "species": "HOUNDOOM",
      "form": 0,
      "dexNo": 229,
      "type1": "DARK",
      "type2": "FIRE"
    },
    "HOUNDOOM_1": {
      "species": "HOUNDOOM",
      "form": 1,
      "dexNo": 229,
      "type1": "DARK",
      "type2": "FIRE"
    },
    "KINGDRA_0": {
      "species": "KINGDRA",
      "form": 0,
      "dexNo": 230,
      "type1": "WATER",
      "type2": "DRAGON"
    },
    "PHANPY_0": {
      "species": "PHANPY",
      "form": 0,
      "dexNo": 231,
      "type1": "GROUND",
      "type2": "NONE"
    },
    "DONPHAN_0": {
      "species": "DONPHAN",
      "form": 0,
      "dexNo": 232,
      "type1": "GROUND",
      "type2": "NONE"
    },
    "PORYGON2_0": {
      "species": "PORYGON2",
      "form": 0,
      "dexNo": 233,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "STANTLER_0": {
      "species": "STANTLER",
      "form": 0,
      "dexNo": 234,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "SMEARGLE_0": {
      "species": "SMEARGLE",
      "form": 0,
      "dexNo": 235,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "TYROGUE_0": {
      "species": "TYROGUE",
      "form": 0,
      "dexNo": 236,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "HITMONTOP_0": {
      "species": "HITMONTOP",
      "form": 0,
      "dexNo": 237,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "SMOOCHUM_0": {
      "species": "SMOOCHUM",
      "form": 0,
      "dexNo": 238,
      "type1": "ICE",
      "type2": "PSYCHIC"
    },
    "ELEKID_0": {
      "species": "ELEKID",
      "form": 0,
      "dexNo": 239,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "MAGBY_0": {
      "species": "MAGBY",
      "form": 0,
      "dexNo": 240,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "MILTANK_0": {
      "species": "MILTANK",
      "form": 0,
      "dexNo": 241,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "BLISSEY_0": {
      "species": "BLISSEY",
      "form": 0,
      "dexNo": 242,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "RAIKOU_0": {
      "species": "RAIKOU",
      "form": 0,
      "dexNo": 243,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "ENTEI_0": {
      "species": "ENTEI",
      "form": 0,
      "dexNo": 244,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "SUICUNE_0": {
      "species": "SUICUNE",
      "form": 0,
      "dexNo": 245,
      "type1": "WATER",
      "type2": "NONE"
    },
    "LARVITAR_0": {
      "species": "LARVITAR",
      "form": 0,
      "dexNo": 246,
      "type1": "ROCK",
      "type2": "GROUND"
    },
    "PUPITAR_0": {
      "species": "PUPITAR",
      "form": 0,
      "dexNo": 247,
      "type1": "ROCK",
      "type2": "GROUND"
    },
    "TYRANITAR_0": {
      "species": "TYRANITAR",
      "form": 0,
      "dexNo": 248,
      "type1": "ROCK",
      "type2": "DARK"
    },
    "TYRANITAR_1": {
      "species": "TYRANITAR",
      "form": 1,
      "dexNo": 248,
      "type1": "ROCK",
      "type2": "DARK"
    },
    "LUGIA_0": {
      "species": "LUGIA",
      "form": 0,
      "dexNo": 249,
      "type1": "PSYCHIC",
      "type2": "FLYING"
    },
    "HO_OH_0": {
      "species": "HO_OH",
      "form": 0,
      "dexNo": 250,
      "type1": "FIRE",
      "type2": "FLYING"
    },
    "CELEBI_0": {
      "species": "CELEBI",
      "form": 0,
      "dexNo": 251,
      "type1": "PSYCHIC",
      "type2": "GRASS"
    },
    "TREECKO_0": {
      "species": "TREECKO",
      "form": 0,
      "dexNo": 252,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "GROVYLE_0": {
      "species": "GROVYLE",
      "form": 0,
      "dexNo": 253,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "SCEPTILE_0": {
      "species": "SCEPTILE",
      "form": 0,
      "dexNo": 254,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "SCEPTILE_1": {
      "species": "SCEPTILE",
      "form": 1,
      "dexNo": 254,
      "type1": "GRASS",
      "type2": "DRAGON"
    },
    "TORCHIC_0": {
      "species": "TORCHIC",
      "form": 0,
      "dexNo": 255,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "COMBUSKEN_0": {
      "species": "COMBUSKEN",
      "form": 0,
      "dexNo": 256,
      "type1": "FIRE",
      "type2": "FIGHTING"
    },
    "BLAZIKEN_0": {
      "species": "BLAZIKEN",
      "form": 0,
      "dexNo": 257,
      "type1": "FIRE",
      "type2": "FIGHTING"
    },
    "BLAZIKEN_1": {
      "species": "BLAZIKEN",
      "form": 1,
      "dexNo": 257,
      "type1": "FIRE",
      "type2": "FIGHTING"
    },
    "MUDKIP_0": {
      "species": "MUDKIP",
      "form": 0,
      "dexNo": 258,
      "type1": "WATER",
      "type2": "NONE"
    },
    "MARSHTOMP_0": {
      "species": "MARSHTOMP",
      "form": 0,
      "dexNo": 259,
      "type1": "WATER",
      "type2": "GROUND"
    },
    "SWAMPERT_0": {
      "species": "SWAMPERT",
      "form": 0,
      "dexNo": 260,
      "type1": "WATER",
      "type2": "GROUND"
    },
    "SWAMPERT_1": {
      "species": "SWAMPERT",
      "form": 1,
      "dexNo": 260,
      "type1": "WATER",
      "type2": "GROUND"
    },
    "POOCHYENA_0": {
      "species": "POOCHYENA",
      "form": 0,
      "dexNo": 261,
      "type1": "DARK",
      "type2": "NONE"
    },
    "MIGHTYENA_0": {
      "species": "MIGHTYENA",
      "form": 0,
      "dexNo": 262,
      "type1": "DARK",
      "type2": "NONE"
    },
    "ZIGZAGOON_0": {
      "species": "ZIGZAGOON",
      "form": 0,
      "dexNo": 263,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "ZIGZAGOON_1": {
      "species": "ZIGZAGOON",
      "form": 1,
      "dexNo": 263,
      "type1": "DARK",
      "type2": "NORMAL"
    },
    "LINOONE_0": {
      "species": "LINOONE",
      "form": 0,
      "dexNo": 264,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "LINOONE_1": {
      "species": "LINOONE",
      "form": 1,
      "dexNo": 264,
      "type1": "DARK",
      "type2": "NORMAL"
    },
    "WURMPLE_0": {
      "species": "WURMPLE",
      "form": 0,
      "dexNo": 265,
      "type1": "BUG",
      "type2": "NONE"
    },
    "SILCOON_0": {
      "species": "SILCOON",
      "form": 0,
      "dexNo": 266,
      "type1": "BUG",
      "type2": "NONE"
    },
    "BEAUTIFLY_0": {
      "species": "BEAUTIFLY",
      "form": 0,
      "dexNo": 267,
      "type1": "BUG",
      "type2": "FLYING"
    },
    "CASCOON_0": {
      "species": "CASCOON",
      "form": 0,
      "dexNo": 268,
      "type1": "BUG",
      "type2": "NONE"
    },
    "DUSTOX_0": {
      "species": "DUSTOX",
      "form": 0,
      "dexNo": 269,
      "type1": "BUG",
      "type2": "POISON"
    },
    "LOTAD_0": {
      "species": "LOTAD",
      "form": 0,
      "dexNo": 270,
      "type1": "WATER",
      "type2": "GRASS"
    },
    "LOMBRE_0": {
      "species": "LOMBRE",
      "form": 0,
      "dexNo": 271,
      "type1": "WATER",
      "type2": "GRASS"
    },
    "LUDICOLO_0": {
      "species": "LUDICOLO",
      "form": 0,
      "dexNo": 272,
      "type1": "WATER",
      "type2": "GRASS"
    },
    "SEEDOT_0": {
      "species": "SEEDOT",
      "form": 0,
      "dexNo": 273,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "NUZLEAF_0": {
      "species": "NUZLEAF",
      "form": 0,
      "dexNo": 274,
      "type1": "GRASS",
      "type2": "DARK"
    },
    "SHIFTRY_0": {
      "species": "SHIFTRY",
      "form": 0,
      "dexNo": 275,
      "type1": "GRASS",
      "type2": "DARK"
    },
    "TAILLOW_0": {
      "species": "TAILLOW",
      "form": 0,
      "dexNo": 276,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "SWELLOW_0": {
      "species": "SWELLOW",
      "form": 0,
      "dexNo": 277,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "WINGULL_0": {
      "species": "WINGULL",
      "form": 0,
      "dexNo": 278,
      "type1": "WATER",
      "type2": "FLYING"
    },
    "PELIPPER_0": {
      "species": "PELIPPER",
      "form": 0,
      "dexNo": 279,
      "type1": "WATER",
      "type2": "FLYING"
    },
    "RALTS_0": {
      "species": "RALTS",
      "form": 0,
      "dexNo": 280,
      "type1": "PSYCHIC",
      "type2": "FAIRY"
    },
    "KIRLIA_0": {
      "species": "KIRLIA",
      "form": 0,
      "dexNo": 281,
      "type1": "PSYCHIC",
      "type2": "FAIRY"
    },
    "GARDEVOIR_0": {
      "species": "GARDEVOIR",
      "form": 0,
      "dexNo": 282,
      "type1": "PSYCHIC",
      "type2": "FAIRY"
    },
    "GARDEVOIR_1": {
      "species": "GARDEVOIR",
      "form": 1,
      "dexNo": 282,
      "type1": "PSYCHIC",
      "type2": "FAIRY"
    },
    "SURSKIT_0": {
      "species": "SURSKIT",
      "form": 0,
      "dexNo": 283,
      "type1": "BUG",
      "type2": "WATER"
    },
    "MASQUERAIN_0": {
      "species": "MASQUERAIN",
      "form": 0,
      "dexNo": 284,
      "type1": "BUG",
      "type2": "FLYING"
    },
    "SHROOMISH_0": {
      "species": "SHROOMISH",
      "form": 0,
      "dexNo": 285,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "BRELOOM_0": {
      "species": "BRELOOM",
      "form": 0,
      "dexNo": 286,
      "type1": "GRASS",
      "type2": "FIGHTING"
    },
    "SLAKOTH_0": {
      "species": "SLAKOTH",
      "form": 0,
      "dexNo": 287,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "VIGOROTH_0": {
      "species": "VIGOROTH",
      "form": 0,
      "dexNo": 288,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "SLAKING_0": {
      "species": "SLAKING",
      "form": 0,
      "dexNo": 289,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "NINCADA_0": {
      "species": "NINCADA",
      "form": 0,
      "dexNo": 290,
      "type1": "BUG",
      "type2": "GROUND"
    },
    "NINJASK_0": {
      "species": "NINJASK",
      "form": 0,
      "dexNo": 291,
      "type1": "BUG",
      "type2": "FLYING"
    },
    "SHEDINJA_0": {
      "species": "SHEDINJA",
      "form": 0,
      "dexNo": 292,
      "type1": "BUG",
      "type2": "GHOST"
    },
    "WHISMUR_0": {
      "species": "WHISMUR",
      "form": 0,
      "dexNo": 293,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "LOUDRED_0": {
      "species": "LOUDRED",
      "form": 0,
      "dexNo": 294,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "EXPLOUD_0": {
      "species": "EXPLOUD",
      "form": 0,
      "dexNo": 295,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "MAKUHITA_0": {
      "species": "MAKUHITA",
      "form": 0,
      "dexNo": 296,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "HARIYAMA_0": {
      "species": "HARIYAMA",
      "form": 0,
      "dexNo": 297,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "AZURILL_0": {
      "species": "AZURILL",
      "form": 0,
      "dexNo": 298,
      "type1": "NORMAL",
      "type2": "FAIRY"
    },
    "NOSEPASS_0": {
      "species": "NOSEPASS",
      "form": 0,
      "dexNo": 299,
      "type1": "ROCK",
      "type2": "NONE"
    },
    "SKITTY_0": {
      "species": "SKITTY",
      "form": 0,
      "dexNo": 300,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "DELCATTY_0": {
      "species": "DELCATTY",
      "form": 0,
      "dexNo": 301,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "SABLEYE_0": {
      "species": "SABLEYE",
      "form": 0,
      "dexNo": 302,
      "type1": "DARK",
      "type2": "GHOST"
    },
    "SABLEYE_1": {
      "species": "SABLEYE",
      "form": 1,
      "dexNo": 302,
      "type1": "DARK",
      "type2": "GHOST"
    },
    "MAWILE_0": {
      "species": "MAWILE",
      "form": 0,
      "dexNo": 303,
      "type1": "STEEL",
      "type2": "FAIRY"
    },
    "MAWILE_1": {
      "species": "MAWILE",
      "form": 1,
      "dexNo": 303,
      "type1": "STEEL",
      "type2": "FAIRY"
    },
    "ARON_0": {
      "species": "ARON",
      "form": 0,
      "dexNo": 304,
      "type1": "STEEL",
      "type2": "ROCK"
    },
    "LAIRON_0": {
      "species": "LAIRON",
      "form": 0,
      "dexNo": 305,
      "type1": "STEEL",
      "type2": "ROCK"
    },
    "AGGRON_0": {
      "species": "AGGRON",
      "form": 0,
      "dexNo": 306,
      "type1": "STEEL",
      "type2": "ROCK"
    },
    "AGGRON_1": {
      "species": "AGGRON",
      "form": 1,
      "dexNo": 306,
      "type1": "STEEL",
      "type2": "NONE"
    },
    "MEDITITE_0": {
      "species": "MEDITITE",
      "form": 0,
      "dexNo": 307,
      "type1": "FIGHTING",
      "type2": "PSYCHIC"
    },
    "MEDICHAM_0": {
      "species": "MEDICHAM",
      "form": 0,
      "dexNo": 308,
      "type1": "FIGHTING",
      "type2": "PSYCHIC"
    },
    "MEDICHAM_1": {
      "species": "MEDICHAM",
      "form": 1,
      "dexNo": 308,
      "type1": "FIGHTING",
      "type2": "PSYCHIC"
    },
    "ELECTRIKE_0": {
      "species": "ELECTRIKE",
      "form": 0,
      "dexNo": 309,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "MANECTRIC_0": {
      "species": "MANECTRIC",
      "form": 0,
      "dexNo": 310,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "MANECTRIC_1": {
      "species": "MANECTRIC",
      "form": 1,
      "dexNo": 310,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "PLUSLE_0": {
      "species": "PLUSLE",
      "form": 0,
      "dexNo": 311,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "MINUN_0": {
      "species": "MINUN",
      "form": 0,
      "dexNo": 312,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "VOLBEAT_0": {
      "species": "VOLBEAT",
      "form": 0,
      "dexNo": 313,
      "type1": "BUG",
      "type2": "NONE"
    },
    "ILLUMISE_0": {
      "species": "ILLUMISE",
      "form": 0,
      "dexNo": 314,
      "type1": "BUG",
      "type2": "NONE"
    },
    "ROSELIA_0": {
      "species": "ROSELIA",
      "form": 0,
      "dexNo": 315,
      "type1": "GRASS",
      "type2": "POISON"
    },
    "GULPIN_0": {
      "species": "GULPIN",
      "form": 0,
      "dexNo": 316,
      "type1": "POISON",
      "type2": "NONE"
    },
    "SWALOT_0": {
      "species": "SWALOT",
      "form": 0,
      "dexNo": 317,
      "type1": "POISON",
      "type2": "NONE"
    },
    "CARVANHA_0": {
      "species": "CARVANHA",
      "form": 0,
      "dexNo": 318,
      "type1": "WATER",
      "type2": "DARK"
    },
    "SHARPEDO_0": {
      "species": "SHARPEDO",
      "form": 0,
      "dexNo": 319,
      "type1": "WATER",
      "type2": "DARK"
    },
    "SHARPEDO_1": {
      "species": "SHARPEDO",
      "form": 1,
      "dexNo": 319,
      "type1": "WATER",
      "type2": "DARK"
    },
    "WAILMER_0": {
      "species": "WAILMER",
      "form": 0,
      "dexNo": 320,
      "type1": "WATER",
      "type2": "NONE"
    },
    "WAILORD_0": {
      "species": "WAILORD",
      "form": 0,
      "dexNo": 321,
      "type1": "WATER",
      "type2": "NONE"
    },
    "NUMEL_0": {
      "species": "NUMEL",
      "form": 0,
      "dexNo": 322,
      "type1": "FIRE",
      "type2": "GROUND"
    },
    "CAMERUPT_0": {
      "species": "CAMERUPT",
      "form": 0,
      "dexNo": 323,
      "type1": "FIRE",
      "type2": "GROUND"
    },
    "CAMERUPT_1": {
      "species": "CAMERUPT",
      "form": 1,
      "dexNo": 323,
      "type1": "FIRE",
      "type2": "GROUND"
    },
    "TORKOAL_0": {
      "species": "TORKOAL",
      "form": 0,
      "dexNo": 324,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "SPOINK_0": {
      "species": "SPOINK",
      "form": 0,
      "dexNo": 325,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "GRUMPIG_0": {
      "species": "GRUMPIG",
      "form": 0,
      "dexNo": 326,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "SPINDA_0": {
      "species": "SPINDA",
      "form": 0,
      "dexNo": 327,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "TRAPINCH_0": {
      "species": "TRAPINCH",
      "form": 0,
      "dexNo": 328,
      "type1": "GROUND",
      "type2": "NONE"
    },
    "VIBRAVA_0": {
      "species": "VIBRAVA",
      "form": 0,
      "dexNo": 329,
      "type1": "GROUND",
      "type2": "DRAGON"
    },
    "FLYGON_0": {
      "species": "FLYGON",
      "form": 0,
      "dexNo": 330,
      "type1": "GROUND",
      "type2": "DRAGON"
    },
    "CACNEA_0": {
      "species": "CACNEA",
      "form": 0,
      "dexNo": 331,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "CACTURNE_0": {
      "species": "CACTURNE",
      "form": 0,
      "dexNo": 332,
      "type1": "GRASS",
      "type2": "DARK"
    },
    "SWABLU_0": {
      "species": "SWABLU",
      "form": 0,
      "dexNo": 333,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "ALTARIA_0": {
      "species": "ALTARIA",
      "form": 0,
      "dexNo": 334,
      "type1": "DRAGON",
      "type2": "FLYING"
    },
    "ALTARIA_1": {
      "species": "ALTARIA",
      "form": 1,
      "dexNo": 334,
      "type1": "DRAGON",
      "type2": "FAIRY"
    },
    "ZANGOOSE_0": {
      "species": "ZANGOOSE",
      "form": 0,
      "dexNo": 335,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "SEVIPER_0": {
      "species": "SEVIPER",
      "form": 0,
      "dexNo": 336,
      "type1": "POISON",
      "type2": "NONE"
    },
    "LUNATONE_0": {
      "species": "LUNATONE",
      "form": 0,
      "dexNo": 337,
      "type1": "ROCK",
      "type2": "PSYCHIC"
    },
    "SOLROCK_0": {
      "species": "SOLROCK",
      "form": 0,
      "dexNo": 338,
      "type1": "ROCK",
      "type2": "PSYCHIC"
    },
    "BARBOACH_0": {
      "species": "BARBOACH",
      "form": 0,
      "dexNo": 339,
      "type1": "WATER",
      "type2": "GROUND"
    },
    "WHISCASH_0": {
      "species": "WHISCASH",
      "form": 0,
      "dexNo": 340,
      "type1": "WATER",
      "type2": "GROUND"
    },
    "CORPHISH_0": {
      "species": "CORPHISH",
      "form": 0,
      "dexNo": 341,
      "type1": "WATER",
      "type2": "NONE"
    },
    "CRAWDAUNT_0": {
      "species": "CRAWDAUNT",
      "form": 0,
      "dexNo": 342,
      "type1": "WATER",
      "type2": "DARK"
    },
    "BALTOY_0": {
      "species": "BALTOY",
      "form": 0,
      "dexNo": 343,
      "type1": "GROUND",
      "type2": "PSYCHIC"
    },
    "CLAYDOL_0": {
      "species": "CLAYDOL",
      "form": 0,
      "dexNo": 344,
      "type1": "GROUND",
      "type2": "PSYCHIC"
    },
    "LILEEP_0": {
      "species": "LILEEP",
      "form": 0,
      "dexNo": 345,
      "type1": "ROCK",
      "type2": "GRASS"
    },
    "CRADILY_0": {
      "species": "CRADILY",
      "form": 0,
      "dexNo": 346,
      "type1": "ROCK",
      "type2": "GRASS"
    },
    "ANORITH_0": {
      "species": "ANORITH",
      "form": 0,
      "dexNo": 347,
      "type1": "ROCK",
      "type2": "BUG"
    },
    "ARMALDO_0": {
      "species": "ARMALDO",
      "form": 0,
      "dexNo": 348,
      "type1": "ROCK",
      "type2": "BUG"
    },
    "FEEBAS_0": {
      "species": "FEEBAS",
      "form": 0,
      "dexNo": 349,
      "type1": "WATER",
      "type2": "NONE"
    },
    "MILOTIC_0": {
      "species": "MILOTIC",
      "form": 0,
      "dexNo": 350,
      "type1": "WATER",
      "type2": "NONE"
    },
    "CASTFORM_0": {
      "species": "CASTFORM",
      "form": 0,
      "dexNo": 351,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "CASTFORM_1": {
      "species": "CASTFORM",
      "form": 1,
      "dexNo": 351,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "CASTFORM_2": {
      "species": "CASTFORM",
      "form": 2,
      "dexNo": 351,
      "type1": "WATER",
      "type2": "NONE"
    },
    "CASTFORM_3": {
      "species": "CASTFORM",
      "form": 3,
      "dexNo": 351,
      "type1": "ICE",
      "type2": "NONE"
    },
    "KECLEON_0": {
      "species": "KECLEON",
      "form": 0,
      "dexNo": 352,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "SHUPPET_0": {
      "species": "SHUPPET",
      "form": 0,
      "dexNo": 353,
      "type1": "GHOST",
      "type2": "NONE"
    },
    "BANETTE_0": {
      "species": "BANETTE",
      "form": 0,
      "dexNo": 354,
      "type1": "GHOST",
      "type2": "NONE"
    },
    "BANETTE_1": {
      "species": "BANETTE",
      "form": 1,
      "dexNo": 354,
      "type1": "GHOST",
      "type2": "NONE"
    },
    "DUSKULL_0": {
      "species": "DUSKULL",
      "form": 0,
      "dexNo": 355,
      "type1": "GHOST",
      "type2": "NONE"
    },
    "DUSCLOPS_0": {
      "species": "DUSCLOPS",
      "form": 0,
      "dexNo": 356,
      "type1": "GHOST",
      "type2": "NONE"
    },
    "TROPIUS_0": {
      "species": "TROPIUS",
      "form": 0,
      "dexNo": 357,
      "type1": "GRASS",
      "type2": "FLYING"
    },
    "CHIMECHO_0": {
      "species": "CHIMECHO",
      "form": 0,
      "dexNo": 358,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "ABSOL_0": {
      "species": "ABSOL",
      "form": 0,
      "dexNo": 359,
      "type1": "DARK",
      "type2": "NONE"
    },
    "ABSOL_1": {
      "species": "ABSOL",
      "form": 1,
      "dexNo": 359,
      "type1": "DARK",
      "type2": "NONE"
    },
    "WYNAUT_0": {
      "species": "WYNAUT",
      "form": 0,
      "dexNo": 360,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "SNORUNT_0": {
      "species": "SNORUNT",
      "form": 0,
      "dexNo": 361,
      "type1": "ICE",
      "type2": "NONE"
    },
    "GLALIE_0": {
      "species": "GLALIE",
      "form": 0,
      "dexNo": 362,
      "type1": "ICE",
      "type2": "NONE"
    },
    "GLALIE_1": {
      "species": "GLALIE",
      "form": 1,
      "dexNo": 362,
      "type1": "ICE",
      "type2": "NONE"
    },
    "SPHEAL_0": {
      "species": "SPHEAL",
      "form": 0,
      "dexNo": 363,
      "type1": "ICE",
      "type2": "WATER"
    },
    "SEALEO_0": {
      "species": "SEALEO",
      "form": 0,
      "dexNo": 364,
      "type1": "ICE",
      "type2": "WATER"
    },
    "WALREIN_0": {
      "species": "WALREIN",
      "form": 0,
      "dexNo": 365,
      "type1": "ICE",
      "type2": "WATER"
    },
    "CLAMPERL_0": {
      "species": "CLAMPERL",
      "form": 0,
      "dexNo": 366,
      "type1": "WATER",
      "type2": "NONE"
    },
    "HUNTAIL_0": {
      "species": "HUNTAIL",
      "form": 0,
      "dexNo": 367,
      "type1": "WATER",
      "type2": "NONE"
    },
    "GOREBYSS_0": {
      "species": "GOREBYSS",
      "form": 0,
      "dexNo": 368,
      "type1": "WATER",
      "type2": "NONE"
    },
    "RELICANTH_0": {
      "species": "RELICANTH",
      "form": 0,
      "dexNo": 369,
      "type1": "WATER",
      "type2": "ROCK"
    },
    "LUVDISC_0": {
      "species": "LUVDISC",
      "form": 0,
      "dexNo": 370,
      "type1": "WATER",
      "type2": "NONE"
    },
    "BAGON_0": {
      "species": "BAGON",
      "form": 0,
      "dexNo": 371,
      "type1": "DRAGON",
      "type2": "NONE"
    },
    "SHELGON_0": {
      "species": "SHELGON",
      "form": 0,
      "dexNo": 372,
      "type1": "DRAGON",
      "type2": "NONE"
    },
    "SALAMENCE_0": {
      "species": "SALAMENCE",
      "form": 0,
      "dexNo": 373,
      "type1": "DRAGON",
      "type2": "FLYING"
    },
    "SALAMENCE_1": {
      "species": "SALAMENCE",
      "form": 1,
      "dexNo": 373,
      "type1": "DRAGON",
      "type2": "FLYING"
    },
    "BELDUM_0": {
      "species": "BELDUM",
      "form": 0,
      "dexNo": 374,
      "type1": "STEEL",
      "type2": "PSYCHIC"
    },
    "METANG_0": {
      "species": "METANG",
      "form": 0,
      "dexNo": 375,
      "type1": "STEEL",
      "type2": "PSYCHIC"
    },
    "METAGROSS_0": {
      "species": "METAGROSS",
      "form": 0,
      "dexNo": 376,
      "type1": "STEEL",
      "type2": "PSYCHIC"
    },
    "METAGROSS_1": {
      "species": "METAGROSS",
      "form": 1,
      "dexNo": 376,
      "type1": "STEEL",
      "type2": "PSYCHIC"
    },
    "REGIROCK_0": {
      "species": "REGIROCK",
      "form": 0,
      "dexNo": 377,
      "type1": "ROCK",
      "type2": "NONE"
    },
    "REGICE_0": {
      "species": "REGICE",
      "form": 0,
      "dexNo": 378,
      "type1": "ICE",
      "type2": "NONE"
    },
    "REGISTEEL_0": {
      "species": "REGISTEEL",
      "form": 0,
      "dexNo": 379,
      "type1": "STEEL",
      "type2": "NONE"
    },
    "LATIAS_0": {
      "species": "LATIAS",
      "form": 0,
      "dexNo": 380,
      "type1": "DRAGON",
      "type2": "PSYCHIC"
    },
    "LATIAS_1": {
      "species": "LATIAS",
      "form": 1,
      "dexNo": 380,
      "type1": "DRAGON",
      "type2": "PSYCHIC"
    },
    "LATIOS_0": {
      "species": "LATIOS",
      "form": 0,
      "dexNo": 381,
      "type1": "DRAGON",
      "type2": "PSYCHIC"
    },
    "LATIOS_1": {
      "species": "LATIOS",
      "form": 1,
      "dexNo": 381,
      "type1": "DRAGON",
      "type2": "PSYCHIC"
    },
    "KYOGRE_0": {
      "species": "KYOGRE",
      "form": 0,
      "dexNo": 382,
      "type1": "WATER",
      "type2": "NONE"
    },
    "KYOGRE_1": {
      "species": "KYOGRE",
      "form": 1,
      "dexNo": 382,
      "type1": "WATER",
      "type2": "NONE"
    },
    "GROUDON_0": {
      "species": "GROUDON",
      "form": 0,
      "dexNo": 383,
      "type1": "GROUND",
      "type2": "NONE"
    },
    "GROUDON_1": {
      "species": "GROUDON",
      "form": 1,
      "dexNo": 383,
      "type1": "GROUND",
      "type2": "FIRE"
    },
    "RAYQUAZA_0": {
      "species": "RAYQUAZA",
      "form": 0,
      "dexNo": 384,
      "type1": "DRAGON",
      "type2": "FLYING"
    },
    "RAYQUAZA_1": {
      "species": "RAYQUAZA",
      "form": 1,
      "dexNo": 384,
      "type1": "DRAGON",
      "type2": "FLYING"
    },
    "JIRACHI_0": {
      "species": "JIRACHI",
      "form": 0,
      "dexNo": 385,
      "type1": "STEEL",
      "type2": "PSYCHIC"
    },
    "DEOXYS_0": {
      "species": "DEOXYS",
      "form": 0,
      "dexNo": 386,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "DEOXYS_1": {
      "species": "DEOXYS",
      "form": 1,
      "dexNo": 386,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "DEOXYS_2": {
      "species": "DEOXYS",
      "form": 2,
      "dexNo": 386,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "DEOXYS_3": {
      "species": "DEOXYS",
      "form": 3,
      "dexNo": 386,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "TURTWIG_0": {
      "species": "TURTWIG",
      "form": 0,
      "dexNo": 387,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "GROTLE_0": {
      "species": "GROTLE",
      "form": 0,
      "dexNo": 388,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "TORTERRA_0": {
      "species": "TORTERRA",
      "form": 0,
      "dexNo": 389,
      "type1": "GRASS",
      "type2": "GROUND"
    },
    "CHIMCHAR_0": {
      "species": "CHIMCHAR",
      "form": 0,
      "dexNo": 390,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "MONFERNO_0": {
      "species": "MONFERNO",
      "form": 0,
      "dexNo": 391,
      "type1": "FIRE",
      "type2": "FIGHTING"
    },
    "INFERNAPE_0": {
      "species": "INFERNAPE",
      "form": 0,
      "dexNo": 392,
      "type1": "FIRE",
      "type2": "FIGHTING"
    },
    "PIPLUP_0": {
      "species": "PIPLUP",
      "form": 0,
      "dexNo": 393,
      "type1": "WATER",
      "type2": "NONE"
    },
    "PRINPLUP_0": {
      "species": "PRINPLUP",
      "form": 0,
      "dexNo": 394,
      "type1": "WATER",
      "type2": "NONE"
    },
    "EMPOLEON_0": {
      "species": "EMPOLEON",
      "form": 0,
      "dexNo": 395,
      "type1": "WATER",
      "type2": "STEEL"
    },
    "STARLY_0": {
      "species": "STARLY",
      "form": 0,
      "dexNo": 396,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "STARAVIA_0": {
      "species": "STARAVIA",
      "form": 0,
      "dexNo": 397,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "STARAPTOR_0": {
      "species": "STARAPTOR",
      "form": 0,
      "dexNo": 398,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "BIDOOF_0": {
      "species": "BIDOOF",
      "form": 0,
      "dexNo": 399,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "BIBAREL_0": {
      "species": "BIBAREL",
      "form": 0,
      "dexNo": 400,
      "type1": "NORMAL",
      "type2": "WATER"
    },
    "KRICKETOT_0": {
      "species": "KRICKETOT",
      "form": 0,
      "dexNo": 401,
      "type1": "BUG",
      "type2": "NONE"
    },
    "KRICKETUNE_0": {
      "species": "KRICKETUNE",
      "form": 0,
      "dexNo": 402,
      "type1": "BUG",
      "type2": "NONE"
    },
    "SHINX_0": {
      "species": "SHINX",
      "form": 0,
      "dexNo": 403,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "LUXIO_0": {
      "species": "LUXIO",
      "form": 0,
      "dexNo": 404,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "LUXRAY_0": {
      "species": "LUXRAY",
      "form": 0,
      "dexNo": 405,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "BUDEW_0": {
      "species": "BUDEW",
      "form": 0,
      "dexNo": 406,
      "type1": "GRASS",
      "type2": "POISON"
    },
    "ROSERADE_0": {
      "species": "ROSERADE",
      "form": 0,
      "dexNo": 407,
      "type1": "GRASS",
      "type2": "POISON"
    },
    "CRANIDOS_0": {
      "species": "CRANIDOS",
      "form": 0,
      "dexNo": 408,
      "type1": "ROCK",
      "type2": "NONE"
    },
    "RAMPARDOS_0": {
      "species": "RAMPARDOS",
      "form": 0,
      "dexNo": 409,
      "type1": "ROCK",
      "type2": "NONE"
    },
    "SHIELDON_0": {
      "species": "SHIELDON",
      "form": 0,
      "dexNo": 410,
      "type1": "ROCK",
      "type2": "STEEL"
    },
    "BASTIODON_0": {
      "species": "BASTIODON",
      "form": 0,
      "dexNo": 411,
      "type1": "ROCK",
      "type2": "STEEL"
    },
    "BURMY_0": {
      "species": "BURMY",
      "form": 0,
      "dexNo": 412,
      "type1": "BUG",
      "type2": "NONE"
    },
    "BURMY_1": {
      "species": "BURMY",
      "form": 1,
      "dexNo": 412,
      "type1": "BUG",
      "type2": "NONE"
    },
    "BURMY_2": {
      "species": "BURMY",
      "form": 2,
      "dexNo": 412,
      "type1": "BUG",
      "type2": "NONE"
    },
    "WORMADAM_0": {
      "species": "WORMADAM",
      "form": 0,
      "dexNo": 413,
      "type1": "BUG",
      "type2": "GRASS"
    },
    "WORMADAM_1": {
      "species": "WORMADAM",
      "form": 1,
      "dexNo": 413,
      "type1": "BUG",
      "type2": "GROUND"
    },
    "WORMADAM_2": {
      "species": "WORMADAM",
      "form": 2,
      "dexNo": 413,
      "type1": "BUG",
      "type2": "STEEL"
    },
    "MOTHIM_0": {
      "species": "MOTHIM",
      "form": 0,
      "dexNo": 414,
      "type1": "BUG",
      "type2": "FLYING"
    },
    "COMBEE_0": {
      "species": "COMBEE",
      "form": 0,
      "dexNo": 415,
      "type1": "BUG",
      "type2": "FLYING"
    },
    "VESPIQUEN_0": {
      "species": "VESPIQUEN",
      "form": 0,
      "dexNo": 416,
      "type1": "BUG",
      "type2": "FLYING"
    },
    "PACHIRISU_0": {
      "species": "PACHIRISU",
      "form": 0,
      "dexNo": 417,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "BUIZEL_0": {
      "species": "BUIZEL",
      "form": 0,
      "dexNo": 418,
      "type1": "WATER",
      "type2": "NONE"
    },
    "FLOATZEL_0": {
      "species": "FLOATZEL",
      "form": 0,
      "dexNo": 419,
      "type1": "WATER",
      "type2": "NONE"
    },
    "CHERUBI_0": {
      "species": "CHERUBI",
      "form": 0,
      "dexNo": 420,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "CHERRIM_0": {
      "species": "CHERRIM",
      "form": 0,
      "dexNo": 421,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "SHELLOS_0": {
      "species": "SHELLOS",
      "form": 0,
      "dexNo": 422,
      "type1": "WATER",
      "type2": "NONE"
    },
    "GASTRODON_0": {
      "species": "GASTRODON",
      "form": 0,
      "dexNo": 423,
      "type1": "WATER",
      "type2": "GROUND"
    },
    "AMBIPOM_0": {
      "species": "AMBIPOM",
      "form": 0,
      "dexNo": 424,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "DRIFLOON_0": {
      "species": "DRIFLOON",
      "form": 0,
      "dexNo": 425,
      "type1": "GHOST",
      "type2": "FLYING"
    },
    "DRIFBLIM_0": {
      "species": "DRIFBLIM",
      "form": 0,
      "dexNo": 426,
      "type1": "GHOST",
      "type2": "FLYING"
    },
    "BUNEARY_0": {
      "species": "BUNEARY",
      "form": 0,
      "dexNo": 427,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "LOPUNNY_0": {
      "species": "LOPUNNY",
      "form": 0,
      "dexNo": 428,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "LOPUNNY_1": {
      "species": "LOPUNNY",
      "form": 1,
      "dexNo": 428,
      "type1": "NORMAL",
      "type2": "FIGHTING"
    },
    "MISMAGIUS_0": {
      "species": "MISMAGIUS",
      "form": 0,
      "dexNo": 429,
      "type1": "GHOST",
      "type2": "NONE"
    },
    "HONCHKROW_0": {
      "species": "HONCHKROW",
      "form": 0,
      "dexNo": 430,
      "type1": "DARK",
      "type2": "FLYING"
    },
    "GLAMEOW_0": {
      "species": "GLAMEOW",
      "form": 0,
      "dexNo": 431,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "PURUGLY_0": {
      "species": "PURUGLY",
      "form": 0,
      "dexNo": 432,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "CHINGLING_0": {
      "species": "CHINGLING",
      "form": 0,
      "dexNo": 433,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "STUNKY_0": {
      "species": "STUNKY",
      "form": 0,
      "dexNo": 434,
      "type1": "POISON",
      "type2": "DARK"
    },
    "SKUNTANK_0": {
      "species": "SKUNTANK",
      "form": 0,
      "dexNo": 435,
      "type1": "POISON",
      "type2": "DARK"
    },
    "BRONZOR_0": {
      "species": "BRONZOR",
      "form": 0,
      "dexNo": 436,
      "type1": "STEEL",
      "type2": "PSYCHIC"
    },
    "BRONZONG_0": {
      "species": "BRONZONG",
      "form": 0,
      "dexNo": 437,
      "type1": "STEEL",
      "type2": "PSYCHIC"
    },
    "BONSLY_0": {
      "species": "BONSLY",
      "form": 0,
      "dexNo": 438,
      "type1": "ROCK",
      "type2": "NONE"
    },
    "MIMEJR__0": {
      "species": "MIMEJR_",
      "form": 0,
      "dexNo": 439,
      "type1": "PSYCHIC",
      "type2": "FAIRY"
    },
    "HAPPINY_0": {
      "species": "HAPPINY",
      "form": 0,
      "dexNo": 440,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "CHATOT_0": {
      "species": "CHATOT",
      "form": 0,
      "dexNo": 441,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "SPIRITOMB_0": {
      "species": "SPIRITOMB",
      "form": 0,
      "dexNo": 442,
      "type1": "GHOST",
      "type2": "DARK"
    },
    "GIBLE_0": {
      "species": "GIBLE",
      "form": 0,
      "dexNo": 443,
      "type1": "DRAGON",
      "type2": "GROUND"
    },
    "GABITE_0": {
      "species": "GABITE",
      "form": 0,
      "dexNo": 444,
      "type1": "DRAGON",
      "type2": "GROUND"
    },
    "GARCHOMP_0": {
      "species": "GARCHOMP",
      "form": 0,
      "dexNo": 445,
      "type1": "DRAGON",
      "type2": "GROUND"
    },
    "GARCHOMP_1": {
      "species": "GARCHOMP",
      "form": 1,
      "dexNo": 445,
      "type1": "DRAGON",
      "type2": "GROUND"
    },
    "MUNCHLAX_0": {
      "species": "MUNCHLAX",
      "form": 0,
      "dexNo": 446,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "RIOLU_0": {
      "species": "RIOLU",
      "form": 0,
      "dexNo": 447,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "LUCARIO_0": {
      "species": "LUCARIO",
      "form": 0,
      "dexNo": 448,
      "type1": "FIGHTING",
      "type2": "STEEL"
    },
    "LUCARIO_1": {
      "species": "LUCARIO",
      "form": 1,
      "dexNo": 448,
      "type1": "FIGHTING",
      "type2": "STEEL"
    },
    "HIPPOPOTAS_0": {
      "species": "HIPPOPOTAS",
      "form": 0,
      "dexNo": 449,
      "type1": "GROUND",
      "type2": "NONE"
    },
    "HIPPOWDON_0": {
      "species": "HIPPOWDON",
      "form": 0,
      "dexNo": 450,
      "type1": "GROUND",
      "type2": "NONE"
    },
    "SKORUPI_0": {
      "species": "SKORUPI",
      "form": 0,
      "dexNo": 451,
      "type1": "POISON",
      "type2": "BUG"
    },
    "DRAPION_0": {
      "species": "DRAPION",
      "form": 0,
      "dexNo": 452,
      "type1": "POISON",
      "type2": "DARK"
    },
    "CROAGUNK_0": {
      "species": "CROAGUNK",
      "form": 0,
      "dexNo": 453,
      "type1": "POISON",
      "type2": "FIGHTING"
    },
    "TOXICROAK_0": {
      "species": "TOXICROAK",
      "form": 0,
      "dexNo": 454,
      "type1": "POISON",
      "type2": "FIGHTING"
    },
    "CARNIVINE_0": {
      "species": "CARNIVINE",
      "form": 0,
      "dexNo": 455,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "FINNEON_0": {
      "species": "FINNEON",
      "form": 0,
      "dexNo": 456,
      "type1": "WATER",
      "type2": "NONE"
    },
    "LUMINEON_0": {
      "species": "LUMINEON",
      "form": 0,
      "dexNo": 457,
      "type1": "WATER",
      "type2": "NONE"
    },
    "MANTYKE_0": {
      "species": "MANTYKE",
      "form": 0,
      "dexNo": 458,
      "type1": "WATER",
      "type2": "FLYING"
    },
    "SNOVER_0": {
      "species": "SNOVER",
      "form": 0,
      "dexNo": 459,
      "type1": "GRASS",
      "type2": "ICE"
    },
    "ABOMASNOW_0": {
      "species": "ABOMASNOW",
      "form": 0,
      "dexNo": 460,
      "type1": "GRASS",
      "type2": "ICE"
    },
    "ABOMASNOW_1": {
      "species": "ABOMASNOW",
      "form": 1,
      "dexNo": 460,
      "type1": "GRASS",
      "type2": "ICE"
    },
    "WEAVILE_0": {
      "species": "WEAVILE",
      "form": 0,
      "dexNo": 461,
      "type1": "DARK",
      "type2": "ICE"
    },
    "MAGNEZONE_0": {
      "species": "MAGNEZONE",
      "form": 0,
      "dexNo": 462,
      "type1": "ELECTRIC",
      "type2": "STEEL"
    },
    "LICKILICKY_0": {
      "species": "LICKILICKY",
      "form": 0,
      "dexNo": 463,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "RHYPERIOR_0": {
      "species": "RHYPERIOR",
      "form": 0,
      "dexNo": 464,
      "type1": "GROUND",
      "type2": "ROCK"
    },
    "TANGROWTH_0": {
      "species": "TANGROWTH",
      "form": 0,
      "dexNo": 465,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "ELECTIVIRE_0": {
      "species": "ELECTIVIRE",
      "form": 0,
      "dexNo": 466,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "MAGMORTAR_0": {
      "species": "MAGMORTAR",
      "form": 0,
      "dexNo": 467,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "TOGEKISS_0": {
      "species": "TOGEKISS",
      "form": 0,
      "dexNo": 468,
      "type1": "FAIRY",
      "type2": "FLYING"
    },
    "YANMEGA_0": {
      "species": "YANMEGA",
      "form": 0,
      "dexNo": 469,
      "type1": "BUG",
      "type2": "FLYING"
    },
    "LEAFEON_0": {
      "species": "LEAFEON",
      "form": 0,
      "dexNo": 470,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "GLACEON_0": {
      "species": "GLACEON",
      "form": 0,
      "dexNo": 471,
      "type1": "ICE",
      "type2": "NONE"
    },
    "GLISCOR_0": {
      "species": "GLISCOR",
      "form": 0,
      "dexNo": 472,
      "type1": "GROUND",
      "type2": "FLYING"
    },
    "MAMOSWINE_0": {
      "species": "MAMOSWINE",
      "form": 0,
      "dexNo": 473,
      "type1": "ICE",
      "type2": "GROUND"
    },
    "PORYGON_Z_0": {
      "species": "PORYGON_Z",
      "form": 0,
      "dexNo": 474,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "GALLADE_0": {
      "species": "GALLADE",
      "form": 0,
      "dexNo": 475,
      "type1": "PSYCHIC",
      "type2": "FIGHTING"
    },
    "GALLADE_1": {
      "species": "GALLADE",
      "form": 1,
      "dexNo": 475,
      "type1": "PSYCHIC",
      "type2": "FIGHTING"
    },
    "PROBOPASS_0": {
      "species": "PROBOPASS",
      "form": 0,
      "dexNo": 476,
      "type1": "ROCK",
      "type2": "STEEL"
    },
    "DUSKNOIR_0": {
      "species": "DUSKNOIR",
      "form": 0,
      "dexNo": 477,
      "type1": "GHOST",
      "type2": "NONE"
    },
    "FROSLASS_0": {
      "species": "FROSLASS",
      "form": 0,
      "dexNo": 478,
      "type1": "ICE",
      "type2": "GHOST"
    },
    "ROTOM_0": {
      "species": "ROTOM",
      "form": 0,
      "dexNo": 479,
      "type1": "ELECTRIC",
      "type2": "GHOST"
    },
    "ROTOM_1": {
      "species": "ROTOM",
      "form": 1,
      "dexNo": 479,
      "type1": "ELECTRIC",
      "type2": "FIRE"
    },
    "ROTOM_2": {
      "species": "ROTOM",
      "form": 2,
      "dexNo": 479,
      "type1": "ELECTRIC",
      "type2": "WATER"
    },
    "ROTOM_3": {
      "species": "ROTOM",
      "form": 3,
      "dexNo": 479,
      "type1": "ELECTRIC",
      "type2": "ICE"
    },
    "ROTOM_4": {
      "species": "ROTOM",
      "form": 4,
      "dexNo": 479,
      "type1": "ELECTRIC",
      "type2": "FLYING"
    },
    "ROTOM_5": {
      "species": "ROTOM",
      "form": 5,
      "dexNo": 479,
      "type1": "ELECTRIC",
      "type2": "GRASS"
    },
    "UXIE_0": {
      "species": "UXIE",
      "form": 0,
      "dexNo": 480,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "MESPRIT_0": {
      "species": "MESPRIT",
      "form": 0,
      "dexNo": 481,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "AZELF_0": {
      "species": "AZELF",
      "form": 0,
      "dexNo": 482,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "DIALGA_0": {
      "species": "DIALGA",
      "form": 0,
      "dexNo": 483,
      "type1": "STEEL",
      "type2": "DRAGON"
    },
    "DIALGA_1": {
      "species": "DIALGA",
      "form": 1,
      "dexNo": 483,
      "type1": "STEEL",
      "type2": "DRAGON"
    },
    "PALKIA_0": {
      "species": "PALKIA",
      "form": 0,
      "dexNo": 484,
      "type1": "WATER",
      "type2": "DRAGON"
    },
    "PALKIA_1": {
      "species": "PALKIA",
      "form": 1,
      "dexNo": 484,
      "type1": "WATER",
      "type2": "DRAGON"
    },
    "HEATRAN_0": {
      "species": "HEATRAN",
      "form": 0,
      "dexNo": 485,
      "type1": "FIRE",
      "type2": "STEEL"
    },
    "REGIGIGAS_0": {
      "species": "REGIGIGAS",
      "form": 0,
      "dexNo": 486,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "GIRATINA_0": {
      "species": "GIRATINA",
      "form": 0,
      "dexNo": 487,
      "type1": "GHOST",
      "type2": "DRAGON"
    },
    "GIRATINA_1": {
      "species": "GIRATINA",
      "form": 1,
      "dexNo": 487,
      "type1": "GHOST",
      "type2": "DRAGON"
    },
    "CRESSELIA_0": {
      "species": "CRESSELIA",
      "form": 0,
      "dexNo": 488,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "PHIONE_0": {
      "species": "PHIONE",
      "form": 0,
      "dexNo": 489,
      "type1": "WATER",
      "type2": "NONE"
    },
    "MANAPHY_0": {
      "species": "MANAPHY",
      "form": 0,
      "dexNo": 490,
      "type1": "WATER",
      "type2": "NONE"
    },
    "DARKRAI_0": {
      "species": "DARKRAI",
      "form": 0,
      "dexNo": 491,
      "type1": "DARK",
      "type2": "NONE"
    },
    "SHAYMIN_0": {
      "species": "SHAYMIN",
      "form": 0,
      "dexNo": 492,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "SHAYMIN_1": {
      "species": "SHAYMIN",
      "form": 1,
      "dexNo": 492,
      "type1": "GRASS",
      "type2": "FLYING"
    },
    "ARCEUS_0": {
      "species": "ARCEUS",
      "form": 0,
      "dexNo": 493,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "VICTINI_0": {
      "species": "VICTINI",
      "form": 0,
      "dexNo": 494,
      "type1": "PSYCHIC",
      "type2": "FIRE"
    },
    "SNIVY_0": {
      "species": "SNIVY",
      "form": 0,
      "dexNo": 495,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "SERVINE_0": {
      "species": "SERVINE",
      "form": 0,
      "dexNo": 496,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "SERPERIOR_0": {
      "species": "SERPERIOR",
      "form": 0,
      "dexNo": 497,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "TEPIG_0": {
      "species": "TEPIG",
      "form": 0,
      "dexNo": 498,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "PIGNITE_0": {
      "species": "PIGNITE",
      "form": 0,
      "dexNo": 499,
      "type1": "FIRE",
      "type2": "FIGHTING"
    },
    "EMBOAR_0": {
      "species": "EMBOAR",
      "form": 0,
      "dexNo": 500,
      "type1": "FIRE",
      "type2": "FIGHTING"
    },
    "OSHAWOTT_0": {
      "species": "OSHAWOTT",
      "form": 0,
      "dexNo": 501,
      "type1": "WATER",
      "type2": "NONE"
    },
    "DEWOTT_0": {
      "species": "DEWOTT",
      "form": 0,
      "dexNo": 502,
      "type1": "WATER",
      "type2": "NONE"
    },
    "SAMUROTT_0": {
      "species": "SAMUROTT",
      "form": 0,
      "dexNo": 503,
      "type1": "WATER",
      "type2": "NONE"
    },
    "SAMUROTT_1": {
      "species": "SAMUROTT",
      "form": 1,
      "dexNo": 503,
      "type1": "WATER",
      "type2": "DARK"
    },
    "PATRAT_0": {
      "species": "PATRAT",
      "form": 0,
      "dexNo": 504,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "WATCHOG_0": {
      "species": "WATCHOG",
      "form": 0,
      "dexNo": 505,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "LILLIPUP_0": {
      "species": "LILLIPUP",
      "form": 0,
      "dexNo": 506,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "HERDIER_0": {
      "species": "HERDIER",
      "form": 0,
      "dexNo": 507,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "STOUTLAND_0": {
      "species": "STOUTLAND",
      "form": 0,
      "dexNo": 508,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "PURRLOIN_0": {
      "species": "PURRLOIN",
      "form": 0,
      "dexNo": 509,
      "type1": "DARK",
      "type2": "NONE"
    },
    "LIEPARD_0": {
      "species": "LIEPARD",
      "form": 0,
      "dexNo": 510,
      "type1": "DARK",
      "type2": "NONE"
    },
    "PANSAGE_0": {
      "species": "PANSAGE",
      "form": 0,
      "dexNo": 511,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "SIMISAGE_0": {
      "species": "SIMISAGE",
      "form": 0,
      "dexNo": 512,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "PANSEAR_0": {
      "species": "PANSEAR",
      "form": 0,
      "dexNo": 513,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "SIMISEAR_0": {
      "species": "SIMISEAR",
      "form": 0,
      "dexNo": 514,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "PANPOUR_0": {
      "species": "PANPOUR",
      "form": 0,
      "dexNo": 515,
      "type1": "WATER",
      "type2": "NONE"
    },
    "SIMIPOUR_0": {
      "species": "SIMIPOUR",
      "form": 0,
      "dexNo": 516,
      "type1": "WATER",
      "type2": "NONE"
    },
    "MUNNA_0": {
      "species": "MUNNA",
      "form": 0,
      "dexNo": 517,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "MUSHARNA_0": {
      "species": "MUSHARNA",
      "form": 0,
      "dexNo": 518,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "PIDOVE_0": {
      "species": "PIDOVE",
      "form": 0,
      "dexNo": 519,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "TRANQUILL_0": {
      "species": "TRANQUILL",
      "form": 0,
      "dexNo": 520,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "UNFEZANT_0": {
      "species": "UNFEZANT",
      "form": 0,
      "dexNo": 521,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "BLITZLE_0": {
      "species": "BLITZLE",
      "form": 0,
      "dexNo": 522,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "ZEBSTRIKA_0": {
      "species": "ZEBSTRIKA",
      "form": 0,
      "dexNo": 523,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "ROGGENROLA_0": {
      "species": "ROGGENROLA",
      "form": 0,
      "dexNo": 524,
      "type1": "ROCK",
      "type2": "NONE"
    },
    "BOLDORE_0": {
      "species": "BOLDORE",
      "form": 0,
      "dexNo": 525,
      "type1": "ROCK",
      "type2": "NONE"
    },
    "GIGALITH_0": {
      "species": "GIGALITH",
      "form": 0,
      "dexNo": 526,
      "type1": "ROCK",
      "type2": "NONE"
    },
    "WOOBAT_0": {
      "species": "WOOBAT",
      "form": 0,
      "dexNo": 527,
      "type1": "PSYCHIC",
      "type2": "FLYING"
    },
    "SWOOBAT_0": {
      "species": "SWOOBAT",
      "form": 0,
      "dexNo": 528,
      "type1": "PSYCHIC",
      "type2": "FLYING"
    },
    "DRILBUR_0": {
      "species": "DRILBUR",
      "form": 0,
      "dexNo": 529,
      "type1": "GROUND",
      "type2": "NONE"
    },
    "EXCADRILL_0": {
      "species": "EXCADRILL",
      "form": 0,
      "dexNo": 530,
      "type1": "GROUND",
      "type2": "STEEL"
    },
    "AUDINO_0": {
      "species": "AUDINO",
      "form": 0,
      "dexNo": 531,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "AUDINO_1": {
      "species": "AUDINO",
      "form": 1,
      "dexNo": 531,
      "type1": "NORMAL",
      "type2": "FAIRY"
    },
    "TIMBURR_0": {
      "species": "TIMBURR",
      "form": 0,
      "dexNo": 532,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "GURDURR_0": {
      "species": "GURDURR",
      "form": 0,
      "dexNo": 533,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "CONKELDURR_0": {
      "species": "CONKELDURR",
      "form": 0,
      "dexNo": 534,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "TYMPOLE_0": {
      "species": "TYMPOLE",
      "form": 0,
      "dexNo": 535,
      "type1": "WATER",
      "type2": "NONE"
    },
    "PALPITOAD_0": {
      "species": "PALPITOAD",
      "form": 0,
      "dexNo": 536,
      "type1": "WATER",
      "type2": "GROUND"
    },
    "SEISMITOAD_0": {
      "species": "SEISMITOAD",
      "form": 0,
      "dexNo": 537,
      "type1": "WATER",
      "type2": "GROUND"
    },
    "THROH_0": {
      "species": "THROH",
      "form": 0,
      "dexNo": 538,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "SAWK_0": {
      "species": "SAWK",
      "form": 0,
      "dexNo": 539,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "SEWADDLE_0": {
      "species": "SEWADDLE",
      "form": 0,
      "dexNo": 540,
      "type1": "BUG",
      "type2": "GRASS"
    },
    "SWADLOON_0": {
      "species": "SWADLOON",
      "form": 0,
      "dexNo": 541,
      "type1": "BUG",
      "type2": "GRASS"
    },
    "LEAVANNY_0": {
      "species": "LEAVANNY",
      "form": 0,
      "dexNo": 542,
      "type1": "BUG",
      "type2": "GRASS"
    },
    "VENIPEDE_0": {
      "species": "VENIPEDE",
      "form": 0,
      "dexNo": 543,
      "type1": "BUG",
      "type2": "POISON"
    },
    "WHIRLIPEDE_0": {
      "species": "WHIRLIPEDE",
      "form": 0,
      "dexNo": 544,
      "type1": "BUG",
      "type2": "POISON"
    },
    "SCOLIPEDE_0": {
      "species": "SCOLIPEDE",
      "form": 0,
      "dexNo": 545,
      "type1": "BUG",
      "type2": "POISON"
    },
    "COTTONEE_0": {
      "species": "COTTONEE",
      "form": 0,
      "dexNo": 546,
      "type1": "GRASS",
      "type2": "FAIRY"
    },
    "WHIMSICOTT_0": {
      "species": "WHIMSICOTT",
      "form": 0,
      "dexNo": 547,
      "type1": "GRASS",
      "type2": "FAIRY"
    },
    "PETILIL_0": {
      "species": "PETILIL",
      "form": 0,
      "dexNo": 548,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "LILLIGANT_0": {
      "species": "LILLIGANT",
      "form": 0,
      "dexNo": 549,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "LILLIGANT_1": {
      "species": "LILLIGANT",
      "form": 1,
      "dexNo": 549,
      "type1": "GRASS",
      "type2": "FIGHTING"
    },
    "BASCULIN_0": {
      "species": "BASCULIN",
      "form": 0,
      "dexNo": 550,
      "type1": "WATER",
      "type2": "NONE"
    },
    "BASCULIN_1": {
      "species": "BASCULIN",
      "form": 1,
      "dexNo": 550,
      "type1": "WATER",
      "type2": "NONE"
    },
    "BASCULIN_2": {
      "species": "BASCULIN",
      "form": 2,
      "dexNo": 550,
      "type1": "WATER",
      "type2": "NONE"
    },
    "SANDILE_0": {
      "species": "SANDILE",
      "form": 0,
      "dexNo": 551,
      "type1": "GROUND",
      "type2": "DARK"
    },
    "KROKOROK_0": {
      "species": "KROKOROK",
      "form": 0,
      "dexNo": 552,
      "type1": "GROUND",
      "type2": "DARK"
    },
    "KROOKODILE_0": {
      "species": "KROOKODILE",
      "form": 0,
      "dexNo": 553,
      "type1": "GROUND",
      "type2": "DARK"
    },
    "DARUMAKA_0": {
      "species": "DARUMAKA",
      "form": 0,
      "dexNo": 554,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "DARUMAKA_1": {
      "species": "DARUMAKA",
      "form": 1,
      "dexNo": 554,
      "type1": "ICE",
      "type2": "NONE"
    },
    "DARMANITAN_0": {
      "species": "DARMANITAN",
      "form": 0,
      "dexNo": 555,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "DARMANITAN_1": {
      "species": "DARMANITAN",
      "form": 1,
      "dexNo": 555,
      "type1": "FIRE",
      "type2": "PSYCHIC"
    },
    "DARMANITAN_2": {
      "species": "DARMANITAN",
      "form": 2,
      "dexNo": 555,
      "type1": "ICE",
      "type2": "NONE"
    },
    "DARMANITAN_3": {
      "species": "DARMANITAN",
      "form": 3,
      "dexNo": 555,
      "type1": "ICE",
      "type2": "FIRE"
    },
    "MARACTUS_0": {
      "species": "MARACTUS",
      "form": 0,
      "dexNo": 556,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "DWEBBLE_0": {
      "species": "DWEBBLE",
      "form": 0,
      "dexNo": 557,
      "type1": "BUG",
      "type2": "ROCK"
    },
    "CRUSTLE_0": {
      "species": "CRUSTLE",
      "form": 0,
      "dexNo": 558,
      "type1": "BUG",
      "type2": "ROCK"
    },
    "SCRAGGY_0": {
      "species": "SCRAGGY",
      "form": 0,
      "dexNo": 559,
      "type1": "DARK",
      "type2": "FIGHTING"
    },
    "SCRAFTY_0": {
      "species": "SCRAFTY",
      "form": 0,
      "dexNo": 560,
      "type1": "DARK",
      "type2": "FIGHTING"
    },
    "SIGILYPH_0": {
      "species": "SIGILYPH",
      "form": 0,
      "dexNo": 561,
      "type1": "PSYCHIC",
      "type2": "FLYING"
    },
    "YAMASK_0": {
      "species": "YAMASK",
      "form": 0,
      "dexNo": 562,
      "type1": "GHOST",
      "type2": "NONE"
    },
    "YAMASK_1": {
      "species": "YAMASK",
      "form": 1,
      "dexNo": 562,
      "type1": "GROUND",
      "type2": "GHOST"
    },
    "COFAGRIGUS_0": {
      "species": "COFAGRIGUS",
      "form": 0,
      "dexNo": 563,
      "type1": "GHOST",
      "type2": "NONE"
    },
    "TIRTOUGA_0": {
      "species": "TIRTOUGA",
      "form": 0,
      "dexNo": 564,
      "type1": "WATER",
      "type2": "ROCK"
    },
    "CARRACOSTA_0": {
      "species": "CARRACOSTA",
      "form": 0,
      "dexNo": 565,
      "type1": "WATER",
      "type2": "ROCK"
    },
    "ARCHEN_0": {
      "species": "ARCHEN",
      "form": 0,
      "dexNo": 566,
      "type1": "ROCK",
      "type2": "FLYING"
    },
    "ARCHEOPS_0": {
      "species": "ARCHEOPS",
      "form": 0,
      "dexNo": 567,
      "type1": "ROCK",
      "type2": "FLYING"
    },
    "TRUBBISH_0": {
      "species": "TRUBBISH",
      "form": 0,
      "dexNo": 568,
      "type1": "POISON",
      "type2": "NONE"
    },
    "GARBODOR_0": {
      "species": "GARBODOR",
      "form": 0,
      "dexNo": 569,
      "type1": "POISON",
      "type2": "NONE"
    },
    "ZORUA_0": {
      "species": "ZORUA",
      "form": 0,
      "dexNo": 570,
      "type1": "DARK",
      "type2": "NONE"
    },
    "ZORUA_1": {
      "species": "ZORUA",
      "form": 1,
      "dexNo": 570,
      "type1": "NORMAL",
      "type2": "GHOST"
    },
    "ZOROARK_0": {
      "species": "ZOROARK",
      "form": 0,
      "dexNo": 571,
      "type1": "DARK",
      "type2": "NONE"
    },
    "ZOROARK_1": {
      "species": "ZOROARK",
      "form": 1,
      "dexNo": 571,
      "type1": "NORMAL",
      "type2": "GHOST"
    },
    "MINCCINO_0": {
      "species": "MINCCINO",
      "form": 0,
      "dexNo": 572,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "CINCCINO_0": {
      "species": "CINCCINO",
      "form": 0,
      "dexNo": 573,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "GOTHITA_0": {
      "species": "GOTHITA",
      "form": 0,
      "dexNo": 574,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "GOTHORITA_0": {
      "species": "GOTHORITA",
      "form": 0,
      "dexNo": 575,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "GOTHITELLE_0": {
      "species": "GOTHITELLE",
      "form": 0,
      "dexNo": 576,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "SOLOSIS_0": {
      "species": "SOLOSIS",
      "form": 0,
      "dexNo": 577,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "DUOSION_0": {
      "species": "DUOSION",
      "form": 0,
      "dexNo": 578,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "REUNICLUS_0": {
      "species": "REUNICLUS",
      "form": 0,
      "dexNo": 579,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "DUCKLETT_0": {
      "species": "DUCKLETT",
      "form": 0,
      "dexNo": 580,
      "type1": "WATER",
      "type2": "FLYING"
    },
    "SWANNA_0": {
      "species": "SWANNA",
      "form": 0,
      "dexNo": 581,
      "type1": "WATER",
      "type2": "FLYING"
    },
    "VANILLITE_0": {
      "species": "VANILLITE",
      "form": 0,
      "dexNo": 582,
      "type1": "ICE",
      "type2": "NONE"
    },
    "VANILLISH_0": {
      "species": "VANILLISH",
      "form": 0,
      "dexNo": 583,
      "type1": "ICE",
      "type2": "NONE"
    },
    "VANILLUXE_0": {
      "species": "VANILLUXE",
      "form": 0,
      "dexNo": 584,
      "type1": "ICE",
      "type2": "NONE"
    },
    "DEERLING_0": {
      "species": "DEERLING",
      "form": 0,
      "dexNo": 585,
      "type1": "NORMAL",
      "type2": "GRASS"
    },
    "SAWSBUCK_0": {
      "species": "SAWSBUCK",
      "form": 0,
      "dexNo": 586,
      "type1": "NORMAL",
      "type2": "GRASS"
    },
    "EMOLGA_0": {
      "species": "EMOLGA",
      "form": 0,
      "dexNo": 587,
      "type1": "ELECTRIC",
      "type2": "FLYING"
    },
    "KARRABLAST_0": {
      "species": "KARRABLAST",
      "form": 0,
      "dexNo": 588,
      "type1": "BUG",
      "type2": "NONE"
    },
    "ESCAVALIER_0": {
      "species": "ESCAVALIER",
      "form": 0,
      "dexNo": 589,
      "type1": "BUG",
      "type2": "STEEL"
    },
    "FOONGUS_0": {
      "species": "FOONGUS",
      "form": 0,
      "dexNo": 590,
      "type1": "GRASS",
      "type2": "POISON"
    },
    "AMOONGUSS_0": {
      "species": "AMOONGUSS",
      "form": 0,
      "dexNo": 591,
      "type1": "GRASS",
      "type2": "POISON"
    },
    "FRILLISH_0": {
      "species": "FRILLISH",
      "form": 0,
      "dexNo": 592,
      "type1": "WATER",
      "type2": "GHOST"
    },
    "JELLICENT_0": {
      "species": "JELLICENT",
      "form": 0,
      "dexNo": 593,
      "type1": "WATER",
      "type2": "GHOST"
    },
    "ALOMOMOLA_0": {
      "species": "ALOMOMOLA",
      "form": 0,
      "dexNo": 594,
      "type1": "WATER",
      "type2": "NONE"
    },
    "JOLTIK_0": {
      "species": "JOLTIK",
      "form": 0,
      "dexNo": 595,
      "type1": "BUG",
      "type2": "ELECTRIC"
    },
    "GALVANTULA_0": {
      "species": "GALVANTULA",
      "form": 0,
      "dexNo": 596,
      "type1": "BUG",
      "type2": "ELECTRIC"
    },
    "FERROSEED_0": {
      "species": "FERROSEED",
      "form": 0,
      "dexNo": 597,
      "type1": "GRASS",
      "type2": "STEEL"
    },
    "FERROTHORN_0": {
      "species": "FERROTHORN",
      "form": 0,
      "dexNo": 598,
      "type1": "GRASS",
      "type2": "STEEL"
    },
    "KLINK_0": {
      "species": "KLINK",
      "form": 0,
      "dexNo": 599,
      "type1": "STEEL",
      "type2": "NONE"
    },
    "KLANG_0": {
      "species": "KLANG",
      "form": 0,
      "dexNo": 600,
      "type1": "STEEL",
      "type2": "NONE"
    },
    "KLINKLANG_0": {
      "species": "KLINKLANG",
      "form": 0,
      "dexNo": 601,
      "type1": "STEEL",
      "type2": "NONE"
    },
    "TYNAMO_0": {
      "species": "TYNAMO",
      "form": 0,
      "dexNo": 602,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "EELEKTRIK_0": {
      "species": "EELEKTRIK",
      "form": 0,
      "dexNo": 603,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "EELEKTROSS_0": {
      "species": "EELEKTROSS",
      "form": 0,
      "dexNo": 604,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "ELGYEM_0": {
      "species": "ELGYEM",
      "form": 0,
      "dexNo": 605,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "BEHEEYEM_0": {
      "species": "BEHEEYEM",
      "form": 0,
      "dexNo": 606,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "LITWICK_0": {
      "species": "LITWICK",
      "form": 0,
      "dexNo": 607,
      "type1": "GHOST",
      "type2": "FIRE"
    },
    "LAMPENT_0": {
      "species": "LAMPENT",
      "form": 0,
      "dexNo": 608,
      "type1": "GHOST",
      "type2": "FIRE"
    },
    "CHANDELURE_0": {
      "species": "CHANDELURE",
      "form": 0,
      "dexNo": 609,
      "type1": "GHOST",
      "type2": "FIRE"
    },
    "AXEW_0": {
      "species": "AXEW",
      "form": 0,
      "dexNo": 610,
      "type1": "DRAGON",
      "type2": "NONE"
    },
    "FRAXURE_0": {
      "species": "FRAXURE",
      "form": 0,
      "dexNo": 611,
      "type1": "DRAGON",
      "type2": "NONE"
    },
    "HAXORUS_0": {
      "species": "HAXORUS",
      "form": 0,
      "dexNo": 612,
      "type1": "DRAGON",
      "type2": "NONE"
    },
    "CUBCHOO_0": {
      "species": "CUBCHOO",
      "form": 0,
      "dexNo": 613,
      "type1": "ICE",
      "type2": "NONE"
    },
    "BEARTIC_0": {
      "species": "BEARTIC",
      "form": 0,
      "dexNo": 614,
      "type1": "ICE",
      "type2": "NONE"
    },
    "CRYOGONAL_0": {
      "species": "CRYOGONAL",
      "form": 0,
      "dexNo": 615,
      "type1": "ICE",
      "type2": "NONE"
    },
    "SHELMET_0": {
      "species": "SHELMET",
      "form": 0,
      "dexNo": 616,
      "type1": "BUG",
      "type2": "NONE"
    },
    "ACCELGOR_0": {
      "species": "ACCELGOR",
      "form": 0,
      "dexNo": 617,
      "type1": "BUG",
      "type2": "NONE"
    },
    "STUNFISK_0": {
      "species": "STUNFISK",
      "form": 0,
      "dexNo": 618,
      "type1": "GROUND",
      "type2": "ELECTRIC"
    },
    "STUNFISK_1": {
      "species": "STUNFISK",
      "form": 1,
      "dexNo": 618,
      "type1": "GROUND",
      "type2": "STEEL"
    },
    "MIENFOO_0": {
      "species": "MIENFOO",
      "form": 0,
      "dexNo": 619,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "MIENSHAO_0": {
      "species": "MIENSHAO",
      "form": 0,
      "dexNo": 620,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "DRUDDIGON_0": {
      "species": "DRUDDIGON",
      "form": 0,
      "dexNo": 621,
      "type1": "DRAGON",
      "type2": "NONE"
    },
    "GOLETT_0": {
      "species": "GOLETT",
      "form": 0,
      "dexNo": 622,
      "type1": "GROUND",
      "type2": "GHOST"
    },
    "GOLURK_0": {
      "species": "GOLURK",
      "form": 0,
      "dexNo": 623,
      "type1": "GROUND",
      "type2": "GHOST"
    },
    "PAWNIARD_0": {
      "species": "PAWNIARD",
      "form": 0,
      "dexNo": 624,
      "type1": "DARK",
      "type2": "STEEL"
    },
    "BISHARP_0": {
      "species": "BISHARP",
      "form": 0,
      "dexNo": 625,
      "type1": "DARK",
      "type2": "STEEL"
    },
    "BOUFFALANT_0": {
      "species": "BOUFFALANT",
      "form": 0,
      "dexNo": 626,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "RUFFLET_0": {
      "species": "RUFFLET",
      "form": 0,
      "dexNo": 627,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "BRAVIARY_0": {
      "species": "BRAVIARY",
      "form": 0,
      "dexNo": 628,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "BRAVIARY_1": {
      "species": "BRAVIARY",
      "form": 1,
      "dexNo": 628,
      "type1": "PSYCHIC",
      "type2": "FLYING"
    },
    "VULLABY_0": {
      "species": "VULLABY",
      "form": 0,
      "dexNo": 629,
      "type1": "DARK",
      "type2": "FLYING"
    },
    "MANDIBUZZ_0": {
      "species": "MANDIBUZZ",
      "form": 0,
      "dexNo": 630,
      "type1": "DARK",
      "type2": "FLYING"
    },
    "HEATMOR_0": {
      "species": "HEATMOR",
      "form": 0,
      "dexNo": 631,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "DURANT_0": {
      "species": "DURANT",
      "form": 0,
      "dexNo": 632,
      "type1": "BUG",
      "type2": "STEEL"
    },
    "DEINO_0": {
      "species": "DEINO",
      "form": 0,
      "dexNo": 633,
      "type1": "DARK",
      "type2": "DRAGON"
    },
    "ZWEILOUS_0": {
      "species": "ZWEILOUS",
      "form": 0,
      "dexNo": 634,
      "type1": "DARK",
      "type2": "DRAGON"
    },
    "HYDREIGON_0": {
      "species": "HYDREIGON",
      "form": 0,
      "dexNo": 635,
      "type1": "DARK",
      "type2": "DRAGON"
    },
    "LARVESTA_0": {
      "species": "LARVESTA",
      "form": 0,
      "dexNo": 636,
      "type1": "BUG",
      "type2": "FIRE"
    },
    "VOLCARONA_0": {
      "species": "VOLCARONA",
      "form": 0,
      "dexNo": 637,
      "type1": "BUG",
      "type2": "FIRE"
    },
    "COBALION_0": {
      "species": "COBALION",
      "form": 0,
      "dexNo": 638,
      "type1": "STEEL",
      "type2": "FIGHTING"
    },
    "TERRAKION_0": {
      "species": "TERRAKION",
      "form": 0,
      "dexNo": 639,
      "type1": "ROCK",
      "type2": "FIGHTING"
    },
    "VIRIZION_0": {
      "species": "VIRIZION",
      "form": 0,
      "dexNo": 640,
      "type1": "GRASS",
      "type2": "FIGHTING"
    },
    "TORNADUS_0": {
      "species": "TORNADUS",
      "form": 0,
      "dexNo": 641,
      "type1": "FLYING",
      "type2": "NONE"
    },
    "TORNADUS_1": {
      "species": "TORNADUS",
      "form": 1,
      "dexNo": 641,
      "type1": "FLYING",
      "type2": "NONE"
    },
    "THUNDURUS_0": {
      "species": "THUNDURUS",
      "form": 0,
      "dexNo": 642,
      "type1": "ELECTRIC",
      "type2": "FLYING"
    },
    "THUNDURUS_1": {
      "species": "THUNDURUS",
      "form": 1,
      "dexNo": 642,
      "type1": "ELECTRIC",
      "type2": "FLYING"
    },
    "RESHIRAM_0": {
      "species": "RESHIRAM",
      "form": 0,
      "dexNo": 643,
      "type1": "DRAGON",
      "type2": "FIRE"
    },
    "ZEKROM_1": {
      "species": "ZEKROM",
      "form": 1,
      "dexNo": 644,
      "type1": "DRAGON",
      "type2": "ELECTRIC"
    },
    "LANDORUS_0": {
      "species": "LANDORUS",
      "form": 0,
      "dexNo": 645,
      "type1": "GROUND",
      "type2": "FLYING"
    },
    "LANDORUS_1": {
      "species": "LANDORUS",
      "form": 1,
      "dexNo": 645,
      "type1": "GROUND",
      "type2": "FLYING"
    },
    "KYUREM_0": {
      "species": "KYUREM",
      "form": 0,
      "dexNo": 646,
      "type1": "DRAGON",
      "type2": "ICE"
    },
    "KYUREM_1": {
      "species": "KYUREM",
      "form": 1,
      "dexNo": 646,
      "type1": "DRAGON",
      "type2": "ICE"
    },
    "KYUREM_2": {
      "species": "KYUREM",
      "form": 2,
      "dexNo": 646,
      "type1": "DRAGON",
      "type2": "ICE"
    },
    "KELDEO_0": {
      "species": "KELDEO",
      "form": 0,
      "dexNo": 647,
      "type1": "WATER",
      "type2": "FIGHTING"
    },
    "KELDEO_1": {
      "species": "KELDEO",
      "form": 1,
      "dexNo": 647,
      "type1": "WATER",
      "type2": "FIGHTING"
    },
    "MELOETTA_0": {
      "species": "MELOETTA",
      "form": 0,
      "dexNo": 648,
      "type1": "NORMAL",
      "type2": "PSYCHIC"
    },
    "MELOETTA_1": {
      "species": "MELOETTA",
      "form": 1,
      "dexNo": 648,
      "type1": "NORMAL",
      "type2": "FIGHTING"
    },
    "GENESECT_0": {
      "species": "GENESECT",
      "form": 0,
      "dexNo": 649,
      "type1": "BUG",
      "type2": "STEEL"
    },
    "CHESPIN_0": {
      "species": "CHESPIN",
      "form": 0,
      "dexNo": 650,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "QUILLADIN_0": {
      "species": "QUILLADIN",
      "form": 0,
      "dexNo": 651,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "CHESNAUGHT_0": {
      "species": "CHESNAUGHT",
      "form": 0,
      "dexNo": 652,
      "type1": "GRASS",
      "type2": "FIGHTING"
    },
    "FENNEKIN_0": {
      "species": "FENNEKIN",
      "form": 0,
      "dexNo": 653,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "BRAIXEN_0": {
      "species": "BRAIXEN",
      "form": 0,
      "dexNo": 654,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "DELPHOX_0": {
      "species": "DELPHOX",
      "form": 0,
      "dexNo": 655,
      "type1": "FIRE",
      "type2": "PSYCHIC"
    },
    "FROAKIE_0": {
      "species": "FROAKIE",
      "form": 0,
      "dexNo": 656,
      "type1": "WATER",
      "type2": "NONE"
    },
    "FROGADIER_0": {
      "species": "FROGADIER",
      "form": 0,
      "dexNo": 657,
      "type1": "WATER",
      "type2": "NONE"
    },
    "GRENINJA_0": {
      "species": "GRENINJA",
      "form": 0,
      "dexNo": 658,
      "type1": "WATER",
      "type2": "DARK"
    },
    "GRENINJA_1": {
      "species": "GRENINJA",
      "form": 1,
      "dexNo": 658,
      "type1": "WATER",
      "type2": "DARK"
    },
    "BUNNELBY_0": {
      "species": "BUNNELBY",
      "form": 0,
      "dexNo": 659,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "DIGGERSBY_0": {
      "species": "DIGGERSBY",
      "form": 0,
      "dexNo": 660,
      "type1": "NORMAL",
      "type2": "GROUND"
    },
    "FLETCHLING_0": {
      "species": "FLETCHLING",
      "form": 0,
      "dexNo": 661,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "FLETCHINDER_0": {
      "species": "FLETCHINDER",
      "form": 0,
      "dexNo": 662,
      "type1": "FIRE",
      "type2": "FLYING"
    },
    "TALONFLAME_0": {
      "species": "TALONFLAME",
      "form": 0,
      "dexNo": 663,
      "type1": "FIRE",
      "type2": "FLYING"
    },
    "SCATTERBUG_0": {
      "species": "SCATTERBUG",
      "form": 0,
      "dexNo": 664,
      "type1": "BUG",
      "type2": "NONE"
    },
    "SPEWPA_0": {
      "species": "SPEWPA",
      "form": 0,
      "dexNo": 665,
      "type1": "BUG",
      "type2": "NONE"
    },
    "VIVILLON_0": {
      "species": "VIVILLON",
      "form": 0,
      "dexNo": 666,
      "type1": "BUG",
      "type2": "FLYING"
    },
    "LITLEO_0": {
      "species": "LITLEO",
      "form": 0,
      "dexNo": 667,
      "type1": "FIRE",
      "type2": "NORMAL"
    },
    "PYROAR_0": {
      "species": "PYROAR",
      "form": 0,
      "dexNo": 668,
      "type1": "FIRE",
      "type2": "NORMAL"
    },
    "FLABÉBÉ_0": {
      "species": "FLABÉBÉ",
      "form": 0,
      "dexNo": 669,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "FLOETTE_0": {
      "species": "FLOETTE",
      "form": 0,
      "dexNo": 670,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "FLORGES_0": {
      "species": "FLORGES",
      "form": 0,
      "dexNo": 671,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "SKIDDO_0": {
      "species": "SKIDDO",
      "form": 0,
      "dexNo": 672,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "GOGOAT_0": {
      "species": "GOGOAT",
      "form": 0,
      "dexNo": 673,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "PANCHAM_0": {
      "species": "PANCHAM",
      "form": 0,
      "dexNo": 674,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "PANGORO_0": {
      "species": "PANGORO",
      "form": 0,
      "dexNo": 675,
      "type1": "FIGHTING",
      "type2": "DARK"
    },
    "FURFROU_0": {
      "species": "FURFROU",
      "form": 0,
      "dexNo": 676,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "ESPURR_0": {
      "species": "ESPURR",
      "form": 0,
      "dexNo": 677,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "MEOWSTIC_0": {
      "species": "MEOWSTIC",
      "form": 0,
      "dexNo": 678,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "MEOWSTIC_1": {
      "species": "MEOWSTIC",
      "form": 1,
      "dexNo": 678,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "HONEDGE_0": {
      "species": "HONEDGE",
      "form": 0,
      "dexNo": 679,
      "type1": "STEEL",
      "type2": "GHOST"
    },
    "DOUBLADE_0": {
      "species": "DOUBLADE",
      "form": 0,
      "dexNo": 680,
      "type1": "STEEL",
      "type2": "GHOST"
    },
    "AEGISLASH_0": {
      "species": "AEGISLASH",
      "form": 0,
      "dexNo": 681,
      "type1": "STEEL",
      "type2": "GHOST"
    },
    "AEGISLASH_1": {
      "species": "AEGISLASH",
      "form": 1,
      "dexNo": 681,
      "type1": "STEEL",
      "type2": "GHOST"
    },
    "SPRITZEE_0": {
      "species": "SPRITZEE",
      "form": 0,
      "dexNo": 682,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "AROMATISSE_0": {
      "species": "AROMATISSE",
      "form": 0,
      "dexNo": 683,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "SWIRLIX_0": {
      "species": "SWIRLIX",
      "form": 0,
      "dexNo": 684,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "SLURPUFF_0": {
      "species": "SLURPUFF",
      "form": 0,
      "dexNo": 685,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "INKAY_0": {
      "species": "INKAY",
      "form": 0,
      "dexNo": 686,
      "type1": "DARK",
      "type2": "PSYCHIC"
    },
    "MALAMAR_0": {
      "species": "MALAMAR",
      "form": 0,
      "dexNo": 687,
      "type1": "DARK",
      "type2": "PSYCHIC"
    },
    "BINACLE_0": {
      "species": "BINACLE",
      "form": 0,
      "dexNo": 688,
      "type1": "ROCK",
      "type2": "WATER"
    },
    "BARBARACLE_0": {
      "species": "BARBARACLE",
      "form": 0,
      "dexNo": 689,
      "type1": "ROCK",
      "type2": "WATER"
    },
    "SKRELP_0": {
      "species": "SKRELP",
      "form": 0,
      "dexNo": 690,
      "type1": "POISON",
      "type2": "WATER"
    },
    "DRAGALGE_0": {
      "species": "DRAGALGE",
      "form": 0,
      "dexNo": 691,
      "type1": "POISON",
      "type2": "DRAGON"
    },
    "CLAUNCHER_0": {
      "species": "CLAUNCHER",
      "form": 0,
      "dexNo": 692,
      "type1": "WATER",
      "type2": "NONE"
    },
    "CLAWITZER_0": {
      "species": "CLAWITZER",
      "form": 0,
      "dexNo": 693,
      "type1": "WATER",
      "type2": "NONE"
    },
    "HELIOPTILE_0": {
      "species": "HELIOPTILE",
      "form": 0,
      "dexNo": 694,
      "type1": "ELECTRIC",
      "type2": "NORMAL"
    },
    "HELIOLISK_0": {
      "species": "HELIOLISK",
      "form": 0,
      "dexNo": 695,
      "type1": "ELECTRIC",
      "type2": "NORMAL"
    },
    "TYRUNT_0": {
      "species": "TYRUNT",
      "form": 0,
      "dexNo": 696,
      "type1": "ROCK",
      "type2": "DRAGON"
    },
    "TYRANTRUM_0": {
      "species": "TYRANTRUM",
      "form": 0,
      "dexNo": 697,
      "type1": "ROCK",
      "type2": "DRAGON"
    },
    "AMAURA_0": {
      "species": "AMAURA",
      "form": 0,
      "dexNo": 698,
      "type1": "ROCK",
      "type2": "ICE"
    },
    "AURORUS_0": {
      "species": "AURORUS",
      "form": 0,
      "dexNo": 699,
      "type1": "ROCK",
      "type2": "ICE"
    },
    "SYLVEON_0": {
      "species": "SYLVEON",
      "form": 0,
      "dexNo": 700,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "HAWLUCHA_0": {
      "species": "HAWLUCHA",
      "form": 0,
      "dexNo": 701,
      "type1": "FIGHTING",
      "type2": "FLYING"
    },
    "DEDENNE_0": {
      "species": "DEDENNE",
      "form": 0,
      "dexNo": 702,
      "type1": "ELECTRIC",
      "type2": "FAIRY"
    },
    "CARBINK_0": {
      "species": "CARBINK",
      "form": 0,
      "dexNo": 703,
      "type1": "ROCK",
      "type2": "FAIRY"
    },
    "GOOMY_0": {
      "species": "GOOMY",
      "form": 0,
      "dexNo": 704,
      "type1": "DRAGON",
      "type2": "NONE"
    },
    "SLIGGOO_0": {
      "species": "SLIGGOO",
      "form": 0,
      "dexNo": 705,
      "type1": "DRAGON",
      "type2": "NONE"
    },
    "SLIGGOO_1": {
      "species": "SLIGGOO",
      "form": 1,
      "dexNo": 705,
      "type1": "STEEL",
      "type2": "DRAGON"
    },
    "GOODRA_0": {
      "species": "GOODRA",
      "form": 0,
      "dexNo": 706,
      "type1": "DRAGON",
      "type2": "NONE"
    },
    "GOODRA_1": {
      "species": "GOODRA",
      "form": 1,
      "dexNo": 706,
      "type1": "STEEL",
      "type2": "DRAGON"
    },
    "KLEFKI_0": {
      "species": "KLEFKI",
      "form": 0,
      "dexNo": 707,
      "type1": "STEEL",
      "type2": "FAIRY"
    },
    "PHANTUMP_0": {
      "species": "PHANTUMP",
      "form": 0,
      "dexNo": 708,
      "type1": "GHOST",
      "type2": "GRASS"
    },
    "TREVENANT_0": {
      "species": "TREVENANT",
      "form": 0,
      "dexNo": 709,
      "type1": "GHOST",
      "type2": "GRASS"
    },
    "PUMPKABOO_0": {
      "species": "PUMPKABOO",
      "form": 0,
      "dexNo": 710,
      "type1": "GHOST",
      "type2": "GRASS"
    },
    "PUMPKABOO_1": {
      "species": "PUMPKABOO",
      "form": 1,
      "dexNo": 710,
      "type1": "GHOST",
      "type2": "GRASS"
    },
    "PUMPKABOO_2": {
      "species": "PUMPKABOO",
      "form": 2,
      "dexNo": 710,
      "type1": "GHOST",
      "type2": "GRASS"
    },
    "PUMPKABOO_3": {
      "species": "PUMPKABOO",
      "form": 3,
      "dexNo": 710,
      "type1": "GHOST",
      "type2": "GRASS"
    },
    "GOURGEIST_0": {
      "species": "GOURGEIST",
      "form": 0,
      "dexNo": 711,
      "type1": "GHOST",
      "type2": "GRASS"
    },
    "GOURGEIST_1": {
      "species": "GOURGEIST",
      "form": 1,
      "dexNo": 711,
      "type1": "GHOST",
      "type2": "GRASS"
    },
    "GOURGEIST_2": {
      "species": "GOURGEIST",
      "form": 2,
      "dexNo": 711,
      "type1": "GHOST",
      "type2": "GRASS"
    },
    "GOURGEIST_3": {
      "species": "GOURGEIST",
      "form": 3,
      "dexNo": 711,
      "type1": "GHOST",
      "type2": "GRASS"
    },
    "BERGMITE_0": {
      "species": "BERGMITE",
      "form": 0,
      "dexNo": 712,
      "type1": "ICE",
      "type2": "NONE"
    },
    "AVALUGG_0": {
      "species": "AVALUGG",
      "form": 0,
      "dexNo": 713,
      "type1": "ICE",
      "type2": "NONE"
    },
    "AVALUGG_1": {
      "species": "AVALUGG",
      "form": 1,
      "dexNo": 713,
      "type1": "ICE",
      "type2": "ROCK"
    },
    "NOIBAT_0": {
      "species": "NOIBAT",
      "form": 0,
      "dexNo": 714,
      "type1": "FLYING",
      "type2": "DRAGON"
    },
    "NOIVERN_0": {
      "species": "NOIVERN",
      "form": 0,
      "dexNo": 715,
      "type1": "FLYING",
      "type2": "DRAGON"
    },
    "XERNEAS_0": {
      "species": "XERNEAS",
      "form": 0,
      "dexNo": 716,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "YVELTAL_0": {
      "species": "YVELTAL",
      "form": 0,
      "dexNo": 717,
      "type1": "DARK",
      "type2": "FLYING"
    },
    "ZYGARDE_0": {
      "species": "ZYGARDE",
      "form": 0,
      "dexNo": 718,
      "type1": "DRAGON",
      "type2": "GROUND"
    },
    "ZYGARDE_1": {
      "species": "ZYGARDE",
      "form": 1,
      "dexNo": 718,
      "type1": "DRAGON",
      "type2": "GROUND"
    },
    "ZYGARDE_2": {
      "species": "ZYGARDE",
      "form": 2,
      "dexNo": 718,
      "type1": "DRAGON",
      "type2": "GROUND"
    },
    "DIANCIE_0": {
      "species": "DIANCIE",
      "form": 0,
      "dexNo": 719,
      "type1": "ROCK",
      "type2": "FAIRY"
    },
    "DIANCIE_1": {
      "species": "DIANCIE",
      "form": 1,
      "dexNo": 719,
      "type1": "ROCK",
      "type2": "FAIRY"
    },
    "HOOPA_0": {
      "species": "HOOPA",
      "form": 0,
      "dexNo": 720,
      "type1": "PSYCHIC",
      "type2": "GHOST"
    },
    "HOOPA_1": {
      "species": "HOOPA",
      "form": 1,
      "dexNo": 720,
      "type1": "PSYCHIC",
      "type2": "DARK"
    },
    "VOLCANION_0": {
      "species": "VOLCANION",
      "form": 0,
      "dexNo": 721,
      "type1": "FIRE",
      "type2": "WATER"
    },
    "ROWLET_0": {
      "species": "ROWLET",
      "form": 0,
      "dexNo": 722,
      "type1": "GRASS",
      "type2": "FLYING"
    },
    "DARTRIX_0": {
      "species": "DARTRIX",
      "form": 0,
      "dexNo": 723,
      "type1": "GRASS",
      "type2": "FLYING"
    },
    "DECIDUEYE_0": {
      "species": "DECIDUEYE",
      "form": 0,
      "dexNo": 724,
      "type1": "GRASS",
      "type2": "GHOST"
    },
    "DECIDUEYE_1": {
      "species": "DECIDUEYE",
      "form": 1,
      "dexNo": 724,
      "type1": "GRASS",
      "type2": "FIGHTING"
    },
    "LITTEN_0": {
      "species": "LITTEN",
      "form": 0,
      "dexNo": 725,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "TORRACAT_0": {
      "species": "TORRACAT",
      "form": 0,
      "dexNo": 726,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "INCINEROAR_0": {
      "species": "INCINEROAR",
      "form": 0,
      "dexNo": 727,
      "type1": "FIRE",
      "type2": "DARK"
    },
    "POPPLIO_0": {
      "species": "POPPLIO",
      "form": 0,
      "dexNo": 728,
      "type1": "WATER",
      "type2": "NONE"
    },
    "BRIONNE_0": {
      "species": "BRIONNE",
      "form": 0,
      "dexNo": 729,
      "type1": "WATER",
      "type2": "NONE"
    },
    "PRIMARINA_0": {
      "species": "PRIMARINA",
      "form": 0,
      "dexNo": 730,
      "type1": "WATER",
      "type2": "FAIRY"
    },
    "PIKIPEK_0": {
      "species": "PIKIPEK",
      "form": 0,
      "dexNo": 731,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "TRUMBEAK_0": {
      "species": "TRUMBEAK",
      "form": 0,
      "dexNo": 732,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "TOUCANNON_0": {
      "species": "TOUCANNON",
      "form": 0,
      "dexNo": 733,
      "type1": "NORMAL",
      "type2": "FLYING"
    },
    "YUNGOOS_0": {
      "species": "YUNGOOS",
      "form": 0,
      "dexNo": 734,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "GUMSHOOS_0": {
      "species": "GUMSHOOS",
      "form": 0,
      "dexNo": 735,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "GRUBBIN_0": {
      "species": "GRUBBIN",
      "form": 0,
      "dexNo": 736,
      "type1": "BUG",
      "type2": "NONE"
    },
    "CHARJABUG_0": {
      "species": "CHARJABUG",
      "form": 0,
      "dexNo": 737,
      "type1": "BUG",
      "type2": "ELECTRIC"
    },
    "VIKAVOLT_0": {
      "species": "VIKAVOLT",
      "form": 0,
      "dexNo": 738,
      "type1": "BUG",
      "type2": "ELECTRIC"
    },
    "CRABRAWLER_0": {
      "species": "CRABRAWLER",
      "form": 0,
      "dexNo": 739,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "CRABOMINABLE_0": {
      "species": "CRABOMINABLE",
      "form": 0,
      "dexNo": 740,
      "type1": "FIGHTING",
      "type2": "ICE"
    },
    "ORICORIO_0": {
      "species": "ORICORIO",
      "form": 0,
      "dexNo": 741,
      "type1": "FIRE",
      "type2": "FLYING"
    },
    "ORICORIO_1": {
      "species": "ORICORIO",
      "form": 1,
      "dexNo": 741,
      "type1": "ELECTRIC",
      "type2": "FLYING"
    },
    "ORICORIO_2": {
      "species": "ORICORIO",
      "form": 2,
      "dexNo": 741,
      "type1": "PSYCHIC",
      "type2": "FLYING"
    },
    "ORICORIO_3": {
      "species": "ORICORIO",
      "form": 3,
      "dexNo": 741,
      "type1": "GHOST",
      "type2": "FLYING"
    },
    "CUTIEFLY_0": {
      "species": "CUTIEFLY",
      "form": 0,
      "dexNo": 742,
      "type1": "BUG",
      "type2": "FAIRY"
    },
    "RIBOMBEE_0": {
      "species": "RIBOMBEE",
      "form": 0,
      "dexNo": 743,
      "type1": "BUG",
      "type2": "FAIRY"
    },
    "ROCKRUFF_0": {
      "species": "ROCKRUFF",
      "form": 0,
      "dexNo": 744,
      "type1": "ROCK",
      "type2": "NONE"
    },
    "ROCKRUFF_1": {
      "species": "ROCKRUFF",
      "form": 1,
      "dexNo": 744,
      "type1": "ROCK",
      "type2": "NONE"
    },
    "LYCANROC_0": {
      "species": "LYCANROC",
      "form": 0,
      "dexNo": 745,
      "type1": "ROCK",
      "type2": "NONE"
    },
    "LYCANROC_1": {
      "species": "LYCANROC",
      "form": 1,
      "dexNo": 745,
      "type1": "ROCK",
      "type2": "NONE"
    },
    "LYCANROC_2": {
      "species": "LYCANROC",
      "form": 2,
      "dexNo": 745,
      "type1": "ROCK",
      "type2": "NONE"
    },
    "WISHIWASHI_0": {
      "species": "WISHIWASHI",
      "form": 0,
      "dexNo": 746,
      "type1": "WATER",
      "type2": "NONE"
    },
    "WISHIWASHI_1": {
      "species": "WISHIWASHI",
      "form": 1,
      "dexNo": 746,
      "type1": "WATER",
      "type2": "NONE"
    },
    "MAREANIE_0": {
      "species": "MAREANIE",
      "form": 0,
      "dexNo": 747,
      "type1": "POISON",
      "type2": "WATER"
    },
    "TOXAPEX_0": {
      "species": "TOXAPEX",
      "form": 0,
      "dexNo": 748,
      "type1": "POISON",
      "type2": "WATER"
    },
    "MUDBRAY_0": {
      "species": "MUDBRAY",
      "form": 0,
      "dexNo": 749,
      "type1": "GROUND",
      "type2": "NONE"
    },
    "MUDSDALE_0": {
      "species": "MUDSDALE",
      "form": 0,
      "dexNo": 750,
      "type1": "GROUND",
      "type2": "NONE"
    },
    "DEWPIDER_0": {
      "species": "DEWPIDER",
      "form": 0,
      "dexNo": 751,
      "type1": "WATER",
      "type2": "BUG"
    },
    "ARAQUANID_0": {
      "species": "ARAQUANID",
      "form": 0,
      "dexNo": 752,
      "type1": "WATER",
      "type2": "BUG"
    },
    "FOMANTIS_0": {
      "species": "FOMANTIS",
      "form": 0,
      "dexNo": 753,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "LURANTIS_0": {
      "species": "LURANTIS",
      "form": 0,
      "dexNo": 754,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "MORELULL_0": {
      "species": "MORELULL",
      "form": 0,
      "dexNo": 755,
      "type1": "GRASS",
      "type2": "FAIRY"
    },
    "SHIINOTIC_0": {
      "species": "SHIINOTIC",
      "form": 0,
      "dexNo": 756,
      "type1": "GRASS",
      "type2": "FAIRY"
    },
    "SALANDIT_0": {
      "species": "SALANDIT",
      "form": 0,
      "dexNo": 757,
      "type1": "POISON",
      "type2": "FIRE"
    },
    "SALAZZLE_0": {
      "species": "SALAZZLE",
      "form": 0,
      "dexNo": 758,
      "type1": "POISON",
      "type2": "FIRE"
    },
    "STUFFUL_0": {
      "species": "STUFFUL",
      "form": 0,
      "dexNo": 759,
      "type1": "NORMAL",
      "type2": "FIGHTING"
    },
    "BEWEAR_0": {
      "species": "BEWEAR",
      "form": 0,
      "dexNo": 760,
      "type1": "NORMAL",
      "type2": "FIGHTING"
    },
    "BOUNSWEET_0": {
      "species": "BOUNSWEET",
      "form": 0,
      "dexNo": 761,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "STEENEE_0": {
      "species": "STEENEE",
      "form": 0,
      "dexNo": 762,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "TSAREENA_0": {
      "species": "TSAREENA",
      "form": 0,
      "dexNo": 763,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "COMFEY_0": {
      "species": "COMFEY",
      "form": 0,
      "dexNo": 764,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "ORANGURU_0": {
      "species": "ORANGURU",
      "form": 0,
      "dexNo": 765,
      "type1": "NORMAL",
      "type2": "PSYCHIC"
    },
    "PASSIMIAN_0": {
      "species": "PASSIMIAN",
      "form": 0,
      "dexNo": 766,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "WIMPOD_0": {
      "species": "WIMPOD",
      "form": 0,
      "dexNo": 767,
      "type1": "BUG",
      "type2": "WATER"
    },
    "GOLISOPOD_0": {
      "species": "GOLISOPOD",
      "form": 0,
      "dexNo": 768,
      "type1": "BUG",
      "type2": "WATER"
    },
    "SANDYGAST_0": {
      "species": "SANDYGAST",
      "form": 0,
      "dexNo": 769,
      "type1": "GHOST",
      "type2": "GROUND"
    },
    "PALOSSAND_0": {
      "species": "PALOSSAND",
      "form": 0,
      "dexNo": 770,
      "type1": "GHOST",
      "type2": "GROUND"
    },
    "PYUKUMUKU_0": {
      "species": "PYUKUMUKU",
      "form": 0,
      "dexNo": 771,
      "type1": "WATER",
      "type2": "NONE"
    },
    "TYPE_NULL_0": {
      "species": "TYPE_NULL",
      "form": 0,
      "dexNo": 772,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "SILVALLY_0": {
      "species": "SILVALLY",
      "form": 0,
      "dexNo": 773,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "MINIOR_0": {
      "species": "MINIOR",
      "form": 0,
      "dexNo": 774,
      "type1": "ROCK",
      "type2": "FLYING"
    },
    "MINIOR_1": {
      "species": "MINIOR",
      "form": 1,
      "dexNo": 774,
      "type1": "ROCK",
      "type2": "FLYING"
    },
    "KOMALA_0": {
      "species": "KOMALA",
      "form": 0,
      "dexNo": 775,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "TURTONATOR_0": {
      "species": "TURTONATOR",
      "form": 0,
      "dexNo": 776,
      "type1": "FIRE",
      "type2": "DRAGON"
    },
    "TOGEDEMARU_0": {
      "species": "TOGEDEMARU",
      "form": 0,
      "dexNo": 777,
      "type1": "ELECTRIC",
      "type2": "STEEL"
    },
    "MIMIKYU_0": {
      "species": "MIMIKYU",
      "form": 0,
      "dexNo": 778,
      "type1": "GHOST",
      "type2": "FAIRY"
    },
    "BRUXISH_0": {
      "species": "BRUXISH",
      "form": 0,
      "dexNo": 779,
      "type1": "WATER",
      "type2": "PSYCHIC"
    },
    "DRAMPA_0": {
      "species": "DRAMPA",
      "form": 0,
      "dexNo": 780,
      "type1": "NORMAL",
      "type2": "DRAGON"
    },
    "DHELMISE_0": {
      "species": "DHELMISE",
      "form": 0,
      "dexNo": 781,
      "type1": "GHOST",
      "type2": "GRASS"
    },
    "JANGMO_O_0": {
      "species": "JANGMO_O",
      "form": 0,
      "dexNo": 782,
      "type1": "DRAGON",
      "type2": "NONE"
    },
    "HAKAMO_O_0": {
      "species": "HAKAMO_O",
      "form": 0,
      "dexNo": 783,
      "type1": "DRAGON",
      "type2": "FIGHTING"
    },
    "KOMMO_O_0": {
      "species": "KOMMO_O",
      "form": 0,
      "dexNo": 784,
      "type1": "DRAGON",
      "type2": "FIGHTING"
    },
    "TAPUKOKO_0": {
      "species": "TAPUKOKO",
      "form": 0,
      "dexNo": 785,
      "type1": "ELECTRIC",
      "type2": "FAIRY"
    },
    "TAPULELE_0": {
      "species": "TAPULELE",
      "form": 0,
      "dexNo": 786,
      "type1": "PSYCHIC",
      "type2": "FAIRY"
    },
    "TAPUBULU_0": {
      "species": "TAPUBULU",
      "form": 0,
      "dexNo": 787,
      "type1": "GRASS",
      "type2": "FAIRY"
    },
    "TAPUFINI_0": {
      "species": "TAPUFINI",
      "form": 0,
      "dexNo": 788,
      "type1": "WATER",
      "type2": "FAIRY"
    },
    "COSMOG_0": {
      "species": "COSMOG",
      "form": 0,
      "dexNo": 789,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "COSMOEM_0": {
      "species": "COSMOEM",
      "form": 0,
      "dexNo": 790,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "SOLGALEO_0": {
      "species": "SOLGALEO",
      "form": 0,
      "dexNo": 791,
      "type1": "PSYCHIC",
      "type2": "STEEL"
    },
    "LUNALA_0": {
      "species": "LUNALA",
      "form": 0,
      "dexNo": 792,
      "type1": "PSYCHIC",
      "type2": "GHOST"
    },
    "NIHILEGO_0": {
      "species": "NIHILEGO",
      "form": 0,
      "dexNo": 793,
      "type1": "ROCK",
      "type2": "POISON"
    },
    "BUZZWOLE_0": {
      "species": "BUZZWOLE",
      "form": 0,
      "dexNo": 794,
      "type1": "BUG",
      "type2": "FIGHTING"
    },
    "PHEROMOSA_0": {
      "species": "PHEROMOSA",
      "form": 0,
      "dexNo": 795,
      "type1": "BUG",
      "type2": "FIGHTING"
    },
    "XURKITREE_0": {
      "species": "XURKITREE",
      "form": 0,
      "dexNo": 796,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "CELESTEELA_0": {
      "species": "CELESTEELA",
      "form": 0,
      "dexNo": 797,
      "type1": "STEEL",
      "type2": "FLYING"
    },
    "KARTANA_0": {
      "species": "KARTANA",
      "form": 0,
      "dexNo": 798,
      "type1": "GRASS",
      "type2": "STEEL"
    },
    "GUZZLORD_0": {
      "species": "GUZZLORD",
      "form": 0,
      "dexNo": 799,
      "type1": "DARK",
      "type2": "DRAGON"
    },
    "NECROZMA_0": {
      "species": "NECROZMA",
      "form": 0,
      "dexNo": 800,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "NECROZMA_1": {
      "species": "NECROZMA",
      "form": 1,
      "dexNo": 800,
      "type1": "PSYCHIC",
      "type2": "STEEL"
    },
    "NECROZMA_2": {
      "species": "NECROZMA",
      "form": 2,
      "dexNo": 800,
      "type1": "PSYCHIC",
      "type2": "GHOST"
    },
    "NECROZMA_3": {
      "species": "NECROZMA",
      "form": 3,
      "dexNo": 800,
      "type1": "PSYCHIC",
      "type2": "DRAGON"
    },
    "MAGEARNA_0": {
      "species": "MAGEARNA",
      "form": 0,
      "dexNo": 801,
      "type1": "STEEL",
      "type2": "FAIRY"
    },
    "MARSHADOW_0": {
      "species": "MARSHADOW",
      "form": 0,
      "dexNo": 802,
      "type1": "FIGHTING",
      "type2": "GHOST"
    },
    "POIPOLE_0": {
      "species": "POIPOLE",
      "form": 0,
      "dexNo": 803,
      "type1": "POISON",
      "type2": "NONE"
    },
    "NAGANADEL_0": {
      "species": "NAGANADEL",
      "form": 0,
      "dexNo": 804,
      "type1": "POISON",
      "type2": "DRAGON"
    },
    "STAKATAKA_0": {
      "species": "STAKATAKA",
      "form": 0,
      "dexNo": 805,
      "type1": "ROCK",
      "type2": "STEEL"
    },
    "BLACEPHALON_0": {
      "species": "BLACEPHALON",
      "form": 0,
      "dexNo": 806,
      "type1": "FIRE",
      "type2": "GHOST"
    },
    "ZERAORA_0": {
      "species": "ZERAORA",
      "form": 0,
      "dexNo": 807,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "MELTAN_0": {
      "species": "MELTAN",
      "form": 0,
      "dexNo": 808,
      "type1": "STEEL",
      "type2": "NONE"
    },
    "MELMETAL_0": {
      "species": "MELMETAL",
      "form": 0,
      "dexNo": 809,
      "type1": "STEEL",
      "type2": "NONE"
    },
    "GROOKEY_0": {
      "species": "GROOKEY",
      "form": 0,
      "dexNo": 810,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "THWACKEY_0": {
      "species": "THWACKEY",
      "form": 0,
      "dexNo": 811,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "RILLABOOM_0": {
      "species": "RILLABOOM",
      "form": 0,
      "dexNo": 812,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "SCORBUNNY_0": {
      "species": "SCORBUNNY",
      "form": 0,
      "dexNo": 813,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "RABOOT_0": {
      "species": "RABOOT",
      "form": 0,
      "dexNo": 814,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "CINDERACE_0": {
      "species": "CINDERACE",
      "form": 0,
      "dexNo": 815,
      "type1": "FIRE",
      "type2": "NONE"
    },
    "SOBBLE_0": {
      "species": "SOBBLE",
      "form": 0,
      "dexNo": 816,
      "type1": "WATER",
      "type2": "NONE"
    },
    "DRIZZILE_0": {
      "species": "DRIZZILE",
      "form": 0,
      "dexNo": 817,
      "type1": "WATER",
      "type2": "NONE"
    },
    "INTELEON_0": {
      "species": "INTELEON",
      "form": 0,
      "dexNo": 818,
      "type1": "WATER",
      "type2": "NONE"
    },
    "SKWOVET_0": {
      "species": "SKWOVET",
      "form": 0,
      "dexNo": 819,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "GREEDENT_0": {
      "species": "GREEDENT",
      "form": 0,
      "dexNo": 820,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "ROOKIDEE_0": {
      "species": "ROOKIDEE",
      "form": 0,
      "dexNo": 821,
      "type1": "FLYING",
      "type2": "NONE"
    },
    "CORVISQUIRE_0": {
      "species": "CORVISQUIRE",
      "form": 0,
      "dexNo": 822,
      "type1": "FLYING",
      "type2": "NONE"
    },
    "CORVIKNIGHT_0": {
      "species": "CORVIKNIGHT",
      "form": 0,
      "dexNo": 823,
      "type1": "FLYING",
      "type2": "STEEL"
    },
    "BLIPBUG_0": {
      "species": "BLIPBUG",
      "form": 0,
      "dexNo": 824,
      "type1": "BUG",
      "type2": "NONE"
    },
    "DOTTLER_0": {
      "species": "DOTTLER",
      "form": 0,
      "dexNo": 825,
      "type1": "BUG",
      "type2": "PSYCHIC"
    },
    "ORBEETLE_0": {
      "species": "ORBEETLE",
      "form": 0,
      "dexNo": 826,
      "type1": "BUG",
      "type2": "PSYCHIC"
    },
    "NICKIT_0": {
      "species": "NICKIT",
      "form": 0,
      "dexNo": 827,
      "type1": "DARK",
      "type2": "NONE"
    },
    "THIEVUL_0": {
      "species": "THIEVUL",
      "form": 0,
      "dexNo": 828,
      "type1": "DARK",
      "type2": "NONE"
    },
    "GOSSIFLEUR_0": {
      "species": "GOSSIFLEUR",
      "form": 0,
      "dexNo": 829,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "ELDEGOSS_0": {
      "species": "ELDEGOSS",
      "form": 0,
      "dexNo": 830,
      "type1": "GRASS",
      "type2": "NONE"
    },
    "WOOLOO_0": {
      "species": "WOOLOO",
      "form": 0,
      "dexNo": 831,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "DUBWOOL_0": {
      "species": "DUBWOOL",
      "form": 0,
      "dexNo": 832,
      "type1": "NORMAL",
      "type2": "NONE"
    },
    "CHEWTLE_0": {
      "species": "CHEWTLE",
      "form": 0,
      "dexNo": 833,
      "type1": "WATER",
      "type2": "NONE"
    },
    "DREDNAW_0": {
      "species": "DREDNAW",
      "form": 0,
      "dexNo": 834,
      "type1": "WATER",
      "type2": "ROCK"
    },
    "YAMPER_0": {
      "species": "YAMPER",
      "form": 0,
      "dexNo": 835,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "BOLTUND_0": {
      "species": "BOLTUND",
      "form": 0,
      "dexNo": 836,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "ROLYCOLY_0": {
      "species": "ROLYCOLY",
      "form": 0,
      "dexNo": 837,
      "type1": "ROCK",
      "type2": "NONE"
    },
    "CARKOL_0": {
      "species": "CARKOL",
      "form": 0,
      "dexNo": 838,
      "type1": "ROCK",
      "type2": "FIRE"
    },
    "COALOSSAL_0": {
      "species": "COALOSSAL",
      "form": 0,
      "dexNo": 839,
      "type1": "ROCK",
      "type2": "FIRE"
    },
    "APPLIN_0": {
      "species": "APPLIN",
      "form": 0,
      "dexNo": 840,
      "type1": "GRASS",
      "type2": "DRAGON"
    },
    "FLAPPLE_0": {
      "species": "FLAPPLE",
      "form": 0,
      "dexNo": 841,
      "type1": "GRASS",
      "type2": "DRAGON"
    },
    "APPLETUN_0": {
      "species": "APPLETUN",
      "form": 0,
      "dexNo": 842,
      "type1": "GRASS",
      "type2": "DRAGON"
    },
    "SILICOBRA_0": {
      "species": "SILICOBRA",
      "form": 0,
      "dexNo": 843,
      "type1": "GROUND",
      "type2": "NONE"
    },
    "SANDACONDA_0": {
      "species": "SANDACONDA",
      "form": 0,
      "dexNo": 844,
      "type1": "GROUND",
      "type2": "NONE"
    },
    "CRAMORANT_0": {
      "species": "CRAMORANT",
      "form": 0,
      "dexNo": 845,
      "type1": "FLYING",
      "type2": "WATER"
    },
    "ARROKUDA_0": {
      "species": "ARROKUDA",
      "form": 0,
      "dexNo": 846,
      "type1": "WATER",
      "type2": "NONE"
    },
    "BARRASKEWDA_0": {
      "species": "BARRASKEWDA",
      "form": 0,
      "dexNo": 847,
      "type1": "WATER",
      "type2": "NONE"
    },
    "TOXEL_0": {
      "species": "TOXEL",
      "form": 0,
      "dexNo": 848,
      "type1": "ELECTRIC",
      "type2": "POISON"
    },
    "TOXTRICITY_0": {
      "species": "TOXTRICITY",
      "form": 0,
      "dexNo": 849,
      "type1": "ELECTRIC",
      "type2": "POISON"
    },
    "TOXTRICITY_1": {
      "species": "TOXTRICITY",
      "form": 1,
      "dexNo": 849,
      "type1": "ELECTRIC",
      "type2": "POISON"
    },
    "SIZZLIPEDE_0": {
      "species": "SIZZLIPEDE",
      "form": 0,
      "dexNo": 850,
      "type1": "FIRE",
      "type2": "BUG"
    },
    "CENTISKORCH_0": {
      "species": "CENTISKORCH",
      "form": 0,
      "dexNo": 851,
      "type1": "FIRE",
      "type2": "BUG"
    },
    "CLOBBOPUS_0": {
      "species": "CLOBBOPUS",
      "form": 0,
      "dexNo": 852,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "GRAPPLOCT_0": {
      "species": "GRAPPLOCT",
      "form": 0,
      "dexNo": 853,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "SINISTEA_0": {
      "species": "SINISTEA",
      "form": 0,
      "dexNo": 854,
      "type1": "GHOST",
      "type2": "NONE"
    },
    "POLTEAGEIST_0": {
      "species": "POLTEAGEIST",
      "form": 0,
      "dexNo": 855,
      "type1": "GHOST",
      "type2": "NONE"
    },
    "HATENNA_0": {
      "species": "HATENNA",
      "form": 0,
      "dexNo": 856,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "HATTREM_0": {
      "species": "HATTREM",
      "form": 0,
      "dexNo": 857,
      "type1": "PSYCHIC",
      "type2": "NONE"
    },
    "HATTERENE_0": {
      "species": "HATTERENE",
      "form": 0,
      "dexNo": 858,
      "type1": "PSYCHIC",
      "type2": "FAIRY"
    },
    "IMPIDIMP_0": {
      "species": "IMPIDIMP",
      "form": 0,
      "dexNo": 859,
      "type1": "DARK",
      "type2": "FAIRY"
    },
    "MORGREM_0": {
      "species": "MORGREM",
      "form": 0,
      "dexNo": 860,
      "type1": "DARK",
      "type2": "FAIRY"
    },
    "GRIMMSNARL_0": {
      "species": "GRIMMSNARL",
      "form": 0,
      "dexNo": 861,
      "type1": "DARK",
      "type2": "FAIRY"
    },
    "OBSTAGOON_0": {
      "species": "OBSTAGOON",
      "form": 0,
      "dexNo": 862,
      "type1": "DARK",
      "type2": "NORMAL"
    },
    "PERRSERKER_0": {
      "species": "PERRSERKER",
      "form": 0,
      "dexNo": 863,
      "type1": "STEEL",
      "type2": "NONE"
    },
    "CURSOLA_0": {
      "species": "CURSOLA",
      "form": 0,
      "dexNo": 864,
      "type1": "GHOST",
      "type2": "NONE"
    },
    "SIRFETCH_D_0": {
      "species": "SIRFETCH_D",
      "form": 0,
      "dexNo": 865,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "MR_RIME_0": {
      "species": "MR_RIME",
      "form": 0,
      "dexNo": 866,
      "type1": "ICE",
      "type2": "PSYCHIC"
    },
    "RUNERIGUS_0": {
      "species": "RUNERIGUS",
      "form": 0,
      "dexNo": 867,
      "type1": "GROUND",
      "type2": "GHOST"
    },
    "MILCERY_0": {
      "species": "MILCERY",
      "form": 0,
      "dexNo": 868,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "ALCREMIE_0": {
      "species": "ALCREMIE",
      "form": 0,
      "dexNo": 869,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "FALINKS_0": {
      "species": "FALINKS",
      "form": 0,
      "dexNo": 870,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "PINCURCHIN_0": {
      "species": "PINCURCHIN",
      "form": 0,
      "dexNo": 871,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "SNOM_0": {
      "species": "SNOM",
      "form": 0,
      "dexNo": 872,
      "type1": "ICE",
      "type2": "BUG"
    },
    "FROSMOTH_0": {
      "species": "FROSMOTH",
      "form": 0,
      "dexNo": 873,
      "type1": "ICE",
      "type2": "BUG"
    },
    "STONJOURNER_0": {
      "species": "STONJOURNER",
      "form": 0,
      "dexNo": 874,
      "type1": "ROCK",
      "type2": "NONE"
    },
    "EISCUE_0": {
      "species": "EISCUE",
      "form": 0,
      "dexNo": 875,
      "type1": "ICE",
      "type2": "NONE"
    },
    "EISCUE_1": {
      "species": "EISCUE",
      "form": 1,
      "dexNo": 875,
      "type1": "ICE",
      "type2": "NONE"
    },
    "INDEEDEE_0": {
      "species": "INDEEDEE",
      "form": 0,
      "dexNo": 876,
      "type1": "PSYCHIC",
      "type2": "NORMAL"
    },
    "INDEEDEE_1": {
      "species": "INDEEDEE",
      "form": 1,
      "dexNo": 876,
      "type1": "PSYCHIC",
      "type2": "NORMAL"
    },
    "MORPEKO_0": {
      "species": "MORPEKO",
      "form": 0,
      "dexNo": 877,
      "type1": "ELECTRIC",
      "type2": "DARK"
    },
    "MORPEKO_1": {
      "species": "MORPEKO",
      "form": 1,
      "dexNo": 877,
      "type1": "ELECTRIC",
      "type2": "DARK"
    },
    "CUFANT_0": {
      "species": "CUFANT",
      "form": 0,
      "dexNo": 878,
      "type1": "STEEL",
      "type2": "NONE"
    },
    "COPPERAJAH_0": {
      "species": "COPPERAJAH",
      "form": 0,
      "dexNo": 879,
      "type1": "STEEL",
      "type2": "NONE"
    },
    "DRACOZOLT_0": {
      "species": "DRACOZOLT",
      "form": 0,
      "dexNo": 880,
      "type1": "ELECTRIC",
      "type2": "DRAGON"
    },
    "ARCTOZOLT_0": {
      "species": "ARCTOZOLT",
      "form": 0,
      "dexNo": 881,
      "type1": "ELECTRIC",
      "type2": "ICE"
    },
    "DRACOVISH_0": {
      "species": "DRACOVISH",
      "form": 0,
      "dexNo": 882,
      "type1": "WATER",
      "type2": "DRAGON"
    },
    "ARCTOVISH_0": {
      "species": "ARCTOVISH",
      "form": 0,
      "dexNo": 883,
      "type1": "WATER",
      "type2": "ICE"
    },
    "DURALUDON_0": {
      "species": "DURALUDON",
      "form": 0,
      "dexNo": 884,
      "type1": "STEEL",
      "type2": "DRAGON"
    },
    "DREEPY_0": {
      "species": "DREEPY",
      "form": 0,
      "dexNo": 885,
      "type1": "DRAGON",
      "type2": "GHOST"
    },
    "DRAKLOAK_0": {
      "species": "DRAKLOAK",
      "form": 0,
      "dexNo": 886,
      "type1": "DRAGON",
      "type2": "GHOST"
    },
    "DRAGAPULT_0": {
      "species": "DRAGAPULT",
      "form": 0,
      "dexNo": 887,
      "type1": "DRAGON",
      "type2": "GHOST"
    },
    "ZACIAN_0": {
      "species": "ZACIAN",
      "form": 0,
      "dexNo": 888,
      "type1": "FAIRY",
      "type2": "NONE"
    },
    "ZACIAN_1": {
      "species": "ZACIAN",
      "form": 1,
      "dexNo": 888,
      "type1": "FAIRY",
      "type2": "STEEL"
    },
    "ZAMAZENTA_0": {
      "species": "ZAMAZENTA",
      "form": 0,
      "dexNo": 889,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "ZAMAZENTA_1": {
      "species": "ZAMAZENTA",
      "form": 1,
      "dexNo": 889,
      "type1": "FIGHTING",
      "type2": "STEEL"
    },
    "ETERNATUS_0": {
      "species": "ETERNATUS",
      "form": 0,
      "dexNo": 890,
      "type1": "POISON",
      "type2": "DRAGON"
    },
    "ETERNATUS_1": {
      "species": "ETERNATUS",
      "form": 1,
      "dexNo": 890,
      "type1": "POISON",
      "type2": "DRAGON"
    },
    "KUBFU_0": {
      "species": "KUBFU",
      "form": 0,
      "dexNo": 891,
      "type1": "FIGHTING",
      "type2": "NONE"
    },
    "URSHIFU_0": {
      "species": "URSHIFU",
      "form": 0,
      "dexNo": 892,
      "type1": "FIGHTING",
      "type2": "DARK"
    },
    "URSHIFU_1": {
      "species": "URSHIFU",
      "form": 1,
      "dexNo": 892,
      "type1": "FIGHTING",
      "type2": "WATER"
    },
    "ZARUDE_0": {
      "species": "ZARUDE",
      "form": 0,
      "dexNo": 893,
      "type1": "DARK",
      "type2": "GRASS"
    },
    "REGIELEKI_0": {
      "species": "REGIELEKI",
      "form": 0,
      "dexNo": 894,
      "type1": "ELECTRIC",
      "type2": "NONE"
    },
    "REGIDRAGO_0": {
      "species": "REGIDRAGO",
      "form": 0,
      "dexNo": 895,
      "type1": "DRAGON",
      "type2": "NONE"
    },
    "GLASTRIER_0": {
      "species": "GLASTRIER",
      "form": 0,
      "dexNo": 896,
      "type1": "ICE",
      "type2": "NONE"
    },
    "SPECTRIER_0": {
      "species": "SPECTRIER",
      "form": 0,
      "dexNo": 897,
      "type1": "GHOST",
      "type2": "NONE"
    },
    "CALYREX_0": {
      "species": "CALYREX",
      "form": 0,
      "dexNo": 898,
      "type1": "PSYCHIC",
      "type2": "GRASS"
    },
    "CALYREX_1": {
      "species": "CALYREX",
      "form": 1,
      "dexNo": 898,
      "type1": "PSYCHIC",
      "type2": "ICE"
    },
    "CALYREX_2": {
      "species": "CALYREX",
      "form": 2,
      "dexNo": 898,
      "type1": "PSYCHIC",
      "type2": "GHOST"
    },
    "WYRDEER_0": {
      "species": "WYRDEER",
      "form": 0,
      "dexNo": 899,
      "type1": "NORMAL",
      "type2": "PSYCHIC"
    },
    "KLEAVOR_0": {
      "species": "KLEAVOR",
      "form": 0,
      "dexNo": 900,
      "type1": "BUG",
      "type2": "ROCK"
    },
    "URSALUNA_0": {
      "species": "URSALUNA",
      "form": 0,
      "dexNo": 901,
      "type1": "GROUND",
      "type2": "NORMAL"
    },
    "BASCULEGION_0": {
      "species": "BASCULEGION",
      "form": 0,
      "dexNo": 902,
      "type1": "WATER",
      "type2": "GHOST"
    },
    "BASCULEGION_1": {
      "species": "BASCULEGION",
      "form": 1,
      "dexNo": 902,
      "type1": "WATER",
      "type2": "GHOST"
    },
    "SNEASLER_0": {
      "species": "SNEASLER",
      "form": 0,
      "dexNo": 903,
      "type1": "FIGHTING",
      "type2": "POISON"
    },
    "OVERQWIL_0": {
      "species": "OVERQWIL",
      "form": 0,
      "dexNo": 904,
      "type1": "DARK",
      "type2": "POISON"
    },
    "ENAMORUS_0": {
      "species": "ENAMORUS",
      "form": 0,
      "dexNo": 905,
      "type1": "FAIRY",
      "type2": "FLYING"
    },
    "ENAMORUS_1": {
      "species": "ENAMORUS",
      "form": 1,
      "dexNo": 905,
      "type1": "FAIRY",
      "type2": "FLYING"
    }
  }