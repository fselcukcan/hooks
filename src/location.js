import { useState, useEffect } from "react";

export function useLocation(dependencies = [].concat(navigator.location)) {
    const [spec, setSpec] = useState();

    useEffect(() => {
        setSpec(navigator.location);
    }, dependencies);

    return spec;
}

// A React hook to use current URL search params in the address bar as an instance of URLSearchParams object.
// returns an instance of URLSearchParams object.
// URL search parameters are the part with question mark, ?, and following parameter pairs.
// to get it as a string, e.g. "?id=1024&id=1345&x=45&y=1000", use toString method on it.
export function useURLSearchParams() {
    const [urlSearchParams, setUrlSearchParams] = useState();
    const location = useLocation();

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(location.search);
        setUrlSearchParams(urlSearchParams);
    }, [location.search]);

    return urlSearchParams;
}