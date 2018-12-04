import { SignerOverrides } from './SignerOverrides';

export interface ManualReminder {
  /**
   * Set what kind of reminders to send
   */
  notificationSetting: ManualReminder.NotificationSettingEnum;

  /**
   * Optional: Define the signers that should receive this reminder (if not signed).
   * Dictionary with signer id as key, you can ovveride the signer email/phone as value
   */
  signers?: { [key: string]: SignerOverrides; };

}
export namespace ManualReminder {
  export type NotificationSettingEnum = 'off' | 'sendSms' | 'sendEmail' | 'sendBoth';
}
