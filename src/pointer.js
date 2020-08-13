export function usePointer(selector) {
    const [spec, setSpec] = useState();

    function eventHandler(event) {
        setSpec(event);
    }

    useEffect(() => {
        const element = selector ? document.querySelector(selector) : document;
        element.addEventListener('mousemove', eventHandler);

        return () => element.removeEventListener('mousemove', eventHandler); // should we set spec to undefined, sine we no longer know where mouse is 
    }, [selector]);

    return spec;
}