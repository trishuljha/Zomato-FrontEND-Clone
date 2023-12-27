import React, { useState } from 'react';
import Header from '../../components/common/header';
import TabOptions from '../../components/common/tabOptions';
import Footer from '../../components/common/footer';
import Delivery from '../../components/delivery';
import DiningOut from '../../components/Diningout';
import NightLife from '../../components/NightOut';

function HomePage() {
    const [activeTab,setactiveTab]=useState("Dining Out");

  return (
    <div>
        <Header/>
        <TabOptions activeTab= {activeTab} setactiveTab={setactiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer/>
    </div>
  )
}
const getCorrectScreen = (tab)=>{
    switch(tab){
        case "Delievery":
            return <Delivery/>;
        case "Dining Out":
            return <DiningOut/>;
        case "Night Life":
            return <NightLife/>;
        default:
            return <Delivery/>;

    }
}

export default HomePage;