const WhoToFollowListItem = (who) => {
    return (`
    <a href="https://en.wikipedia.org/wiki/Dune_(novel)" class="list-group-item list-group-item-action">
        <div class="d-flex ">
            <div class="align-items-stretch">
                <img class="rounded-circle" src=${who.avatarIcon} width="50px" height="50px">
            </div>
            <div class="w-75 ms-2">
                <h6 class="fw-bold">${who.userName} <i class="fas fa-check-circle"></i></h6>
                <h6 class="text-secondary">@${who.handle}</h6>
            </div>
            <div>
                <button class="btn btn-primary float-end btn-sm rounded-pill">
                    Follow
                </button>
            </div>
        </div>
    </a>
 `); }

export default WhoToFollowListItem;