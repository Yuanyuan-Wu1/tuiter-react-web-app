import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"


const WhoToFollowList = () => {
    return (`
   <div class="list-group">
        <div class="list-group-item list-group-item-action fw-bold">
            Who to Follow
        </div>
        ${WhoToFollowListItem(who[0])}
        ${WhoToFollowListItem(who[1])}
        ${WhoToFollowListItem(who[2])}
        ${WhoToFollowListItem(who[3])}
        ${WhoToFollowListItem(who[4])}
    </div>
`); }

export default WhoToFollowList;