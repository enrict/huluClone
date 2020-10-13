import React, { useState } from "react";
import './App.css';
import Header from "./Header";
import Navbar from "./Navbar";
import Results from "./Results";
import req from "./requests";

function App() {

  const [selectedCategory, setSelectedCategory] = useState(req.selectedCategory)

  return (
    <div className="app">
      <Header />
      <Navbar setSelectedCategory={setSelectedCategory}/>
      <Results selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
