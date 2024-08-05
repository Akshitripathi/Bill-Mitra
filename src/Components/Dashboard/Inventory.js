import React, { useState } from 'react';
import './Inventory.css';


import BannerBackground from "./Assets/home-banner-background.png";
import AboutBackground from "./Assets/about-background.png";

function Inventory() {
  const [items, setItems] = useState([
    { name: 'Product A', quantity: 10, category: 'Electronics', price: 49.99 },
    { name: 'Product B', quantity: 5, category: 'Clothing', price: 29.99 },
    { name: 'Product C', quantity: 20, category: 'Groceries', price: 9.99 },
  ]);
  const [salesData, setSalesData] = useState([
    { date: '2023-06-01', quantity: 5 },
    { date: '2023-06-02', quantity: 3 },
    { date: '2023-06-03', quantity: 8 },
    { date: '2023-06-04', quantity: 2 },
    { date: '2023-06-05', quantity: 6 },
  ]);

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleSale = (item) => {
    const currentDate = new Date().toLocaleDateString();
    const existingSale = salesData.find((sale) => sale.date === currentDate);

    if (existingSale) {
      const updatedSalesData = salesData.map((sale) =>
        sale.date === currentDate ? { ...sale, quantity: sale.quantity + 1 } : sale
      );
      setSalesData(updatedSalesData);
    } else {
      setSalesData([...salesData, { date: currentDate, quantity: 1 }]);
    }

    const itemIndex = items.indexOf(item);
    handleRemoveItem(itemIndex);
  };

  const getTotalRevenue = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const getDailyProfit = () => {
    return 1000; 
  };

  const getStockAvailable = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="inventory-container">

<div className='home-bannerImage-container'>
            <img src={BannerBackground} alt=""/>
        </div>

        <div className='about-background-image-container'>
              <img src={AboutBackground} alt="" />
            </div>


      <div className="main-content">
        <div className="item-list">
          <h2>Items in Inventory</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Category: {item.category}</p>
                  <p>Price: ${item.price}</p>
                </div>
                <div className="item-actions">
                  <button className="remove-btn" onClick={() => handleRemoveItem(index)}>
                    Remove
                  </button>
                  <button className="sell-btn" onClick={() => handleSale(item)}>
                    Sell
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="stats-container">
          <div className="stat-item">
            <h3>Total Revenue</h3>
            <p>${getTotalRevenue().toFixed(2)}</p>
          </div>
          <div className="stat-item">
            <h3>Daily Profit</h3>
            <p>${getDailyProfit().toFixed(2)}</p>
          </div>
          <div className="stat-item">
            <h3>Stock Available</h3>
            <p>{getStockAvailable()}</p>
          </div>
        </div>
      </div>
      <div className="category-summary">
        <h2>Category Summary</h2>
        <div className="category-items">
          <div className="category-item">
            <h3>Electronics</h3>
            <p>Total Items: 10</p>
            <p>Total Value: $499.90</p>
          </div>
          <div className="category-item">
            <h3>Clothing</h3>
            <p>Total Items: 5</p>
            <p>Total Value: $149.95</p>
          </div>
          <div className="category-item">
            <h3>Groceries</h3>
            <p>Total Items: 20</p>
            <p>Total Value: $199.80</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;