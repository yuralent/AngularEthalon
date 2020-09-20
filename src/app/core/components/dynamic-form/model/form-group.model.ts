import {AbstractControlOptions} from "@angular/forms";
import {MyFormControl} from './form-control.model';

export interface MyFormGroup extends AbstractControlOptions {
    readonly formName: string;
    readonly controls: MyFormControl[];
}
