import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
  // Sample data - replace with your actual data source
  const whoArray = [
    { _id: "123", userName: "NASA", handle: "NASA", avatarIcon: "nasa.jpg" },
    { _id: "234", userName: "Tesla", handle: "tesla", avatarIcon: "tesla1.jpg" },
    { _id: "345", userName: "SpaceX", handle: "SpaceX", avatarIcon: "spacex.jpg" }
  ];

  return (
    <div className="list-group">
      <h5>Who to follow</h5>
      {whoArray.map(who => (
        <WhoToFollowListItem 
          key={who._id} 
          who={who} 
        />
      ))}
    </div>
  );
};

export default WhoToFollowList;