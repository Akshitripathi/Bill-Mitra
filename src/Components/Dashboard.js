import React, { useState } from 'react';
import './Dashboard.css';
import Sidebar from './Dashboard/Sidebar';
import Inventory from './Dashboard/Inventory';
import Expense from './Dashboard/Expense';
import Customer from './Dashboard/Customer';
import Profile from './Dashboard/Profile';

function Dashboard() {
  const [activeSection, setActiveSection] = useState('inventory');

  const renderSection = () => {
    switch (activeSection) {
      case 'inventory':
        return <Inventory />;
      case 'expense':
        return <Expense />;
      case 'customer':
        return <Customer />;
      case 'profile':
        return <Profile />;
      default:
        return <Inventory />;
    }
  };

  return (
    <div className="App">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="main-content">
        {renderSection()}
      </div>
    </div>
  );
}

export default Dashboard;
