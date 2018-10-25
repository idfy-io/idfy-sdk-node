export interface IFrameSettings {
  /**
   * The domain of the site hosting the iframe, this is used for the CSP policy and must be correct.
   */
  domain: string;
  /**
   * Whether web messaging should be used for redirect of the iframe parent.
   */
  webMessaging?: boolean;
  /**
   * Height of the frame when used in iframe.
   */
  height?: number;
}
