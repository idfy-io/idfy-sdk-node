import { DocumentSignature } from './DocumentSignature';
import { Link } from './Link';
import { RedirectSettings } from './RedirectSettings';
import { SignatureType } from './SignatureType';
import { SignerInfo } from './SignerInfo';
import { Authentication } from './Authentication';
import { ExtraInfoSignerRequest } from './ExtraInfoSignerRequest';
import { UI } from './UI';
import { Notifications } from './Notifications';

export interface Signer {
  /**
   * The signer's unique identifier.
   */
  id?: string;

  /**
   * The URL that the signer must use to sign the document.
   */
  url?: string;

  /**
   * The document signature.
   */
  documentSignature?: DocumentSignature;

  /**
   * HATEOAS extrainfo links retrieved for signer.
   */
  links?: Link[];

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
   * Define the signers name, mobile and email if you are using notifications.
   */
  signerInfo?: SignerInfo;

  /**
   * Authentication settings for the signer.
   */
  authentication?: Authentication;

  /**
   * Settings for extra information to collect about the signer.
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
   * The time at which the signature URL expires (ISO 8601). Specify this if you want a limited
   * time-to-live for the URL. Defaults to the lifetime of the document.
   */
  signUrlExpires?: Date;
}
