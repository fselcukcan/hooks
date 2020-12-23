export function useTimeout(callback, timeout, dependencies = []) {
    useEffect(() => {
        const id = window.setTimeout(callback, timeout);
        return () => window.clearTimeout(id);
    }, [callback, timeout, ...dependencies]); // ? callback, timeout
}