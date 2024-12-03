import React from "react";
import TuitStats from "./TuitStats.js";
import {useDispatch} from "react-redux";
//import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import Avatar from '../components/Avatar';

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    
    return(
        <li className="list-group-item">
            <div>
                <div className="row p-1 d-flex justify-content-between">
                    <div className="col-1">
                        <Avatar 
                            src={tuit.image} 
                            size={40}
                        />
                    </div>
                    <div className="col-10 ps-md-0">
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-9 col-10">
                                {<i className="ms-1 bi bi-check-circle-fill text-primary"></i>}
                                <span className="ms-1 text-secondary">{tuit.handle}· {tuit.time}</span>
                            </div>
                            <div className="col-1 fw-bolder text-dark">
                                <i className="bi bi-x-lg float-end" 
                                   onClick={() => deleteTuitHandler(tuit._id)}></i>
                            </div>
                        </div>
                        <div className="mt-1">
                            {tuit.tuit}
                        </div>
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default TuitListItem;