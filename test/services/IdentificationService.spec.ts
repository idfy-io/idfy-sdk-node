import { expect } from 'chai';
import { assertRequest } from '../../test-utils/assertRequest';
import {
  CreateBankIDMobileRequest,
  CreateIdentificationRequest,
  IdentificationService
} from '../../src/services/identification';

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
        expect(result).to.be.empty;
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
  describe('createBankIdMobileSession', () => {
    it('sends the correct request', () => {
      const request = <CreateBankIDMobileRequest> {};
      return service.createBankIdMobileSession(request).then((result) => {
        expect(result).to.exist;
        assertRequest('POST', '/identification/no/bankid/mobile', request);
      });
    });
  });
});
