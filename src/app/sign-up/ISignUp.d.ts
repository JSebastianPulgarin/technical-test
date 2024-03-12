declare namespace ISignUp {
  export interface FormValues {
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  export interface FormError {
    message: string;
  }
}

export { ISignUp };