export interface PadesSettings {
  /**
   * The primary language of the PAdES explanatory page. Defaults to english.
   */
  primaryLanguage?: PadesSettings.PrimaryLanguageEnum;

  /**
   * The secondary language of the PAdES explanatory page.
   */
  secondaryLanguage?: PadesSettings.SecondaryLanguageEnum;

  /**
   * The unique ID of PAdES template to use. Can be used if you have previously created your own custom template.
   */
  padesTemplateId?: string;

}
export namespace PadesSettings {
  export type PrimaryLanguageEnum = 'EN' | 'NO' | 'DA' | 'SV' | 'FI';
  export type SecondaryLanguageEnum = 'EN' | 'NO' | 'DA' | 'SV' | 'FI';
}
