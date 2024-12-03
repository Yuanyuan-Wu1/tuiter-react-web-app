import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useFetch = (action) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(action());
    }, [dispatch, action]);
};
