export interface SigninResponse {
  token: string;
  email: string;
  firstName: string;
  lastName: string;
  permissions: any[];
}
