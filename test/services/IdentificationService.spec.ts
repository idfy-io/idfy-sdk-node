import { expect } from 'chai';
import IdfyConfiguration from '../../src/IdfyConfiguration';
import { CreateIdentificationRequest, IdentificationService } from '../../src/services/identification';
import { HttpRequestor } from '../../src/infrastructure/HttpRequestor';

IdfyConfiguration.setClientCredentials('idfy-test', 'foobar', []);
IdfyConfiguration.baseUrl = 'http://localhost:5000';

const service = new IdentificationService();

describe('Identification Service', () => {
  describe('getSession', () => {
    it('sends the correct request', () => {
      return service.getSession('123').then((result) => {
        expect(result).to.exist;
        assertRequest('GET', '/identification/session?requestId=123');
      });
    });
  });

  describe('createSession', () => {
    it('sends the correct request', () => {
      const request: CreateIdentificationRequest = {
        returnUrls: {
          success: 'success',
          abort: 'abort',
          error: 'error'
        }
      };
      return service.createSession(request).then((result) => {
        expect(result).to.exist;
        assertRequest('POST', '/identification/session', request);
      });
    });
  });

  function assertRequest(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE', path: string, body?: any) {
    const lastRequest: any = { ...HttpRequestor.lastRequest };
    if (!lastRequest) {
      expect.fail(null, null, 'lastRequest is undefined');
      return;
    }

    expect(`${IdfyConfiguration.baseUrl}${path}`).to.equal(lastRequest.uri);
    expect(lastRequest.method).to.equal(method);
    expect(lastRequest.body).to.deep.equal(body);
  }
});
