export interface CreateBankIDMobileRequest {
  /**
   * Mobile number for the user that is to be identified.
   */
  mobileNumber: string;

  /**
   * Date of birth for the user that is to be identified.
   */
  dateOfBirth: string;

  /**
   * Whether the social security number should be fetched from the identity provider.
   */
  getSocialSecurityNumber?: boolean;

  /**
   * The merchants reference to the identification process.
   */
  externalReference?: string;

  /**
   * List of addon data that can be ordered. The result will be in MetaData list of the response.
   */
  addonservices?: { [key: string]: string; };
}
