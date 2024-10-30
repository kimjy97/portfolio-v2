import { useState } from "react";

export const useScroll = () => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = (progress: number) => {
    const newOpacity = progress;
    setOpacity(Math.max(0, newOpacity));
  };

  return { handleScroll, opacity };
}