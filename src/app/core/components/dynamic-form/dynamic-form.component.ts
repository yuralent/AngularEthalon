import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {convertToFormControlsGroup} from './converters/form-control-converter';
import {patchOptionsForControls} from './converters/form-control-default-input-values';
import {FormControlOption, FormControlType, MyFormControl} from './model/form-control.model';
import {MyFormGroup} from './model/form-group.model';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit {

  @Input()
  formGroupModel: MyFormGroup;

  public formGroup: FormGroup = new FormGroup({});

  /** @internal */
  _formGroupModel: MyFormGroup;

  /** @internal */
  _formControlType: typeof FormControlType = FormControlType;

  /** @internal */
  _formControlOption: typeof FormControlOption = FormControlOption;

  constructor(private _formsBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    if (this.formGroupModel) {
      const controls = this.formGroupModel.controls
        .map((control: MyFormControl) => {
          return {
            ...control,
            required: !control.required
              ? Array.isArray(control.validators)
                ? control.validators.includes(Validators.required)
                : control.validators === Validators.required
              : control.required
          };
        });

      this._formGroupModel = {
        ...this.formGroupModel,
        controls
      };

      this.formGroup = this._getFormGroup(this._formGroupModel);
    }
  }

  private _getFormGroup(model: MyFormGroup): FormGroup {
    if (model.controls) {
      patchOptionsForControls(model.controls);
    }
    return this._formsBuilder.group(convertToFormControlsGroup(model.controls), {
      validators: model.validators,
      asyncValidators: model.asyncValidators,
      updateOn: model.updateOn
    });
  }
}
