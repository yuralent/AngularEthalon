import {Injectable} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {ReplaySubject} from 'rxjs';

enum ScreenResolutuon {
  XS = 'XSmall',
  S = 'Small',
  M = 'Medium',
  L = 'Large'
}

@Injectable()
export class ScreenResolutionService {

  XSmall = '(max-width: 599px)';
  Small = '(min-width: 600px) and (max-width: 959px)';
  Medium = '(min-width: 960px) and (max-width: 1279px)';
  Large = '(min-width: 1280px)';

  private currentState: string;

  public resolutionChanged = new ReplaySubject<string>(1);

  constructor(breakpointObserver: BreakpointObserver) {
    this.initCurrentState();
    breakpointObserver.observe([
      this.XSmall,
      this.Small,
      this.Medium,
      this.Large
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[this.XSmall]) {
          this.currentState = ScreenResolutuon.XS;
        } else if (result.breakpoints[this.Small]) {
          this.currentState = ScreenResolutuon.S;
        } else if (result.breakpoints[this.Medium]) {
          this.currentState = ScreenResolutuon.M;
        } else {
          this.currentState = ScreenResolutuon.L;
        }
        console.log('Screen resolution changed: ' + this.currentState);
        this.resolutionChanged.next(this.currentState);
      }
    });
  }

  private initCurrentState(): void {
    if (window.matchMedia(this.XSmall).matches) {
      this.currentState = ScreenResolutuon.XS;
    } else if (window.matchMedia(this.Small).matches) {
      this.currentState = ScreenResolutuon.S;
    } else if (window.matchMedia(this.Medium).matches) {
      this.currentState = ScreenResolutuon.M;
    } else {
      this.currentState = ScreenResolutuon.L;
    }
  }
}
