import { useEffect, useRef } from "react";

// useScroll hook for scrolling on page and view new data
export default function useScroll (parentRef, childRef, callback) {
    const observer = useRef();

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('intersected')
                callback()
            }
        }, options)

        observer.current.observer(childRef.current)

        return function () {
            observer.current.unobserver(childRef.current)
        }
    }, [callback])
}