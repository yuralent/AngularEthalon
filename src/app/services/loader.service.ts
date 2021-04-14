import {ElementRef, Injectable, ViewContainerRef} from '@angular/core';
import {MonoTypeOperatorFunction, pipe} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoaderOperatorFactoryService {

  constructor() { //Can provide some Services
  }

  public showLoader = <T>(elementReference?: ViewContainerRef | ElementRef): MonoTypeOperatorFunction<T> => {
    console.log('Show loader!!!');
    return pipe(
      finalize(() => {
        console.log('Hide Loader!!!');
      }),
    );
  };
}
