import { useEffect } from "react";

export function useOnlineStatus() {
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


export function useNetworkInfo() {
    const { connection } = navigator;
    const [spec, setSpec] = useState(connection); // useState({connection, event: undefined); // or generally like that

    function listener(event) {
        const { connection } = navigator;
        setSpec({ connection, event }); // setSpec(connection); // or generally like that
    }

    useEffect(() => {
        navigator.connection.addEventListener('change', listener);
        return () => navigator.connection.removeEventListener('change', listener);
    }, []);

    return spec;
}