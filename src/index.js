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
    });
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
    });

    return event;
}