export interface AppIdProvider {
  /**
   * A unique identifier for the ID provider.
   */
  type: AppIdProvider.IdProviderType;

  /**
   * The name of the ID provider.
   */
  name?: string;

  /**
   * A short description of the ID provider.
   */
  description?: string;

  /**
   * The URL to the ID provider's logo.
   */
  logoUrl?: string;

  /**
   * The URL to the ID provider's logo (negative version).
   */
  logoUrlNegative?: string;
}

export namespace AppIdProvider {
  export type IdProviderType = 'no_bankid_netcentric' | 'no_bankid_mobile' | 'se_bankid' | 'no_buypass' | 'dk_nemid' |
    'fi_eid' | 'sms_otp' | 'freja' | 'github' | 'google' | ' linkedin';
}
