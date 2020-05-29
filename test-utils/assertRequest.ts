import { HttpRequestor } from '../src/infrastructure/HttpRequestor';
import { expect } from 'chai';
import { IdfyConfiguration } from '../src';

export function assertRequest(
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE', path: string, body?: any) {
  const lastRequest: any = { ...HttpRequestor.lastRequest };
  if (!lastRequest) {
    expect.fail(null, null, 'lastRequest is undefined');
    return;
  }

  expect(`${IdfyConfiguration.baseUrl}${path}`).to.equal(lastRequest.url);
  expect(lastRequest.method).to.equal(method);
  expect(lastRequest.json).to.deep.equal(body);
}
