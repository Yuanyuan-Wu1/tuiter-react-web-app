import React from "react";
//import PostSummaryList from "../post-summary-list";

//import HomePostItemList from './home-post-list'

import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>

        </>
    );
};
export default HomeComponent;