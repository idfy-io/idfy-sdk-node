export interface CreateBankIDMobileResponse {
  /**
   * Request ID used to get the response from server afterwards.
   */
  RequestId?: string;

  /**
   * The merchant ref to show to the end user.
   */
  MerchantRef?: string;

  /**
   * Information about error if the identification process failed.
   */
  Error?: Error;

  /**
   *  Whether the request started without errors.
   */
  OK?: boolean;

  /**
   * Whether  the mobile number of the date of birth was invalid.
   */
  InvalidMobileNumberOrDateOfBirth?: boolean;
}
