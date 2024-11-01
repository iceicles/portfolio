export interface IFormValues {
  name: string;
  email: string;
  message: string;
  required: boolean;
}

export interface IFormErrorInputs {
  nameError: string | undefined;
  emailError: string | undefined;
  messageError: string | undefined;
}