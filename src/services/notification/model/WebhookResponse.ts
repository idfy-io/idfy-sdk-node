export interface WebhookResponse {
  /**
   * The status code returned by the webhook endpoint on last delivery attempt.
   */
  code?: number;

  /**
   * The message returned by the webhook endpoint on last delivery attempt.
   */
  message?: string;

  /**
   * Time at which the last delivery attempt was made.
   */
  timestamp?: Date;
}
