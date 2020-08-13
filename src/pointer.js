export function usePointer(selector = document) {
    const [spec, setSpec] = useState();

    function eventHandler(event) {
        setSpec(event);
    }

    useEffect(() => {
        const element = selector ? document.querySelector(selector) : document;
        element.addEventListener(eventType, eventHandler);

        return () => element.removeEventListener('mousemove', eventHandler);
    }, [eventType, selector]);

    return spec;
}