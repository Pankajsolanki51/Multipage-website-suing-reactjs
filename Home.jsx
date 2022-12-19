import React from "react";
import Common from "./Common";
import { NavLink } from "react-router-dom";
import web from "../src/Images/image01.jpg";
const Home = () => {
    return (
        <>
            <Common name='Grow your Business'
             imgsrc={web} 
             visit="/service"
              btname="Get Started"/>
        </>
    )
};

export default Home;