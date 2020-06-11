export interface ExtraInfoResource {
  /**
   * The type of resource.
   */
  type: ExtraInfoResource.ExtraInfoResourceType;

  /**
   * The resource's unique identifier.
   */
  id?: string;

  /**
   * The URL to download the resource.
   */
  url?: string;

  /**
   * The resource's content type.
   */
  contentType?: string;

  /**
   * The status of the resource.
   */
  status: ExtraInfoResource.ExtraInfoResourceStatus;
}

export namespace ExtraInfoResource {
  export type ExtraInfoResourceType = 'vipps_aml_person';

  export type ExtraInfoResourceStatus = 'pending' | 'missing_credentials' | 'unsupported_idp' | 'not_found' |
    'unknown_error' | 'success' | 'insufficient_access';
}
