export interface Link {
  href?: string;

  rel?: string;

  contentType?: string;

  error?: string;

  resourceStatus?: Link.ResourceStatusEnum;

}
export namespace Link {
  export type ResourceStatusEnum = 'Unknown' | 'NotReady' | 'Success' | 'signatureError' | 'NotFound' |
    'BadInput' | 'ServiceUnavailable' | 'Unauthorized' | 'TimeOut';
}
