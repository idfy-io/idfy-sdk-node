import IdfyBaseService from '../IdfyBaseService';
import {
  Attachment,
  AttachmentOptions,
  Document,
  DocumentCreateOptions,
  DocumentStatusSummary,
  DocumentUpdateOptions,
  Signer,
  SignerOptions
} from './';
import APIHelper from '../../infrastructure/APIHelper';
import { DocumentSummary } from './model/DocumentSummary';
import { CollectionWithPaging } from '../../model/CollectionWithPaging';

export class SignatureService extends IdfyBaseService {
  private readonly _endpointBase: string = 'signature';

  /**
   * Retrieves details of a single document.
   * @param documentId
   */
  public getDocument(documentId: string): Promise<Document> {
    return super.get<Document>(`${this._endpointBase}/documents/${documentId}`);
  }

  /**
   * Creates a new document.
   * @param documentCreateOptions
   */
  public createDocument(documentCreateOptions: DocumentCreateOptions): Promise<Document> {
    return super.post<Document>(`${this._endpointBase}/documents`, documentCreateOptions);
  }

  /**
   * Updates a document.
   * @param documentId
   * @param documentUpdateOptions
   */
  public updateDocument(documentId: string, documentUpdateOptions: DocumentUpdateOptions): Promise<Document> {
    return super.patch<Document>(`${this._endpointBase}/documents/${documentId}`, documentUpdateOptions);
  }

  /**
   * Cancels a document.
   * @param documentId
   * @param reason
   */
  public cancelDocument(documentId: string, reason?: string): Promise<void> {
    const params = { reason };
    const url = APIHelper.appendQueryParams(`${this._endpointBase}/documents/${documentId}/cancel`, params);
    return super.post(url);
  }

  /**
   * Retrieves the status of a document.
   * @param documentId
   */
  public getDocumentStatus(documentId: string) : Promise<DocumentStatusSummary> {
    return super.get<DocumentStatusSummary>(`${this._endpointBase}/documents/${documentId}/status`);
  }

  /**
   * Retrieves the status of a document.
   * @param documentId
   */
  public getDocumentSummary(documentId: string) : Promise<DocumentSummary> {
    return super.get<DocumentSummary>(`${this._endpointBase}/documents/${documentId}/summary`);
  }

  /**
   * Queries your documents using the provided parameters.
   * @param externalId
   * @param signerId
   * @param externalSignerId
   * @param fromDate
   * @param toDate
   * @param lastUpdated
   * @param signedDate
   * @param nameOfSigner
   * @param title
   * @param status
   * @param tags
   * @param offset
   * @param limit
   */
  public listDocumentSummaries(
    externalId?: string,
    signerId?: string,
    externalSignerId?: string,
    fromDate?: Date,
    toDate?: Date,
    lastUpdated?: Date,
    signedDate?: Date,
    nameOfSigner?: string,
    title?: string,
    status?: string,
    tags?: string,
    offset?: number,
    limit?: number): Promise<CollectionWithPaging<DocumentSummary>> {
    const url = APIHelper.appendQueryParams(`${this._endpointBase}/documents/summary`, {
      externalId,
      signerId,
      externalSignerId,
      fromDate,
      toDate,
      lastUpdated,
      signedDate,
      nameOfSigner,
      title,
      status,
      tags,
      offset,
      limit
    });
    return super.get<CollectionWithPaging<DocumentSummary>>(url);
  }

  /**
   * Retrieves the details of a single signer.
   * @param documentId
   * @param signerId
   */
  public getSigner(documentId: string, signerId: string): Promise<Signer> {
    return super.get<Signer>(`${this._endpointBase}/documents/${documentId}/signers/${signerId}`);
  }

  /**
   * Creates a new signer.
   * @param documentId
   * @param signerOptions
   */
  public createSigner(documentId: string, signerOptions: SignerOptions): Promise<Signer> {
    return super.post<Signer>(`${this._endpointBase}/documents/${documentId}/signers`, signerOptions);
  }

  /**
   * Updates a signer.
   * @param documentId
   * @param signerOptions
   */
  public updateSigner(documentId: string, signerOptions: SignerOptions): Promise<Signer> {
    return super.patch<Signer>(`${this._endpointBase}/documents/${documentId}/signers`, signerOptions);
  }

  /**
   * Deletes a signer.
   * @param documentId
   * @param signerId
   */
  public deleteSigner(documentId: string, signerId: string): Promise<void> {
    return super.delete(`${this._endpointBase}/documents/${documentId}/signers/${signerId}`);
  }

  /**
   * Lists all signers of a document.
   * @param documentId
   */
  public listSigners(documentId: string): Promise<Signer[]> {
    return super.get<Signer[]>(`${this._endpointBase}/documents/${documentId}/signers`);
  }

  /**
   * Retrieves the details of a single attachment.
   * @param documentId
   * @param attachmentId
   */
  public getAttachment(documentId: string, attachmentId: string): Promise<Attachment> {
    return super.get<Attachment>(`${this._endpointBase}/documents/${documentId}/attachments/${attachmentId}`);
  }

  /**
   * Adds an attachment to the specified document.
   * @param documentId
   * @param attachmentOptions
   */
  public createAttachment(documentId: string, attachmentOptions: AttachmentOptions): Promise<Attachment> {
    return super.post<Attachment>(`${this._endpointBase}/documents/${documentId}/attachments`, attachmentOptions);
  }

  /**
   * Updates the specified attachment (Will only take affect if no one has signed the document yet).
   * @param documentId
   * @param attachmentId
   * @param attachmentOptions
   */
  public updateAttachment(documentId: string, attachmentId: string, attachmentOptions: AttachmentOptions): Promise<Attachment> {
    return super.patch<Attachment>(`${this._endpointBase}/documents/${documentId}/attachments/${attachmentId}`, attachmentOptions);
  }

  /**
   * Deletes the specified attachment (Will only take affect if no one has signed the document yet).
   * @param documentId
   * @param attachmentId
   */
  public deleteAttachment(documentId: string, attachmentId: string): Promise<void> {
    return super.delete(`${this._endpointBase}/documents/${documentId}/attachments/${attachmentId}`);
  }

  /**
   * Returns a list of all attachments for the specified document.
   * @param documentId
   */
  public listAttachments(documentId: string): Promise<Attachment[]> {
    return super.get<Attachment[]>(`${this._endpointBase}/documents/${documentId}/attachments`);
  }
}
