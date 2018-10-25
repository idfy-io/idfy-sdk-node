export interface CreateIdentificationResponse {
  /**
   * The url to use as src for iframe or to redirect the user to
   */
  url?: string;

  /**
   * Requestid used to get the reponse form server afterwards
   */
  requestId?: string;
}
