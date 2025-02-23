import React, { useState } from "react";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const items = [
    "Apple 🍎", "Banana 🍌", "Cherry 🍒", "Grapes 🍇", "Mango 🥭", "Orange 🍊",
    "Pineapple 🍍", "Strawberry 🍓", "Blueberry 🫐", "Watermelon 🍉", "Peach 🍑",
    "Kiwi 🥝", "Dragonfruit 🐉", "Lemon 🍋", "Coconut 🥥",
    "Fig 🫒", "Guava 🍐", "Melon 🍈",
    "Pear 🍐", "Starfruit ⭐", "Avocado 🥑"
  ];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" , margin: '10px 20% 0px 20%'}}>
        {filteredItems.map((item, index) => (
          <div key={index} style={{
            border: "1px solid #ddd", borderRadius: "8px", padding: "10px",
            boxShadow: "2px 2px 5px rgba(0,0,0,0.1)", fontSize: "18px",
            background: "#f9f9f9", width: "150px", textAlign: "center"
          }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;

