import HomeComponent from "./home";
import ProfileComponent from "./profile";
import EditProfile from "./edit-profile";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

import {Routes, Route} from "react-router";
import ExploreComponent from "./explore/index";

import whoReducer
    from "./reducers/who-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
//import {useState} from "react";


const store = configureStore(
    {
        reducer:
            {
                who: whoReducer,
                tuits: tuitsReducer,
                tuitsData: tuitsReducer,
                profile: profileReducer
            }
    });



function Tuiter() {
    return (
        <Provider store={store}>
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>

            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                {/*<ExploreComponent/>*/}
                <Routes>
                    <Route path="/*"  element={<HomeComponent/>}/>
                    <Route path="/explore" element={<ExploreComponent/>}/>
                    <Route path="/profile" element={<ProfileComponent/>}/>
                    <Route path="/edit-profile" element={<EditProfile/>}/>
                </Routes>
            </div>

            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList />
            </div>

        </div>


        </Provider>
    )
}
export default Tuiter;

