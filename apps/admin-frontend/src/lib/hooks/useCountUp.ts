import { useEffect, useState } from "react";

export function useCountUp(end: number, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = 16; // ~60 FPS
    const increment = end / (duration / stepTime);

    const animate = () => {
      start += increment;

      if (start < end) {
        setValue(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return value;
}
