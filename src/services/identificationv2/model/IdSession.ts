import { RedirectSettings } from './RedirectSettings';
import { IframeSettings } from './IframeSettings';
import { UiSettings } from './UiSettings';
import { PrefilledInput } from './PrefilledInput';
import { Identity } from './Identity';
import { Environment } from './Environment';
import { ExtraInfoResource } from './ExtraInfoResource';
import { AuditTrail } from './AuditTrail';

export interface IdSession {
  /**
   * The session's unique identifier.
   */
  id?: string;

  /**
   * The URL to start the identification process. Only applicable to the `iframe` and `redirect` flows.
   */
  url?: string;

  /**
   * The security reference for the identification process. Only applicable to the `headless` flow.
   */
  securityReference?: string;

  /**
   * The status of the identification session.
   */
  status: IdSession.IdSessionStatus;

  /**
   * Time at which the session was created.
   */
  created: Date;

  /**
   * Time at which the session will expire.
   */
  expires: Date;

  /**
   * The eID provider used for identification.
   */
  provider?: IdSession.IdProviderType;

  /**
   * Details about the identified user. Only available if session has status `success`.
   */
  identity?: Identity;

  /**
   * Details about the user's environment.
   */
  environment?: Environment;

  /**
   * A list of eID providers that can be used for identification. If not specified,
   * the user will be able to chose from all eID's associated with your Idfy account.
   */
  allowedProviders?: IdSession.IdProviderType[];

  /**
   * The language to use for the identification process. Defaults to `en` (english).
   */
  language?: IdSession.Language;

  /**
   * The type of flow to use.
   */
  flow: IdSession.IdSessionFlow;

  /**
   * Request additional information about the user.
   */
  include?: IdSession.Include[];

  /**
   * Redirect settings when using the `redirect` flow.
   */
  redirectSettings?: RedirectSettings;

  /**
   * Iframe settings when using the `iframe` flow.
   */
  iframeSettings?: IframeSettings;

  /**
   * Your external reference for the session.
   */
  externalReference?: string;

  /**
   * UI settings for the identification process.
   */
  ui?: UiSettings;

  /**
   * Prefilled input values.
   */
  prefilledInput?: PrefilledInput;

  /**
   * Resources created for the session.
   */
  resources?: ExtraInfoResource[];

  /**
   * Audit trail.
   */
  auditTrail?: AuditTrail;

  /**
   * Error details.
   */
  error?: Error;
}

export namespace IdSession {
  export type IdProviderType = 'no_bankid_netcentric' | 'no_bankid_mobile' | 'se_bankid' | 'no_buypass' | 'dk_nemid' |
    'fi_eid' | 'sms_otp' | 'freja' | 'github' | 'google' | ' linkedin';

  export type Language = 'en' | 'no' | 'sv' | 'da';

  export type IdSessionFlow = 'redirect' | 'iframe' | 'headless';

  export type Include = 'name' | 'phone_number' | 'date_of_birth' | 'nin' | 'email' | 'resource.vipps_aml_person';

  export type IdSessionStatus = 'created' | 'user_initiated' | 'user_aborted' | 'timed_out' | 'invalidated' | 'failed' | 'success';
}
