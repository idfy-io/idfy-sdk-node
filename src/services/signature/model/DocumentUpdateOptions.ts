import { Advanced } from './Advanced';
import { ContactDetails } from './ContactDetails';
import { Notification } from './Notification';

export interface DocumentUpdateOptions {
  /**
   * The title of the document which will be presented to the user.
   */
  title?: string;

  /**
   * The description of the document.
   */
  description?: string;

  /**
   * Settings for custom notification texts. Remark: Also requires you
   * to setup notifications for each signer you want to notify.
   */
  notification?: Notification;

  /**
   * The company's contact information.
   */
  contactDetails?: ContactDetails;

  /**
   * Optional settings for advanced configuration.
   */
  advanced?: Advanced;
}
