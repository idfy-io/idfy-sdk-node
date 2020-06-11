import { expect } from 'chai';
import { IdentificationV2Service, IdSessionCreateOptions } from '../../src/services/identificationv2';
import { assertRequest } from '../../test-utils/assertRequest';

const service = new IdentificationV2Service();

describe('Identification v2 Service', () => {
  describe('getSession', () => {
    it('sends the correct request', () => {
      return service.getSession('123').then((result) => {
        expect(result).to.exist;
        assertRequest('GET', '/identification/v2/sessions/123');
      });
    });
  });

  describe('listSessions', () => {
    it('sends the correct request', () => {
      return service.listSessions('foobar', 25).then((result) => {
        expect(result).to.exist;
        expect(result.data).to.not.be.empty;
        assertRequest('GET', '/identification/v2/sessions?cursor=foobar&limit=25');
      });
    });
  });

  describe('createSession', () => {
    it('sends the correct request', () => {
      const body: IdSessionCreateOptions = { flow: 'redirect' };
      return service.createSession(body).then((result) => {
        expect(result).to.exist;
        assertRequest('POST', '/identification/v2/sessions', body);
      });
    });
  });

  describe('invalidateSession', () => {
    it('sends the correct request', () => {
      return service.invalidateSession('123').then((result) => {
        expect(result).to.be.empty;
        assertRequest('POST', '/identification/v2/sessions/123/invalidate');
      });
    });
  });

  describe('listLanguages', () => {
    it('sends the correct request', () => {
      return service.listLanguages().then((result) => {
        expect(result).to.not.be.empty;
        assertRequest('GET', '/identification/v2/languages');
      });
    });
  });

  describe('listIdProviders', () => {
    it('sends the correct request', () => {
      return service.listIdProviders().then((result) => {
        expect(result).to.not.be.empty;
        assertRequest('GET', '/identification/v2/id-providers');
      });
    });
  });

  describe('listIdProvidersForAccount', () => {
    it('sends the correct request', () => {
      return service.listIdProvidersForAccount().then((result) => {
        expect(result).to.not.be.empty;
        assertRequest('GET', '/identification/v2/id-providers/account');
      });
    });
  });
});
