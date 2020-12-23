import { useState, useEffect } from "react";

export function useLocation(dependencies = [].concat(navigator.location)) {
    const [spec, setSpec] = useState();

    useEffect(() => {
        setSpec(navigator.location);
    }, dependencies);

    return spec;
}