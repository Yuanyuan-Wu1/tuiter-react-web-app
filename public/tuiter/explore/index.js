import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";


function exploreComponent() {
    // eslint-disable-next-line no-undef
    $('#wd-explore').append(`
    <div class="row">
        <div class="col-xl-2 col-xxl-2 col-sm-2 col-md-2 col-lg-1">
            ${NavigationSidebar('explore')}
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10" style="margin-top:8px">
            ${ExploreComponent()}
        </div>
        <div class="d-none d-lg-block d-xl-block d-xxl-block col-4">
            ${WhoToFollowList()}
        </div>
    </div>  
    `);
}

// eslint-disable-next-line no-undef
$(exploreComponent);