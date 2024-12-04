import React from "react";
import TuitStats from "./TuitStats.js";
import {useDispatch, useSelector} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.profile);
    
    // 公司 logo 映射
    const COMPANY_LOGOS = {
        'spacex': 'https://logo.clearbit.com/spacex.com',
        'tesla': 'https://logo.clearbit.com/tesla.com',
        'nasa': 'https://logo.clearbit.com/nasa.gov',
        'boringcompany': 'https://logo.clearbit.com/boringcompany.com'
    };
    
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    
    const isCurrentUserTuit = currentUser && 
        (tuit.handle === currentUser.handle || tuit.handle === `@${currentUser.handle}`);
    
    const getAvatarSrc = () => {
        // 处理 handle（移除 @ 并转换为小写）
        const handle = (tuit.handle || '').replace('@', '').toLowerCase();
        
        // 检查是否是公司账号
        if (COMPANY_LOGOS[handle]) {
            return COMPANY_LOGOS[handle];
        }
        
        // 如果不是公司账号，使用普通头像
        return tuit.image;
    }
    
    return (
        <li className="list-group-item">
            <div>
                <div className="row p-1 d-flex justify-content-between">
                    <div className="col-1">
                        <img 
                            src={getAvatarSrc()}
                            width={40}
                            height={40}
                            alt={isCurrentUserTuit ? 'My avatar' : `${tuit.handle}'s avatar`}
                            className="rounded-circle"
                        />
                    </div>
                    <div className="col-10 ps-md-0">
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-9 col-10">
                                {<i className="ms-1 bi bi-check-circle-fill text-primary"></i>}
                                <span className="ms-1 text-secondary">
                                    {isCurrentUserTuit ? currentUser.handle : tuit.handle}· {tuit.time}
                                </span>
                            </div>
                            {isCurrentUserTuit && (
                                <div className="col-1 fw-bolder text-dark">
                                    <i className="bi bi-x-lg float-end" 
                                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                                </div>
                            )}
                        </div>
                        <div className="mt-1">
                            {tuit.tuit}
                        </div>
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default TuitListItem;