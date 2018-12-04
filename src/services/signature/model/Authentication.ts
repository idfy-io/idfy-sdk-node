
export interface Authentication {
  /**
   * Set the type of authentication you want before the user is allowed to view
   * the document(s), sms otp will use the mobile number specified in signerinfo
   */
  mechanism?: Authentication.MechanismEnum;

  /**
   * The signer's social security number.
   */
  socialSecurityNumber?: string;

  /**
   * The signer's unique ID for a signature method (for example the Norwegian BankID PID).
   */
  signatureMethodUniqueId?: string;

}
export namespace Authentication {
  export type MechanismEnum = 'off' | 'eid' | 'smsOtp' | 'eidAndSmsOtp';
}
