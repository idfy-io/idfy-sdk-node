import { expect } from 'chai';
import APIHelper from '../../src/infrastructure/APIHelper';

describe('API Helper', () => {
  describe('appendQueryParams', () => {
    it('appends query params', () => {
      const q: { [key: string]: any } = {};
      q['foo'] = 'bar';
      q['limit'] = 25;
      q['fromDate'] = new Date(Date.UTC(2018, 0, 1, 8));

      const url = APIHelper.appendQueryParams('https://api.idfy.io', q);
      expect(url).to.equal('https://api.idfy.io?foo=bar&limit=25&fromDate=2018-01-01T08:00:00.000Z');
    });

    it('ignores null and empty values', () => {
      const q: { [key: string]: any } = {};
      q['foo'] = null;
      q['limit'] = undefined;
      q['fromDate'] = '';

      const url = APIHelper.appendQueryParams('https://api.idfy.io', q);
      expect(url).to.equal('https://api.idfy.io');
    });
  });
});
