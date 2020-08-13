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