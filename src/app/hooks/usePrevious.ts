import { useEffect, useRef } from "react";

export default function usePrevious(val: string) {
    const ref = useRef("");
    useEffect(() => {
        ref.current = val;
    }, [val]);
    return ref.current;
}
