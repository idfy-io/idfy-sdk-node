import { EnvironmentInfo } from './EnvironmentInfo';

export interface IdentificationResponse {
  /**
   * The fullname of the user as reported back from the IdentityProvider
   */
  Name?: string;

  /**
   * The first name of the user
   */
  FirstName?: string;

  /**
   * The middle name of the user (not always available)
   */
  MiddleName?: string;

  /**
   * The last name of the user
   */
  LastName?: string;

  /**
   * The users date of birth (not always available)
   */
  DateOfBirth?: string;

  /**
   * The status of the identification process.
   * If not success the identification process is not completed.
   */
  Status?: IdentificationResponse.StatusEnum;

  /**
   * The social security number for the user (if allowed and if the GetSocialSecurityNumber
   * is set to true in the request)
   */
  SocialSecurityNumber?: string;

  /**
   * The uniqueID from the e-ID, this ID is unique for the user and is the same every time the user
   * logs on. This is not a sensitive ID and you could store this to identify the user in you
   * database. Remark: The Swedish BankID do not have an unique ID.
   */
  IdentityProviderUniqueId?: string;

  /**
   * The identityprovider type (Norwegian BanKID, SwedishBankID, Nemid, etc)
   */
  IdentityProvider?: IdentificationResponse.IdentityProviderEnum;

  /**
   * Information about error if the identification process failed.
   * (Only set if an error occured, if not is null)
   */
  Error?: Error;

  /**
   * Information about the users environment as seen by Idfy,
   * can be used to compare with own data.
   */
  EnvironmentInfo?: EnvironmentInfo;

  /**
   * A dicitonary with extra information from each identityprovider, and extra services.
   * See developer documentation for more information
   */
  MetaData?: { [key: string]: string; };

  /**
   * The RequestId
   */
  RequestId?: string;
}

export namespace IdentificationResponse {
  export type StatusEnum = 'UNKNOWN' | 'SUCCESS' | 'ERROR' | 'USERABORTED' | 'INVALIDATED'
    | 'TIMEOUT' | 'CREATED' | 'USERINITIATED';

  export type IdentityProviderEnum = 'UNKNOWN' | 'NO_BANKID_MOBILE' | 'NO_BANKID_WEB' |
    'SWE_BANKID' | 'SWE_BANKID_MOBILE' | 'NO_BUYPASS' | 'DA_NEMID' | 'FI_TUPAS';
}
