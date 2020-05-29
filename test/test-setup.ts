/**
 * Global hook to make sure that the Idfy Mock Server is running
 */
import got from 'got';
import { IdfyConfiguration } from '../src';

IdfyConfiguration.setClientCredentials('idfy-test', 'foobar', []);
IdfyConfiguration.baseUrl = 'http://localhost:5000';

before(async function () {
  this.timeout(6000);

  try {
    await got(IdfyConfiguration.baseUrl, { throwHttpErrors: false, timeout: 5000 });
    console.log('✓ Idfy Mock Server running');
  } catch (err) {
    throw Error(`Failed to connect to Idfy Mock Server at ${IdfyConfiguration.baseUrl}, make sure it is running`);
  }
});
