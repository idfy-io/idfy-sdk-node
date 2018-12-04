import { NotificationsSetup } from './NotificationsSetup';

export interface Notifications {
  /**
   * Notification setup for the signer. All notifications defaults to `off`.
   */
  setup?: NotificationsSetup;

  /**
   * If you create your own notifications texts, you can create your own merge fields with your own keys.
   * You can then specify the text you want to insert in these fields per signer in this dictionary.
   * Set the dictionary key to the same value as the merge field value in your notification text,
   * and the value to the text you want us to merge in.
   */
  mergeFields?: { [key: string]: string; };
}
