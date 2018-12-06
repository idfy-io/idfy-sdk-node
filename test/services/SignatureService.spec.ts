import { expect } from 'chai';
import { assertRequest } from '../../test-utils/assertRequest';
import { SignatureService } from '../../src/services/signature';

const service = new SignatureService();

describe('Signature Service', () => {
  describe('getDocument', () => {
    it('sends the correct request', () => {
      return service.getDocument('123').then((result) => {
        expect(result).to.exist;
        assertRequest('GET', '/signature/documents/123');
      });
    });
  });
});