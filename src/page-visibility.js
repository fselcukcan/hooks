export function usePageVisibility() {
    const { hidden, visibilityState } = document;
    const [spec, setSpec] = useState({ hidden, visibilityState, event: undefined });

    function eventHandler(event) {
        const { hidden, visibilityState } = document;
        setSpec({ hidden, visibilityState, event });
    }

    useEffect(() => {
        document.addEventListener('visibilitychange', eventHandler, false);
        return () => document.removeEventListener('visibilitychange', eventHandler, false);
    }, [eventHandler]);

    return spec;
}