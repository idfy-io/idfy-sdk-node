export interface Email {
  /**
   * The language of the email notification.
   */
  language: Email.LanguageEnum;

  /**
   * The email subject.
   */
  subject?: string;

  /**
   * The email notification body. Plain text and markdown is supported.
   */
  text?: string;

  /**
   * The name to use as email sender.
   */
  senderName?: string;

}
export namespace Email {
  export type LanguageEnum = 'EN' | 'NO' | 'DA' | 'SV' | 'FI';
}
