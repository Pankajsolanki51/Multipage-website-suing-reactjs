import React from "react";
import Common from "./Common";
import { NavLink } from "react-router-dom";
import web from "../src/Images/about.jpg";
const About = () => {
    return (
        <>
            <Common name=' Welcome to About page'
             imgsrc={web} 
             visit="/contact"
              btname="Contact Now"/>
        </>
    )
};

export default About;