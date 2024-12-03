import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {return(`
    <div class="row align-items-center mb-2">
        <div class="col-10">
            <div class="position-relative">
                <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter" />
                <span class="position-absolute wd-search-tuiter"><i class="fa fa-search"></i></span>
            </div>
        </div>
        <div class="col-2">
            <span><a class="ms-lg-0" href="explore-settings.html"><i class="mt-2 ms-5 wd-gear fas fa-cog"></i></a></span>
        </div>
    </div>
    <ul class="nav nav-tabs mb-2 navbar-expand">
        <li class="nav-item">
            <a href="#" class="nav-link active">For You</a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">Trending</a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">News</a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">Sports</a>
        </li>
        <li class="nav-item d-sm-none d-md-block">
            <a href="#" class="nav-link">Entertainment</a>
        </li>
    </ul>
    <div class="position-relative">
        <img src="../../images/SpaceX's Starship.jpg" class="w-100 mb-2" alt="SpaceX Starship">
        <h2 class="position-absolute bottom-0 m-2 " style="color: #1a1e21">SpaceX's Starship</h2>
    </div>
    ${PostSummaryList()}
    `);
}
export default ExploreComponent;