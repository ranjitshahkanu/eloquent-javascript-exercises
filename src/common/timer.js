export const benchmark = (label, fn) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`[PERF] ${label}: ${(end - start).toFixed(4)} ms`);
};