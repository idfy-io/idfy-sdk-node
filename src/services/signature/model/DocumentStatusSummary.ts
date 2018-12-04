export interface DocumentStatusSummary {
  /**
   * The overall status of the document.
   */
  documentStatus?: DocumentStatusSummary.DocumentStatusEnum;

  /**
   * A list of all the completed files/packages for the main document.
   */
  completedPackages?: DocumentStatusSummary.CompletedPackagesEnum[];

  /**
   * A set of key-value pairs with all the completed packages for the signable attachments,
   * where the key is equal to the attachment's ID.
   */
  attachmentPackages?: { [key: string]: DocumentStatusSummary.AttachmentPackagesEnum[]; };

}
export namespace DocumentStatusSummary {
  export type DocumentStatusEnum = 'unsigned' | 'waiting_for_attachments' | 'partialsigned' | 'signed' |
    'canceled' | 'expired';
  export type CompletedPackagesEnum = 'unsigned' | 'native' | 'standard_packaging' | 'pades' | 'xades';
  export type AttachmentPackagesEnum = 'unsigned' | 'native' | 'standard_packaging' | 'pades' | 'xades';
}
