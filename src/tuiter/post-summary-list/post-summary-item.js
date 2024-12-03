import React from "react";
import Avatar from '../components/Avatar';

const PostSummaryItem = ({post}) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-md-9 col-xl-10">
                    <div className="text-secondary">{post.topic}</div>
                    <div className="row">
                        <div className="fw-bold">
                            {post.userName}
                            <span className="fw-light text-secondary">- {post.time}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="fw-bold">
                            {post.title}
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            {post.tuit}
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-xl-2">
                    <Avatar 
                        src={post.image} 
                        size={80}
                        className="img-fluid rounded-3"
                    />
                </div>
            </div>
        </li>
    );
};

export default PostSummaryItem;