import { Authentication } from './Authentication';
import { ExtraInfoSignerRequest } from './ExtraInfoSignerRequest';
import { Notifications } from './Notifications';
import { RedirectSettings } from './RedirectSettings';
import { SignatureType } from './SignatureType';
import { SignerInfo } from './SignerInfo';
import { UI } from './UI';

export interface SignerOptions {
  /**
   * Your reference for the signer.
   */
  externalSignerId: string;

  /**
   * Return URLs and domain settings
   */
  redirectSettings: RedirectSettings;

  /**
   * Settings for the allowed signature methods.
   */
  signatureType: SignatureType;

  /**
   * Define the signers name, mobile and email if you are using notifications
   */
  signerInfo?: SignerInfo;

  /**
   * Do you want the signer to authenticate before they can see the document?
   */
  authentication?: Authentication;

  /**
   * Coming soon: Do you want to collect extra info about this specific signer? (for example personal information)
   */
  extraInfo?: ExtraInfoSignerRequest;

  /**
   * UI settings for the signature process.
   */
  ui?: UI;

  /**
   * Email/SMS notification settings for the signer.
   */
  notifications?: Notifications;

  /**
   * Document tags.
   */
  tags?: string[];

  /**
   * Optional order of signing for the signer.
   */
  order?: number;

  /**
   * Determines if the signer is required to sign the document before other signers.
   * Any other signers will not be allowed to sign before all required signers have signed the document.
   */
  required?: boolean;

  /**
   * The time at which the signature URL expires (ISO 8601). Specify this if you want a limited time-to-live
   * for the URL. Defaults to the lifetime of the document.
   */
  signUrlExpires?: Date;

  /**
   * Get social security number for this signer only (The global variable advanced.getSocialSecurityNumber
   * will override this when set to true). Requires certificate with permission to retrieve social security number.
   */
  getSocialSecurityNumber?: boolean;
}
