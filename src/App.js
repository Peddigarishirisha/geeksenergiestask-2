import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import SearchFilter from "./components/search";
import PackageCard from "./components/card";
import Sort from "./components/sort";
import PackageDetails from "./components/packagedetails"; // New component for package details
import "./App.css";
import FontAwesomeLink from "./components/link.js"

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const packages = [
    {
      id: 1,
      image: "/pic6.jpeg",
      title: "Munnar Thekkady Alleppey and Kovalam tour",
      location: "Cochin Airport / Railway Station",
      days: 6,
      nights: 5,
      price: "25,800",
      originalPrice: "32,579",
    },
    {
      id: 2,  // Add a unique ID here
      image: "/new1.jpeg",
      title: "Discover Kashmir & Ladak",
      location: "Srinagar Airport",
      days: 4,
      nights: 3,
      price: "25,800",
      originalPrice: "32,579",
    },
    {
      id: 3,  // Add a unique ID here
      image: "/pic3.jpeg",
      title: "Cochin Munnar Thekkady and Cherrai tour",
      location: "Cochin Airport",
      days: 3,
      nights: 2,
      price: "25,800",
      originalPrice: "32,579",
    },
    {
      id: 4,  // Add a unique ID here
      image: "/pic3.jpeg",
      title: "Golden Triangle Tour: Delhi, Agra, Jaipur",
      location: "Delhi Airport",
      days: 7,
      nights: 6,
      price: "45,000",
      originalPrice: "55,000",
    },
    {
      id: 5,  // Add a unique ID here
      image: "/new2.jpeg",
      title: "Andaman Island Adventure",
      location: "Port Blair Airport",
      days: 5,
      nights: 4,
      price: "35,000",
      originalPrice: "42,000",
    },
    {
      id: 6,  // Add a unique ID here
      image: "/pic6.jpeg",
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
    <Router>
      <div className="app">
        <Navbar />
        <FontAwesomeLink></FontAwesomeLink>
        <SearchFilter onSearch={handleSearch} />
        <Sort />
        <Routes>
          <Route
            path="/"
            element={
              <div className="package-list">
                {filteredPackages.map((pkg) => (
                  <PackageCard key={pkg.id} {...pkg} />
                ))}
              </div>
            }
          />
          <Route path="/details/:id" element={<PackageDetails packages={packages} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
