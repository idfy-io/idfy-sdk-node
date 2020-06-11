export interface IframeSettings {
  /**
   * Parent domains that will iframe the session.
   */
  parentDomains?: string[];

  /**
   * Target origin for cross domain messaging.
   */
  postMessageTargetOrigin?: string;
}
