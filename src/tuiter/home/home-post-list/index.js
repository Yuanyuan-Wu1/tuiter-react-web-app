import React from "react";
import HomePostItem from './home-post-item'
import postsArray from './posts.json'


const HomePostItemList = () => {
    return (
        <div className="card">
            {

                // call api

                postsArray.map(post => <HomePostItem key={post.name}  post={post}/>)
            }
        </div>
    )
}

export default HomePostItemList;