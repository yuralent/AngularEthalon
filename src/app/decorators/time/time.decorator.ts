// https://blog.bitsrc.io/6-useful-decorators-to-use-in-your-angular-projects-777e9b4c8c62
export function Time(target: any, name, descriptor: PropertyDescriptor): void {
  const orig = descriptor.value;
  descriptor.value = (...args: any[]) => {
    const start = performance.now();
    orig.apply(this, args);
    const stop = performance.now();
    console.log(`Metrics stats:`, (stop - start).toFixed(2));
  };
}
