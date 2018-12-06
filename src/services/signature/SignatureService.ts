import IdfyBaseService from '../IdfyBaseService';
import APIHelper from '../../infrastructure/APIHelper';
import { CollectionWithPaging } from '../../model';
import {
  Attachment,
  AttachmentOptions,
  Document,
  DocumentCreateOptions,
  DocumentStatusSummary,
  DocumentSummary,
  DocumentUpdateOptions,
  ManualReminder,
  NotificationLogItem,
  Signer,
  SignerOptions
} from './';
import Urls from '../../infrastructure/Urls';

export class SignatureService extends IdfyBaseService {
  private readonly _endpointBase: string = 'signature';

  /**
   * Retrieves details of a single document.
   * @param documentId
   */
  public getDocument(documentId: string): Promise<Document> {
    return super.get<Document>(`${Urls.signature}/documents/${documentId}`);
  }

  /**
   * Creates a new document.
   * @param documentCreateOptions
   */
  public createDocument(documentCreateOptions: DocumentCreateOptions): Promise<Document> {
    return super.post<Document>(`${Urls.signature}/documents`, documentCreateOptions);
  }

  /**
   * Updates a document.
   * @param documentId
   * @param documentUpdateOptions
   */
  public updateDocument(documentId: string, documentUpdateOptions: DocumentUpdateOptions): Promise<Document> {
    return super.patch<Document>(`${Urls.signature}/documents/${documentId}`, documentUpdateOptions);
  }

  /**
   * Cancels a document.
   * @param documentId
   * @param reason
   */
  public cancelDocument(documentId: string, reason?: string): Promise<void> {
    const params = { reason };
    const url = APIHelper.appendQueryParams(`${Urls.signature}/documents/${documentId}/cancel`, params);
    return super.post(url);
  }

  /**
   * Retrieves the status of a document.
   * @param documentId
   */
  public getDocumentStatus(documentId: string) : Promise<DocumentStatusSummary> {
    return super.get<DocumentStatusSummary>(`${Urls.signature}/documents/${documentId}/status`);
  }

  /**
   * Retrieves the status of a document.
   * @param documentId
   */
  public getDocumentSummary(documentId: string) : Promise<DocumentSummary> {
    return super.get<DocumentSummary>(`${Urls.signature}/documents/${documentId}/summary`);
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
    const url = APIHelper.appendQueryParams(`${Urls.signature}/documents/summary`, {
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
    return super.get<Signer>(`${Urls.signature}/documents/${documentId}/signers/${signerId}`);
  }

  /**
   * Creates a new signer.
   * @param documentId
   * @param signerOptions
   */
  public createSigner(documentId: string, signerOptions: SignerOptions): Promise<Signer> {
    return super.post<Signer>(`${Urls.signature}/documents/${documentId}/signers`, signerOptions);
  }

  /**
   * Updates a signer.
   * @param documentId
   * @param signerOptions
   */
  public updateSigner(documentId: string, signerOptions: SignerOptions): Promise<Signer> {
    return super.patch<Signer>(`${Urls.signature}/documents/${documentId}/signers`, signerOptions);
  }

  /**
   * Deletes a signer.
   * @param documentId
   * @param signerId
   */
  public deleteSigner(documentId: string, signerId: string): Promise<void> {
    return super.delete(`${Urls.signature}/documents/${documentId}/signers/${signerId}`);
  }

  /**
   * Lists all signers of a document.
   * @param documentId
   */
  public listSigners(documentId: string): Promise<Signer[]> {
    return super.get<Signer[]>(`${Urls.signature}/documents/${documentId}/signers`);
  }

  /**
   * Retrieves the details of a single attachment.
   * @param documentId
   * @param attachmentId
   */
  public getAttachment(documentId: string, attachmentId: string): Promise<Attachment> {
    return super.get<Attachment>(`${Urls.signature}/documents/${documentId}/attachments/${attachmentId}`);
  }

  /**
   * Adds an attachment to the specified document.
   * @param documentId
   * @param attachmentOptions
   */
  public createAttachment(documentId: string, attachmentOptions: AttachmentOptions): Promise<Attachment> {
    return super.post<Attachment>(`${Urls.signature}/documents/${documentId}/attachments`, attachmentOptions);
  }

  /**
   * Updates the specified attachment (Will only take affect if no one has signed the document yet).
   * @param documentId
   * @param attachmentId
   * @param attachmentOptions
   */
  public updateAttachment(documentId: string, attachmentId: string, attachmentOptions: AttachmentOptions): Promise<Attachment> {
    return super.patch<Attachment>(`${Urls.signature}/documents/${documentId}/attachments/${attachmentId}`, attachmentOptions);
  }

  /**
   * Deletes the specified attachment (Will only take affect if no one has signed the document yet).
   * @param documentId
   * @param attachmentId
   */
  public deleteAttachment(documentId: string, attachmentId: string): Promise<void> {
    return super.delete(`${Urls.signature}/documents/${documentId}/attachments/${attachmentId}`);
  }

  /**
   * Returns a list of all attachments for the specified document.
   * @param documentId
   */
  public listAttachments(documentId: string): Promise<Attachment[]> {
    return super.get<Attachment[]>(`${Urls.signature}/documents/${documentId}/attachments`);
  }

  /**
   * Retrieves the signed document file.
   * @param documentId
   * @param fileFormat
   */
  public getFile(documentId: string, fileFormat: string): Promise<Buffer> {
    const url = APIHelper.appendQueryParams(`${Urls.signature}/documents/${documentId}/files`, {
      fileFormat
    });
    return super.getBuffer(url);
  }

  /**
   * Retrieves the signed document file for the specified signer.
   * @param documentId
   * @param signerId
   * @param fileFormat
   */
  public getFileForSigner(documentId: string, signerId: string, fileFormat: string): Promise<Buffer> {
    const url = APIHelper.appendQueryParams(`${Urls.signature}/documents/${documentId}/files/signers/${signerId}`, {
      fileFormat
    });
    return super.getBuffer(url);
  }

  /**
   * Retrieves the attachment file.
   * @param documentId
   * @param attachmentId
   * @param fileFormat
   */
  public getAttachmentFile(documentId: string, attachmentId: string, fileFormat: string): Promise<Buffer> {
    const url = APIHelper.appendQueryParams(`${Urls.signature}/documents/${documentId}/files/attachments/${attachmentId}`, {
      fileFormat
    });
    return super.getBuffer(url);
  }

  /**
   * Retrieves the attachment file for the specified signer.
   * @param documentId
   * @param attachmentId
   * @param signerId
   * @param fileFormat
   */
  public getAttachmentFileForSigner(documentId: string, attachmentId: string, signerId: string, fileFormat: string): Promise<Buffer> {
    const url = APIHelper.appendQueryParams(`${Urls.signature}/documents/${documentId}/files/attachments/${attachmentId}/signers/${signerId}`, {
      fileFormat
    });
    return super.getBuffer(url);
  }

  /**
   * Returns a list of all notifications that has been sent / attempted sent for a document.
   * @param documentId
   */
  public listNotifications(documentId: string): Promise<NotificationLogItem> {
    return super.get<NotificationLogItem>(`${Urls.signature}/documents/${documentId}/notifications`);
  }

  /**
   * Sends a reminder to the specified signers.
   * @param documentId
   * @param manualReminder
   */
  public sendReminders(documentId: string, manualReminder: ManualReminder): Promise<ManualReminder> {
    return super.post(`${Urls.signature}/documents/${documentId}/notifications/reminder`, manualReminder);
  }

  /**
   * Returns a list of all color themes that can be used in the signature application.
   */
  public listThemes(): Promise<string[]> {
    return super.get<string[]>(`${Urls.signature}/themes/list/themes`);
  }

  /**
   * Returns a list of all spinners that can be used in the signature application.
   */
  public listSpinners(): Promise<string[]> {
    return super.get<string[]>(`${Urls.signature}/themes/list/spinners`);
  }
}
