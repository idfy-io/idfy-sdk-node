import { Email } from './Email';
import { SMS } from './Sms';

export interface Reminder {
  /**
   * Defines a chron expression that control the interval of the reminders.
   */
  chronSchedule: string;

  /**
   * The maximum number of reminders to be sent for each signer.
   */
  maxReminders?: number;

  /**
   * A list of custom email texts to use for the notification. Default texts will be used if not specified.
   */
  email?: Email[];

  /**
   * A list of custom SMS texts to use for the notification. Default texts will be used if not specified.
   */
  sms?: SMS[];
}
