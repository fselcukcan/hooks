export function useNetwork() {
    const { onLine } = navigator;
    const [spec, setSpec] = useState({ onLine, event: undefined });

    function eventHandler(event) {
        const { onLine } = navigator;
        setSpec({ onLine, event });
    }

    useEffect(() => {
        window.addEventListener('online', eventHandler);
        window.addEventListener('offline', eventHandler);

        return () => {
            window.removeEventListener('online', eventHandler);
            window.removeEventListener('offline', eventHandler);
        }
    }, []);

    return spec;
}