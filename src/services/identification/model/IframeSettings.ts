export interface IFrameSettings {
  /**
   * The domain of the site hosting the iframe, this is used for the CSP policy and must be correct.
   */
  Domain: string;
  /**
   * Whether web messaging should be used for redirect of the iframe parent.
   */
  WebMessaging?: boolean;
  /**
   * Height of the frame when used in iframe.
   */
  Height?: number;
}
