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
                <i onClick={() => dispatch(updateTuitThunk({...tuit, replies: tuit.replies + 1}))}
                   className="bi bi-chat text-secondary"></i>
                <span className="text-secondary"> {
                    tuit.replies && <i className="" style={{color: tuit.stats?.replies ? "red": "white"}}></i>
                }
                    {
                        !tuit.replies
                    }</span>
                <span className="">{tuit.replies}</span>
            </div>

            <div className="col-md-3 " href="#">
                <div className="me-1">
                    <i  onClick={() => dispatch(updateTuitThunk({...tuit, retuits: tuit.retuits + 1}))}
                       className="bi bi-repeat text-secondary"></i>
                    <span className="text-secondary"> {
                        tuit.retuits && <i className="" style={{color: tuit.retuits ? "red": "white"}}></i>
                    }
                        {
                            !tuit.retuits
                        }
                    </span>
                    <span className="">{tuit.retuits}</span>
                </div>
            </div>
            {/*<div className="col-3 text-secondary text-decoration-none" onClick={() => likeClickHandler(tuit._id)}>*/}
            <div className="col-md-3">
                <span className="me-1">
                    <i onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1}))}
                        className="bi bi-heart  text-secondary" ></i>
                    <span className="text-secondary"> {
                        tuit.likes && <i className=" " style={{color: tuit.likes ? "red": "white"}}></i>
                    }
                        {
                            !tuit.likes
                    }</span>
                <span className="">{tuit.likes}</span>
              </span>
            </div>
            <div className="col-md-2 col-sm-3">
                <i onClick={() => dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1}))}
                   className="bi bi-hand-thumbs-down-fill  text-secondaryr"></i>
                <span className=" text-secondary"> {tuit.dislikes}</span>
            </div>

            <div className="col-md-1 col-sm-1" href="#">
                <span className="me-1"><i className="bi bi-upload"></i></span>
            </div>
        </div>
    );
}
export default TuitStats;