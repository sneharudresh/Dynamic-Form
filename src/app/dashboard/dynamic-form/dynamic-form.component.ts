import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { FormSection } from '../user-model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {
  form!: FormGroup;
  formSections!: FormSection[];

  constructor(private formBuilder: FormBuilder, private formService: UserService) { }

  ngOnInit(): void {
    this.formSections = this.formService.getFormConfig();
    this.form = this.createFormGroup();
  }

  private createFormGroup(): FormGroup {
    const group = this.formBuilder.group({});
    this.formSections.forEach((section) => {
      section.fields.forEach((field) => {
        const control = this.formBuilder.control('', this.getValidators(field.validations));
        group.addControl(field.name, control);
      });
    });
    return group;
  }

  private getValidators(validations: any): any[] {
    const validators = [];
    if (validations && validations.isRequired) {
      validators.push(Validators.required);
    }
    if (validations && validations.pattern) {
      validators.push(Validators.pattern(validations.pattern));
    }
    return validators;
  }
  // dynamic-form.component.ts
  // ...

  isFieldInvalid(fieldName: string) {
    const control = this.form.get(fieldName);
    return control && control.invalid && (control.dirty || control.touched);
  }
  getErrors(fieldName: string): string[] {
    const control = this.form.get(fieldName);
    const errors: string[] = [];

    if (control) {
      for (const errorKey in control.errors) {
        if (control.errors.hasOwnProperty(errorKey)) {
          if (errorKey === 'required') {
            errors.push('This field is required');
          } else if (errorKey === 'pattern') {
            errors.push('Invalid input');
          }
          // Add other error messages as needed
        }
      }
    }

    return errors;
  }
  // ...

}
