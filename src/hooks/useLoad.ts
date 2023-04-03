import { useEffect, useState } from "react";
import XrplService from "service/XrplService";

export function useLoad(): boolean {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const startApp = async () => {
            await XrplService.connect();

            setLoading(false);
        };
        startApp();
    }, []);

    return loading;
}
