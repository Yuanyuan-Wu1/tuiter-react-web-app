import { createSlice } from "@reduxjs/toolkit";

const profile = {
    "firstName": "Yuanyuan",
    "lastName": "Wu",
    "handle": "yuanyuan",
    "avatar": "/images/avatar.png",
    "bannerPicture": "banner.jpeg",
    "bio": "MSCS Student @ Northeastern University",
    "website": 'youtube.com/webdevtv',
    "location": "Seattle, WA",
    "dateOfBirth": "2/10/1997",
    "dateJoined": "11/2020",
    "followingCount": 340,
    "followersCount": 223
}


const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            const updatedProfile = action.payload.profile;
            let [firstName, ...lastName] = updatedProfile.name.split('/');
            lastName = lastName.join(' ');
            const bio = updatedProfile.bio;
            const location = updatedProfile.location;
            const website = updatedProfile.website;
            const [year, month, day] = updatedProfile.dateOfBirth.split('-');
            const dateOfBirth = [month, day, year].join('/');
            return {...state, firstName, lastName, bio, location, website, dateOfBirth}
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;