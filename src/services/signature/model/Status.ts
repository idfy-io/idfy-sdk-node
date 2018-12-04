export interface Status {
  /**
   * The overall status of the document.
   */
  documentStatus?: Status.DocumentStatusEnum;

  /**
   * A list of all the completed files/packages for the main document.
   */
  completedPackages?: Array<Status.CompletedPackagesEnum>;

  /**
   * A set of key-value pairs with all the completed packages for the signable attachments,
   * where the key is equal to the attachment's ID.
   */
  attachmentPackages?: { [key: string]: Array<string>; };

}
export namespace Status {
  export type DocumentStatusEnum = 'unsigned' | 'waiting_for_attachments' | 'partialsigned' | 'signed' | 'canceled' |
    'expired';
  export type CompletedPackagesEnum = 'unsigned' | 'native' | 'standard_packaging' | 'pades' | 'xades';
  export type AttachmentPackagesEnum = 'unsigned' | 'native' | 'standard_packaging' | 'pades' | 'xades';
}
