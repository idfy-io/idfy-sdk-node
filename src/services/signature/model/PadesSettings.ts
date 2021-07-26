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

  /**
   * If you set this to true, the signer's SSN / national ID will be visible in the PAdES file,
   * and in the standard_packaging files.
   */
  includeSsnInPades?: boolean;
}
export namespace PadesSettings {
  export type PrimaryLanguageEnum = 'EN' | 'NO' | 'DA' | 'SV' | 'FI';
  export type SecondaryLanguageEnum = 'EN' | 'NO' | 'DA' | 'SV' | 'FI';
}
