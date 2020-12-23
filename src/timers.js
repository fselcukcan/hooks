import { useState, useEffect } from "react";

export function useTimeout(callback, timeout, dependencies = []) {
    useEffect(() => {
        const id = window.setTimeout(callback, timeout);
        return () => window.clearTimeout(id);
    }, [callback, timeout, ...dependencies]); // ? callback, timeout
}

export function useInterval(callback, interval, dependencies = []) {
    useEffect(() => {
        const id = window.setInterval(callback, interval);
        return () => window.clearInterval(id);
    }, [callback, interval, ...dependencies]); // ? callback, timeout
}