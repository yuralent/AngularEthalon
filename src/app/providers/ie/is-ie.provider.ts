import {inject, InjectionToken} from '@angular/core';
import {USER_AGENT} from '../user-agent/user-agent.provider';


export const IS_IE = new InjectionToken<boolean>('Is IE browser', {
    factory: () => {
        const userNavigator: string = inject(USER_AGENT).toLowerCase();

        return /trident/gi.test(userNavigator) || /msie/gi.test(userNavigator);
    },
});
