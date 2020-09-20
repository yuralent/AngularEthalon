import {AbstractControlOptions} from '@angular/forms';
import {SimpleMap} from '../../../models/simple-map.interface';

export enum FormControlType {
    Text = 'text',
    TextWithMask = 'textWithMask',
    Checkbox = 'checkbox',
    Dropdown = 'dropdown',
    Textarea = 'textarea',
    Content = 'content'
}

export enum FormControlOption {
    Placeholder = 'placeholder',
    TextMask = 'textMask',
    MaxLength = 'maxLength',
    Pattern = 'pattern',
}

export interface MyFormControl<T = any> extends AbstractControlOptions {
    readonly type: FormControlType;
    readonly label?: string;
    readonly name: string;
    readonly value?: T;
    readonly defaultValue?: T;
    readonly availableValues?: T[];
    readonly disabled?: boolean;
    readonly required?: boolean;
    options?: SimpleMap<any>;
}
