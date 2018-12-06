import { Email } from './Email';
import { SMS } from './SMS';

export interface SignatureReceipt {
  /**
   * A list of custom email texts to use for the notification. Default texts will be used if not specified.
   */
  email?: Email[];

  /**
   * A list of custom SMS texts to use for the notification. Default texts will be used if not specified.
   */
  sms?: SMS[];
}
