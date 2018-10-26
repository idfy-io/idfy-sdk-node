import IdfyBaseService from '../IdfyBaseService';
import * as id from './';

export class IdentificationService extends IdfyBaseService {
  private readonly _endpointBase: string = 'identification';

  /**
   * Retrieves the response of a single identification session.
   */
  public getSession(requestId: string, metaData?: boolean): Promise<id.IdentificationResponse> {
    const endpoint = `${this._endpointBase}/session?requestId=${requestId}`;
    return super.get<id.IdentificationResponse>(endpoint);
  }

  /**
   * Creates a new identification session
   */
  public createSession(createIdentificationRequest: id.CreateIdentificationRequest):
    Promise<id.CreateIdentificationResponse> {
    return super.post<id.CreateIdentificationResponse>(
      `${this._endpointBase}/session`, createIdentificationRequest);
  }

  /**
   * Retrieves the status of a single identification session.
   */
  public getSessionStatus(requestId: string): Promise<id.IdentificationCompleteResponse> {
    const endpoint = `${this._endpointBase}/session/status?requestId=${requestId}`;
    return super.get<id.IdentificationCompleteResponse>(endpoint);
  }

  public invalidateSession(requestId: string): Promise<void> {
    const endpoint = `${this._endpointBase}/session/invalidate`;
    return super.post(endpoint);
  }
}
