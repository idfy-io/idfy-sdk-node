export default interface IdfyError {
  message?: string;

  code?: string;

  /** OAuth 2 errors */
  error?: string;

  errorDescription?: string;
}
