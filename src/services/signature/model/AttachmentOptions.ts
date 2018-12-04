export interface AttachmentRequestWrapper {
  /**
   * Filename with file extension. We only support PDF for attachments, set `convertToPdf` to `true`
   * if you have a convertible file type.
   */
  fileName: string;

  /**
   * The title of the attachment which will be presented to the user.
   */
  title: string;

  /**
   * Base64-encoded attachment (UTF-8-encoded)
   */
  data: string;

  /**
   * Determines if the attachment should be converted to PDF. See our documentation for supported file types.
   */
  convertToPdf?: boolean;

  /**
   * An optional list of signers that should be able to see / sign the attachment.
   */
  signers?: string[];

  /**
   * An optional description of the attachment.
   */
  description?: string;

  /**
   * The type of attachment.
   */
  type?: AttachmentRequestWrapper.TypeEnum;

}
export namespace AttachmentRequestWrapper {
  export type TypeEnum = 'show_accept' | 'read_accept' | 'sign';
}
