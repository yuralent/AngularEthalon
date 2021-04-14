import {ChangeDetectorRef, Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {Time} from '../../decorators/time/time.decorator';
import {Unsubscriber} from '../../decorators/unsubscriber/unsubscriber.decorator';
import {noop, of} from 'rxjs';
import {LoaderOperatorFactoryService} from '../../services/loader.service';
import {DestroyService} from '../../services/destroy/destroy.service';
import {takeUntil} from 'rxjs/operators';
import {watch} from '../../operators/watch/watch.operator';
import {WINDOW} from '../../providers/window/window.provider';
import {showLoaderAndTakeUntilDestroy} from '../../operators/loader-and-destroy/loader-and-destroy.operator';

@Unsubscriber()
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  host: {'class': 'app-angular'},
  providers: [
    DestroyService,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AngularComponent implements OnInit {

  constructor(private _destroy$: DestroyService,
              private _cdr: ChangeDetectorRef,
              @Inject(WINDOW) private _window: Window,
              private _loaderOperatorFactoryService: LoaderOperatorFactoryService) {
  }


  ngOnInit(): void {
    this.methodToMeasure();

    of(1, 2, 3).pipe(
      this._loaderOperatorFactoryService.showLoader(),
      takeUntil(this._destroy$),
      watch(this._cdr)
    ).subscribe(noop);

    of(4, 5, 6).pipe(
      showLoaderAndTakeUntilDestroy(this._loaderOperatorFactoryService, this._destroy$),
      watch(this._cdr)
    ).subscribe(noop);
  }

  @Time
  public methodToMeasure(): void {
    let count: number = 0;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
  }
}
