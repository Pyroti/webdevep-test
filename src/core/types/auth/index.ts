export interface SignInForm {
  email: string;
  password: string;
}

export interface SingUpForm extends SignInForm {
  name?: string;
}
