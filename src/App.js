import React from 'react';
import './App.css';
import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";
import MySkills from "./MySkills/MySkills";
import MyProjects from "./MyProjects/MyProjects";
import InputDates from "./InputDates/InputDates";
import JobOffer from "./JobOffer/JobOffer";
import SocialNets from "./SocialNets/SocialNets";


const App = () => {
    return (
        <div className="app">
            <div className="container">
                <Header/>
                <AboutMe/>
                <MySkills/>
                <MyProjects/>
                <InputDates/>
                <JobOffer/>
                <SocialNets/>
            </div>
        </div>
    )
};


export default App;

