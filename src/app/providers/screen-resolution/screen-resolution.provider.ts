import {BreakpointObserver} from '@angular/cdk/layout';
import {InjectionToken, Provider} from '@angular/core';
import {map, pluck} from 'rxjs/operators';
import {getCurrentScreenSize, ScreenSize, ScreenSizeProvider, screenSizes} from './screen-resolution.util';
import {Observable} from 'rxjs';
import {SimpleMap} from '../../core/models/simple-map.interface';


export type ScreenResolutionPayload = {
  currentResolution: ScreenSize;
  screenSize: typeof ScreenSize;
};

export const SCREEN_RESOLUTION: InjectionToken<Observable<ScreenResolutionPayload>>
  = new InjectionToken<Observable<ScreenResolutionPayload>>('Screen resolution provider');

export const SCREEN_RESOLUTION_PROVIDER: Provider[] = [
  {
    provide: SCREEN_RESOLUTION,
    useFactory: screenResolutionFactory,
    deps: [BreakpointObserver],
  },
];

function screenResolutionFactory(breakpointObserver: BreakpointObserver): Observable<ScreenResolutionPayload> {
  return breakpointObserver
    .observe(screenSizes)
    .pipe(
      pluck('breakpoints'),
      map((breakpoints: SimpleMap<boolean>) => {
        return {
          currentResolution: getCurrentScreenSize(breakpoints),
          screenSize: new ScreenSizeProvider().screenSize,
        };
      }),
    );
}
