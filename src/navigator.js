import { useState, useEffect } from "react";

export function useNavigator(dependencies = []) {
    const [spec, setSpec] = useState();

    useEffect(() => {
        const spec = {
            appCodeName,
            appName,
            appVersion,
            platform,
            product,
            productSub,
            userAgent,
            vendor,
            vendorSub,
            taintEnabled,
            oscpu,
            language,
            languages,
            cookieEnabled,
            deviceMemory,
            onLine,
            maxTouchPoints,
            doNotTrack,
            buildID,
            hardwareConcurrency,
        } = navigator;

        setSpec(spec);
    }, dependencies);

    return spec;
}

// https://html.spec.whatwg.org/multipage/system-state.html#