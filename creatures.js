const creatures = {
  fish: [
    {
  id: "fish01",
  name: "Bitterling",
  iconUrl: "https://dodo.ac/np/images/thumb/4/4d/Bitterling_NH_Icon.png/64px-Bitterling_NH_Icon.png",
  location: "River",
  tcr: 0,
  shadowSize: "Tiny",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,11,12],
      monthsSouth: [5,6,7,8,9],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish02",
  name: "Pale Chub",
  iconUrl: "https://dodo.ac/np/images/thumb/e/e2/Pale_Chub_NH_Icon.png/64px-Pale_Chub_NH_Icon.png",
  location: "River",
  tcr: 0,
  shadowSize: "Tiny",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 9,
      endHour: 16,
      weather: "any"
    }
  ]
},
{
  id: "fish03",
  name: "Crucian Carp",
  iconUrl: "https://dodo.ac/np/images/thumb/f/f2/Crucian_Carp_NH_Icon.png/64px-Crucian_Carp_NH_Icon.png",
  location: "River",
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish04",
  name: "Dace",
  iconUrl: "https://dodo.ac/np/images/thumb/d/db/Dace_NH_Icon.png/64px-Dace_NH_Icon.png",
  location: "River",
  tcr: 0,
  shadowSize: "Medium",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "fish05",
  name: "Carp",
  iconUrl: "https://dodo.ac/np/images/thumb/5/5d/Carp_NH_Icon.png/64px-Carp_NH_Icon.png",
  location: "Pond",
  tcr: 0,
  shadowSize: "Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish06",
  name: "Koi",
  iconUrl: "https://dodo.ac/np/images/thumb/2/2d/Koi_NH_Icon.png/64px-Koi_NH_Icon.png",
  location: "Pond",
  tcr: 20,
  shadowSize: "Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "fish07",
  name: "Goldfish",
  iconUrl: "https://dodo.ac/np/images/thumb/7/71/Goldfish_NH_Icon.png/64px-Goldfish_NH_Icon.png",
  location: "Pond",
  tcr: 0,
  shadowSize: "Tiny",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish08",
  name: "Pop-Eyed Goldfish",
  iconUrl: "https://dodo.ac/np/images/thumb/0/0d/Pop-Eyed_Goldfish_NH_Icon.png/64px-Pop-Eyed_Goldfish_NH_Icon.png",
  location: "Pond",
  tcr: 0,
  shadowSize: "Tiny",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 9,
      endHour: 16,
      weather: "any"
    }
  ]
},
{
  id: "fish09",
  name: "Ranchu Goldfish",
  iconUrl: "https://dodo.ac/np/images/thumb/3/35/Ranchu_Goldfish_NH_Icon.png/64px-Ranchu_Goldfish_NH_Icon.png",
  location: "Pond",
  tcr: 20,
  shadowSize: "Small",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 9,
      endHour: 16,
      weather: "any"
    }
  ]
},
{
  id: "fish10",
  name: "Killifish",
  iconUrl: "https://dodo.ac/np/images/thumb/e/ea/Killifish_NH_Icon.png/64px-Killifish_NH_Icon.png",
  location: "Pond",
  tcr: 0,
  shadowSize: "Tiny",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [],
      monthsSouth: [],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish11",
  name: "Crawfish",
  iconUrl: "https://dodo.ac/np/images/thumb/9/96/Crawfish_NH_Icon.png/64px-Crawfish_NH_Icon.png",
  location: "Pond",
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8,9],
      monthsSouth: [1,2,3,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish12",
  name: "Soft-Shelled Turtle",
  iconUrl: "https://dodo.ac/np/images/thumb/e/eb/Soft-Shelled_Turtle_NH_Icon.png/64px-Soft-Shelled_Turtle_NH_Icon.png",
  location: "River",
  tcr: 20,
  shadowSize: "Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [8,9],
      monthsSouth: [2,3],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "fish13",
  name: "Snapping Turtle",
  iconUrl: "https://dodo.ac/np/images/thumb/b/b1/Snapping_Turtle_NH_Icon.png/64px-Snapping_Turtle_NH_Icon.png",
  location: "River",
  tcr: 0,
  shadowSize: "Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8,9,10],
      monthsSouth: [1,2,3,4,10,11,12],
      startHour: 21,
      endHour: 4,
      weather: "any"
    }
  ]
},
{
  id: "fish14",
  name: "Tadpole",
  iconUrl: "https://dodo.ac/np/images/thumb/b/bb/Tadpole_NH_Icon.png/64px-Tadpole_NH_Icon.png",
  location: "Pond",
  tcr: 0,
  shadowSize: "Tiny",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [3,4,5,6,7],
      monthsSouth: [1,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish15",
  name: "Frog",
  iconUrl: "https://dodo.ac/np/images/thumb/2/2f/Frog_NH_Icon.png/64px-Frog_NH_Icon.png",
  location: "Pond",
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [5,6,7,8],
      monthsSouth: [1,2,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish16",
  name: "Freshwater Goby",
  iconUrl: "https://dodo.ac/np/images/thumb/e/ec/Freshwater_Goby_NH_Icon.png/64px-Freshwater_Goby_NH_Icon.png",
  location: "River",
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "fish17",
  name: "Loach",
  iconUrl: "https://dodo.ac/np/images/thumb/a/a5/Loach_NH_Icon.png/64px-Loach_NH_Icon.png",
  location: "River",
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [3,4,5],
      monthsSouth: [9,10,11],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish18",
  name: "Catfish",
  iconUrl: "https://dodo.ac/np/images/thumb/0/0d/Catfish_NH_Icon.png/64px-Catfish_NH_Icon.png",
  location: "Pond",
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [3,4,5],
      monthsSouth: [9,10,11],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "fish19",
  name: "Giant Snakehead",
  iconUrl: "https://dodo.ac/np/images/thumb/5/50/Giant_Snakehead_NH_Icon.png/64px-Giant_Snakehead_NH_Icon.png",
  location: "Pond",
  tcr: 50,
  shadowSize: "Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8],
      monthsSouth: [1,2,12],
      startHour: 9,
      endHour: 16,
      weather: "any"
    }
  ]
},
{
  id: "fish20",
  name: "Bluegill",
  iconUrl: "https://dodo.ac/np/images/thumb/0/0c/Bluegill_NH_Icon.png/64px-Bluegill_NH_Icon.png",
  location: "River",
  tcr: 0,
  shadowSize: "Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 9,
      endHour: 16,
      weather: "any"
    }
  ]
},
{
  id: "fish21",
  name: "Yellow Perch",
  iconUrl: "https://dodo.ac/np/images/thumb/6/67/Yellow_Perch_NH_Icon.png/64px-Yellow_Perch_NH_Icon.png",
  location: "River",
  tcr: 0,
  shadowSize: "Medium",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,10,11,12],
      monthsSouth: [4,5,6,7,8,9],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish22",
  name: "Black Bass",
  iconUrl: "https://dodo.ac/np/images/thumb/0/00/Black_Bass_NH_Icon.png/64px-Black_Bass_NH_Icon.png",
  location: "River",
  tcr: 0,
  shadowSize: "Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish23",
  name: "Tilapia",
  iconUrl: "https://dodo.ac/np/images/thumb/e/ef/Tilapia_NH_Icon.png/64px-Tilapia_NH_Icon.png",
  location: "River",
  tcr: 0,
  shadowSize: "Medium",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8,9,10],
      monthsSouth: [1,2,3,4,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish24",
  name: "Pike",
  iconUrl: "https://dodo.ac/np/images/thumb/9/9f/Pike_NH_Icon.png/64px-Pike_NH_Icon.png",
  location: "River",
  tcr: 20,
  shadowSize: "Very Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [9,10,11,12],
      monthsSouth: [3,4,5,6],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish25",
  name: "Pond Smelt",
  iconUrl: "https://dodo.ac/np/images/thumb/0/0f/Pond_Smelt_NH_Icon.png/64px-Pond_Smelt_NH_Icon.png",
  location: "River",
  tcr: 20,
  shadowSize: "Small",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,12],
      monthsSouth: [6,7,8],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish26",
  name: "Sweetfish",
  iconUrl: "https://dodo.ac/np/images/thumb/6/6a/Sweetfish_NH_Icon.png/64px-Sweetfish_NH_Icon.png",
  location: "River",
  tcr: 20,
  shadowSize: "Medium",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8,9],
      monthsSouth: [1,2,3],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish27",
  name: "Cherry Salmon",
  iconUrl: "https://dodo.ac/np/images/thumb/d/db/Cherry_Salmon_NH_Icon.png/64px-Cherry_Salmon_NH_Icon.png",
  location: "River Clifftop",
  tcr: 0,
  shadowSize: "Medium",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [3,4,5,6],
      monthsSouth: [9,10,11,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    },
    {
      monthsNorth: [9,10,11],
      monthsSouth: [3,4,5],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish28",
  name: "Char",
  iconUrl: "https://dodo.ac/np/images/thumb/8/80/Char_NH_Icon.png/64px-Char_NH_Icon.png",
  location: "River Clifftop",
  tcr: 0,
  shadowSize: "Medium",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [3,4,5,6],
      monthsSouth: [9,10,11,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    },
    {
      monthsNorth: [9,10,11],
      monthsSouth: [3,4,5],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish29",
  name: "Golden Trout",
  iconUrl: "https://dodo.ac/np/images/thumb/f/fc/Golden_Trout_NH_Icon.png/64px-Golden_Trout_NH_Icon.png",
  location: "River Clifftop",
  tcr: 100,
  shadowSize: "Medium",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [3,4,5],
      monthsSouth: [9,10,11],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "fish30",
  name: "Stringfish",
  iconUrl: "https://dodo.ac/np/images/thumb/e/eb/Stringfish_NH_Icon.png/64px-Stringfish_NH_Icon.png",
  location: "River Clifftop",
  tcr: 100,
  shadowSize: "Very Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,12],
      monthsSouth: [6,7,8,9],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "fish31",
  name: "Salmon",
  iconUrl: "https://dodo.ac/np/images/thumb/c/ca/Salmon_NH_Icon.png/64px-Salmon_NH_Icon.png",
  location: "River Mouth",
  tcr: 0,
  shadowSize: "Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [9],
      monthsSouth: [3],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish32",
  name: "King Salmon",
  iconUrl: "https://dodo.ac/np/images/thumb/e/e1/King_Salmon_NH_Icon.png/64px-King_Salmon_NH_Icon.png",
  location: "River Mouth",
  tcr: 20,
  shadowSize: "Very Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [9],
      monthsSouth: [3],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish33",
  name: "Mitten Crab",
  iconUrl: "https://dodo.ac/np/images/thumb/9/9d/Mitten_Crab_NH_Icon.png/64px-Mitten_Crab_NH_Icon.png",
  location: "River",
  tcr: 20,
  shadowSize: "Small",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [9,10,11],
      monthsSouth: [3,4,5],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "fish34",
  name: "Guppy",
  iconUrl: "https://dodo.ac/np/images/thumb/3/38/Guppy_NH_Icon.png/64px-Guppy_NH_Icon.png",
  location: "River",
  tcr: 0,
  shadowSize: "Tiny",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8,9,10,11],
      monthsSouth: [1,2,3,4,5,10,11,12],
      startHour: 9,
      endHour: 16,
      weather: "any"
    }
  ]
},
{
  id: "fish35",
  name: "Nibble Fish",
  iconUrl: "https://dodo.ac/np/images/thumb/0/0b/Nibble_Fish_NH_Icon.png/64px-Nibble_Fish_NH_Icon.png",
  location: "River",
  tcr: 20,
  shadowSize: "Tiny",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [5,6,7,8,9],
      monthsSouth: [1,2,3,11,12],
      startHour: 9,
      endHour: 16,
      weather: "any"
    }
  ]
},
{
  id: "fish36",
  name: "Angelfish",
  iconUrl: "https://dodo.ac/np/images/thumb/c/cd/Angelfish_NH_Icon.png/64px-Angelfish_NH_Icon.png",
  location: "River",
  tcr: 20,
  shadowSize: "Small",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [5,6,7,8,9,10],
      monthsSouth: [1,2,3,4,11,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "fish37",
  name: "Betta",
  iconUrl: "https://dodo.ac/np/images/thumb/0/0b/Betta_NH_Icon.png/64px-Betta_NH_Icon.png",
  location: "River",
  tcr: 20,
  shadowSize: "Small",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [5,6,7,8,9,10],
      monthsSouth: [1,2,3,4,11,12],
      startHour: 9,
      endHour: 16,
      weather: "any"
    }
  ]
},
{
  id: "fish38",
  name: "Neon Tetra",
  iconUrl: "https://dodo.ac/np/images/thumb/4/42/Neon_Tetra_NH_Icon.png/64px-Neon_Tetra_NH_Icon.png",
  location: "River",
  tcr: 0,
  shadowSize: "Tiny",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8,9,10,11],
      monthsSouth: [1,2,3,4,5,10,11,12],
      startHour: 9,
      endHour: 16,
      weather: "any"
    }
  ]
},
{
  id: "fish39",
  name: "Rainbowfish",
  iconUrl: "https://dodo.ac/np/images/thumb/e/e7/Rainbowfish_NH_Icon.png/64px-Rainbowfish_NH_Icon.png",
  location: "River",
  tcr: 0,
  shadowSize: "Tiny",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [5,6,7,8,9,10],
      monthsSouth: [1,2,3,4,11,12],
      startHour: 9,
      endHour: 16,
      weather: "any"
    }
  ]
},
{
  id: "fish40",
  name: "Piranha",
  iconUrl: "https://dodo.ac/np/images/thumb/c/c6/Piranha_NH_Icon.png/64px-Piranha_NH_Icon.png",
  location: "River",
  tcr: 20,
  shadowSize: "Small",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8,9],
      monthsSouth: [1,2,3,12],
      startHour: 9,
      endHour: 16,
      weather: "any"
    }
  ]
},
{
  id: "fish41",
  name: "Arowana",
  iconUrl: "https://dodo.ac/np/images/thumb/6/67/Arowana_NH_Icon.png/64px-Arowana_NH_Icon.png",
  location: "River",
  tcr: 50,
  shadowSize: "Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8,9],
      monthsSouth: [1,2,3,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "fish42",
  name: "Dorado",
  iconUrl: "https://dodo.ac/np/images/thumb/f/fe/Dorado_NH_Icon.png/64px-Dorado_NH_Icon.png",
  location: "River",
  tcr: 100,
  shadowSize: "Very Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8,9],
      monthsSouth: [1,2,3,12],
      startHour: 4,
      endHour: 21,
      weather: "any"
    }
  ]
},
{
  id: "fish43",
  name: "Gar",
  iconUrl: "https://dodo.ac/np/images/thumb/a/a2/Gar_NH_Icon.png/64px-Gar_NH_Icon.png",
  location: "Pond",
  tcr: 50,
  shadowSize: "Very Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8,9],
      monthsSouth: [1,2,3,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "fish44",
  name: "Arapaima",
  iconUrl: "https://dodo.ac/np/images/thumb/b/b1/Arapaima_NH_Icon.png/64px-Arapaima_NH_Icon.png",
  location: "River",
  tcr: 50,
  shadowSize: "Huge",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8,9],
      monthsSouth: [1,2,3,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "fish45",
  name: "Saddled Bichir",
  iconUrl: "https://dodo.ac/np/images/thumb/4/46/Saddled_Bichir_NH_Icon.png/64px-Saddled_Bichir_NH_Icon.png",
  location: "River",
  tcr: 20,
  shadowSize: "Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8,9],
      monthsSouth: [1,2,3,12],
      startHour: 21,
      endHour: 4,
      weather: "any"
    }
  ]
},
{
  id: "fish46",
  name: "Sturgeon",
  iconUrl: "https://dodo.ac/np/images/thumb/9/91/Sturgeon_NH_Icon.png/64px-Sturgeon_NH_Icon.png",
  location: "River Mouth",
  tcr: 20,
  shadowSize: "Huge",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,10,11,12],
      monthsSouth: [3,4,5,6,7,8,9],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish47",
  name: "Sea Butterfly",
  iconUrl: "https://dodo.ac/np/images/thumb/f/f7/Sea_Butterfly_NH_Icon.png/64px-Sea_Butterfly_NH_Icon.png",
  location: "Sea",
  tcr: 0,
  shadowSize: "Tiny",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,12],
      monthsSouth: [6,7,8,9],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish48",
  name: "Sea Horse",
  iconUrl: "https://dodo.ac/np/images/thumb/d/dc/Sea_Horse_NH_Icon.png/64px-Sea_Horse_NH_Icon.png",
  location: "Sea",
  tcr: 0,
  shadowSize: "Tiny",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8,9,10,11],
      monthsSouth: [1,2,3,4,5,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish49",
  name: "Clown Fish",
  iconUrl: "https://dodo.ac/np/images/thumb/4/4f/Clown_Fish_NH_Icon.png/64px-Clown_Fish_NH_Icon.png",
  location: "Sea",
  tcr: 0,
  shadowSize: "Tiny",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8],
      monthsSouth: [1,2,3,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish50",
  name: "Surgeonfish",
  iconUrl: "https://dodo.ac/np/images/thumb/c/cb/Surgeonfish_NH_Icon.png/64px-Surgeonfish_NH_Icon.png",
  location: "Sea",
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8,9],
      monthsSouth: [1,2,3,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish51",
  name: "Butterfly Fish",
  iconUrl: "https://dodo.ac/np/images/thumb/4/47/Butterfly_Fish_NH_Icon.png/64px-Butterfly_Fish_NH_Icon.png",
  location: "Sea",
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8,9],
      monthsSouth: [1,2,3,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish52",
  name: "Napoleonfish",
  iconUrl: "https://dodo.ac/np/images/thumb/3/30/Napoleonfish_NH_Icon.png/64px-Napoleonfish_NH_Icon.png",
  location: "Sea",
  tcr: 50,
  shadowSize: "Huge",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 4,
      endHour: 21,
      weather: "any"
    }
  ]
},
{
  id: "fish53",
  name: "Zebra Turkeyfish",
  iconUrl: "https://dodo.ac/np/images/thumb/8/85/Zebra_Turkeyfish_NH_Icon.png/64px-Zebra_Turkeyfish_NH_Icon.png",
  location: "Sea",
  tcr: 0,
  shadowSize: "Medium",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8,9,10,11],
      monthsSouth: [1,2,3,4,5,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish54",
  name: "Blowfish",
  iconUrl: "https://dodo.ac/np/images/thumb/9/95/Blowfish_NH_Icon.png/64px-Blowfish_NH_Icon.png",
  location: "Sea",
  tcr: 20,
  shadowSize: "Medium",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,11,12],
      monthsSouth: [5,6,7,8],
      startHour: 21,
      endHour: 4,
      weather: "any"
    }
  ]
},
{
  id: "fish55",
  name: "Puffer Fish",
  iconUrl: "https://dodo.ac/np/images/thumb/e/ee/Puffer_Fish_NH_Icon.png/64px-Puffer_Fish_NH_Icon.png",
  location: "Sea",
  tcr: 0,
  shadowSize: "Medium",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8,9],
      monthsSouth: [1,2,3],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish56",
  name: "Anchovy",
  iconUrl: "https://dodo.ac/np/images/thumb/7/7f/Anchovy_%28Fish%29_NH_Icon.png/64px-Anchovy_%28Fish%29_NH_Icon.png",
  location: "Sea",
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 4,
      endHour: 21,
      weather: "any"
    }
  ]
},
{
  id: "fish57",
  name: "Horse Mackerel",
  iconUrl: "https://dodo.ac/np/images/thumb/a/a3/Horse_Mackerel_NH_Icon.png/64px-Horse_Mackerel_NH_Icon.png",
  location: "Sea",
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish58",
  name: "Barred Knifejaw",
  iconUrl: "https://dodo.ac/np/images/thumb/d/d5/Barred_Knifejaw_NH_Icon.png/64px-Barred_Knifejaw_NH_Icon.png",
  location: "Sea",
  tcr: 20,
  shadowSize: "Medium",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [3,4,5,6,7,8,9,10,11],
      monthsSouth: [1,2,3,4,5,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish59",
  name: "Sea Bass",
  iconUrl: "https://dodo.ac/np/images/thumb/7/7f/Sea_Bass_NH_Icon.png/64px-Sea_Bass_NH_Icon.png",
  location: "Sea",
  tcr: 0,
  shadowSize: "Very Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish60",
  name: "Red Snapper",
  iconUrl: "https://dodo.ac/np/images/thumb/c/c1/Red_Snapper_NH_Icon.png/64px-Red_Snapper_NH_Icon.png",
  location: "Sea",
  tcr: 0,
  shadowSize: "Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish61",
  name: "Dab",
  iconUrl: "https://dodo.ac/np/images/thumb/1/1f/Dab_NH_Icon.png/64px-Dab_NH_Icon.png",
  location: "Sea",
  tcr: 0,
  shadowSize: "Medium",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,10,11,12],
      monthsSouth: [4,5,6,7,8,9,10],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish62",
  name: "Olive Flounder",
  iconUrl: "https://dodo.ac/np/images/thumb/b/b3/Olive_Flounder_NH_Icon.png/64px-Olive_Flounder_NH_Icon.png",
  location: "Sea",
  tcr: 0,
  shadowSize: "Very Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish63",
  name: "Squid",
  iconUrl: "https://dodo.ac/np/images/thumb/b/bf/Squid_NH_Icon.png/64px-Squid_NH_Icon.png",
  location: "Sea",
  tcr: 0,
  shadowSize: "Medium",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,12],
      monthsSouth: [1,2,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish64",
  name: "Moray Eel",
  iconUrl: "https://dodo.ac/np/images/thumb/3/3e/Moray_Eel_NH_Icon.png/64px-Moray_Eel_NH_Icon.png",
  location: "Sea",
  tcr: 20,
  shadowSize: "Long & Thin",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [8,9,10],
      monthsSouth: [2,3,4],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish65",
  name: "Ribbon Eel",
  iconUrl: "https://dodo.ac/np/images/thumb/2/26/Ribbon_Eel_NH_Icon.png/64px-Ribbon_Eel_NH_Icon.png",
  location: "Sea",
  tcr: 0,
  shadowSize: "Long & Thin",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8,9,10],
      monthsSouth: [1,2,3,4,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish66",
  name: "Tuna",
  iconUrl: "https://dodo.ac/np/images/thumb/4/4b/Tuna_NH_Icon.png/64px-Tuna_NH_Icon.png",
  location: "Pier",
  tcr: 50,
  shadowSize: "Huge",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,11,12],
      monthsSouth: [5,6,7,8,9,10],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish67",
  name: "Blue Marlin",
  iconUrl: "https://dodo.ac/np/images/thumb/2/2a/Blue_Marlin_NH_Icon.png/64px-Blue_Marlin_NH_Icon.png",
  location: "Pier",
  tcr: 50,
  shadowSize: "Huge",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,7,8,9,11,12],
      monthsSouth: [1,2,3,5,6,7,8,9,10],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish68",
  name: "Giant Trevally",
  iconUrl: "https://dodo.ac/np/images/thumb/1/17/Giant_Trevally_NH_Icon.png/64px-Giant_Trevally_NH_Icon.png",
  location: "Pier",
  tcr: 20,
  shadowSize: "Very Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [5,6,7,8,9,10],
      monthsSouth: [1,2,3,4,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish69",
  name: "Mahi-Mahi",
  iconUrl: "https://dodo.ac/np/images/thumb/d/d6/Mahi-Mahi_NH_Icon.png/64px-Mahi-Mahi_NH_Icon.png",
  location: "Pier",
  tcr: 20,
  shadowSize: "Very Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [5,6,7,8,9,10],
      monthsSouth: [1,2,3,4,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish70",
  name: "Ocean Sunfish",
  iconUrl: "https://dodo.ac/np/images/thumb/e/eb/Ocean_Sunfish_NH_Icon.png/64px-Ocean_Sunfish_NH_Icon.png",
  location: "Sea",
  tcr: 20,
  shadowSize: "Very Large (Finned)",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8,9],
      monthsSouth: [1,2,3],
      startHour: 4,
      endHour: 21,
      weather: "any"
    }
  ]
},
{
  id: "fish71",
  name: "Ray",
  iconUrl: "https://dodo.ac/np/images/thumb/9/9b/Ray_NH_Icon.png/64px-Ray_NH_Icon.png",
  location: "Sea",
  tcr: 20,
  shadowSize: "Very Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [8,9,10,11],
      monthsSouth: [2,3,4,5],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "fish72",
  name: "Saw Shark",
  iconUrl: "https://dodo.ac/np/images/thumb/4/45/Saw_Shark_NH_Icon.png/64px-Saw_Shark_NH_Icon.png",
  location: "Sea",
  tcr: 50,
  shadowSize: "Very Large (Finned)",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8,9],
      monthsSouth: [1,2,3,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "fish73",
  name: "Hammerhead Shark",
  iconUrl: "https://dodo.ac/np/images/thumb/e/ec/Hammerhead_Shark_NH_Icon.png/64px-Hammerhead_Shark_NH_Icon.png",
  location: "Sea",
  tcr: 20,
  shadowSize: "Very Large (Finned)",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8,9],
      monthsSouth: [1,2,3,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "fish74",
  name: "Great White Shark",
  iconUrl: "https://dodo.ac/np/images/thumb/2/20/Great_White_Shark_NH_Icon.png/64px-Great_White_Shark_NH_Icon.png",
  location: "Sea",
  tcr: 50,
  shadowSize: "Very Large (Finned)",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8,9],
      monthsSouth: [1,2,3,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "fish75",
  name: "Whale Shark",
  iconUrl: "https://dodo.ac/np/images/thumb/4/4f/Whale_Shark_NH_Icon.png/64px-Whale_Shark_NH_Icon.png",
  location: "Sea",
  tcr: 50,
  shadowSize: "Very Large (Finned)",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8,9],
      monthsSouth: [1,2,3,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish76",
  name: "Suckerfish",
  iconUrl: "https://dodo.ac/np/images/thumb/d/de/Suckerfish_NH_Icon.png/64px-Suckerfish_NH_Icon.png",
  location: "Sea",
  tcr: 20,
  shadowSize: "Very Large (Finned)",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8,9],
      monthsSouth: [1,2,3,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish77",
  name: "Football Fish",
  iconUrl: "https://dodo.ac/np/images/thumb/3/34/Football_Fish_NH_Icon.png/64px-Football_Fish_NH_Icon.png",
  location: "Sea",
  tcr: 20,
  shadowSize: "Large",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,11,12],
      monthsSouth: [5,6,7,8,9],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "fish78",
  name: "Oarfish",
  iconUrl: "https://dodo.ac/np/images/thumb/5/50/Oarfish_NH_Icon.png/64px-Oarfish_NH_Icon.png",
  location: "Sea",
  tcr: 50,
  shadowSize: "Huge",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,12],
      monthsSouth: [6,7,8,9,10,11],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "fish79",
  name: "Barreleye",
  iconUrl: "https://dodo.ac/np/images/thumb/e/e0/Barreleye_NH_Icon.png/64px-Barreleye_NH_Icon.png",
  location: "Sea",
  tcr: 100,
  shadowSize: "Small",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [],
      startHour: 21,
      endHour: 4,
      weather: "any"
    }
  ]
},
{
  id: "fish80",
  name: "Coelacanth",
  iconUrl: "https://dodo.ac/np/images/thumb/4/45/Coelacanth_NH_Icon.png/64px-Coelacanth_NH_Icon.png",
  location: "Sea",
  tcr: 100,
  shadowSize: "Huge",
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "rain"
    }
  ]
},





  ],
  bugs: [
    {
  id: "bug01",
  name: "Common Butterfly",
  iconUrl: "https://dodo.ac/np/images/thumb/f/f8/Common_Butterfly_NH_Icon.png/64px-Common_Butterfly_NH_Icon.png",
  location: "Flying",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,9,10,11,12],
      monthsSouth: [3,4,5,6,7,8,9,10,11,12],
      startHour: 4,
      endHour: 19,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug02",
  name: "Yellow Butterfly",
  iconUrl: "https://dodo.ac/np/images/thumb/4/43/Yellow_Butterfly_NH_Icon.png/64px-Yellow_Butterfly_NH_Icon.png",
  location: "Flying",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [3,4,5,6,9,10],
      monthsSouth: [3,4,9,10,11,12],
      startHour: 4,
      endHour: 19,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug03",
  name: "Tiger Butterfly",
  iconUrl: "https://dodo.ac/np/images/thumb/b/b6/Tiger_Butterfly_NH_Icon.png/64px-Tiger_Butterfly_NH_Icon.png",
  location: "Flying",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [3,4,5,6,7,7,8,9],
      monthsSouth: [1,2,3,9,10,11,12],
      startHour: 4,
      endHour: 19,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug04",
  name: "Peacock Butterfly",
  iconUrl: "https://dodo.ac/np/images/thumb/7/77/Peacock_Butterfly_NH_Icon.png/64px-Peacock_Butterfly_NH_Icon.png",
  location: "Flying near blue, purple, and black flowers",
  tcr: 20,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [3,4,5,6],
      monthsSouth: [9,10,11,12],
      startHour: 4,
      endHour: 19,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug05",
  name: "Common Bluebottle",
  iconUrl: "https://dodo.ac/np/images/thumb/2/21/Common_Bluebottle_NH_Icon.png/64px-Common_Bluebottle_NH_Icon.png",
  location: "Flying",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8],
      monthsSouth: [1,2,10,11,12],
      startHour: 4,
      endHour: 19,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug06",
  name: "Paper Kite Butterfly",
  iconUrl: "https://dodo.ac/np/images/thumb/9/9e/Paper_Kite_Butterfly_NH_Icon.png/64px-Paper_Kite_Butterfly_NH_Icon.png",
  location: "Flying near flowers",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 8,
      endHour: 19,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug07",
  name: "Great Purple Emperor",
  iconUrl: "https://dodo.ac/np/images/thumb/8/81/Great_Purple_Emperor_NH_Icon.png/64px-Great_Purple_Emperor_NH_Icon.png",
  location: "Flying near flowers",
  tcr: 50,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [5,6,7,8],
      monthsSouth: [1,2,11,12],
      startHour: 4,
      endHour: 19,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug08",
  name: "Monarch Butterfly",
  iconUrl: "https://dodo.ac/np/images/thumb/3/38/Monarch_Butterfly_NH_Icon.png/64px-Monarch_Butterfly_NH_Icon.png",
  location: "Flying near flowers",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [9,10,11],
      monthsSouth: [3,4,5],
      startHour: 4,
      endHour: 17,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug09",
  name: "Emperor Butterfly",
  iconUrl: "https://dodo.ac/np/images/thumb/c/cf/Emperor_Butterfly_NH_Icon.png/64px-Emperor_Butterfly_NH_Icon.png",
  location: "Flying near flowers",
  tcr: 20,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,6,7,8,9,12],
      monthsSouth: [1,2,3,6,7,8,9,12],
      startHour: 17,
      endHour: 8,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug10",
  name: "Agrias Butterfly",
  iconUrl: "https://dodo.ac/np/images/thumb/6/60/Agrias_Butterfly_NH_Icon.png/64px-Agrias_Butterfly_NH_Icon.png",
  location: "Flying near flowers",
  tcr: 20,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8,9],
      monthsSouth: [1,2,3,10,11,12],
      startHour: 8,
      endHour: 17,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug11",
  name: "Rajah Brooke's Birdwing",
  iconUrl: "https://dodo.ac/np/images/thumb/8/81/Rajah_Brooke%27s_Birdwing_NH_Icon.png/64px-Rajah_Brooke%27s_Birdwing_NH_Icon.png",
  location: "Flying near flowers",
  tcr: 20,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,4,5,6,7,8,9,12],
      monthsSouth: [1,2,3,6,7,8,10,11,12],
      startHour: 8,
      endHour: 17,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug12",
  name: "Queen Alexandra's Birdwing",
  iconUrl: "https://dodo.ac/np/images/thumb/b/bb/Queen_Alexandra%27s_Birdwing_NH_Icon.png/64px-Queen_Alexandra%27s_Birdwing_NH_Icon.png",
  location: "Flying near flowers",
  tcr: 50,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [5,6,7,8,9],
      monthsSouth: [1,2,3,11,12],
      startHour: 8,
      endHour: 16,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug13",
  name: "Moth",
  iconUrl: "https://dodo.ac/np/images/thumb/a/a0/Moth_NH_Icon.png/64px-Moth_NH_Icon.png",
  location: "Flying near light sources",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 19,
      endHour: 4,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug14",
  name: "Atlas Moth",
  iconUrl: "https://dodo.ac/np/images/thumb/7/7f/Atlas_Moth_NH_Icon.png/64px-Atlas_Moth_NH_Icon.png",
  location: "On any tree",
  tcr: 20,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8,9],
      monthsSouth: [1,2,3,10,11,12],
      startHour: 19,
      endHour: 4,
      weather: "any"
    }
  ]
},
{
  id: "bug15",
  name: "Madagascan Sunset Moth",
  iconUrl: "https://dodo.ac/np/images/thumb/6/69/Madagascan_Sunset_Moth_NH_Icon.png/64px-Madagascan_Sunset_Moth_NH_Icon.png",
  location: "Flying near flowers",
  tcr: 20,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8,9],
      monthsSouth: [1,2,3,10,11,12],
      startHour: 8,
      endHour: 16,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug16",
  name: "Long Locust",
  iconUrl: "https://dodo.ac/np/images/thumb/9/9d/Long_Locust_NH_Icon.png/64px-Long_Locust_NH_Icon.png",
  location: "On the ground",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8,9,10,11],
      monthsSouth: [1,2,3,4,5,10,11,12],
      startHour: 8,
      endHour: 19,
      weather: "any"
    }
  ]
},
{
  id: "bug17",
  name: "Migratory Locust",
  iconUrl: "https://dodo.ac/np/images/thumb/d/d0/Migratory_Locust_NH_Icon.png/64px-Migratory_Locust_NH_Icon.png",
  location: "On the ground",
  tcr: 20,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [8,9,10,11],
      monthsSouth: [2,3,4,5],
      startHour: 8,
      endHour: 19,
      weather: "any"
    }
  ]
},
{
  id: "bug18",
  name: "Rice Grasshopper",
  iconUrl: "https://dodo.ac/np/images/thumb/7/78/Rice_Grasshopper_NH_Icon.png/64px-Rice_Grasshopper_NH_Icon.png",
  location: "On the ground",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [8,9,10,11],
      monthsSouth: [2,3,4,5],
      startHour: 8,
      endHour: 19,
      weather: "any"
    }
  ]
},
{
  id: "bug19",
  name: "Grasshopper",
  iconUrl: "https://dodo.ac/np/images/thumb/3/37/Grasshopper_NH_Icon.png/64px-Grasshopper_NH_Icon.png",
  location: "On the ground",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8,9],
      monthsSouth: [1,2,3],
      startHour: 8,
      endHour: 17,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug20",
  name: "Cricket",
  iconUrl: "https://dodo.ac/np/images/thumb/8/8f/Cricket_NH_Icon.png/64px-Cricket_NH_Icon.png",
  location: "On the ground",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [9,10,11],
      monthsSouth: [3,4,5],
      startHour: 17,
      endHour: 8,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug21",
  name: "Bell Cricket",
  iconUrl: "https://dodo.ac/np/images/thumb/4/4a/Bell_Cricket_NH_Icon.png/64px-Bell_Cricket_NH_Icon.png",
  location: "On the ground",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [9,10],
      monthsSouth: [3,4],
      startHour: 17,
      endHour: 8,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug22",
  name: "Mantis",
  iconUrl: "https://dodo.ac/np/images/thumb/4/4e/Mantis_NH_Icon.png/64px-Mantis_NH_Icon.png",
  location: "On flowers",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [3,4,5,6,7,8,9,10,11],
      monthsSouth: [1,2,3,4,5,9,10,11,12],
      startHour: 8,
      endHour: 17,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug23",
  name: "Orchid Mantis",
  iconUrl: "https://dodo.ac/np/images/thumb/a/a7/Orchid_Mantis_NH_Icon.png/64px-Orchid_Mantis_NH_Icon.png",
  location: "On white flowers",
  tcr: 20,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [3,4,5,6,7,8,9,10,11],
      monthsSouth: [1,2,3,4,5,9,10,11,12],
      startHour: 8,
      endHour: 17,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug24",
  name: "Honeybee",
  iconUrl: "https://dodo.ac/np/images/thumb/5/51/Honeybee_NH_Icon.png/64px-Honeybee_NH_Icon.png",
  location: "Flying near flowers",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [3,4,5,6,7],
      monthsSouth: [1,9,10,11,12],
      startHour: 8,
      endHour: 17,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug25",
  name: "Wasp",
  iconUrl: "https://dodo.ac/np/images/thumb/a/a5/Wasp_NH_Icon.png/64px-Wasp_NH_Icon.png",
  location: "Shaking non-fruit hardwood or cedar trees",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "bug26",
  name: "Brown Cicada",
  iconUrl: "https://dodo.ac/np/images/thumb/4/44/Brown_Cicada_NH_Icon.png/64px-Brown_Cicada_NH_Icon.png",
  location: "On hardwood and cedar trees",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 8,
      endHour: 17,
      weather: "any"
    }
  ]
},
{
  id: "bug27",
  name: "Robust Cicada",
  iconUrl: "https://dodo.ac/np/images/thumb/a/a2/Robust_Cicada_NH_Icon.png/64px-Robust_Cicada_NH_Icon.png",
  location: "On hardwood and cedar trees",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 8,
      endHour: 17,
      weather: "any"
    }
  ]
},
{
  id: "bug28",
  name: "Giant Cicada",
  iconUrl: "https://dodo.ac/np/images/thumb/e/e3/Giant_Cicada_NH_Icon.png/64px-Giant_Cicada_NH_Icon.png",
  location: "On hardwood and cedar trees",
  tcr: 20,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 8,
      endHour: 17,
      weather: "any"
    }
  ]
},
{
  id: "bug29",
  name: "Walker Cicada",
  iconUrl: "https://dodo.ac/np/images/thumb/f/f8/Walker_Cicada_NH_Icon.png/64px-Walker_Cicada_NH_Icon.png",
  location: "On hardwood and cedar trees",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [8,9],
      monthsSouth: [2,3],
      startHour: 8,
      endHour: 17,
      weather: "any"
    }
  ]
},
{
  id: "bug30",
  name: "Evening Cicada",
  iconUrl: "https://dodo.ac/np/images/thumb/b/ba/Evening_Cicada_NH_Icon.png/64px-Evening_Cicada_NH_Icon.png",
  location: "On hardwood and cedar trees",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 4,
      endHour: 8,
      weather: "any"
    },
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 16,
      endHour: 19,
      weather: "any"
    }
  ]
},
{
  id: "bug31",
  name: "Cicada Shell",
  iconUrl: "https://dodo.ac/np/images/thumb/d/d1/Cicada_Shell_NH_Icon.png/64px-Cicada_Shell_NH_Icon.png",
  location: "On hardwood and cedar trees",
  tcr: 50,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [8,9],
      monthsSouth: [2,3],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "bug32",
  name: "Red Dragonfly",
  iconUrl: "https://dodo.ac/np/images/thumb/0/09/Red_Dragonfly_NH_Icon.png/64px-Red_Dragonfly_NH_Icon.png",
  location: "Flying near water",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [9,10],
      monthsSouth: [3,4],
      startHour: 8,
      endHour: 19,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug33",
  name: "Darner Dragonfly",
  iconUrl: "https://dodo.ac/np/images/thumb/5/5c/Darner_Dragonfly_NH_Icon.png/64px-Darner_Dragonfly_NH_Icon.png",
  location: "Flying near water",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8,9,10],
      monthsSouth: [1,2,3,4,10,11,12],
      startHour: 8,
      endHour: 17,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug34",
  name: "Banded Dragonfly",
  iconUrl: "https://dodo.ac/np/images/thumb/3/35/Banded_Dragonfly_NH_Icon.png/64px-Banded_Dragonfly_NH_Icon.png",
  location: "Flying near water",
  tcr: 50,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [5,6,7,8,9,10],
      monthsSouth: [1,2,3,4,11,12],
      startHour: 8,
      endHour: 17,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug35",
  name: "Damselfly",
  iconUrl: "https://dodo.ac/np/images/thumb/c/c8/Damselfly_NH_Icon.png/64px-Damselfly_NH_Icon.png",
  location: "Flying near water",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,11,12],
      monthsSouth: [5,6,7,8],
      startHour: 0,
      endHour: 23,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug36",
  name: "Firefly",
  iconUrl: "https://dodo.ac/np/images/thumb/d/d6/Firefly_NH_Icon.png/64px-Firefly_NH_Icon.png",
  location: "Flying near water",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6],
      monthsSouth: [12],
      startHour: 19,
      endHour: 4,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug37",
  name: "Mole Cricket",
  iconUrl: "https://dodo.ac/np/images/thumb/4/4f/Mole_Cricket_NH_Icon.png/64px-Mole_Cricket_NH_Icon.png",
  location: "Underground",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,11,12],
      monthsSouth: [5,6,7,8,9,10,11],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "bug38",
  name: "Pondskater",
  iconUrl: "https://dodo.ac/np/images/thumb/1/1f/Pondskater_NH_Icon.png/64px-Pondskater_NH_Icon.png",
  location: "On rivers and ponds",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [5,6,7,8,9],
      monthsSouth: [1,2,3,11,12],
      startHour: 8,
      endHour: 19,
      weather: "any"
    }
  ]
},
{
  id: "bug39",
  name: "Diving Beetle",
  iconUrl: "https://dodo.ac/np/images/thumb/7/78/Diving_Beetle_NH_Icon.png/64px-Diving_Beetle_NH_Icon.png",
  location: "On rivers and ponds",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [5,6,7,8,9],
      monthsSouth: [1,2,3,11,12],
      startHour: 8,
      endHour: 19,
      weather: "any"
    }
  ]
},
{
  id: "bug40",
  name: "Giant Water Bug",
  iconUrl: "https://dodo.ac/np/images/thumb/8/86/Giant_Water_Bug_NH_Icon.png/64px-Giant_Water_Bug_NH_Icon.png",
  location: "On rivers and ponds",
  tcr: 20,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8,9],
      monthsSouth: [1,2,3,10,11,12],
      startHour: 19,
      endHour: 8,
      weather: "any"
    }
  ]
},
{
  id: "bug41",
  name: "Stinkbug",
  iconUrl: "https://dodo.ac/np/images/thumb/4/42/Stinkbug_NH_Icon.png/64px-Stinkbug_NH_Icon.png",
  location: "On flowers",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [3,4,5,6,7,8,9,10],
      monthsSouth: [1,2,3,4,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug42",
  name: "Man-Faced Stink Bug",
  iconUrl: "https://dodo.ac/np/images/thumb/a/ac/Man-Faced_Stink_Bug_NH_Icon.png/64px-Man-Faced_Stink_Bug_NH_Icon.png",
  location: "On flowers",
  tcr: 20,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [3,4,5,6,7,8,9,10],
      monthsSouth: [1,2,3,4,9,10,11,12],
      startHour: 19,
      endHour: 8,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug43",
  name: "Ladybug",
  iconUrl: "https://dodo.ac/np/images/thumb/0/08/Ladybug_NH_Icon.png/64px-Ladybug_NH_Icon.png",
  location: "On flowers",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [3,4,5,6,10],
      monthsSouth: [4,9,10,11,12],
      startHour: 8,
      endHour: 17,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug44",
  name: "Tiger Beetle",
  iconUrl: "https://dodo.ac/np/images/thumb/5/58/Tiger_Beetle_NH_Icon.png/64px-Tiger_Beetle_NH_Icon.png",
  location: "On the ground",
  tcr: 20,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [2,3,4,5,6,7,8,9,10],
      monthsSouth: [1,2,3,4,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug45",
  name: "Jewel Beetle",
  iconUrl: "https://dodo.ac/np/images/thumb/4/43/Jewel_Beetle_NH_Icon.png/64px-Jewel_Beetle_NH_Icon.png",
  location: "On tree stumps",
  tcr: 20,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8],
      monthsSouth: [1,2,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug46",
  name: "Violin Beetle",
  iconUrl: "https://dodo.ac/np/images/thumb/8/86/Violin_Beetle_NH_Icon.png/64px-Violin_Beetle_NH_Icon.png",
  location: "On tree stumps",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [5,6,9,10,11],
      monthsSouth: [3,4,5,11,12],
      startHour: 0,
      endHour: 23,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug47",
  name: "Citrus Long-Horned Beetle",
  iconUrl: "https://dodo.ac/np/images/thumb/9/9a/Citrus_Long-Horned_Beetle_NH_Icon.png/64px-Citrus_Long-Horned_Beetle_NH_Icon.png",
  location: "On tree stumps",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug48",
  name: "Rosalia Batesi Beetle",
  iconUrl: "https://dodo.ac/np/images/thumb/7/7c/Rosalia_Batesi_Beetle_NH_Icon.png/64px-Rosalia_Batesi_Beetle_NH_Icon.png",
  location: "On tree stumps",
  tcr: 20,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [5,6,7,8,9],
      monthsSouth: [1,2,3,11,12],
      startHour: 0,
      endHour: 23,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug49",
  name: "Blue Weevil Beetle",
  iconUrl: "https://dodo.ac/np/images/thumb/2/20/Blue_Weevil_Beetle_NH_Icon.png/64px-Blue_Weevil_Beetle_NH_Icon.png",
  location: "On palm trees",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "bug50",
  name: "Dung Beetle",
  iconUrl: "https://dodo.ac/np/images/thumb/c/c4/Dung_Beetle_NH_Icon.png/64px-Dung_Beetle_NH_Icon.png",
  location: "Pushing snowballs",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,12],
      monthsSouth: [6,7,8],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "bug51",
  name: "Earth-Boring Dung Beetle",
  iconUrl: "https://dodo.ac/np/images/thumb/5/53/Earth-Boring_Dung_Beetle_NH_Icon.png/64px-Earth-Boring_Dung_Beetle_NH_Icon.png",
  location: "On the ground",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8,9],
      monthsSouth: [1,2,3],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "bug52",
  name: "Scarab Beetle",
  iconUrl: "https://dodo.ac/np/images/thumb/e/ee/Scarab_Beetle_NH_Icon.png/64px-Scarab_Beetle_NH_Icon.png",
  location: "On any tree",
  tcr: 50,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 23,
      endHour: 8,
      weather: "any"
    }
  ]
},
{
  id: "bug53",
  name: "Drone Beetle",
  iconUrl: "https://dodo.ac/np/images/thumb/4/48/Drone_Beetle_NH_Icon.png/64px-Drone_Beetle_NH_Icon.png",
  location: "On any tree",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8],
      monthsSouth: [1,2,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "bug54",
  name: "Goliath Beetle",
  iconUrl: "https://dodo.ac/np/images/thumb/3/3e/Goliath_Beetle_NH_Icon.png/64px-Goliath_Beetle_NH_Icon.png",
  location: "On palm trees",
  tcr: 100,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8,9],
      monthsSouth: [1,2,3,12],
      startHour: 17,
      endHour: 8,
      weather: "any"
    }
  ]
},
{
  id: "bug55",
  name: "Saw Stag",
  iconUrl: "https://dodo.ac/np/images/thumb/0/03/Saw_Stag_NH_Icon.png/64px-Saw_Stag_NH_Icon.png",
  location: "On any tree",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "bug56",
  name: "Miyama Stag",
  iconUrl: "https://dodo.ac/np/images/thumb/0/0a/Miyama_Stag_NH_Icon.png/64px-Miyama_Stag_NH_Icon.png",
  location: "On any tree",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "bug57",
  name: "Giant Stag",
  iconUrl: "https://dodo.ac/np/images/thumb/0/08/Giant_Stag_NH_Icon.png/64px-Giant_Stag_NH_Icon.png",
  location: "On any tree",
  tcr: 50,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 23,
      endHour: 8,
      weather: "any"
    }
  ]
},
{
  id: "bug58",
  name: "Rainbow Stag",
  iconUrl: "https://dodo.ac/np/images/thumb/f/f7/Rainbow_Stag_NH_Icon.png/64px-Rainbow_Stag_NH_Icon.png",
  location: "On any tree",
  tcr: 50,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8,9],
      monthsSouth: [1,2,3,12],
      startHour: 19,
      endHour: 8,
      weather: "any"
    }
  ]
},
{
  id: "bug59",
  name: "Cyclommatus Stag",
  iconUrl: "https://dodo.ac/np/images/thumb/a/a0/Cyclommatus_Stag_NH_Icon.png/64px-Cyclommatus_Stag_NH_Icon.png",
  location: "On palm trees",
  tcr: 100,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 17,
      endHour: 8,
      weather: "any"
    }
  ]
},
{
  id: "bug60",
  name: "Golden Stag",
  iconUrl: "https://dodo.ac/np/images/thumb/b/ba/Golden_Stag_NH_Icon.png/64px-Golden_Stag_NH_Icon.png",
  location: "On palm trees",
  tcr: 100,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 17,
      endHour: 8,
      weather: "any"
    }
  ]
},
{
  id: "bug61",
  name: "Giraffe Stag",
  iconUrl: "https://dodo.ac/np/images/thumb/c/c7/Giraffe_Stag_NH_Icon.png/64px-Giraffe_Stag_NH_Icon.png",
  location: "On palm trees",
  tcr: 100,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 17,
      endHour: 8,
      weather: "any"
    }
  ]
},
{
  id: "bug62",
  name: "Horned Dynastid",
  iconUrl: "https://dodo.ac/np/images/thumb/1/10/Horned_Dynastid_NH_Icon.png/64px-Horned_Dynastid_NH_Icon.png",
  location: "On any tree",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 17,
      endHour: 8,
      weather: "any"
    }
  ]
},
{
  id: "bug63",
  name: "Horned Atlas",
  iconUrl: "https://dodo.ac/np/images/thumb/2/2a/Horned_Atlas_NH_Icon.png/64px-Horned_Atlas_NH_Icon.png",
  location: "On palm trees",
  tcr: 100,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 17,
      endHour: 8,
      weather: "any"
    }
  ]
},
{
  id: "bug64",
  name: "Horned Elephant",
  iconUrl: "https://dodo.ac/np/images/thumb/e/ea/Horned_Elephant_NH_Icon.png/64px-Horned_Elephant_NH_Icon.png",
  location: "On palm trees",
  tcr: 100,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 17,
      endHour: 8,
      weather: "any"
    }
  ]
},
{
  id: "bug65",
  name: "Horned Hercules",
  iconUrl: "https://dodo.ac/np/images/thumb/2/21/Horned_Hercules_NH_Icon.png/64px-Horned_Hercules_NH_Icon.png",
  location: "On palm trees",
  tcr: 100,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8],
      monthsSouth: [1,2],
      startHour: 17,
      endHour: 8,
      weather: "any"
    }
  ]
},
{
  id: "bug66",
  name: "Walking Stick",
  iconUrl: "https://dodo.ac/np/images/thumb/5/58/Walking_Stick_NH_Icon.png/64px-Walking_Stick_NH_Icon.png",
  location: "On any tree",
  tcr: 20,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8,9,10,11],
      monthsSouth: [1,2,3,4,5],
      startHour: 4,
      endHour: 8,
      weather: "any"
    },
    {
      monthsNorth: [7,8,9,10,11],
      monthsSouth: [1,2,3,4,5],
      startHour: 17,
      endHour: 19,
      weather: "any"
    }
  ]
},
{
  id: "bug67",
  name: "Walking Leaf",
  iconUrl: "https://dodo.ac/np/images/thumb/b/b9/Walking_Leaf_NH_Icon.png/64px-Walking_Leaf_NH_Icon.png",
  location: "Disguised under trees",
  tcr: 20,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [7,8,9],
      monthsSouth: [1,2,3],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "bug68",
  name: "Bagworm",
  iconUrl: "https://dodo.ac/np/images/thumb/1/17/Bagworm_NH_Icon.png/64px-Bagworm_NH_Icon.png",
  location: "Shaking hardwood and cedar trees",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "bug69",
  name: "Ant",
  iconUrl: "https://dodo.ac/np/images/thumb/5/5d/Ant_NH_Icon.png/64px-Ant_NH_Icon.png",
  location: "On/near spoiled turnips/candy/lollipops",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "bug70",
  name: "Hermit Crab",
  iconUrl: "https://dodo.ac/np/images/thumb/6/6b/Hermit_Crab_NH_Icon.png/64px-Hermit_Crab_NH_Icon.png",
  location: "Disguised on shoreline",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 19,
      endHour: 8,
      weather: "any"
    }
  ]
},
{
  id: "bug71",
  name: "Wharf Roach",
  iconUrl: "https://dodo.ac/np/images/thumb/1/1f/Wharf_Roach_NH_Icon.png/64px-Wharf_Roach_NH_Icon.png",
  location: "On beach rocks",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "bug72",
  name: "Fly",
  iconUrl: "https://dodo.ac/np/images/thumb/1/15/Fly_NH_Icon.png/64px-Fly_NH_Icon.png",
  location: "Flying near trash or rotten turnips",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "bug73",
  name: "Mosquito",
  iconUrl: "https://dodo.ac/np/images/thumb/8/84/Mosquito_NH_Icon.png/64px-Mosquito_NH_Icon.png",
  location: "Flying",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [6,7,8,9],
      monthsSouth: [1,2,3,12],
      startHour: 17,
      endHour: 4,
      weather: "anyExceptRain"
    }
  ]
},
{
  id: "bug74",
  name: "Flea",
  iconUrl: "https://dodo.ac/np/images/thumb/8/89/Flea_NH_Icon.png/64px-Flea_NH_Icon.png",
  location: "On villagers",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8,9,10,11],
      monthsSouth: [1,2,3,4,5,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "bug75",
  name: "Snail",
  iconUrl: "https://dodo.ac/np/images/thumb/e/e9/Snail_NH_Icon.png/64px-Snail_NH_Icon.png",
  location: "On rocks and bushes",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "rain"
    }
  ]
},
{
  id: "bug76",
  name: "Pill Bug",
  iconUrl: "https://dodo.ac/np/images/thumb/b/b9/Pill_Bug_NH_Icon.png/64px-Pill_Bug_NH_Icon.png",
  location: "From hitting rocks",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,9,10,11,12],
      monthsSouth: [3,4,5,6,7,8,9,10,11,12],
      startHour: 23,
      endHour: 16,
      weather: "any"
    }
  ]
},
{
  id: "bug77",
  name: "Centipede",
  iconUrl: "https://dodo.ac/np/images/thumb/d/d2/Centipede_NH_Icon.png/64px-Centipede_NH_Icon.png",
  location: "From hitting rocks",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,9,10,11,12],
      monthsSouth: [3,4,5,6,7,8,9,10,11,12],
      startHour: 16,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "bug78",
  name: "Spider",
  iconUrl: "https://dodo.ac/np/images/thumb/e/e0/Spider_NH_Icon.png/64px-Spider_NH_Icon.png",
  location: "Shaking trees",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 19,
      endHour: 8,
      weather: "any"
    }
  ]
},
{
  id: "bug79",
  name: "Tarantula",
  iconUrl: "https://dodo.ac/np/images/thumb/b/b5/Tarantula_NH_Icon.png/64px-Tarantula_NH_Icon.png",
  location: "On the ground",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,11,12],
      monthsSouth: [5,6,7,8,9,10],
      startHour: 19,
      endHour: 4,
      weather: "any"
    }
  ]
},
{
  id: "bug80",
  name: "Scorpion",
  iconUrl: "https://dodo.ac/np/images/thumb/9/95/Scorpion_NH_Icon.png/64px-Scorpion_NH_Icon.png",
  location: "On the ground",
  tcr: 0,
  shadowSize: null,
  shadowSpeed: null,
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8,9,10],
      monthsSouth: [1,2,3,4,11,12],
      startHour: 19,
      endHour: 4,
      weather: "any"
    }
  ]
},
  ],
  seaCreatures: [
    {
  id: "seaCreature01",
  name: "Seaweed",
  iconUrl: "https://dodo.ac/np/images/thumb/8/8c/Seaweed_NH_Icon.png/64px-Seaweed_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Large",
  shadowSpeed: "Stationary",
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,10,11,12],
      monthsSouth: [1,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature02",
  name: "Sea Grapes",
  iconUrl: "https://dodo.ac/np/images/thumb/e/e7/Sea_Grapes_NH_Icon.png/64px-Sea_Grapes_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: "Stationary",
  spawnRules: [
    {
      monthsNorth: [6,7,8,9],
      monthsSouth: [1,2,3,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature03",
  name: "Sea Cucumber",
  iconUrl: "https://dodo.ac/np/images/thumb/9/9b/Sea_Cucumber_NH_Icon.png/64px-Sea_Cucumber_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Medium",
  shadowSpeed: "Very slow",
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,11,12],
      monthsSouth: [5,6,7,8,9,10],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature04",
  name: "Sea Pig",
  iconUrl: "https://dodo.ac/np/images/thumb/a/a9/Sea_Pig_NH_Icon.png/64px-Sea_Pig_NH_Icon.png",
  location: null,
  tcr: 80,
  shadowSize: "Small",
  shadowSpeed: "Very fast",
  spawnRules: [
    {
      monthsNorth: [1,2,11,12],
      monthsSouth: [5,6,7,8],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature05",
  name: "Sea Star",
  iconUrl: "https://dodo.ac/np/images/thumb/6/6c/Sea_Star_NH_Icon.png/64px-Sea_Star_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: "Very slow",
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature06",
  name: "Sea Urchin",
  iconUrl: "https://dodo.ac/np/images/thumb/9/9c/Sea_Urchin_NH_Icon.png/64px-Sea_Urchin_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: "Slow",
  spawnRules: [
    {
      monthsNorth: [5,6,7,8,9],
      monthsSouth: [1,2,3,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature07",
  name: "Slate Pencil Urchin",
  iconUrl: "https://dodo.ac/np/images/thumb/0/05/Slate_Pencil_Urchin_NH_Icon.png/64px-Slate_Pencil_Urchin_NH_Icon.png",
  location: null,
  tcr: 20,
  shadowSize: "Medium",
  shadowSpeed: "Medium",
  spawnRules: [
    {
      monthsNorth: [5,6,7,8,9],
      monthsSouth: [1,2,3,11,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature08",
  name: "Sea Anemone",
  iconUrl: "https://dodo.ac/np/images/thumb/e/e9/Sea_Anemone_NH_Icon.png/64px-Sea_Anemone_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Large",
  shadowSpeed: "Stationary",
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature09",
  name: "Moon Jellyfish",
  iconUrl: "https://dodo.ac/np/images/thumb/f/f9/Moon_Jellyfish_NH_Icon.png/64px-Moon_Jellyfish_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: "Very slow",
  spawnRules: [
    {
      monthsNorth: [7,8,9],
      monthsSouth: [1,2,3],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature10",
  name: "Sea Slug",
  iconUrl: "https://dodo.ac/np/images/thumb/5/54/Sea_Slug_NH_Icon.png/64px-Sea_Slug_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Tiny",
  shadowSpeed: "Very slow",
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature11",
  name: "Pearl Oyster",
  iconUrl: "https://dodo.ac/np/images/thumb/0/0a/Pearl_Oyster_NH_Icon.png/64px-Pearl_Oyster_NH_Icon.png",
  location: null,
  tcr: 20,
  shadowSize: "Small",
  shadowSpeed: "Medium",
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature12",
  name: "Mussel",
  iconUrl: "https://dodo.ac/np/images/thumb/6/6c/Mussel_NH_Icon.png/64px-Mussel_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: "Slow",
  spawnRules: [
    {
      monthsNorth: [6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature13",
  name: "Oyster",
  iconUrl: "https://dodo.ac/np/images/thumb/4/4d/Oyster_NH_Icon.png/64px-Oyster_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: "Slow",
  spawnRules: [
    {
      monthsNorth: [1,2,9,10,11,12],
      monthsSouth: [3,4,5,6,7,8],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature14",
  name: "Scallop",
  iconUrl: "https://dodo.ac/np/images/thumb/5/55/Scallop_NH_Icon.png/64px-Scallop_NH_Icon.png",
  location: null,
  tcr: 5,
  shadowSize: "Medium",
  shadowSpeed: "Slow",
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature15",
  name: "Whelk",
  iconUrl: "https://dodo.ac/np/images/thumb/5/5e/Whelk_NH_Icon.png/64px-Whelk_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: "Slow",
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature16",
  name: "Turban Shell",
  iconUrl: "https://dodo.ac/np/images/thumb/9/93/Turban_Shell_NH_Icon.png/64px-Turban_Shell_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: "Slow",
  spawnRules: [
    {
      monthsNorth: [3,4,5,9,10,11,12],
      monthsSouth: [3,4,5,6,9,10,11],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature17",
  name: "Abalone",
  iconUrl: "https://dodo.ac/np/images/thumb/0/04/Abalone_NH_Icon.png/64px-Abalone_NH_Icon.png",
  location: null,
  tcr: 20,
  shadowSize: "Medium",
  shadowSpeed: "Medium",
  spawnRules: [
    {
      monthsNorth: [1,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature18",
  name: "Gigas Giant Clam",
  iconUrl: "https://dodo.ac/np/images/thumb/c/ca/Gigas_Giant_Clam_NH_Icon.png/64px-Gigas_Giant_Clam_NH_Icon.png",
  location: null,
  tcr: 80,
  shadowSize: "Very Large",
  shadowSpeed: "Very Fast",
  spawnRules: [
    {
      monthsNorth: [5,6,7,8,9],
      monthsSouth: [1,2,3,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature19",
  name: "Chambered Nautilus",
  iconUrl: "https://dodo.ac/np/images/thumb/9/98/Chambered_Nautilus_NH_Icon.png/64px-Chambered_Nautilus_NH_Icon.png",
  location: null,
  tcr: 20,
  shadowSize: "Medium",
  shadowSpeed: "Medium",
  spawnRules: [
    {
      monthsNorth: [3,4,5,6,9,10,11],
      monthsSouth: [3,4,5,9,10,11,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature20",
  name: "Octopus",
  iconUrl: "https://dodo.ac/np/images/thumb/5/58/Octopus_NH_Icon.png/64px-Octopus_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Medium",
  shadowSpeed: "Slow",
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature21",
  name: "Umbrella Octopus",
  iconUrl: "https://dodo.ac/np/images/thumb/a/ac/Umbrella_Octopus_NH_Icon.png/64px-Umbrella_Octopus_NH_Icon.png",
  location: null,
  tcr: 40,
  shadowSize: "Small",
  shadowSpeed: "Fast",
  spawnRules: [
    {
      monthsNorth: [3,4,5,9,10,11],
      monthsSouth: [3,4,5,9,10,11],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature22",
  name: "Vampire Squid",
  iconUrl: "https://dodo.ac/np/images/thumb/a/ac/Vampire_Squid_NH_Icon.png/64px-Vampire_Squid_NH_Icon.png",
  location: null,
  tcr: 80,
  shadowSize: "Medium",
  shadowSpeed: "Very fast",
  spawnRules: [
    {
      monthsNorth: [5,6,7,8],
      monthsSouth: [1,2,11,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature23",
  name: "Firefly Squid",
  iconUrl: "https://dodo.ac/np/images/thumb/d/d0/Firefly_Squid_NH_Icon.png/64px-Firefly_Squid_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Tiny",
  shadowSpeed: "Slow",
  spawnRules: [
    {
      monthsNorth: [3,4,5,6],
      monthsSouth: [9,10,11,12],
      startHour: 21,
      endHour: 4,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature24",
  name: "Gazami Crab",
  iconUrl: "https://dodo.ac/np/images/thumb/6/60/Gazami_Crab_NH_Icon.png/64px-Gazami_Crab_NH_Icon.png",
  location: null,
  tcr: 20,
  shadowSize: "Medium",
  shadowSpeed: "Medium",
  spawnRules: [
    {
      monthsNorth: [6,7,8,9,10,11],
      monthsSouth: [1,2,3,4,5,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature25",
  name: "Dungeness Crab",
  iconUrl: "https://dodo.ac/np/images/thumb/6/65/Dungeness_Crab_NH_Icon.png/64px-Dungeness_Crab_NH_Icon.png",
  location: null,
  tcr: 20,
  shadowSize: "Medium",
  shadowSpeed: "Medium",
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,11,12],
      monthsSouth: [5,6,7,8,9,10,11],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature26",
  name: "Snow Crab",
  iconUrl: "https://dodo.ac/np/images/thumb/7/78/Snow_Crab_NH_Icon.png/64px-Snow_Crab_NH_Icon.png",
  location: null,
  tcr: 40,
  shadowSize: "Large",
  shadowSpeed: "Fast",
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,11,12],
      monthsSouth: [5,6,7,8,9,10],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature27",
  name: "Red King Crab",
  iconUrl: "https://dodo.ac/np/images/thumb/9/9d/Red_King_Crab_NH_Icon.png/64px-Red_King_Crab_NH_Icon.png",
  location: null,
  tcr: 80,
  shadowSize: "Large",
  shadowSpeed: "Very fast",
  spawnRules: [
    {
      monthsNorth: [1,2,3,11,12],
      monthsSouth: [5,6,7,8,9],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature28",
  name: "Acorn Barnacle",
  iconUrl: "https://dodo.ac/np/images/thumb/a/a4/Acorn_Barnacle_NH_Icon.png/64px-Acorn_Barnacle_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Tiny",
  shadowSpeed: "Stationary",
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature29",
  name: "Spider Crab",
  iconUrl: "https://dodo.ac/np/images/thumb/f/f3/Spider_Crab_NH_Icon.png/64px-Spider_Crab_NH_Icon.png",
  location: null,
  tcr: 80,
  shadowSize: "Very large",
  shadowSpeed: "Very fast",
  spawnRules: [
    {
      monthsNorth: [3,4],
      monthsSouth: [9,10],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature30",
  name: "Tiger Prawn",
  iconUrl: "https://dodo.ac/np/images/thumb/6/65/Tiger_Prawn_NH_Icon.png/64px-Tiger_Prawn_NH_Icon.png",
  location: null,
  tcr: 20,
  shadowSize: "Small",
  shadowSpeed: "Medium",
  spawnRules: [
    {
      monthsNorth: [6,7,8,9],
      monthsSouth: [1,2,3,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature31",
  name: "Sweet Shrimp",
  iconUrl: "https://dodo.ac/np/images/thumb/d/d3/Sweet_Shrimp_NH_Icon.png/64px-Sweet_Shrimp_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: "Slow",
  spawnRules: [
    {
      monthsNorth: [1,2,9,10,11,12],
      monthsSouth: [3,4,5,6,7,8],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature32",
  name: "Mantis Shrimp",
  iconUrl: "https://dodo.ac/np/images/thumb/7/7d/Mantis_Shrimp_NH_Icon.png/64px-Mantis_Shrimp_NH_Icon.png",
  location: null,
  tcr: 20,
  shadowSize: "Small",
  shadowSpeed: "Medium",
  spawnRules: [
    {
      monthsNorth: [1,2,3,4,5,6,7,8,9,10,11,12],
      monthsSouth: [1,2,3,4,5,6,7,8,9,10,11,12],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature33",
  name: "Spiny Lobster",
  iconUrl: "https://dodo.ac/np/images/thumb/8/8c/Spiny_Lobster_NH_Icon.png/64px-Spiny_Lobster_NH_Icon.png",
  location: null,
  tcr: 40,
  shadowSize: "Large",
  shadowSpeed: "Fast",
  spawnRules: [
    {
      monthsNorth: [10,11,12],
      monthsSouth: [4,5,6],
      startHour: 21,
      endHour: 4,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature34",
  name: "Lobster",
  iconUrl: "https://dodo.ac/np/images/thumb/a/a9/Lobster_NH_Icon.png/64px-Lobster_NH_Icon.png",
  location: null,
  tcr: 40,
  shadowSize: "Large",
  shadowSpeed: "Fast",
  spawnRules: [
    {
      monthsNorth: [1,4,5,6,12],
      monthsSouth: [6,7,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature35",
  name: "Giant Isopod",
  iconUrl: "https://dodo.ac/np/images/thumb/0/00/Giant_Isopod_NH_Icon.png/64px-Giant_Isopod_NH_Icon.png",
  location: null,
  tcr: 80,
  shadowSize: "Medium",
  shadowSpeed: "Very fast",
  spawnRules: [
    {
      monthsNorth: [7,8,9,10],
      monthsSouth: [1,2,3,4],
      startHour: 9,
      endHour: 16,
      weather: "any"
    },
    {
      monthsNorth: [7,8,9,10],
      monthsSouth: [1,2,3,4],
      startHour: 21,
      endHour: 4,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature36",
  name: "Horseshoe Crab",
  iconUrl: "https://dodo.ac/np/images/thumb/5/5b/Horseshoe_Crab_NH_Icon.png/64px-Horseshoe_Crab_NH_Icon.png",
  location: null,
  tcr: 20,
  shadowSize: "Medium",
  shadowSpeed: "Medium",
  spawnRules: [
    {
      monthsNorth: [7,8,9],
      monthsSouth: [1,2,3],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature37",
  name: "Sea Pineapple",
  iconUrl: "https://dodo.ac/np/images/thumb/6/61/Sea_Pineapple_NH_Icon.png/64px-Sea_Pineapple_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: "Slow",
  spawnRules: [
    {
      monthsNorth: [4,5,6,7,8],
      monthsSouth: [1,2,10,11,12],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature38",
  name: "Spotted Garden Eel",
  iconUrl: "https://dodo.ac/np/images/thumb/a/aa/Spotted_Garden_Eel_NH_Icon.png/64px-Spotted_Garden_Eel_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Small",
  shadowSpeed: "Slow",
  spawnRules: [
    {
      monthsNorth: [5,6,7,8,9,10],
      monthsSouth: [1,2,3,4,11,12],
      startHour: 4,
      endHour: 21,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature39",
  name: "Flatworm",
  iconUrl: "https://dodo.ac/np/images/thumb/0/07/Flatworm_NH_Icon.png/64px-Flatworm_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Tiny",
  shadowSpeed: "Very slow",
  spawnRules: [
    {
      monthsNorth: [8,9],
      monthsSouth: [2,3],
      startHour: 16,
      endHour: 9,
      weather: "any"
    }
  ]
},
{
  id: "seaCreature40",
  name: "Venus Flower Basket",
  iconUrl: "https://dodo.ac/np/images/thumb/6/6a/Venus%27_Flower_Basket_NH_Icon.png/64px-Venus%27_Flower_Basket_NH_Icon.png",
  location: null,
  tcr: 0,
  shadowSize: "Medium",
  shadowSpeed: "Fast",
  spawnRules: [
    {
      monthsNorth: [1,2,10,11,12],
      monthsSouth: [4,5,6,7,8],
      startHour: 0,
      endHour: 23,
      weather: "any"
    }
  ]
},
  ]
};
