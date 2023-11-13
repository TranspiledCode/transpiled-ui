import { useState, useEffect } from 'react';

const useVisibility = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '0px 0px -100% 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function
    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
};

export default useVisibility;
