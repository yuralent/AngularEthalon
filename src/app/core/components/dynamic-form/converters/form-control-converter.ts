import {FormControl} from "@angular/forms";
import {MyFormControl} from "../model/form-control.model";
import {SimpleMap} from '../../../models/simple-map.interface';

export function convertToFormControlsGroup(controls: MyFormControl[]): SimpleMap<any> {
    const controlsMap: SimpleMap<any> = {};

    controls
        .forEach(control => {
            const value = control.value ?? control.defaultValue;
            controlsMap[control.name] = new FormControl({
                value: value,
                disabled: control.disabled
            }, {
                validators: control.validators,
                asyncValidators: control.asyncValidators,
                updateOn: control.updateOn
            });
        });

    return controlsMap;
}
