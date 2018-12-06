/**
 * Global hook to make sure that the Idfy Mock Server is running
 */

import * as request from 'request';
import IdfyConfiguration from '../src/IdfyConfiguration';

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
