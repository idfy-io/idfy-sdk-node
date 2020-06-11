export interface Identity {
  /**
   * The user's unique ID from the eID provider.
   */
  providerId?: string;

  /**
   * Full name.
   */
  fullName?: string;

  /**
   * First name.
   */
  firstName?: string;

  /**
   * Middle name.
   */
  middleName?: string;

  /**
   * Last name.
   */
  lastName?: string;

  /**
   * Date of birth.
   */
  dateOfBirth?: Date;

  /**
   * National identification number.
   */
  nin?: string;

  /**
   * Phone number.
   */
  phoneNumber?: string;

  /**
   * Email address.
   */
  email?: string;
}
