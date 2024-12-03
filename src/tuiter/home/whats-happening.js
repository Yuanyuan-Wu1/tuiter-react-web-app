import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createTuitThunk} from "../../services/tuits-thunks";
import Avatar from '../components/Avatar';

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);

    const tuitClickHandler = () => {
        const newTuit = {
            //userName: profile.firstName + " " + profile.lastName,
            handle: profile.handle,
            image: profile.avatar,
            time: "Now",
            tuit: whatsHappening,
            likes: 0,
            replies: 0,
            retuits: 0,
            dislikes: 0
        }
        dispatch(createTuitThunk(newTuit));
        setWhatsHappening('');
    }

    return (
        <div className="row">
            <div className="col-auto">
                <Avatar src={profile.avatar} size={80} />
            </div>
            <div className="col-10">
                <textarea 
                    value={whatsHappening} 
                    placeholder="What's happening?"
                    className="form-control border-0"
                    onChange={(event) => setWhatsHappening(event.target.value)}
                />
                <div>
                    <button 
                        className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={tuitClickHandler}
                    >
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}

export default WhatsHappening;