export interface CreateBankIDMobileResponse {
  /**
   * Request ID used to get the response from server afterwards.
   */
  requestId?: string;

  /**
   * The merchant ref to show to the end user.
   */
  merchantRef?: string;

  /**
   * Information about error if the identification process failed.
   */
  error?: Error;

  /**
   *  Whether the request started without errors.
   */
  OK?: boolean;

  /**
   * Whether  the mobile number of the date of birth was invalid.
   */
  invalidMobileNumberOrDateOfBirth?: boolean;
}
