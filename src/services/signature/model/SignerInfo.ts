import { Mobile } from './Mobile';
import { OrganizationInfo } from './OrganizationInfo';

export interface SignerInfo {
  /**
   * The signer's first name.
   */
  firstName?: string;

  /**
   * The signer's last name.
   */
  lastName?: string;

  /**
   * The signer's email adress. Define this if you are using notifications.
   */
  email?: string;

  /**
   * Prefilled social security number.
   */
  socialSecurityNumber?: string;

  /**
   * The mobile number.
   */
  mobile?: Mobile;

  /**
   * The signer's organization info.
   */
  organizationInfo?: OrganizationInfo;
}
