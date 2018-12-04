export interface NotificationsSetup {
  request?: NotificationsSetup.RequestEnum;

  reminder?: NotificationsSetup.ReminderEnum;

  signatureReceipt?: NotificationsSetup.SignatureReceiptEnum;

  finalReceipt?: NotificationsSetup.FinalReceiptEnum;

  canceled?: NotificationsSetup.CanceledEnum;

  expired?: NotificationsSetup.ExpiredEnum;

}
export namespace NotificationsSetup {
  export type RequestEnum = 'off' | 'sendSms' | 'sendEmail' | 'sendBoth';
  export type ReminderEnum = 'off' | 'sendSms' | 'sendEmail' | 'sendBoth';
  export type SignatureReceiptEnum = 'off' | 'sendSms' | 'sendEmail' | 'sendBoth';
  export type FinalReceiptEnum = 'off' | 'sendSms' | 'sendEmail' | 'sendBoth';
  export type CanceledEnum = 'off' | 'sendSms' | 'sendEmail' | 'sendBoth';
  export type ExpiredEnum = 'off' | 'sendSms' | 'sendEmail' | 'sendBoth';
}
