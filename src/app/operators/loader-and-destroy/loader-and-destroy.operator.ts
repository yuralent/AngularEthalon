import {MonoTypeOperatorFunction, pipe} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {ElementRef, ViewContainerRef} from '@angular/core';
import {DestroyService} from '../../services/destroy/destroy.service';
import {LoaderOperatorFactoryService} from '../../services/loader.service';

export function showLoaderAndTakeUntilDestroy<T>(
  loaderOperatorFactoryService: LoaderOperatorFactoryService,
  destroyService: DestroyService,
  elementReference?: ViewContainerRef | ElementRef,
): MonoTypeOperatorFunction<T> {
  return pipe(loaderOperatorFactoryService.showLoader(elementReference), takeUntil(destroyService));
}
