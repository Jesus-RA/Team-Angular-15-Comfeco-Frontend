// Imports modules.
import { AbstractControl, ValidatorFn } from "@angular/forms";
import { rules } from "../config/rules";

export class FormsValidators {
    static nickname(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const result: string | boolean = rules.nickname(control.value);
            return typeof result !== "string" ? null : { nickname: control.value };
        }
    }
}
