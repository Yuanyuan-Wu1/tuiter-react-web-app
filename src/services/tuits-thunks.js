import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./tuits-service"
import axios from 'axios';

const TUITS_API = 'https://tuiter-node-server-app-iot1.onrender.com/api/tuits';

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>{
        const response = await axios.get(TUITS_API);
        return response.data;
    }
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    })

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit', async (thunkAPI) =>
        await service.createTuit(thunkAPI)
)

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) =>
            await service.updateTuit(tuit)
    )