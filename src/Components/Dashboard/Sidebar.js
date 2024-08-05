import React from 'react';
import './Sidebar.css';
import Logo from "./Assets/Logo.png";
function Sidebar({ setActiveSection }) {
  const [activeItem, setActiveItem] = React.useState('inventory');

  const handleItemClick = (section) => {
    setActiveSection(section);
    setActiveItem(section);
  };

  return (
    <div className="sidebar">
      <div className='logo'> <img src={Logo} alt='Logo'/></div>
      <div className={`sidebar-item ${activeItem === 'inventory' ? 'active' : ''}`} onClick={() => handleItemClick('inventory')}>Inventory Management</div>
      <div className={`sidebar-item ${activeItem === 'expense' ? 'active' : ''}`} onClick={() => handleItemClick('expense')}>Expense Tracker</div>
      <div className={`sidebar-item ${activeItem === 'customer' ? 'active' : ''}`} onClick={() => handleItemClick('customer')}>Customer Data Store</div>
      <div className={`sidebar-item ${activeItem === 'profile' ? 'active' : ''}`} onClick={() => handleItemClick('profile')}>Profile</div>
    </div>
  );
}

export default Sidebar;
