import {inject, InjectionToken} from '@angular/core';
import {DOCUMENT} from '@angular/common';

const TOKEN_DESC: string = 'WINDOW_OBJECT';
const ERROR_MESSAGE: string = 'Window is not available';

export const WINDOW: InjectionToken<Window> = new InjectionToken<Window>(
    TOKEN_DESC,
    {
        factory: () => {
            const {defaultView} = inject(DOCUMENT);

            if (!defaultView) {
                throw new Error(ERROR_MESSAGE);
            }

            return defaultView;
        },
    },
);
