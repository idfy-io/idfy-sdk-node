import { expect } from 'chai';
import { assertRequest } from '../../test-utils/assertRequest';
import { SignatureService, SignerOptions } from '../../src/services/signature';

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

  describe('getFile', () => {
    it('sends the correct request', () => {
      return service.getFile('123', 'pades').then((result) => {
        expect(result).to.exist;
        assertRequest('GET', '/signature/documents/123/files?fileFormat=pades');
      });
    });
  });

  describe('updateSigner', () => {
    it('sends the correct request', () => {
      const signerOptions: SignerOptions = {
        externalSignerId: 'external-signer-id',
        redirectSettings: {
          redirectMode: 'donot_redirect',
        },
        signatureType: {
          mechanism: 'handwritten',
        },
      }

      return service.updateSigner('123', '456', signerOptions).then((result) => {
        expect(result).to.exist;
        assertRequest('PATCH', '/signature/documents/123/signers/456', signerOptions);
      });
    });
  });
});
