import { IFrameSettings } from './IframeSettings';
import { ReturnUrls } from './ReturnUrls';

export interface CreateIdentificationRequest {
  /**
   * The identity provider to use for the identification, if not set the user will get
   * a list of all the e-ID assosiated with your account to choose from.
   */
  identityProvider?: CreateIdentificationRequest.IdentityProviderEnum;

  /**
   * The return urls to be redirected to after the identification process is done
   */

  returnUrls: ReturnUrls;

  /**
   * Iframe settings.
   */
  iFrame?: IFrameSettings;

  /**
   * The language to be used for the identification process, if not set the language of
   * 'the users browser will be used.
   */
  language?: CreateIdentificationRequest.LanguageEnum;

  /**
   * Whether the social security number should be fetched from the identity provider.
   */
  getSocialSecurityNumber?: boolean;

  /**
   * If this is specified then the client will be prefilled with this value.
   * Supported by Norwegian BankID, NemID and Tupas.
   */
  preFilledSocialSecurityNumber?: string;

  /**
   * Title of the identification page (Used when redirecting on larger devices).
   * Not used in iframe mode.
   */
  pageTitle?: string;

  /**
   * The merchants reference to the identification process,  this will also be used to identify
   * an identification in a detailed invoice. It is an advantage if this is unique for each
   * API call.
   */
  externalReference?: string;

  /**
   * List of addon data that can be orderd. The result will be in MetaData list of the reponse
   */
  addonservices?: { [key: string]: string; };
}

export namespace CreateIdentificationRequest {
  export type IdentityProviderEnum = 'UNKNOWN' | 'NO_BANKID_MOBILE' | 'NO_BANKID_WEB' |
    'SWE_BANKID' |'SWE_BANKID_MOBILE'| 'NO_BUYPASS' | 'DA_NEMID' | 'FI_TUPAS';

  export type LanguageEnum = 'NO' | 'EN' | 'SV' | 'DA' | 'FI';
}
