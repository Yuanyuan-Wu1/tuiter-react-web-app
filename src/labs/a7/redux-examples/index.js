import React from "react";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import Todos from "./todos-component";

import {Provider} from "react-redux";   // deliver data
// import {createStore} from "redux";      // data storage from reducers
import { configureStore } from '@reduxjs/toolkit';  // Use configureStore instead of createStore

// const store = createStore(hello);       // data storage
const store = configureStore({reducer: {hello, todos}});    // combine reducers into a single store

const ReduxExamples = () => {
    return(
        <Provider store={store}>        {/* deliver data in storage to child element */}
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>   {/* consume the data */}
            </div>
        </Provider>
    );
};
export default ReduxExamples;