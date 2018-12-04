import { Dialogs } from './Dialogs';
import { Styling } from './Styling';

export interface UI {
  /**
   * The signer's preferred language. This language will be used when signing the document and in email/SMS
   * notifications.
   */
  language?: UI.LanguageEnum;

  /**
   * Dialogs that will be prestented to the signer in the signature process.
   */
  dialogs?: Dialogs;

  /**
   * Customize styling to make the the signature application look perfect in combination with your own application.
   */
  styling?: Styling;

}
export namespace UI {
  export type LanguageEnum = 'EN' | 'NO' | 'DA' | 'SV' | 'FI';
}
