export function useNavigator() {
    const {
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
}

// https://html.spec.whatwg.org/multipage/system-state.html#