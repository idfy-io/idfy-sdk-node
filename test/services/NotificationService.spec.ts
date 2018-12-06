import { expect } from 'chai';
import { assertRequest } from '../../test-utils/assertRequest';
import { NotificationService } from '../../src/services/notification';

const service = new NotificationService();

describe('Notification Service', () => {
  describe('listUnhandledEvents', () => {
    it('sends the correct request', () => {
      return service.listUnhandledEvents('document_read').then((result) => {
        expect(result).to.exist;
        assertRequest('GET', '/notification/events?eventType=document_read');
      });
    });
  });
});
