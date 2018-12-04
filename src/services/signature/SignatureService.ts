import IdfyBaseService from '../IdfyBaseService';
import {
  Document, DocumentCreateOptions, DocumentUpdateOptions
} from './';

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
    return super.post(`${this._endpointBase}/documents/${documentId}/cancel`);
  }
}
