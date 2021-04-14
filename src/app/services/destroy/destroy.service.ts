import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

/* Need provide service ONLY on component lvl */

@Injectable()
export class DestroyService extends Subject<void> implements OnDestroy {
    ngOnDestroy() {
        this.next();
        this.complete();
    }
}
