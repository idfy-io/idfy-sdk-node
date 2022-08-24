import { RedirectSettings } from './RedirectSettings';
import { IframeSettings } from './IframeSettings';
import { UiSettings } from './UiSettings';
import { PrefilledInput } from './PrefilledInput';

export interface IdSessionCreateOptions {
  /**
   * A list of eID providers that can be used for identification. If not specified,
   * the user will be able to chose from all eID's associated with your Idfy account.
   */
  allowedProviders?: IdSessionCreateOptions.IdProviderType[];

  /**
   * The language to use for the identification process. Defaults to `en` (english).
   */
  language?: IdSessionCreateOptions.Language;

  /**
   * The type of flow to use.
   */
  flow: IdSessionCreateOptions.IdSessionFlow;

  /**
   * Request additional information about the user.
   */
  include?: IdSessionCreateOptions.Include[];

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
}

export namespace IdSessionCreateOptions {
  export type IdProviderType = 'no_bankid_netcentric' | 'no_bankid_mobile' | 'se_bankid' | 'no_buypass' | 'dk_nemid' |
    'ftn' | 'sms_otp' | 'freja' | 'github' | 'google' | ' linkedin';

  export type Language = 'en' | 'no' | 'sv' | 'da' | 'fi' | 'de';

  export type IdSessionFlow = 'redirect' | 'iframe' | 'headless';

  export type Include = 'name' | 'phone_number' | 'date_of_birth' | 'nin' | 'email' | 'resource.vipps_aml_person';
}
