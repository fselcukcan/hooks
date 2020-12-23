import { useState, useEffect } from 'react';

export function useGetCurrentPosition({ options, dependencies = [] }) {
    const [state, setState] = useState();
    const [error, setError] = useState();

    const successFunc = (position) => setState(position);
    const errorFunc = (error) => setError(error);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(successFunc, errorFunc, options);
    }, dependencies);

    return [state, error];
}

export function useWatchPosition({ options, dependencies }) {
    const [state, setState] = useState();
    const [error, setError] = useState();
    const [ID, setID] = useState();

    const successFunc = (position) => setState(position);
    const errorFunc = (error) => setError(error);

    useEffect(() => {
        const watchID = navigator.geolocation.getCurrentPosition(successFunc, errorFunc, options);
        return () => navigator.geolocation.clearWatch(watchID);
    }, dependencies);

    return [state, error];
}