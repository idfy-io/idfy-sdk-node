export interface ReturnUrls {
  /**
   * The url to be redirected to if the identification process fails.
   */
  error: string;
  /**
   * The url to be redirected to if the user aborts the identification process.
   */
  abort: string;
  /**
   * The return urls to be redirected to after the identification process is a success.
   */
  success: string;
}
