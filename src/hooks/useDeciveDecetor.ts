import React, { useEffect } from "react";

export const useDeviceDetector = () => {
    const [isMobile, setMobile] = React.useState(false);

    useEffect(() => {
        const userAgent =
            typeof window.navigator === "undefined" ? "" : navigator.userAgent;
        const mobile = Boolean(
            userAgent.match(
                /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
            )
        );
        setMobile(mobile);
    }, []);

    return { isMobile };
};
