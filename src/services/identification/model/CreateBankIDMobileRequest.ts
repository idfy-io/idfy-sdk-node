export interface CreateBankIDMobileRequest {
  /**
   * Mobile number for the user that is to be identified.
   */
  MobileNumber: string;

  /**
   * Date of birth for the user that is to be identified.
   */
  DateOfBirth: string;

  /**
   * Whether the social security number should be fetched from the identity provider.
   */
  GetSocialSecurityNumber?: boolean;

  /**
   * The merchants reference to the identification process.
   */
  ExternalReference?: string;

  /**
   * List of addon data that can be ordered. The result will be in MetaData list of the response.
   */
  Addonservices?: { [key: string]: string; };
}
