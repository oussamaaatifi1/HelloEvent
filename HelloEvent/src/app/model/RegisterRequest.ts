export class RegisterRequest {
    username!: string;
    password!: string;
    confirmPassword?: string; // This field might be optional depending on how you use it
  }
  