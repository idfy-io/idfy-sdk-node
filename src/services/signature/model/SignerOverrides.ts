import { Mobile } from './Mobile';

export interface SignerOverrides {
  /**
   * Set a new email address on the signer (all fututre notifications to this specific signer will
   * be sent to this email)
   */
  emailOverride?: string;

  /**
   * Set a new mobile on the signer
   */
  mobileOverride?: Mobile;
}
