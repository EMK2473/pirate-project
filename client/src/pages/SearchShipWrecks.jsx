import React, { useState, useEffect } from "react";
import { Container, Col, Form, Button, Card, Row } from "react-bootstrap";
import ShipwreckMap from "../components/ShipwreckMap";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { SAVE_SHIPWRECK } from "../utils/mutations";

// const shipwrecks = [
//   {
//     name: "Empress of Ireland",
//     image: "/ShipWreckPictures/EmpressOfIreland1.png",
//     reasonForSinking: "Collision",
//     yearSunk: "1914",
//     country: "United Kingdom",
//     bodyOfWater: "Gulf of Saint Lawrence",
//     casualties: "1012",
//     coordinates: { latitude: 48.625, longitude: -68.40833 },
//   },

//   {
//     name: "Gunilda",
//     image: "/ShipWreckPictures/Gunilda1.png",
//     reasonForSinking: "Ran aground and sank",
//     yearSunk: "1911",
//     country: "United States",
//     bodyOfWater: "Lake Superior",
//     casualties: "0",
//     coordinates: { latitude: 48.78333, longitude: -87.42222 },
//   },

//   {
//     name: "HMHS Britannic",
//     image: "/ShipWreckPictures/HMHSBritannic1.png",
//     reasonForSinking: "War/battle damage",
//     yearSunk: "1916",
//     country: "United Kingdom",
//     bodyOfWater: "Aegean Sea",
//     casualties: "30",
//     coordinates: { latitude: 37.70139, longitude: 24.28389 },
//   },

//   {
//     name: "The Zeila Shipwreck",
//     image: "/ShipWreckPictures/Zeila1.png",
//     reasonForSinking: "Collision",
//     yearSunk: "2008",
//     country: "Namibia",
//     bodyOfWater: "Atlantic Ocean",
//     casualties: "N/A",
//     coordinates: {
//       latitude: -22.24024396889257,
//       longitude: 14.353560089858977,
//     },
//   },

//   {
//     name: "SS Daniel J. Morrell",
//     image: "/ShipWreckPictures/DanielJMorrell1.png",
//     reasonForSinking: "Weather",
//     yearSunk: "1966",
//     country: "United States",
//     bodyOfWater: "Lake Huron",
//     casualties: "28",
//     coordinates: { latitude: 44.265, longitude: -82.83333 },
//   },

//   {
//     name: "Vasa",
//     image: "/ShipWreckPictures/Vasa1.png",
//     reasonForSinking: "Flawed Design",
//     yearSunk: "1628",
//     country: "Sweden",
//     bodyOfWater: "Stockholm Harbor",
//     casualties: "15",
//     coordinates: { latitude: 59.32778, longitude: 18.09111 },
//   },

//   {
//     name: "USS Indianapolis",
//     image: "/ShipWreckPictures/USSIndianapolis1.png",
//     reasonForSinking: "War/battle damage",
//     yearSunk: "1945",
//     country: "United States",
//     bodyOfWater: "Philippine Sea",
//     casualties: "879",
//     coordinates: { latitude: 12.03333, longitude: 134.8 },
//   },

//   {
//     name: "Mary Rose",
//     image: "/ShipWreckPictures/MaryRose1.png",
//     reasonForSinking: "War/battle damage",
//     yearSunk: "1545",
//     country: "United Kingdom",
//     bodyOfWater: "The Solent",
//     casualties: "179",
//     coordinates: { latitude: 50.79972, longitude: -1.10667 },
//   },

//   {
//     name: "HMHS Britannic",
//     image: "/ShipWreckPictures/HMHSBritannic2.png",
//     reasonForSinking: "War/battle damage",
//     yearSunk: "1913",
//     country: "United Kingdom",
//     bodyOfWater: "Aegean Sea",
//     casualties: "28",
//     coordinates: { latitude: 37.70139, longitude: 24.28389 },
//   },

//   {
//     name: "MS Estonia",
//     image: "/ShipWreckPictures/MSEstonia1.png",
//     reasonForSinking: "Onboard accident",
//     yearSunk: "1994",
//     country: "Estonia",
//     bodyOfWater: "Baltic Sea",
//     casualties: "850",
//     coordinates: { latitude: 59.38333, longitude: 21.66667 },
//   },

//   {
//     name: "Queen Anne's Revenge",
//     image: "/ShipWreckPictures/QueenAnnesRevenge1.png",
//     reasonForSinking: "Ran aground",
//     yearSunk: "1718",
//     country: "United Kingdom",
//     bodyOfWater: "Atlantic Ocean",
//     casualties: "0",
//     coordinates: { latitude: 34.69556, longitude: -76.68889 },
//   },

//   {
//     name: "RMS Lusitania",
//     image: "/ShipWreckPictures/RMSLusitania1.png",
//     reasonForSinking: "War/battle damage",
//     yearSunk: "1915",
//     country: "United Kingdom",
//     bodyOfWater: "Atlantic Ocean",
//     casualties: "1198",
//     coordinates: { latitude: 51.41667, longitude: -8.55 },
//   },

//   {
//     name: "HMS Terror",
//     image: "/ShipWreckPictures/HMSTerror1.png",
//     reasonForSinking: "Icebound/abandoned",
//     yearSunk: "1848",
//     country: "United Kingdom",
//     bodyOfWater: "Arctic Ocean",
//     casualties: "129",
//     coordinates: { latitude: 68.9, longitude: -98.93333 },
//   },

//   {
//     name: "HMS Erebus",
//     image: "/ShipWreckPictures/HMSErebus1.png",
//     reasonForSinking: "Icebound/abandoned",
//     yearSunk: "1848",
//     country: "United Kingdom",
//     bodyOfWater: "Arctic Ocean",
//     casualties: "129",
//     coordinates: { latitude: 68.24578, longitude: -98.87286 },
//   },

//   {
//     name: "USS Monitor",
//     image: "/ShipWreckPictures/USSMonitor1.png",
//     reasonForSinking: "Weather",
//     yearSunk: "1862",
//     country: "United States",
//     bodyOfWater: "North Atlantic Ocean",
//     casualties: "16",
//     coordinates: { latitude: 35.00167, longitude: -75.40639 },
//   },

//   {
//     name: "MV Doña Paz",
//     image: "/ShipWreckPictures/MVDonaPaz1.png",
//     reasonForSinking: "Collision",
//     yearSunk: "1987",
//     country: "Philippines",
//     bodyOfWater: "Tablas Strait",
//     casualties: "4385",
//     coordinates: { latitude: 12.0, longitude: 122.0 },
//   },

//   {
//     name: "Battleship Yamato",
//     image: "/ShipWreckPictures/Yamato1.png",
//     reasonForSinking: "War/battle damage",
//     yearSunk: "1945",
//     country: "Japan",
//     bodyOfWater: "East China Sea",
//     casualties: "3055",
//     coordinates: { latitude: 30.36667, longitude: 128.06667 },
//   },

//   {
//     name: "The White Ship",
//     image: "/ShipWreckPictures/TheWhiteShip1.png",
//     reasonForSinking: "Collision",
//     yearSunk: "1120",
//     country: "United Kingdom",
//     bodyOfWater: "English Channel",
//     casualties: "300",
//     coordinates: { latitude: 49.0, longitude: -1.10667 },
//   },

//   {
//     name: "SS Edmund Fitzgerald",
//     image: "/ShipWreckPictures/EdmundFitzgerald1.png",
//     reasonForSinking: "Unknown",
//     yearSunk: "1975",
//     country: "United States",
//     bodyOfWater: "Lake Superior",
//     casualties: "29",
//     coordinates: { latitude: 46.9985, longitude: -85.11017 },
//   },

//   {
//     name: "RFS Moskva",
//     image: "/ShipWreckPictures/RSFMoskva1.png",
//     reasonForSinking: "War/battle damage",
//     yearSunk: "2022",
//     country: "Russia",
//     bodyOfWater: "Black Sea",
//     casualties: "0",
//     coordinates: { latitude: 45.17861, longitude: 30.92528 },
//   },

//   {
//     name: "Felicity Ace",
//     image: "/ShipWreckPictures/FelicityAce1.png",
//     reasonForSinking: "Onboard accident",
//     yearSunk: "2022",
//     country: "Japan",
//     bodyOfWater: "Atlantic Ocean",
//     casualties: "0",
//     coordinates: { latitude: 37.52861, longitude: -28.9856 },
//   },

//   {
//     name: "MV Wilhelm Gustloff",
//     image: "/ShipWreckPictures/MVWilhelmGustav1.png",
//     reasonForSinking: "War/battle damage",
//     yearSunk: "1945",
//     country: "Germany",
//     bodyOfWater: "Baltic Sea",
//     casualties: "9600",
//     coordinates: { latitude: 55.07278, longitude: 17.42139 },
//   },

//   {
//     name: "RMS Titanic",
//     image: "/ShipWreckPictures/RMSTitanic1.png",
//     reasonForSinking: "Collision",
//     yearSunk: "1912",
//     country: "United Kingdom",
//     bodyOfWater: "Atlantic Ocean",
//     casualties: "1500",
//     coordinates: { latitude: 41.7325, longitude: -49.94722 },
//   },

//   {
//     name: "USS Rodolph",
//     image: "/ShipWreckPictures/USSRodolph1.png",
//     reasonForSinking: "War/battle damage",
//     yearSunk: "1865",
//     country: "United States",
//     bodyOfWater: "Blakeley River",
//     casualties: "4",
//     coordinates: { latitude: 0, longitude: 0 },
//   },
// ];

const shipwrecks = [
  { name: "Empress of Ireland", image: '/ShipWreckPictures/EmpressOfIreland1.png', reasonForSinking: "Collision", yearSunk: "1914", country: "United Kingdom", bodyOfWater: "Gulf of Saint Lawrence", casualties: "1012", coordinates: "48°37.5′N 68°24.5′W"},

  { name: "Gunilda", image: "/ShipWreckPictures/Gunilda1.png", reasonForSinking: "Ran aground and sank", yearSunk: "1911", country: "United States", bodyOfWater: "Lake Superior", casualties: "0", coordinates: "48° 47′ 3″ N, 87° 25′ 20″ W"},

  { name: "HMHS Britannic", image: "/ShipWreckPictures/HMHSBritannic1.png", reasonForSinking: "War/battle damage", yearSunk: "1916", country: "United Kingdom", bodyOfWater: "Aegean Sea", casualties: "30", coordinates: "37° 42′ 5″ N, 24° 17′ 2″ E"},

  { name: "The Zeila Shipwreck", image: "/ShipWreckPictures/Zeila1.png", reasonForSinking: "Collision", yearSunk: "2008", country: "Namibia", bodyOfWater: "Atlantic Ocean", casualties: "N/A", coordinates: "-22.24024396889257, 14.353560089858977"},

  { name: "SS Daniel J. Morrell", image: "/ShipWreckPictures/DanielJMorrell1.png", reasonForSinking: "Weather", yearSunk: "1966", country: "United States", bodyOfWater: "Lake Huron", casualties: "28", coordinates: "44°15.9N 82°50W"},

  { name: "Vasa", image: "/ShipWreckPictures/Vasa1.png", reasonForSinking: "Flawed Design", yearSunk: "1628", country: "Sweden", bodyOfWater: "Stockholm Harbor", casualties: "15", coordinates: "59°19′40″N 18°05′28″E"},

  { name: "USS Indianapolis", image: "/ShipWreckPictures/USSIndianapolis1.png", reasonForSinking: "War/battle damage", yearSunk: "1945", country: "United States", bodyOfWater: "Philippine Sea", casualties: "879", coordinates: "12°2′N 134°48′E"},

  { name: "Mary Rose", image: "/ShipWreckPictures/MaryRose1.png", reasonForSinking: "War/battle damage", yearSunk: "1545", country: "United Kingdom", bodyOfWater: "The Solent", casualties: "179", coordinates: "50°47′59″N 1°06′24″W"},
  { name: "MS Estonia", image: "/ShipWreckPictures/MSEstonia1.png", reasonForSinking: "Onboard accident", yearSunk: "1994", country: "Estonia", bodyOfWater: "Baltic Sea", casualties: "850", coordinates: "59°23′0″N 21°40′0″E"},

  { name: "Queen Anne's Revenge", image: "/ShipWreckPictures/QueenAnnesRevenge1.png", reasonForSinking: "Ran aground", yearSunk: "1718", country: "United Kingdom", bodyOfWater: "Atlantic Ocean", casualties: "0", coordinates: "34°41′44″N 76°41′20″W"},

  { name: "RMS Lustitania", image: "/ShipWreckPictures/RMSLusitania1.png", reasonForSinking: "War/battle damage", yearSunk: "1915", country: "United Kingdom", bodyOfWater: "Atlantic Ocean", casualties: "1198", coordinates: "51°25`N 8°33`W"},

  { name: "HMS Terror", image: "/ShipWreckPictures/HMSTerror1.png", reasonForSinking: "Icebound/abandoned", yearSunk: "1848", country: "United Kingdom", bodyOfWater: "Arctic Ocean", casualties: "129", coordinates: "68°54′N 98°56′W (approximate)"},

  { name: "HMS Erebus", image: "/ShipWreckPictures/HMSErebus1.png", reasonForSinking: "Icebound/abandoned", yearSunk: "1848", country: "United Kingdom", bodyOfWater: "Arctic Ocean", casualties: "129", coordinates: "68°14′44.8″N 98°52′22.3″W (approximate)"},

  { name: "USS Monitor", image: "/ShipWreckPictures/USSMonitor1.png", reasonForSinking: "Weather", yearSunk: "1862", country: "United States", bodyOfWater: "North ATlantic Ocean", casualties: "16", coordinates: "35°0′6″N 75°24′23″W"},

  { name: "MV Doña Paz", image: "/ShipWreckPictures/MVDonaPaz1.png", reasonForSinking: "Collision", yearSunk: "1987", country: "Philippines", bodyOfWater: "Tablas Strait", casualties: "4385", coordinates: "N/A"},

  { name: "Battleship Yamato", image: "/ShipWreckPictures/Yamato1.png", reasonForSinking: "War/battle damage", yearSunk: "1945", country: "Japan", bodyOfWater: "East China Sea", casualties: "3055", coordinates: "30.36667 N, 128.06667 E"},

  { name: "The White Ship", image: "/ShipWreckPictures/TheWhiteShip1.png", reasonForSinking: "Collision", yearSunk: "1120", country: "United Kingdom", bodyOfWater: "English Channel", casualties: "300", coordinates: "N/A"},

  { name: "SS Edmund Fitzgerald", image: "/ShipWreckPictures/EdmundFitzgerald1.png", reasonForSinking: "Unknown", yearSunk: "1975", country: "United States", bodyOfWater: "Lake Superior", casualties: "29", coordinates: "46°59.91′N 85°06.61′W"},

  { name: "RFS Moskva", image: "/ShipWreckPictures/RSFMoskva1.png", reasonForSinking: "War/battle damage", yearSunk: "2022", country: "Russia", bodyOfWater: "Black Sea", casualties: "0", coordinates: "45°10′43″N 30°55′31″E"},

  { name: "Felicity Ace", image: "/ShipWreckPictures/FelicityAce1.png", reasonForSinking: "Onboard accident", yearSunk: "2022", country: "Japan", bodyOfWater: "Atlantic Ocean", casualties: "0", coordinates: "37.52861°N 28.98560°W"},

  { name: "MV Wilhelm Gustloff", image: "/ShipWreckPictures/MVWilhelmGustav1.png", reasonForSinking: "War/battle damage", yearSunk: "1945", country: "Germany", bodyOfWater: "Baltic Sea", casualties: "9600", coordinates: "55°04′22″N 17°25′17″E"},

  { name: "RMS Titanic", image: "/ShipWreckPictures/RMSTitanic1.png", reasonForSinking: "Collision", yearSunk: "1912", country: "United Kingdom", bodyOfWater: "Atlantic Ocean", casualties: "1500", coordinates: "41°43′57″N 49°56′49″W"},

  { name: "USS Rodolph", image: "/ShipWreckPictures/USSRodolph1.png", reasonForSinking: "War/battle damage", yearSunk: "1865", country: "United States", bodyOfWater: "Blakeley River", casualties: "4", coordinates: "N/A"},
];

// Placeholder for getSavedShipWreckIds function
const getSavedShipWreckIds = () => {
  // Implement the logic to retrieve saved shipWreck ids from local storage
  // For example:
  // const savedShipWreckIds = JSON.parse(localStorage.getItem('savedShipWreckIds')) || [];
  // return savedShipWreckIds;
  return [];
};

const SearchShipWrecks = () => {
  const [searchedShipWrecks, setSearchedShipWrecks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [saveShipWreck] = useMutation(SAVE_SHIPWRECK);
  const [savedShipWreckIds, setSavedShipWreckIds] = useState(
    getSavedShipWreckIds()
  );
  const [selectedShipwreck, setSelectedShipwreck] = useState("");

  useEffect(() => {
    setSavedShipWreckIds(savedShipWreckIds);
    console.log("Saved ShipWreck Ids:", savedShipWreckIds);
  }, [savedShipWreckIds]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!selectedShipwreck) {
      return false;
    }

    try {
      const selectedShipwreckDetails = shipwrecks[selectedShipwreck];

      if (!selectedShipwreckDetails) {
        throw new Error("Selected shipwreck not found!");
      }

      const shipWreckData = [
        {
          ...selectedShipwreckDetails,
          description: `Coordinates: ${selectedShipwreckDetails.coordinates}\nYear Sunk: ${selectedShipwreckDetails.yearSunk}\nCasualties: ${selectedShipwreckDetails.casualties}\nCountry: ${selectedShipwreckDetails.country}`,
          image: selectedShipwreckDetails.image || "",
        },
      ];

      setSearchedShipWrecks(shipWreckData);
      setSelectedShipwreck("");
    } catch (err) {
      console.error(err);
    }
  };
  const handleSaveShipWreck = async (shipWreckId) => {
    const shipWreckToSave = searchedShipWrecks.find(
      (shipWreck) => shipWreck.shipWreckId === shipWreckId
    );
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      setSavedShipWreckIds((prevSavedShipWreckIds) => [
        ...prevSavedShipWreckIds,
        shipWreckToSave.shipWreckId,
      ]);

      const { data } = await saveShipWreck({
        variables: { newShipWreck: shipWreckToSave },
      });

      if (
        data?.saveShipWreck?._id &&
        !savedShipWreckIds.includes(data.saveShipWreck._id)
      ) {
        setSavedShipWreckIds((prevSavedShipWreckIds) => [
          ...prevSavedShipWreckIds,
          data.saveShipWreck._id,
        ]);
      }
    } catch (err) {
      setSavedShipWreckIds((prevSavedShipWreckIds) =>
        prevSavedShipWreckIds.filter(
          (savedShipWreckId) => savedShipWreckId !== shipWreckToSave.shipWreckId
        )
      );

      console.error("Save ShipWreck Mutation Error:", err);
    }
  };

  return (
    <>
      <div className="text-light bg-dark p-5" fluid="true">
        <Container>
          <h1>Search for Lost treasure!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={4}>
                <Form.Control
                  as="select"
                  value={selectedShipwreck}
                  onChange={(e) => setSelectedShipwreck(e.target.value)}
                  size="lg"
                >
                  <option value="" disabled>
                    Select a shipwreck
                  </option>
                  {shipwrecks.map((shipwreck, index) => (
                    <option key={index} value={index}>
                      {shipwreck.name}
                    </option>
                  ))}
                </Form.Control>
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="success" size="lg">
                  Find treasure!
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container>
        <h2 className="pt-5">
          {searchedShipWrecks.length
            ? `Viewing ${searchedShipWrecks.length} results:`
            : "Search for a shipWreck to begin"}
        </h2>
        <Row>
          {searchedShipWrecks.map((shipWreck, index) => (
            <Col md="4" key={index}>
              <Card border="dark">
                {shipWreck.image && (
                  <Card.Img
                    src={shipWreck.image}
                    alt={`The cover for ${shipWreck.title}`}
                    variant="top"
                  />
                )}
                <Card.Body>
                  <Card.Title>{shipWreck.name}</Card.Title>
                  <Card.Text>
                    <strong>Reason for Sinking:</strong>{" "}
                    {shipWreck.reasonForSinking}
                    <br />
                    <strong>Year Sunk:</strong> {shipWreck.yearSunk}
                    <br />
                    <strong>Country:</strong> {shipWreck.country}
                    <br />
                    <strong>Body of Water:</strong> {shipWreck.bodyOfWater}
                    <br />
                    <strong>Casualties:</strong> {shipWreck.casualties}
                    <br />
                    <strong>Coordinates:</strong> {shipWreck.coordinates}
                  </Card.Text>
                  {shipWreck.coordinates && (
                    <ShipwreckMap shipwreck={shipWreck} />
                  )}
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedShipWreckIds?.some(
                        (savedShipWreckId) =>
                          savedShipWreckId === String(shipWreck.shipWreckId)
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSaveShipWreck(shipWreck.shipWreckId)}
                    >
                      {savedShipWreckIds?.some(
                        (savedShipWreckId) =>
                          savedShipWreckId === String(shipWreck.shipWreckId)
                      )
                        ? "This shipWreck has already been saved!"
                        : "Save this ShipWreck!"}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default SearchShipWrecks;
