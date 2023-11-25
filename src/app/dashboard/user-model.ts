export interface User{
    userId: number
    id: number
    title: string
    body: string
  }
  // form-field.model.ts
export interface FormField {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  validations?: {
    isRequired?: boolean;
    pattern?: string;
  };
  options?: Array<{ label: string; value: string }>;
}

export interface FormSection {
  label: string;
  fields: FormField[];
}
