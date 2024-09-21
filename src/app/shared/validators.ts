import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(
  control: AbstractControl,
): { [key: string]: boolean } | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  // If passwords do not match, return an error
  return password === confirmPassword ? null : { passwordMismatch: true };
}

export function passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.value;
  if (!password) return null;

  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const validLength = password.length >= 8 && password.length <= 16;

  if (!hasUpperCase) {
    return { passwordMissingUpperCase: true };
  }

  if (!hasSpecialCharacter) {
    return { passwordMissingSpecialCharacter: true };
  }

  if (!validLength) {
    return { passwordInvalidLength: true };
  }

  return null;
}
