const smoothScrollTo = (targetPosition: number, duration: number = 500): Promise<void> => {
  return new Promise((resolve) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeOutExpo(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
      else resolve();
    };

    const easeOutExpo = (t: number, b: number, c: number, d: number): number => {
      return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    };

    requestAnimationFrame(animation);
  });
};

export default smoothScrollTo;