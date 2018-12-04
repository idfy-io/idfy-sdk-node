export interface SMS {
  /**
   * The language of the SMS notification.
   */
  language: SMS.LanguageEnum;

  /**
   * The SMS notification text.
   */
  text?: string;

  /**
   * The name to use as SMS sender.
   */
  sender?: string;

}

export namespace SMS {
  export type LanguageEnum = 'EN' | 'NO' | 'DA' | 'SV' | 'FI';
}
