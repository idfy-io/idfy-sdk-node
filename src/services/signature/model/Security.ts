export interface Security {
  /**
   * (Coming soon) Determines if the link is one-time use.
   */
  oneTimeUse?: boolean;

  /**
   * (Coming soon) A list of IP addresses that are allowed to see / sign the document.
   */
  ipWhiteList?: string[];
}
