import {Component, ViewChild} from '@angular/core';
import {MyFormGroup} from '../../../core/components/dynamic-form/model/form-group.model';
import {Validators} from '@angular/forms';
import {DynamicFormComponent} from '../../../core/components/dynamic-form/dynamic-form.component';

@Component({
  selector: 'dynamic-form-case',
  templateUrl: './dynamic-form-case.component.html',
})
export class DynamicFormCaseComponent {

  @ViewChild(DynamicFormComponent, {static: false})
  dynamicFormComponent: DynamicFormComponent;

  /** @internal */
  _model = <MyFormGroup> {
    formName: 'paymentForm',
    controls: [
      {
        type: 'text',
        name: 'nameAccountFC',
        validators: [
          Validators.required,
          Validators.pattern(/^[0-9a-zA-Z ]{2,100}$/),
        ],
        options: {
          placeholder: 'Name on the account',
          maxLength: 8,
        }
      },
      {
        type: 'text',
        name: 'numberAccountFC',
        validators: [
          Validators.required,
          Validators.pattern(/^[0-9]{8}$/),
        ],
        options: {
          placeholder: 'Account number',
          maxLength: 8,
        }
      },
      {
        type: "checkbox",
        name: "termsConditionDDFC",
      },
      {
        type: 'content',
        name: 'monthlyPayment',
      },
    ]
  };

  /** @internal */
  _submitResult: any;

  /** @internal */
  _onSubmitForm(): void {
    this._submitResult = this.dynamicFormComponent.formGroup.getRawValue();
  }

}
