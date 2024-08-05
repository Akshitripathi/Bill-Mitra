


import React, { useState } from 'react';
import './Expense.css'; 

import BannerBackground from "./Assets/home-banner-background.png";
import AboutBackground from "./Assets/about-background.png";

function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('General');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleAddExpense = () => {
    if (amount && date) {
      const newExpense = { amount, category, description, date };
      setExpenses([...expenses, newExpense]);
      resetFields();
    }
  };

  const resetFields = () => {
    setAmount('');
    setCategory('General');
    setDescription('');
    setDate('');
  };

  const handleRemoveItem = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const getTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  };

  return (
    <div className="expense-container">


<div className='home-bannerImage-container'>
            <img src={BannerBackground} alt=""/>
        </div>

        <div className='about-background-image-container'>
              <img src={AboutBackground} alt="" />
            </div>



      <h1>Expense Management Section</h1>
      <div className="main-content">
        <div className="expense-list">
          <h2>Total Expenses: ${getTotalExpenses().toFixed(2)}</h2>
          <ul>
            {expenses.map((expense, index) => (
              <li key={index}>
                {expense.date} - {expense.category}: ${expense.amount} ({expense.description})
                <button className="remove-btn" onClick={() => handleRemoveItem(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="input-container">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="General">General</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button onClick={handleAddExpense}>Add Expense</button>
        </div>
      </div>
    </div>
  );
}

export default Expense;
