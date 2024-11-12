// App.js
import React, { useState } from "react";
import Navbar from "./components/navbar";
import SearchFilter from "./components/search";
import PackageCard from "./components/card";
import "./App.css";
import FontAwesomeLink from "./components/link";
import Sort from "./components/sort";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>;

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const packages = [
    {
      image: "./pic6.jpeg",
      title: "Munnar Thekkady Alleppey and Kovalam tour",
      location: "Cochin Airport / Railway Station",
      days: 6,
      nights: 5,
      price: "25,800",
      originalPrice: "32,579",
    },
    {
      image: "./new1.jpeg",
      title: "Discover Kashmir & Ladak",
      location: "Srinagar Airport",
      days: 4,
      nights: 3,
      price: "25,800",
      originalPrice: "32,579",
    },
    {
      image: "./pic3.jpeg",
      title: "Cochin Munnar Thekkady and Cherrai tour",
      location: "Cochin Airport",
      days: 3,
      nights: 2,
      price: "25,800",
      originalPrice: "32,579",
    },
    // New Packages
    {
      image: "./pic3.jpeg",
      title: "Golden Triangle Tour: Delhi, Agra, Jaipur",
      location: "Delhi Airport",
      days: 7,
      nights: 6,
      price: "45,000",
      originalPrice: "55,000",
    },
    {
      image: "./new2.jpeg",
      title: "Andaman Island Adventure",
      location: "Port Blair Airport",
      days: 5,
      nights: 4,
      price: "35,000",
      originalPrice: "42,000",
    },
    {
      image: "./pic6.jpeg",
      title: "Goa Beach Holiday",
      location: "Goa Airport",
      days: 4,
      nights: 3,
      price: "20,000",
      originalPrice: "25,000",
    }
  ];

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredPackages = packages.filter((pkg) =>
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Navbar />
      <FontAwesomeLink />
      <SearchFilter onSearch={handleSearch} />
      <Sort />
      <div className="package-list">
        {filteredPackages.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </div>
  );
}

export default App;
