export interface SignatureType {
  /**
   * A list of signature methods that the signer is allowed to use when signing the document.
   * If not specified, all available signature methods for your Idfy account will be displayed to the signer.
   */
  signatureMethods?: SignatureType.SignatureMethodsEnum[];

  mechanism: SignatureType.MechanismEnum;

  onEacceptUseHandWrittenSignature?: boolean;
}

export namespace SignatureType {
  export type SignatureMethodsEnum =
    'no_bankid_mobile' |
    'no_bankid_netcentric' |
    'no_buypass' |
    'se_bankid' |
    'dk_nemid' |
    'fi_tupas' |
    'fi_mobiilivarmenne' |
    'fi_eid' |
    'sms_otp' |
    'unknown';

  export type MechanismEnum =
    'pkisignature' |
    'identification' |
    'handwritten' |
    'handwritten_with_identification';
}
