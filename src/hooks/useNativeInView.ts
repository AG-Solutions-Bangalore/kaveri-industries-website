import { useEffect, useRef, useState } from "react";

export function useNativeInView<T extends HTMLElement = HTMLElement>(
  rootMargin = "250px",
) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(typeof window === "undefined");

  useEffect(() => {
    if (isInView || typeof window === "undefined") return;

    if (!ref.current || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isInView, rootMargin]);

  return { ref, isInView };
}
