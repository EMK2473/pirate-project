const shipwrecks = [

  { name: "Empress of Ireland", rarity: "Epic", image: '/ShipWreckPictures/EmpressOfIreland1.png', reasonForSinking: "Collision", yearSunk: "1914", country: "United Kingdom", bodyOfWater: "Gulf of Saint Lawrence", casualties: "1012", coordinates: {lat: "48.618056", lng: "68.401389"}, shipWreckId: "1", treasure: ["🏎	", "🍴", "☠", "🌫", "💍"]},

  { name: "Gunilda", rarity: "Common", image: "/ShipWreckPictures/Gunilda1.png", reasonForSinking: "Ran aground and sank", yearSunk: "1911", country: "United States", bodyOfWater: "Lake Superior", casualties: "0", coordinates: {lat: "48.784167", lng: "87.422222"}, shipWreckId: "2", treasure:["☠", "💍", "🍴", "🐟", "🐚"]}, 

  { name: "HMHS Britannic", rarity: "Common", image: "/ShipWreckPictures/HMHSBritannic1.png", reasonForSinking: "War/battle damage", yearSunk: "1916", country: "United Kingdom", bodyOfWater: "Aegean Sea", casualties: "30", coordinates: {lat: "37.701389", lng: "24.283889"}, shipWreckId: "3", treasure:["☠", "💊", "🩹", "💉", "⛑"]},

  { name: "The Zeila Shipwreck", rarity: "Common", image: "/ShipWreckPictures/Zeila1.png", reasonForSinking: "Collision", yearSunk: "2008", country: "Namibia", bodyOfWater: "Atlantic Ocean", casualties: "N/A", coordinates: {lat: "-22.24024396889257", lng: "14.353560089858977"}, shipWreckId: "4", treasure:["☠", "🐟", "🐠", "🐦", "🏖"]},

  { name: "SS Daniel J. Morrell", rarity: "Uncommon", image: "/ShipWreckPictures/DanielJMorrell1.png", reasonForSinking: "Weather", yearSunk: "1966", country: "United States", bodyOfWater: "Lake Huron", casualties: "28", coordinates: {lat: "43.850", lng:"82.590"}, shipWreckId: "5", treasure:["☠", "🌊", "🌩", "🌀", "🚣‍♂️"]},

  { name: "Vasa", rarity: "Rare", image: "/ShipWreckPictures/Vasa1.png", reasonForSinking: "Flawed Design", yearSunk: "1628", country: "Sweden", bodyOfWater: "Stockholm Harbor", casualties: "15", coordinates: {lat: "59.32333204", lng: "18.087999648"}, shipWreckId: "6", treasure:["☠", "🏺", "🧍‍♂️", "🦀", "👑"]},

  { name: "USS Indianapolis", rarity: "Epic", image: "/ShipWreckPictures/USSIndianapolis1.png", reasonForSinking: "War/battle damage", yearSunk: "1945", country: "United States", bodyOfWater: "Philippine Sea", casualties: "879", coordinates: {lat: "12.0333332", lng: "134.7999968"}, shipWreckId: "7", treasure:["☠", "🦈", "🏊‍♂️", "⚔", "🔫", "☢"]},

  { name: "Mary Rose", rarity: "Rare", image: "/ShipWreckPictures/MaryRose1.png", reasonForSinking: "War/battle damage", yearSunk: "1545", country: "United Kingdom", bodyOfWater: "The Solent", casualties: "179", coordinates: {lat: "50.7666636", lng: "-1.0999996"}, shipWreckId: "8", treasure:["☠", "🎲", "🎷", "🥾", "👞"]},

  { name: "MS Estonia", rarity: "Common", image: "/ShipWreckPictures/MSEstonia1.png", reasonForSinking: "Onboard accident", yearSunk: "1994", country: "Estonia", bodyOfWater: "Baltic Sea", casualties: "850", coordinates: {lat: "59.38331", lng: "21.68494"}, shipWreckId: "9", treasure:["🏎	", "☠", "🌩", "🌀", "🚪"]},

  { name: "Queen Anne's Revenge", rarity: "Exotic", image: "/ShipWreckPictures/QueenAnnesRevenge1.png", reasonForSinking: "Ran aground", yearSunk: "1718", country: "United Kingdom", bodyOfWater: "Atlantic Ocean", casualties: "0", coordinates: {lat: "34.69801", lng: "-76.67048"}, shipWreckId: "10", treasure:["☠", "🏴‍☠️", "🏖", "💰", "💎", "💍"]},

  { name: "RMS Lustitania", rarity: "Epic", image: "/ShipWreckPictures/RMSLusitania1.png", reasonForSinking: "War/battle damage", yearSunk: "1915", country: "United Kingdom", bodyOfWater: "Atlantic Ocean", casualties: "1198", coordinates: {lat: "51.41664", lng: "-8.54993"}, shipWreckId: "11", treasure:["☠", "👪", "👠", "🚫", "⌛"]},

  { name: "HMS Terror", rarity: "Common", image: "/ShipWreckPictures/HMSTerror1.png", reasonForSinking: "Icebound/abandoned", yearSunk: "1848", country: "United Kingdom", bodyOfWater: "Arctic Ocean", casualties: "129", coordinates: {lat: "68.86126", lng: "-98.92031"}, shipWreckId: "12", treasure:["☠", "🍖", "🧊", "👻", "⚠"]},

  { name: "HMS Erebus", rarity: "Common", image: "/ShipWreckPictures/HMSErebus1.png", reasonForSinking: "Icebound/abandoned", yearSunk: "1848", country: "United Kingdom", bodyOfWater: "Arctic Ocean", casualties: "129", coordinates: {lat: "68.24054", lng: "-98.87357"}, shipWreckId: "13", treasure:["☠", "🍖", "🧊", "👻", "⚠"]},

  { name: "USS Monitor", rarity: "Common", image: "/ShipWreckPictures/USSMonitor1.png", reasonForSinking: "Weather", yearSunk: "1862", country: "United States", bodyOfWater: "North ATlantic Ocean", casualties: "16", coordinates: {lat: "35.00167", lng: "-75.40639"}, shipWreckId: "14", treasure:["☠", "🌩", "🌀", "🔫", "📷"]},

  { name: "MV Doña Paz", rarity: "Common", image: "/ShipWreckPictures/MVDonaPaz1.png", reasonForSinking: "Collision", yearSunk: "1987", country: "Philippines", bodyOfWater: "Tablas Strait", casualties: "4385", coordinates: "N/A", shipWreckId: "15", treasure:["☠", "🔥", "💥", "🏊", "⚠"]},

  { name: "Battleship Yamato", rarity: "Epic", image: "/ShipWreckPictures/Yamato1.png", reasonForSinking: "War/battle damage", yearSunk: "1945", country: "Japan", bodyOfWater: "East China Sea", casualties: "3055", coordinates: {lat: "30.366667", lng: "128.066667"}, shipWreckId: "16", treasure:["☠", "🔫", "💣", "⚔", "🎖", "🎎"]},

  { name: "The White Ship", rarity: "Rare", image: "/ShipWreckPictures/TheWhiteShip1.png", reasonForSinking: "Collision", yearSunk: "1120", country: "United Kingdom", bodyOfWater: "English Channel", casualties: "300", coordinates: "N/A", shipWreckId: "17", treasure:["☠", "🏺", "👑", "💥", "⛵",]},

  { name: "SS Edmund Fitzgerald", rarity: "UnCommon", image: "/ShipWreckPictures/EdmundFitzgerald1.png", reasonForSinking: "Weather/Main Hatchway Caving In", yearSunk: "1975", country: "United States", bodyOfWater: "Lake Superior", casualties: "29", coordinates: {lat: "46.99887", lng: "-85.10979"}, shipWreckId: "18", treasure:["☠", "🌩", "🌀", "🌊", "🔔"]},

  { name: "RFS Moskva", rarity: "Rare", image: "/ShipWreckPictures/RSFMoskva1.png", reasonForSinking: "War/battle damage", yearSunk: "2022", country: "Russia", bodyOfWater: "Black Sea", casualties: "0", coordinates: {lat: "45.2951", lng: "30.8789"}, shipWreckId: "19", treasure:["☠", "🔫", "🎖", "☢", "💣"]},

  { name: "Felicity Ace", rarity: "Legendary", image: "/ShipWreckPictures/FelicityAce1.png", reasonForSinking: "Onboard accident", yearSunk: "2022", country: "Japan", bodyOfWater: "Atlantic Ocean", casualties: "0", coordinates: {lat: "37.52861", lng: "28.98560"}, shipWreckId: "20", treasure:["🏎	", "☠", "🔥", "🚗", "🚜"]},

  { name: "MV Wilhelm Gustloff", rarity: "Uncommon", image: "/ShipWreckPictures/MVWilhelmGustav1.png", reasonForSinking: "War/battle damage", yearSunk: "1945", country: "Germany", bodyOfWater: "Baltic Sea", casualties: "9600", coordinates: {lat: "55.07328", lng: "17.42185"}, shipWreckId: "21", treasure:["☠", "🎖", "☠☠", "👨‍👩‍👧‍👦", "🔫"]},

  { name: "RMS Titanic", rarity: "Legendary", image: "/ShipWreckPictures/RMSTitanic1.png", reasonForSinking: "Collision", yearSunk: "1912", country: "United Kingdom", bodyOfWater: "Atlantic Ocean", casualties: "1500", coordinates: {lat: "41.73297", lng: "-49.94703"}, shipWreckId: "22", treasure:["☠", "🧊", "👞", "🚣‍♀️", "💎", "🚪", "🎮"]},

  { name: "USS Rodolph", rarity: "Common", image: "/ShipWreckPictures/USSRodolph1.png", reasonForSinking: "War/battle damage", yearSunk: "1865", country: "United States", bodyOfWater: "Blakeley River", casualties: "4", coordinates: "N/A", shipWreckId: "23", treasure:["☠", "🎖", "🔫", "💥", "💣"]},
];


export default shipwrecks;