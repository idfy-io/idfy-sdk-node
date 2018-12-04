import { SocialSecurityNumber } from './SocialSecurityNumber';

export interface DocumentSignature {
  /**
   * The signature method used to sign the document.
   */
  signatureMethod?: DocumentSignature.SignatureMethodEnum;

  /**
   * The signer's full name, retrieved from the signature-method provider.
   */
  fullName?: string;

  /**
   * The signer's first name.
   */
  firstName?: string;

  /**
   * The signer's last name.
   */
  lastName?: string;

  /**
   * The signer's middle name.
   */
  middleName?: string;

  /**
   * Time at which the signature was registered (ISO 8601).
   */
  signedTime?: Date;

  /**
   * The signer's date of birth (ddMMyy).
   */
  dateOfBirth?: string;

  /**
   * The signature method unique ID.
   */
  signatureMethodUniqueId?: string;

  /**
   * The signer's social security number. Will be retrieved only when `getSocialSecurityNumber`
   * is specified when creating the document.
   */
  socialSecurityNumber?: SocialSecurityNumber;

  /**
   * The IP address of the signer.
   */
  clientIp?: string;

}
export namespace DocumentSignature {
  export type SignatureMethodEnum = 'no_bankid' | 'no_bankid_mobile' | 'no_bankid_netcentric' | 'no_buypass' |
    'no_commfides' | 'se_bankid' | 'dk_nemid' | 'fi_tupas' | 'fi_mobiilivarmenne' | 'nl_digid' | 'es_dni' |
    'ee_esteid' | 'mobile_connect' | 'sms_otp' | 'identification_papers' | 'social' | 'unknown';
}
