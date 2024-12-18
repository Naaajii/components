## API Report File for "components-srcs"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AbstractControl } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms';
import { ElementRef } from '@angular/core';
import * as i0 from '@angular/core';
import * as i4 from '@angular/cdk/scrolling';
import { InjectionToken } from '@angular/core';
import { InputSignal } from '@angular/core';
import { InputSignalWithTransform } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatOptionParentComponent } from '@angular/material/core';
import { ModelSignal } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OutputEmitterRef } from '@angular/core';
import { Signal } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Validator } from '@angular/forms';

// @public
export const MAT_TIMEPICKER_CONFIG: InjectionToken<MatTimepickerConfig>;

// @public
export class MatTimepicker<D> implements OnDestroy, MatOptionParentComponent {
    constructor();
    readonly activeDescendant: Signal<string | null>;
    readonly ariaLabel: InputSignal<string | null>;
    readonly ariaLabelledby: InputSignal<string | null>;
    close(): void;
    readonly closed: OutputEmitterRef<void>;
    readonly disabled: Signal<boolean>;
    readonly disableRipple: InputSignalWithTransform<boolean, unknown>;
    protected _getAriaLabelledby(): string | null;
    readonly interval: InputSignalWithTransform<number | null, number | string | null>;
    readonly isOpen: Signal<boolean>;
    // (undocumented)
    ngOnDestroy(): void;
    open(): void;
    readonly opened: OutputEmitterRef<void>;
    readonly options: InputSignal<readonly MatTimepickerOption<D>[] | null>;
    // (undocumented)
    protected _options: Signal<readonly MatOption<any>[]>;
    readonly panelId: string;
    // (undocumented)
    protected _panelTemplate: Signal<TemplateRef<unknown>>;
    registerInput(input: MatTimepickerInput<D>): void;
    readonly selected: OutputEmitterRef<MatTimepickerSelected<D>>;
    protected _selectValue(value: D): void;
    // (undocumented)
    protected _timeOptions: readonly MatTimepickerOption<D>[];
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatTimepicker<any>, "mat-timepicker", ["matTimepicker"], { "interval": { "alias": "interval"; "required": false; "isSignal": true; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; "disableRipple": { "alias": "disableRipple"; "required": false; "isSignal": true; }; "ariaLabel": { "alias": "aria-label"; "required": false; "isSignal": true; }; "ariaLabelledby": { "alias": "aria-labelledby"; "required": false; "isSignal": true; }; }, { "selected": "selected"; "opened": "opened"; "closed": "closed"; }, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatTimepicker<any>, never>;
}

// @public
export interface MatTimepickerConfig {
    disableRipple?: boolean;
    interval?: string | number;
}

// @public
export class MatTimepickerInput<D> implements ControlValueAccessor, Validator, OnDestroy {
    constructor();
    protected readonly _ariaActiveDescendant: Signal<string | null>;
    protected readonly _ariaControls: Signal<string | null>;
    protected readonly _ariaExpanded: Signal<string>;
    readonly disabled: Signal<boolean>;
    readonly disabledInput: InputSignalWithTransform<boolean, unknown>;
    focus(): void;
    _getLabelId(): string | null;
    getOverlayOrigin(): ElementRef<HTMLElement>;
    protected _handleBlur(): void;
    protected _handleInput(value: string): void;
    protected _handleKeydown(event: KeyboardEvent): void;
    readonly max: InputSignalWithTransform<D | null, unknown>;
    readonly min: InputSignalWithTransform<D | null, unknown>;
    // (undocumented)
    ngOnDestroy(): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    registerOnValidatorChange(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    readonly timepicker: InputSignal<MatTimepicker<D>>;
    validate(control: AbstractControl): ValidationErrors | null;
    readonly value: ModelSignal<D | null>;
    writeValue(value: any): void;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatTimepickerInput<any>, "input[matTimepicker]", ["matTimepickerInput"], { "value": { "alias": "value"; "required": false; "isSignal": true; }; "timepicker": { "alias": "matTimepicker"; "required": true; "isSignal": true; }; "min": { "alias": "matTimepickerMin"; "required": false; "isSignal": true; }; "max": { "alias": "matTimepickerMax"; "required": false; "isSignal": true; }; "disabledInput": { "alias": "disabled"; "required": false; "isSignal": true; }; }, { "value": "valueChange"; }, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatTimepickerInput<any>, never>;
}

// @public (undocumented)
export class MatTimepickerModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatTimepickerModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<MatTimepickerModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatTimepickerModule, never, [typeof i1.MatTimepicker, typeof i2.MatTimepickerInput, typeof i3.MatTimepickerToggle], [typeof i4.CdkScrollableModule, typeof i1.MatTimepicker, typeof i2.MatTimepickerInput, typeof i3.MatTimepickerToggle]>;
}

// @public
export interface MatTimepickerOption<D = unknown> {
    label: string;
    value: D;
}

// @public
export interface MatTimepickerSelected<D> {
    // (undocumented)
    source: MatTimepicker<D>;
    // (undocumented)
    value: D;
}

// @public
export class MatTimepickerToggle<D> {
    readonly ariaLabel: InputSignal<string | undefined>;
    readonly disabled: InputSignalWithTransform<boolean, unknown>;
    readonly disableRipple: InputSignalWithTransform<boolean, unknown>;
    // (undocumented)
    protected _isDisabled: Signal<boolean>;
    protected _open(event: Event): void;
    readonly tabIndex: InputSignal<number | null>;
    readonly timepicker: InputSignal<MatTimepicker<D>>;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatTimepickerToggle<any>, "mat-timepicker-toggle", ["matTimepickerToggle"], { "timepicker": { "alias": "for"; "required": true; "isSignal": true; }; "ariaLabel": { "alias": "aria-label"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "tabIndex": { "alias": "tabIndex"; "required": false; "isSignal": true; }; "disableRipple": { "alias": "disableRipple"; "required": false; "isSignal": true; }; }, {}, never, ["[matTimepickerToggleIcon]"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatTimepickerToggle<any>, never>;
}

// (No @packageDocumentation comment for this package)

```