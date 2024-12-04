import React from "react";
import {useDispatch} from "react-redux";
//import {likeTuit} from "./tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";
//6.4
const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    // console.log(tuit)
    // const likeClickHandler = (tuit) => {
    //     dispatch(likeTuit(tuit));
    //}
    return (
        <div className="row mt-3 d-flex justify-content-between">
            <div className="col-md-3">
                <i className="bi bi-chat text-secondary"></i>
                <span className="text-secondary"> {tuit.replies}</span>
            </div>
            <div className="col-md-3">
                <i className="bi bi-repeat text-secondary"></i>
                <span className="text-secondary"> {tuit.retuits}</span>
            </div>
            <div className="col-md-3">
                <i className="bi bi-heart text-secondary"></i>
                <span className="text-secondary"> {tuit.likes}</span>
            </div>
            <div className="col-md-2 col-sm-3">
                <i className="bi bi-hand-thumbs-down-fill text-secondary"></i>
                <span className="text-secondary"> {tuit.dislikes}</span>
            </div>
            <div className="col-md-1 col-sm-1">
                <i className="bi bi-upload"></i>
            </div>
        </div>
    );
}
export default TuitStats;