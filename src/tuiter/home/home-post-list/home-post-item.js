import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faHeart, faUpload, faCircleCheck,faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import "./index.css";
import {formatText} from "./formatText";

const HomePostItem = ({post}) => {
    let hasImage=true;
    let hasContent=true;
    if (post.image === "") {
        hasImage = false;
    }
    if (post.img_text === "") {
        hasContent = false;
    }
    return(
        <div className="px-3 py-2">
            <div className="row">
                <div className="col-2">
                    <img className="w-100 h-100 wd-rounded-complete rounded-circle" src={post.avatar}></img>
                </div>
                <div className="col-8">
                    <div className="row d-inline-block">
                        <span className="fw-bold ">{post.name}<FontAwesomeIcon className="text-primary ms-1" icon={faCircleCheck}/></span>
                        <span className=" wd-text-responsive  px-0 text-secondary">{post.handle} •{post.time}</span>

                    </div>


                    <div className="row">
                        <span>{formatText(post.text)}</span>
                    </div>
                </div>
                <div className="col-2 position-relative">
                    <div className="position-absolute top-0 end-0">
                        <FontAwesomeIcon icon={faEllipsisH}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-10">
                    <div className="card">
                        {hasImage &&
                            <div className="position-relative">
                                <img className="w-100 wd-round" src={post.image}></img>
                            </div>
                        }
                        {hasContent &&
                            <div className="card-body">
                                <div>
                                    <p className="mb-0 fw-bold  ">{post.img_title}</p>
                                    <span className="text-gray wd-text-responsive">{post.img_text}
                                </span>
                                    <p className="mb-0">{post.externalLink}</p>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="row">
                        <div className="col-3"><a className="text-secondary" style={{"textDecoration": "none"}} href="#"><i className="bi bi-chat"></i> <span className="number text-secondary">{post.comments}</span></a></div>
                        <div className="col-3"><a className="text-secondary" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faRetweet} /> <span className="number text-secondary">{post.retuit}</span></a></div>
                        <div className="col-3"><a className="text-secondary" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faHeart} /> <span className="number text-secondary">{post.likes}</span></a></div>
                        <div className="col-3"><a className="text-secondary" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faUpload} /> <span className="number text-secondary"></span></a></div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );

}

export default HomePostItem;