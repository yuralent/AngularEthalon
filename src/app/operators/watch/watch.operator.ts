import {ChangeDetectorRef} from '@angular/core';
import {MonoTypeOperatorFunction} from 'rxjs';
import {finalize} from 'rxjs/operators';

export function watch<T>(
    changeDetectorRef: ChangeDetectorRef,
): MonoTypeOperatorFunction<T> {
    return finalize(() => {
        changeDetectorRef.markForCheck();
    });
}
