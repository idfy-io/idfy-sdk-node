export interface EventTypeInfo {
  /**
   * Event type
   */
  id?: EventTypeInfo.IdEnum;

  /**
   * Display name of the event
   */
  name?: string;

  /**
   * Description of the event
   */
  description?: string;

}
export namespace EventTypeInfo {
  export type IdEnum = 'document_before_deleted' | 'document_canceled' | 'document_created' | 'document_deleted'
    |'document_expired' | 'document_email_opened' | 'document_form_partially_signed' | 'document_form_signed'
    | 'document_link_opened' | 'document_packaged' | 'document_partially_signed' | 'document_read' | 'document_signed';
}
