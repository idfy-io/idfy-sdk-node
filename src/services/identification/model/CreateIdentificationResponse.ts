export interface CreateIdentificationResponse {
  /**
   * The url to use as src for iframe or to redirect the user to
   */
  Url?: string;

  /**
   * Requestid used to get the reponse form server afterwards
   */
  RequestId?: string;
}
