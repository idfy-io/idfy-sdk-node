export interface RedirectSettings {
  /**
   * The URL that the user is redirected to after a successful identification.
   */
  successUrl?: string;

  /**
   * The URL that the user is redirected to if the session is aborted by the user.
   */
  abortUrl?: string;

  /**
   * The URL that the user is redirected to if something goes wrong.
   */
  errorUrl?: string;
}
