import { AbstractControl } from "@angular/forms";


export function hasIntegerSquareRootValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value) {
      const n: number = control.value as number;
      if (1 < n && Math.sqrt(n) % 1 === 0) {
        return null;
      }
    }
  
    return { "noIntegerSquareRoot": true };
}