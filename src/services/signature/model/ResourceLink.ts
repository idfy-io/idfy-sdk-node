import { Link } from '../../../model';

export interface ResourceLink extends Link {
  resourceStatus?: ResourceLink.StatusEnum;
}
export namespace ResourceLink {
  export type StatusEnum = 'Unknown' | 'NotReady' | 'Success' | 'signatureError' | 'NotFound' |
    'BadInput' | 'ServiceUnavailable' | 'Unauthorized' | 'TimeOut';
}
