export interface PrefilledInput {
  /**
   * Prefill the user's national identification number.
   */
  nin?: string;

  /**
   * Prefill the user's phone number. Must be prefixed with country code.
   */
  phoneNumber?: string;

  /**
   * Prefill the user's date of birth (YYYY-MM-DD).
   */
  dateOfBirth?: Date;

  /**
   * Prefill the user's username.
   */
  userName?: string;
}
