# Idfy Node.js SDK
[![Build Status](https://travis-ci.org/idfy-io/idfy-sdk-node.svg?branch=master)](https://travis-ci.org/idfy-io/idfy-sdk-node) 
[![npm (scoped)](https://img.shields.io/npm/v/@idfy/sdk.svg)](https://www.npmjs.com/package/@idfy/sdk)

A Node.js SDK for simple integration with the Idfy REST API.

## Installation
	npm install @idfy/sdk --save 

## Documentation
- [Idfy REST API Reference](https://developer.idfy.io/api)
- [Idfy Developer Documentation](https://docs.idfy.io)


## Sample Usage
All methods return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves with the response body returned from the API.

The example below shows how to get the details of a single document.
```javascript
const { IdfyClient } = require('@idfy/sdk');

// Initialize client with your credentials and desired scopes
const client = new IdfyClient(
  'clientId',
  'clientSecret',
  ['document_read', 'document_write']
);

// Make a call to retrieve the document
client.signature.getDocument('documentId')
  .then((document) => {
    console.log(`Retrieved document: ${document.title}`);
  });
```

### Typescript Usage
The Idfy SDK comes with built-in typings.

```javascript
import { IdfyClient } from '@idfy/sdk';

const client: IdfyClient = new IdfyClient(/* ... /*);
```


## Support
- Open an [issue](https://github.com/idfy-io/idfy-sdk-node/issues) to report bugs or submit feature requests.
- For other support requests, visit our [support page](https://support.idfy.io) or contact us at [support@idfy.io](mailto:support@idfy.io).
