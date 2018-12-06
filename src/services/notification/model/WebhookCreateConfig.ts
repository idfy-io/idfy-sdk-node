export interface WebhookCreateConfig {
  /**
   * The URL to which the payloads will be delivered.
   */
  url: string;

  /**
   * Optional secret used to compute a HMAC hex digest of the payload,   which is passed with the HTTP request as an ``X-Idfy-Signature`` header.
   */
  secret?: string;

  /**
   * Determines whether to log webhook delivery attempts. Defaults to `never`.
   */
  deliveryLogging?: WebhookCreateConfig.DeliveryLoggingEnum;

}
export namespace WebhookCreateConfig {
  export type DeliveryLoggingEnum = 'never' | 'failed' | 'always';
}
