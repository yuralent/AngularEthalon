import {MyFormControl} from '../model/form-control.model';

export function patchOptionsForControls(controls: MyFormControl[]): void {
    controls.forEach(control => {
        if (!control.options) {
            control.options = {};
        }
        const inputsValue = fieldsInputValues[control.type];
        if (inputsValue) {
            control.options = Object.assign({
                ...inputsValue
            }, control.options);
        } else {
            throw Error(`Field with type ${control.type} doesn't support`);
        }
    });
}

export const textFieldInputValues = {
    appearance: 'outline',
    placeholder: '',
    assistiveText: '',
    requiredInvalidText: 'component.dynamic-form.invalid.required.text',
    patternInvalidText: 'component.dynamic-form.invalid.value',
};

export const textWithmaskFieldInputValues = {
    appearance: 'outline',
    placeholder: '',
    assistiveText: '',
    requiredInvalidText: 'component.dynamic-form.invalid.required.text',
    patternInvalidText: 'component.dynamic-form.invalid.value',
};

export const checkBoxFieldInputValues = {
    outline: true,
};

export const dropdownFieldInputValues = {
    appearance: 'outline',
    assistiveText: '',
    requiredInvalidText: 'component.dynamic-form.invalid.required.text',
};

export const textAreaFieldInputValues = {
    appearance: 'outline',
    placeholder: '',
    maxLength: undefined,
    assistiveText: '',
};

export const dateFieldInputValues = {
    appearance: 'outline',
    placeholder: 'DD/MM/YEAR',
    maxLength: undefined,
    assistiveText: '',
};

export const contentValues = {};

export const fieldsInputValues = {
    text: textFieldInputValues,
    textWithMask: textWithmaskFieldInputValues,
    checkbox: checkBoxFieldInputValues,
    dropdown: dropdownFieldInputValues,
    textarea: textAreaFieldInputValues,
    date: dateFieldInputValues,
    content: contentValues
};
