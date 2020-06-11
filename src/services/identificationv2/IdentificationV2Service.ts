import IdfyBaseService from '../IdfyBaseService';
import Urls from '../../infrastructure/Urls';
import APIHelper from '../../infrastructure/APIHelper';
import { AppIdProvider, IdSession, IdSessionCreateOptions, LanguageDetails, PaginatedData } from './';

export class IdentificationV2Service extends IdfyBaseService {
  /**
   * Retrieves the details of a single identification session.
   * @param id
   */
  public getSession(id: string): Promise<IdSession> {
    const url = `${Urls.identificationv2}/sessions/${id}`;
    return super.get<IdSession>(url);
  }

  /**
   *  Returns a list of previously created sessions. The session data returned from this endpoint does not contain any personal information.
   * @param cursor
   * @param limit
   */
  public listSessions(cursor?: string, limit?: number): Promise<PaginatedData<IdSession>> {
    const url = APIHelper.appendQueryParams(`${Urls.identificationv2}/sessions`, {
      cursor,
      limit,
    });
    return super.get<PaginatedData<IdSession>>(url);
  }

  /**
   * Creates a new identification session.
   * @param idSessionCreateOptions
   */
  public createSession(idSessionCreateOptions: IdSessionCreateOptions): Promise<IdSession> {
    const url = `${Urls.identificationv2}/sessions`;
    return super.post<IdSession>(url, idSessionCreateOptions);
  }

  /**
   * Invalidates the specified identification session.
   * @param id
   */
  public invalidateSession(id: string): Promise<void> {
    const url = `${Urls.identificationv2}/sessions/${id}/invalidate`;
    return super.post(url);
  }

  /**
   * Returns a list of supported languages.
   */
  public listLanguages(): Promise<LanguageDetails> {
    const url = `${Urls.identificationv2}/languages`;
    return super.get<LanguageDetails>(url);
  }

  /**
   * Returns a list of all the supported ID providers.
   */
  public listIdProviders(): Promise<AppIdProvider> {
    const url = `${Urls.identificationv2}/id-providers`;
    return super.get<AppIdProvider>(url);
  }

  /**
   * Returns a list of all the ID providers available for the requester's account.
   */
  public listIdProvidersForAccount(): Promise<AppIdProvider> {
    const url = `${Urls.identificationv2}/id-providers/account`;
    return super.get<AppIdProvider>(url);
  }
}
