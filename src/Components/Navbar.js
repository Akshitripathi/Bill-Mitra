import React, { useState } from 'react';
import Logo from "./Assets/Logo.png";
import {HiOutlineBars3} from "react-icons/hi2";
import { Link } from 'react-router-dom';
import{
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
const Navbar = () => {

    const [openMenu,setOpenMenu]= useState(false);
    const menuOptions=[
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"About",
            icon:<InfoIcon/>
        },
        {
            text:"Features",
            icon:<CommentRoundedIcon/>
        },
        {
            text:"Contact",
            icon:<PhoneRoundedIcon/>
        },
    ];
   
  return (
    <nav>
    <div className='nav-logo-container'>
        <img src={Logo} alt="Logo" className='nav-logo'/>
    </div>
    <div className='navbar-links-container'>
        <Link to="/">Home    </Link>
        <Link to="/about">About   </Link>
        <Link to="/work">Features</Link>
        <Link to="/contact">Contact </Link> 
        <Link to="/signup"><button className='primary-button'> Sign Up</button></Link>
    </div>
    <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={()=>setOpenMenu(true)}/>
    </div>
    <Drawer open={openMenu} onclose={()=>setOpenMenu(false)} anchor="right">
        <Box sx={{ width: 250 }} role='presentation' onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
            <List>
            {menuOptions.map((item)=>(
                <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text}/>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>

        </Box>
    </Drawer>
    </nav>
  )
}

export default Navbar
