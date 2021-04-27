export interface LanguageDetails {
  /**
   * Language identifier
   */
  id?: LanguageDetails.Language;

  /**
   * Language name
   */
  name?: string;
}

export namespace LanguageDetails {
  export type Language = 'en' | 'no' | 'sv' | 'da' | 'fi' | 'de';
}
