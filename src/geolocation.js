import { useState, useEffect } from 'react';

export function useGeolocation(options, dependencies) {
    const [state, setState] = useState();
    const [error, setError] = useState();

    const successFunc = (position) => setState(position);
    const errorFunc = (error) => setError(error);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(successFunc, errorFunc, options);
    }, dependencies);

    return [state, error];
}