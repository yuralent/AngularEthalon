import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '../window/window.provider';

const NAVIGATOR_DESC: string = 'NAVIGATOR_OBJECT';

export const NAVIGATOR = new InjectionToken<Navigator>(
    NAVIGATOR_DESC,
    {
        factory: () => inject(WINDOW).navigator,
    },
);
