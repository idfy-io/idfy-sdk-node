import { HttpRequestor } from '../src/infrastructure/HttpRequestor';
import { expect } from 'chai';
import IdfyConfiguration from '../src/IdfyConfiguration';

export function assertRequest(
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
