import { useState, useEffect } from "react";

export function usePageVisibility() {
    const { hidden, visibilityState } = document;
    const [pageVisibilitySpec, setPageVisibilitySpec] = useState({ hidden, visibilityState, event: undefined });

    function eventHandler(event) {
        const { hidden, visibilityState } = document;
        setPageVisibilitySpec({ hidden, visibilityState, event });
    }

    useEffect(() => {
        document.addEventListener('visibilitychange', eventHandler, false);
        return () => document.removeEventListener('visibilitychange', eventHandler, false);
    }, [eventHandler]);

    return pageVisibilitySpec;
}


export function useEvent(eventType = "mousemove", selector) {
    const [event, setEvent] = useState();

    useEffect(() => {
        function eventHandler(event) {
            setEvent(event);
        }

        const element = document.querySelector(selector) || document;
        element.addEventListener(eventType, eventHandler);

        return () => element.removeEventListener(eventType, eventHandler);
    }, [eventType, selector]);

    return event;
}

export function useTimeout(callback, timeout) {
    useEffect(() => {
        const id = window.setTimeout(callback, timeout);
        return () => window.clearTimeout(id);
    }); // ? callback, timeout
}


export function useNetwork() {
    const { onLine } = navigator;
    const [event, setEvent] = useState({ onLine, event: undefined });

    useEffect(() => {
        function eventHandler(event) {
            const { onLine } = navigator;
            setEvent({ onLine, event });
        }

        window.addEventListener('online', eventHandler);
        window.addEventListener('offline', eventHandler);

        return () => {
            window.removeEventListener('online', eventHandler);
            window.removeEventListener('offline', eventHandler);
        }
    }, []);

    return event;
}

export function useCurrentPosition(successCallback, errorCallback, options = { maximumAge = 0, timeout = Infinity, enableHighAccuracy = false }) {
    const [state, setState] = useState();

    useEffect(() => {
        function success(geolocationPosition) {
            setState(geolocationPosition);
            successCallback(); // ? will it work like that
        }
        navigator.geolocation.getCurrentPosition(success, error, options);
    }, []);

    return state;
}

export function useWatchPosition(successCallback, errorCallback, options = { maximumAge = 0, timeout = Infinity, enableHighAccuracy = false }) {
    const [state, setState] = useState();

    useEffect(() => {
        function success(geolocationPosition) {
            setState(geolocationPosition);
            successCallback(); // ? will it work like that or we need a seperate useEffect that calls use supplied success callback, outside, look at the commented out code
        }

        function error(geolocationError) {
            errorCallback(geolocationError);
        }

        const id = navigator.geolocation.watchPosition(success, error, options);
        return () => navigator.geolocation.clearWatch(id);
    }, []);

    /*
    useEffect(() => {
        successCallback();
    }, [state]);
    */
    return state;
}