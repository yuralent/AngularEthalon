import {Subject} from 'rxjs';
import {ComponentType} from '@angular/cdk/portal';
import {ɵComponentDef} from '@angular/core';

// https://medium.com/@gesteira2046/how-to-auto-unsubscribe-in-angular-9-da7647cc8b54

export interface ComponentDef<T> extends ɵComponentDef<T> {
    factory: FactoryFn<T>;
    onDestroy: (() => void) | null;
}

export type FactoryFn<T> = {
    <U extends T>(t: ComponentType<U>): U;
    (t?: undefined): T;
};

export function Unsubscriber(): any {
    return (cmpType: ComponentType<any>) => {
        const cmp: ComponentDef<typeof cmpType> = getComponentProp(cmpType, 'ɵcmp');
        const cmpOndestroy: (() => void) | null = cmp.onDestroy;
        cmpType.prototype.destroyed$ = new Subject<void>();
        cmp.onDestroy = function () {
            (this as any).destroyed$.next();
            if (cmpOndestroy !== null) {
                cmpOndestroy.apply(this);
            }
        };
    };
}


export function getComponentProp<T, K extends keyof T>(t: ComponentType<T>, key: string): T[K] {
    if (t.hasOwnProperty(key)) {
        return t[key];
    }

    throw new Error('No Angular property found for ' + t.name);
}
