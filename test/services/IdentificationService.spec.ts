import { expect } from 'chai';
import IdfyConfiguration from '../../src/IdfyConfiguration';
import {
  CreateBankIDMobileRequest,
  CreateIdentificationRequest,
  IdentificationService
} from '../../src/services/identification';
import { HttpRequestor } from '../../src/infrastructure/HttpRequestor';
import * as request from 'request';

IdfyConfiguration.setClientCredentials('idfy-test', 'foobar', []);
IdfyConfiguration.baseUrl = 'http://localhost:5000';

const service = new IdentificationService();

describe('Identification Service', () => {
  // Make sure that the Idfy Mock Server is running
  before(function () {
    this.timeout(5000);
    try {
      return new Promise<any>((resolve, reject) => {
        request(IdfyConfiguration.baseUrl, (err) => {
          if (err) {
            return reject(err);
          }
          return resolve();
        });
      });
    } catch {
      throw Error(`Failed to connect to Idfy Mock Server at ${IdfyConfiguration.baseUrl}, make sure it is running`);
    }
  });

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
      const request = <CreateIdentificationRequest> {};
      return service.createSession(request).then((result) => {
        expect(result).to.exist;
        assertRequest('POST', '/identification/session', request);
      });
    });
  });

  describe('getSessionStatus', () => {
    it('sends the correct request', () => {
      return service.getSessionStatus('123').then((result) => {
        expect(result).to.exist;
        assertRequest('GET', '/identification/session/status?requestId=123');
      });
    });
  });

  describe('invalidateSession', () => {
    it('sends the correct request', () => {
      return service.invalidateSession('123').then((result) => {
        expect(result).to.not.exist;
        assertRequest('PUT', '/identification/session/invalidate');
      });
    });
  });

  describe('getLogEntry', () => {
    it('sends the correct request', () => {
      return service.getLogEntry('123').then((result) => {
        expect(result).to.exist;
        assertRequest('GET', '/identification/log/requestId/123');
      });
    });
  });

  describe('listLogEntries', () => {
    it('sends the correct request', () => {
      return service.listLogEntries(2000)
        .then((result) => {
          expect(result).to.exist;
          assertRequest('GET', '/identification/log/filter/2000');
        });
    });
  });

  // todo: Enable test when Swagger is updated with this endpoint
  // describe('createBankIdMobileSession', () => {
  //   it('sends the correct request', () => {
  //     const request = <CreateBankIDMobileRequest> {};
  //     return service.createBankIdMobileSession(request).then((result) => {
  //       expect(result).to.exist;
  //       assertRequest('POST', '/identification/log/requestId/123', request);
  //     });
  //   });
  // });

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
