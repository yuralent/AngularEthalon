import {Observable, race, ReplaySubject} from 'rxjs';
import {tap} from 'rxjs/operators';

const DEFAULT_CACHE_OPTIONS: CacheOptions = {
  cacheTime: 60000,
};

export interface CacheOptions {
  cacheTime: number;
}

export function Cache(options: CacheOptions = DEFAULT_CACHE_OPTIONS): MethodDecorator {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalFunction: (...args: any[]) => Observable<any> = descriptor.value;
    const cacheProperty: string = `${propertyKey}_cached`;

    target[cacheProperty] = new ReplaySubject(1, options.cacheTime);

    descriptor.value = function(...args): Observable<any> {
      const req = originalFunction.apply(this, args).pipe(
        tap((response) => {
          this[cacheProperty].next(response);
        }),
      );

      return race(this[cacheProperty], req);
    };

    return descriptor;
  };
}
