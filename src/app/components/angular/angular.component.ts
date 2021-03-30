import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Time} from '../../decorators/time/time.decorator';
import {Unsubscriber} from '../../decorators/unsubscriber/unsubscriber.decorator';

@Unsubscriber()
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  host: {'class': 'app-angular'},
  encapsulation: ViewEncapsulation.None,
})
export class AngularComponent implements OnInit {


  ngOnInit(): void {
    this.methodToMeasure();
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
