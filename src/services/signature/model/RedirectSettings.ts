export interface RedirectSettings {
  /**
   * Defines the redirect mode to use for the signer.
   */
  redirectMode: RedirectSettings.RedirectModeEnum;

  /**
   * The domain your website is hosted on. Required if you specify one of the iframe redirect modes for the signer.
   */
  domain?: string;

  /**
   * The URL that the signer is redirected to if something goes wrong. Required if you use redirect for the signer.
   */
  error?: string;

  /**
   * The URL that the signer is redirected to if the signing is cancelled. Required if you use redirect for the signer.
   */
  cancel?: string;

  /**
   * The URL that the signer is redirected to after a successful signing. Required if you use redirect for the signer.
   */
  success?: string;

}
export namespace RedirectSettings {
  export type RedirectModeEnum = 'donot_redirect' | 'redirect' | 'iframe_with_webmessaging'
    | 'iframe_with_redirect' | 'iframe_with_redirect_and_webmessaging';
}
