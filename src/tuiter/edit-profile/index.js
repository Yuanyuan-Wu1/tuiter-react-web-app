import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";
import Avatar from '../components/Avatar';

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const [uploadStatus, setUploadStatus] = useState('');
    
    const [name, setName] = useState(profile.firstName + ' ' + profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const birthdayData = profile.dateOfBirth.split('/')
    const [dateOfBirth, setDateOfBirth] = useState(birthdayData[2] + "-" + birthdayData[0] + '-' + birthdayData[1]);
    
    const handleAvatarChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                setUploadStatus('uploading');
                const formData = new FormData();
                formData.append('avatar', file);
                
                const response = await fetch('http://localhost:4000/api/users/upload-profile-image', {
                    method: 'POST',
                    body: formData
                });
                
                if (!response.ok) {
                    throw new Error('Upload failed');
                }
                
                const data = await response.json();
                dispatch(updateProfile({
                    ...profile,
                    avatar: data.filename
                }));
                setUploadStatus('success');
            } catch (error) {
                console.error('Error uploading avatar:', error);
                setUploadStatus('error');
            }
        }
    };

    const updateProfileHandler = () => {
        const newProfile = {
            profile: {
                name,
                bio,
                location,
                website,
                dateOfBirth
            }
        }
        dispatch(updateProfile(newProfile));
    }

    return (
        <>
            <Link to="/tuiter/profile">
                <i className="bi bi-x h3 text-black ms-2 me-2"></i>
            </Link>
            <span className="text-black fw-bold fs-4 ms-2">Edit Profile</span>
            <Link to="/tuiter/profile">
                <button className="btn btn-dark rounded-pill float-end pt-2 mb-3"
                        onClick={updateProfileHandler}>Save</button>
            </Link>

            <div className="position-relative mt-2 mb-5">
                {/* Banner 部分 */}
                <img className="w-100" style={{"opacity": "0.5"}} src="/images/banner.jpeg" alt="banner"/>
                <i className="position-absolute bi bi-camera fs-4 ps-2 pe-2 pt-1 pb-1 rounded-circle text-white"
                   style={{"left": "45%", "bottom": "40%", "background": "black", "opacity": "0.5"}}></i>
                <i className="position-absolute bi bi-x fs-4 ps-2 pe-2 pt-1 pb-1 rounded-circle text-white"
                   style={{"left": "55%", "bottom": "40%", "background": "black", "opacity": "0.5"}}></i>

                {/* 头像部分 */}
                <div className="position-absolute"
                     style={{"height": "80%", "width": "25%", "left": "5%", "bottom": "-25%"}}>
                    <label htmlFor="avatar-upload" className="position-relative d-block cursor-pointer">
                        <Avatar 
                            src={profile.avatar}
                            size={120}
                            className="position-absolute"
                            style={{"opacity": "0.8"}}
                        />
                        {uploadStatus === 'uploading' && (
                            <div className="position-absolute top-50 start-50 translate-middle">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )}
                        <i className="position-absolute bi bi-camera fs-4 ps-2 pe-2 pt-0 pb-0 rounded-circle text-white"
                           style={{"left": "50%", "top": "50%", "transform": "translate(-50%, -50%)", 
                                  "background": "black", "opacity": "0.7"}}></i>
                    </label>
                    <input 
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        style={{display: 'none'}}
                    />
                </div>
            </div>

            {/* 其他表单内容 */}
            <form>
                <div className="form-group pt-4">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Full Name"
                           value={name} onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                </div>
                <div className="form-group pt-4">
                    <label htmlFor="inputBio">Bio</label>
                    <textarea className="form-control" id="inputBio" placeholder="Bio"
                              value={bio} onChange={(e) => setBio(e.target.value)}
                    />
                </div>
                <div className="form-group pt-4">
                    <label htmlFor="inputLocation">Location</label>
                    <input type="text" className="form-control" id="inputLocation" placeholder="Location"
                           value={location} onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="form-group pt-4">
                    <label htmlFor="inputWebsite">Website</label>
                    <input type="text" className="form-control" id="inputWebsite" placeholder="Website"
                           value={website} onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div className="form-group pt-4">
                    <label htmlFor="inputBirthday">Birth date</label>
                    <input type="date" className="form-control" id="inputBirthday" placeholder="Location"
                           value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                </div>
            </form>

            <div className="mt-4">
                <a href="/tuiter/profile"><i className="bi bi-chevron-right float-end h4 text-muted"></i></a>
                <p>Switch to professional</p>
            </div>

        </>
    );
};

export default EditProfile;