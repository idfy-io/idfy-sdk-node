import { Packaging } from './Packaging';

export interface DataToSign {
  /**
   * Base64-encoded string of the document, UTF-8-encoded.
   */
  base64Content: string;

  /**
   * Stylesheet to be included if you are uploading XML.
   */
  base64ContentStyleSheet?: string;

  /**
   * The document file name. Must include a valid file extension (.pdf, .xml, .txt, .doc, .docx, .rtf, .ott, odt).
   */
  fileName: string;

  /**
   * The document title.
   */
  title?: string;

  /**
   * Determines if the document should be converted to PDF. Supported formats are word documents, rich text format,
   * and OpenOffice (.doc, .docx, .rtf, .odt, .ott).
   * Remark: When using this, the converted document (and not the original) is the one that will be signed.
   */
  convertToPDF?: boolean;

  /**
   * Settings for packaging of the signed document.
   */
  packaging?: Packaging;
}
