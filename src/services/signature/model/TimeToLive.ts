export interface TimeToLive {
  /**
   * Time at which the document will expire (ISO 8601).
   * The document can not be signed after this time. Default/maximum 45 days.
   */
  deadline?: Date;

  /**
   * How many hours we will keep the document after it is signed or expired (deadline).
   * Default/ maximum 7 days (168 hours). After this time span the document and files will be permanently deleted
   * on our side.
   */
  deleteAfterHours?: number;
}
