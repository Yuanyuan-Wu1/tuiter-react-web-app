import React from "react";
import TuitStats from "./TuitStats.js";
import {useDispatch, useSelector} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import Avatar from '../components/Avatar';

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.profile);
    
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    
    // 判断是否是当前用户的 tuit
    const isCurrentUserTuit = currentUser && 
        (tuit.handle === currentUser.handle || tuit.handle === `@${currentUser.handle}`);
    
    // 获取头像路径
    const getAvatarSrc = () => {
        // 处理 handle（移除 @ 并转换为小写）
        const handle = (tuit.handle || '').replace('@', '').toLowerCase();
        
        // 1. 检查 tuit 是否有 image 字段
        if (tuit.image) {
            // 根据 handle 返回特定公司的图片
            switch(handle) {
                case 'spacex':
                case 'tesla':
                case 'boringcompany':
                    return `https://tuiter-node-server-app-iot1.onrender.com/images/${tuit.image}`;
                default:
                    // 其他用户的图片
                    return `https://tuiter-node-server-app-iot1.onrender.com/images/${tuit.image}`;
            }
        }
        
        // 2. 如果是当前用户的 tuit
        if (isCurrentUserTuit) {
            return currentUser.avatar || '/images/avatar.png';
        }
        
        // 3. 默认返回默认头像
        return '/images/avatar.png';
    }
    
    return (
        <li className="list-group-item">
            <div>
                <div className="row p-1 d-flex justify-content-between">
                    <div className="col-1">
                        <Avatar 
                            src={getAvatarSrc()}
                            alt={isCurrentUserTuit ? 'My avatar' : `${tuit.handle}'s avatar`}
                            size={40}
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