import React, { useState } from "react";
import {
  Search,
  Globe,
  TrendingUp,
  BarChart3,
  Wheat,
} from "lucide-react";

const cropData = [
  {
    id: 1,
    crop: "Basmati Rice",
    country: "UAE",
    month: "June",
    quantity: "1200 Tons",
    demand: "High",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    crop: "Cotton",
    country: "Bangladesh",
    month: "July",
    quantity: "950 Tons",
    demand: "High",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    crop: "Tea",
    country: "UK",
    month: "August",
    quantity: "700 Tons",
    demand: "Medium",
    image:
      "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    crop: "Maize",
    country: "Indonesia",
    month: "September",
    quantity: "850 Tons",
    demand: "High",
    image:
      "https://images.unsplash.com/photo-1601593768799-76d7d7d9b0f4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    crop: "Banana",
    country: "Saudi Arabia",
    month: "October",
    quantity: "600 Tons",
    demand: "Medium",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    crop: "Onion",
    country: "Malaysia",
    month: "November",
    quantity: "1000 Tons",
    demand: "High",
    image:
      "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ExportData() {
  const [search, setSearch] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("All");

  const cropTypes = [
    "All",
    "Basmati Rice",
    "Cotton",
    "Tea",
    "Maize",
    "Banana",
    "Onion",
  ];

  const filteredData = cropData.filter((item) => {
    const matchesSearch =
      item.crop.toLowerCase().includes(search.toLowerCase()) ||
      item.country.toLowerCase().includes(search.toLowerCase()) ||
      item.month.toLowerCase().includes(search.toLowerCase());

    const matchesCrop =
      selectedCrop === "All" || item.crop === selectedCrop;

    return matchesSearch && matchesCrop;
  });

  return (
    <div style={styles.container}>
      {/* HERO SECTION */}
      <div style={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop"
          alt="farm"
          style={styles.heroImage}
        />

        <div style={styles.overlay}>
          <h1 style={styles.heroTitle}>Export Market Analysis</h1>

          <p style={styles.heroText}>
            Discover the most demanded crops in international markets
            and make informed decisions for your farming business.
          </p>

          <button style={styles.heroButton}>
            VIEW EXPORT DATA
          </button>
        </div>
      </div>

      {/* TITLE */}
      <div style={styles.headingSection}>
        <h2 style={styles.heading}>Export Market Trends</h2>

        <p style={styles.subHeading}>
          Real-time crop export demand and international market trends
        </p>
      </div>

      {/* SEARCH */}
      <div style={styles.searchContainer}>
        <div style={styles.searchBox}>
          <Search color="gray" />

          <input
            type="text"
            placeholder="Search by crop, country or month..."
            style={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* FILTER BUTTONS */}
        <div style={styles.filterSection}>
          <h3>Filter by Crop Type</h3>

          <div style={styles.buttonContainer}>
            {cropTypes.map((crop) => (
              <button
                key={crop}
                onClick={() => setSelectedCrop(crop)}
                style={{
                  ...styles.filterButton,
                  backgroundColor:
                    selectedCrop === crop ? "#22c55e" : "#d9f99d",
                  color:
                    selectedCrop === crop ? "white" : "black",
                }}
              >
                {crop}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div style={styles.cardGrid}>
        {filteredData.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={{ position: "relative" }}>
              <img
                src={item.image}
                alt={item.crop}
                style={styles.cardImage}
              />

              <span style={styles.badge}>
                {item.demand} Demand
              </span>
            </div>

            <div style={styles.cardBody}>
              <div style={styles.cardTitle}>
                <Wheat color="green" />
                <h2>{item.crop}</h2>
              </div>

              <div style={styles.info}>
                <p>
                  <Globe size={16} /> Country: {item.country}
                </p>

                <p>
                  <TrendingUp size={16} /> Month: {item.month}
                </p>

                <p>
                  <BarChart3 size={16} /> Quantity:{" "}
                  {item.quantity}
                </p>
              </div>

              <button style={styles.detailsButton}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#f3f4f6",
    minHeight: "100vh",
    fontFamily: "Arial",
  },

  hero: {
    position: "relative",
    height: "450px",
    overflow: "hidden",
  },

  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,100,0,0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    padding: "20px",
  },

  heroTitle: {
    fontSize: "60px",
    fontWeight: "bold",
  },

  heroText: {
    fontSize: "22px",
    maxWidth: "900px",
    marginTop: "20px",
    lineHeight: "40px",
  },

  heroButton: {
    marginTop: "30px",
    padding: "15px 40px",
    border: "none",
    borderRadius: "30px",
    background: "#22c55e",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },

  headingSection: {
    textAlign: "center",
    padding: "60px 20px",
  },

  heading: {
    fontSize: "50px",
    color: "green",
    fontWeight: "bold",
  },

  subHeading: {
    marginTop: "15px",
    fontSize: "20px",
    color: "gray",
  },

  searchContainer: {
    background: "white",
    width: "85%",
    margin: "auto",
    padding: "30px",
    borderRadius: "20px",
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "10px",
  },

  searchInput: {
    width: "100%",
    border: "none",
    outline: "none",
    fontSize: "18px",
    marginLeft: "10px",
  },

  filterSection: {
    marginTop: "30px",
  },

  buttonContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "15px",
  },

  filterButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    padding: "50px",
  },

  card: {
    background: "white",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  cardImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },

  badge: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "red",
    color: "white",
    padding: "8px 14px",
    borderRadius: "20px",
    fontSize: "14px",
  },

  cardBody: {
    padding: "20px",
  },

  cardTitle: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  info: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    color: "#555",
  },

  detailsButton: {
    marginTop: "20px",
    width: "100%",
    padding: "12px",
    border: "none",
    background: "#22c55e",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};