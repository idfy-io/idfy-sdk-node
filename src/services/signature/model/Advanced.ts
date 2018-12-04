import { ExtraInfoDocumentRequest } from './ExtraInfoDocumentRequest';
import { Security } from './Security';
import { TimeToLive } from './TimeToLive';

export interface Advanced {
  /**
   * A list of tags to add to the document. These tags can be used to query for document data
   * and will also be added to all events that are triggered for the document.
   */
  tags?: string[];

  /**
   * The number of attachments this document will have. Attachments can be added after the document is created.
   */
  attachments?: number;

  /**
   * The number of signatures required before the document can be sealed and marked as completed.
   */
  requiredSignatures?: number;

  /**
   * The name of the application that created the document. Used for Idfy statistics.
   */
  createdByApplication?: string;

  /**
   * Determines if the social security number of the signers should be retrieved after a successful signature.
   * Requires a certificate with permission to retrieve SSN.
   */
  getSocialSecurityNumber?: boolean;

  /**
   * Settings for extra information to collect about the document (e.g. prokura information).
   */
  extraInfo?: ExtraInfoDocumentRequest;

  /**
   * Security settings.
   */
  security?: Security;

  /**
   * Time-to-live settings for the document.
   */
  timeToLive?: TimeToLive;

  /**
   * The department ID to mark the invoice with.
   */
  departmentId?: string;
}
