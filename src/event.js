export function useEvent(eventType = "mousemove", selector) {
    const [spec, setSpec] = useState();

    useEffect(() => {
        function eventHandler(event) {
            setSpec(event);
        }

        const element = document.querySelector(selector) || document;
        element.addEventListener(eventType, eventHandler);

        return () => element.removeEventListener(eventType, eventHandler);
    }, [eventType, selector]);

    return spec;
}