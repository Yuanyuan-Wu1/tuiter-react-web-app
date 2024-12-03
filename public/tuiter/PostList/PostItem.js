const PostItem = (post) => {
    let img_area = ``;
    if (post.img_title == null && post.img_text == null) {
        img_area = `<img src="${post.image}" class="w-100 rounded wd-border"/>`;
    } else {
        img_area =
            `<img src="${post.image}" class="w-100 rounded-top wd-border"/>
            <div class="p-2 rounded-bottom wd-border border-top-0">
                ${post.img_title}</br>
                <span class="text-secondary">${post.img_text}</span>
                <br>
                <i class="fa fa-link" aria-hidden="true" style="color: rgb(110, 118, 125)"></i>
                            &nbsp; <span class="wd-lightGreyFont">${post.externalLink} </span>
            </div>`;
    }
    return(`
    <div class="list-group-item">
        <div class="row">
            <div class="col-2">
                <img src="${post.avatar}" class="rounded-circle mt-3 w-100">
            </div>
            <div class="col-10 p-2">
                <div class="row">
                    <div class="col-11">
                        <b>${post.name}</b><i class="fas fa-circle-check small ps-1"></i>
                        <span class="text-secondary"> @${post.handle} - ${post.time}</span>
                    </div>
                    <div class="col-1"><i class="fas fa-ellipsis me-2 pt-1 text-secondary"></i></div>
                </div>
                <div>${post.text}</div>
                
                <div class="pt-2 pb-2">` + img_area + `</div>
               
                
                <div class="row">
                    <div class="col-3">
                        <i class="far fa-comment text-secondary"></i>
                        <span class="text-secondary"> ${post.comments}</span>
                    </div>
                    <div class="col-3">
                        <i class="fas fa-retweet text-secondary"></i>
                        <span class="text-secondary"> ${post.retuit}</span>
                    </div>
                    <div class="col-3">
                        <i class="far fa-heart text-secondary"></i>
                        <span class="text-secondary"> ${post.likes}</span>
                    </div>
                    <div class="col-3">
                        <i class="fas fa-external-link-alt text-secondary"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
}
export default PostItem;