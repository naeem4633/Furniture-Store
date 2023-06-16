import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Listing from './components/Listing';
import Details from './components/Details';
import Login from './components/Login';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [furniture, setFurniture] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/saved-items/')
      .then(response => response.json())
      .then(data => setSavedItems(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/')
      .then(response => response.json())
      .then(data => setFurniture(data))
      .catch(error => console.error(error));
  }, []);

  // Filter furniture by category
  const beds = furniture.filter(item => item.category === 'bed');
  console.log(beds);
  const dining = furniture.filter(item => item.category === 'dining');
  const wardrobes = furniture.filter(item => item.category === 'wardrobe');

  const handleSavedItemsChange = (updatedItems) => {
    setSavedItems(updatedItems);
  };

  return (
    <Router>
      <div className="App">
        <Header savedItems={savedItems} onChange={handleSavedItemsChange} />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/details/:id" element={<Details onChange={handleSavedItemsChange} />} />
          <Route path="/beds" element={<Listing furniture={beds} />} />
          <Route path="/dining" element={<Listing furniture={dining} />} />
          <Route path="/wardrobes" element={<Listing furniture={wardrobes} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/confirmOrder" element={<ConfirmOrder />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
