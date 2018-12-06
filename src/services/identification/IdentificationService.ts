import IdfyBaseService from '../IdfyBaseService';
import Urls from '../../infrastructure/Urls';
import {
  CreateBankIDMobileRequest,
  CreateBankIDMobileResponse,
  CreateIdentificationRequest,
  CreateIdentificationResponse,
  IdentificationCompleteResponse,
  IdentificationLogItem,
  IdentificationResponse,
  LogItemList,
} from './';

export class IdentificationService extends IdfyBaseService {
  /**
   * Retrieves the response of a single identification session.
   * @param requestId
   * @param metaData
   */
  public getSession(requestId: string, metaData?: boolean): Promise<IdentificationResponse> {
    const endpoint = `${Urls.identification}/session?requestId=${requestId}`;
    return super.get<IdentificationResponse>(endpoint);
  }

  /**
   * Creates a new identification session.
   * @param createIdentificationRequest
   */
  public createSession(createIdentificationRequest: CreateIdentificationRequest):
    Promise<CreateIdentificationResponse> {
    return super.post<CreateIdentificationResponse>(
      `${Urls.identification}/session`, createIdentificationRequest);
  }

  /**
   * Retrieves the status of a single identification session.
   * @param requestId
   */
  public getSessionStatus(requestId: string): Promise<IdentificationCompleteResponse> {
    const endpoint = `${Urls.identification}/session/status?requestId=${requestId}`;
    return super.get<IdentificationCompleteResponse>(endpoint);
  }

  /**
   * Invalidates an identification session to avoid using the same request twice.
   * @param requestId
   */
  public invalidateSession(requestId: string): Promise<void> {
    return super.put(`${Urls.identification}/session/invalidate`);
  }

  /**
   * Gets an historic identification session (older than 14 days).
   * @param requestId
   */
  public getLogEntry(requestId: string): Promise<IdentificationLogItem> {
    return super.get<IdentificationLogItem>(`${Urls.identification}/log/requestId/${requestId}`);
  }

  /**
   * Lists historic identification sessions filtered by the provided parameters.
   * @param year
   * @param month
   * @param day
   * @param status
   * @param identityProviderType
   * @param externalId
   * @param name
   * @param skip
   * @param pageSize
   */
  public listLogEntries(
    year: number,
    month?: number,
    day?: number,
    status?: string,
    identityProviderType?: string,
    externalId?: string,
    name?: string,
    skip?: number,
    pageSize?: number): Promise<LogItemList> {
    return super.get<LogItemList>(`${Urls.identification}/log/filter/${year}`);
  }

  /**
   * Creates a new Norwegian BankID mobile session to start the identification process.
   * @param createBankIdMobileRequest
   */
  public createBankIdMobileSession(createBankIdMobileRequest: CreateBankIDMobileRequest):
    Promise<CreateBankIDMobileResponse> {
    const endpoint = `${Urls.identification}/no/bankid/mobile`;
    return super.post<CreateBankIDMobileResponse>(endpoint, createBankIdMobileRequest);
  }
}
