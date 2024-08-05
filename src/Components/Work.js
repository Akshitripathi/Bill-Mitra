import React from 'react';
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import AboutBackground from "./Assets/about-background.png";
import PickMeals from "./Assets/inventory-management.png";
import ChooseMeals from "./Assets/expense_tracker.png"
const Work = () => {
    const workInfoData=[
        {
            image:PickMeals,
            title:"Inventory Management",
            text: "Designed to help you keep track of your stock levels, manage orders, and optimize inventory turnover. With real-time updates and automated alerts, you can efficiently monitor stock quantities, and reduce the risk of overstocking or stockouts. "
        },
        {
            image:ChooseMeals,
            title:"Expense Tracker",
            text: "Designed to streamline your invoicing process, ensuring accuracy and efficiency. Generate and send professional invoices effortlessly, track payment statuses, and manage client communications all in one place"
        },
        {
            image:PickMeals,
            title:"Invoice Manager",
            text: "Helps you manage and categorize your expenses to maintain financial clarity and control. By tracking and analyzing your spending, you can identify areas for cost reduction and ensure adherence to budgetary constraints."
        }
    ];
  return (
    <div className="work">
    <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt=""/>
        </div>
    <Navbar/>
    
    <div className='work-section-wrapper'>
    <div className='about-background-image-container' >
          <img src={AboutBackground} alt="" />
        </div>
        <div className='work-section-top'>
            <h1 className='primary-heading'>Features</h1>
            
        </div>
        <div className='work-section-bottom'>
            {
                workInfoData.map((data)=>(
                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt="image"/>
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
    </div>
  )
}

export default Work
