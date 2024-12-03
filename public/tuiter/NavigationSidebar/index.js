const NavigationSidebar = (page) => {
    var home='';
    var explore = '';
    if(page == 'home'){
        home='active';
    }
    if(page == 'explore'){
        explore='active';
    }
    return(`
    <div class="list-group">
        <div class="list-group-item list-group-item-action">
            <i class="fab fa-twitter me-2 pt-1"></i>
        </div>
        <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${home}">
            <div class="d-flex  ">
                <div><i class=" fas fa-home me-2 pt-1"></i></div>
                <div class="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">
                    Home
                </div>
            </div>
        </a>
        <a href="../explore/index.html" class="list-group-item list-group-item-action ${explore}">
            <div class="d-flex align-items-center ">
                <i class="fas fa-hashtag me-2 pt-1"></i>
                <div class="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">Explore</div>
            </div>
        </a>
        <a href="../../../tuiter/notifications.html" class="list-group-item list-group-item-action">
            <div class="d-flex align-items-center">
                <i class="fas fa-bell me-2 pt-1"></i>
                <div class="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">Notifications</div>
            </div>
        </a>
        <a href="../../../tuiter/messages.html" class="list-group-item list-group-item-action">
            <div class="d-flex align-items-center ">
                <i class="fas fa-envelope me-2 pt-1"></i>
                <div class="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">Messages</div>
            </div>
        </a>
        <a href="../bookmarks/index.html" class="list-group-item list-group-item-action ">
            <div class="d-flex align-items-center">
                <i class="fas fa-bookmark me-2 pt-1"></i>
                <div class="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">
                    Bookmarks
                </div>
            </div>
        </a>
        <a href="../../../tuiter/lists.html" class="list-group-item list-group-item-action ">
            <div class="d-flex align-items-center">
                <i class="fas fa-list me-2 pt-1"></i>
                <div class="d-none  d-xl-block d-xxl-block ms-1 wd-pd-5">
                    Lists
                </div>
            </div>
        </a>
        <a href="../profile.html" class="list-group-item list-group-item-action ">
            <div class="d-flex align-items-center">
                <i class="fas fa-user me-2 pt-1"></i>
                <div class="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">
                    Profile
                </div>
            </div>
        </a>
        <a href="more.html" class="list-group-item list-group-item-action ">
            <div class="d-flex align-items-center">
                <i class="fas fa-ellipsis-h" style="color: white; padding-right: 10px;"></i>
                <div class="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">
                    More
                </div>
            </div>
        </a>
    </div>
    <div class="wd-tweet-btn">
                <button type="submit" class="btn btn-primary tweet" style="width:100%;">Tweet</button>
    </div>
    `);
}
export default NavigationSidebar;