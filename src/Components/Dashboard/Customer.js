

import React, { useState } from 'react';
import './Customer.css'; 

import BannerBackground from "../Assets/home-banner-background.png";
import AboutBackground from "../Assets/about-background.png";

function Customer() {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Ramesh Singh', email: 'ramesh@gmail.com' },
    { id: 2, name: 'Justin Smith', email: 'justin12@gmail.com' },
  ]);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '' });
  const [editing, setEditing] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      setCustomers(customers.map(customer => (customer.id === editing ? { ...customer, ...newCustomer } : customer)));
      setEditing(null);
    } else {
      setCustomers([...customers, { id: customers.length + 1, ...newCustomer }]);
    }
    setNewCustomer({ name: '', email: '' });
  };

  const handleEdit = (customer) => {
    setNewCustomer({ name: customer.name, email: customer.email });
    setEditing(customer.id);
  };

  const handleDelete = (id) => {
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  return (
    <div className="customer-container">

      <div className='home-bannerImage-container'>
        <img src={BannerBackground} alt=""/>
      </div>

      <div className='about-background-image-container'>
        <img src={AboutBackground} alt="" />
      </div>


      <div className="customer-list">
        <h2>Customer List</h2>
        <ul>
          {customers.map(customer => (
            <li key={customer.id}>
              <span>{customer.name} - {customer.email}</span>
              <div>
              <button className="edit-button" onClick={() => handleEdit(customer)}>Edit</button>
<button className="delete-button" onClick={() => handleDelete(customer.id)}>Delete</button>

               </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="form-container">
        <h2>{editing ? 'Edit Customer' : 'Add New Customer'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newCustomer.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newCustomer.email}
            onChange={handleChange}
            required
          />
          <button type="submit">{editing ? 'Update Customer' : 'Add Customer'}</button>
        </form>
      </div>
    </div>
  );
}

export default Customer;