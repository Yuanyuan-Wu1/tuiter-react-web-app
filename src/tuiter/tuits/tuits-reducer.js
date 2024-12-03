import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "name": "NASA",
    "handle": "nasa",
    "avatar": "../../images/nasa.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Nasa",
    "time": "2h",
    "liked": false,
    "stats": {
        "replies": 0,
        "retuits": 0,
        "likes": 0,
        "dislikes": 0
    }
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        likeTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state[index].stats.liked = !state[index].stats.liked;
            state[index].stats.likes = state[index].stats.liked ? state[index].stats.likes + 1 : state[index].stats.likes - 1;
        },

        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },

        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }
});

export const {likeTuit, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;