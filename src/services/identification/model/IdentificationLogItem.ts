export interface IdentificationLogItem {
  /**
   * The identification session ID
   */
  Id?: string;
  /**
   * The full name of the user as reported back from the identity provider if the
   * identification was a success.
   */

  Name?: string;

  /**
   * The status of the identification process.
   */
  Status?: IdentificationLogItem.StatusEnum;

  /**
   * The IP address of the user
   */
  ClientIp?: string;

  /**
   * The users user-agent (browser/device)
   */
  UserAgent?: string;

  /**
   * The identity provider type (Norwegian BanKID, SwedishBankID, Nemid, etc).
   */
  IdentityProviderType?: string;

  /**
   * The language used for the identification process.
   */
  Language?: string;

  /**
   * The merchants reference to the identification session.
   * This will also be used to identify an identification in a detailed invoice.
   */
  Externalid?: string;

  /**
   * The error code for the error.
   */
  Errorcode?: string;

  /**
   * The timestamp for the creation of the identification session.
   */
  Timestamp?: Date;

  /**
   * Whether iframe was used.
   */
  iFrame?: boolean;

  /**
   * Whether social security number was fetched.
   */
  SocialSecurityNumber?: boolean;

  AccountId?: string;
}
export namespace IdentificationLogItem {
  export type StatusEnum = 'UNKNOWN' | 'SUCCESS' | 'ERROR' | 'USERABORTED' | 'INVALIDATED' |
    'TIMEOUT' | 'CREATED' | 'USERINITIATED';
}
