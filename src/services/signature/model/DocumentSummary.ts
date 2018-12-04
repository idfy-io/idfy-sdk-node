import { ExtendedDocumentSignature } from './ExtendedDocumentSignature';
import { Status } from './Status';

export interface DocumentSummary {
  /**
   * Document id
   */
  documentId?: string;

  /**
   * Account id
   */
  accountId?: string;

  /**
   * Document title
   */
  title?: string;

  /**
   * Document description
   */
  description?: string;

  /**
   * When was the document last updated (ISO 8601)
   */
  lastUpdated?: Date;

  /**
   * The sign deadline for the document (ISO 8601)
   */
  deadline?: Date;

  /**
   * When was all the signatures processed (ISO 8601)
   */
  signedDate?: Date;

  /**
   * Document status
   */
  status?: Status;

  /**
   * External document Id (your Id)
   */
  externalId?: string;

  /**
   * All the signatures received on this document
   */
  documentSignatures?: ExtendedDocumentSignature[];

  /**
   * The number of required signatures on the document
   */
  requiredSignatures?: number;

  /**
   * How many signatures is completed right now
   */
  currentSignatures?: number;

  /**
   * Document tags
   */
  tags?: string[];

  /**
   * A list of attachment Id's
   */
  attachments?: string[];

  /**
   * A list of all the signers on the document
   */
  signers?: string[];

  /**
   * When the document was created (ISO 8601)
   */
  created?: Date;
}
