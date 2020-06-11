export interface Error {
  /**
   * An error message providing details about the error.
   */
  message?: string;

  /**
   * The error code reported.
   */
  code?: string;

  /**
   * The error code reported from the eID provider that was used.
   */
  providerCode?: string;
}
