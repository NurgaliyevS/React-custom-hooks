// the hook is needed in order to send a request 
// when the user does not enter anything, 
// so that each time data is entered in the input, the request does not fly away

import { useCallback, useRef } from "react";

export default function useDebounce(callback, delay) {
    const timer = useRef();

    const debouncedCallback = useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])

    return debouncedCallback;
}