export interface WebhookConfig {
  /**
   * The URL to which the payloads will be delivered.
   */
  url?: string;

  /**
   * Optional secret used to compute a HMAC hex digest of the payload,   which is passed with the HTTP request as an ``X-Idfy-Signature`` header.
   */
  secret?: string;

  /**
   * Determines whether to log webhook delivery attempts. Defaults to `never`.
   */
  deliveryLogging?: WebhookConfig.DeliveryLoggingEnum;

}
export namespace WebhookConfig {
  export type DeliveryLoggingEnum = 'never' | 'failed' | 'always';
}
