export interface IdentificationLogItem {
  /**
   * The identification session ID
   */
  id?: string;
  /**
   * The full name of the user as reported back from the identity provider if the
   * identification was a success.
   */

  name?: string;

  /**
   * The status of the identification process.
   */
  status?: IdentificationLogItem.StatusEnum;

  /**
   * The IP address of the user
   */
  clientIp?: string;

  /**
   * The users user-agent (browser/device)
   */
  userAgent?: string;

  /**
   * The identity provider type (Norwegian BanKID, SwedishBankID, Nemid, etc).
   */
  identityProviderType?: string;

  /**
   * The language used for the identification process.
   */
  language?: string;

  /**
   * The merchants reference to the identification session.
   * This will also be used to identify an identification in a detailed invoice.
   */
  externalid?: string;

  /**
   * The error code for the error.
   */
  errorcode?: string;

  /**
   * The timestamp for the creation of the identification session.
   */
  timestamp?: Date;

  /**
   * Whether iframe was used.
   */
  iFrame?: boolean;

  /**
   * Whether social security number was fetched.
   */
  socialSecurityNumber?: boolean;

  accountId?: string;
}
export namespace IdentificationLogItem {
  export type StatusEnum = 'UNKNOWN' | 'SUCCESS' | 'ERROR' | 'USERABORTED' | 'INVALIDATED' |
    'TIMEOUT' | 'CREATED' | 'USERINITIATED';
}
