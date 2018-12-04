import { Advanced } from './Advanced';
import { ContactDetails } from './ContactDetails';
import { DataToSign } from './DataToSign';
import { Notification } from './Notification';
import { SignerOptions } from './SignerOptions';

export interface DocumentCreateOptions {
  /**
   * List of signers for the document.
   */
  signers: SignerOptions[];

  /**
   * The title of the document which will be presented to the user.
   */
  title: string;

  /**
   * The description of the document.
   */
  description?: string;

  /**
   * Your reference to this document.
   */
  externalId: string;

  /**
   * The data that will be signed.
   */
  dataToSign: DataToSign;

  /**
   * The company's contact information.
   */
  contactDetails: ContactDetails;

  /**
   * Settings for custom notification texts. Remark: Also requires you
   * to setup notifications for each signer you want to notify.
   */
  notification?: Notification;

  /**
   * Optional settings for advanced configuration.
   */
  advanced?: Advanced;
}
