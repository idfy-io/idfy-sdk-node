import { PadesSettings } from './PadesSettings';

export interface Packaging {
  /**
   * A list of signature formats that will be created and made available for download after the document is signed.
   * See our documentation for more information about these formats. The native package format is included automatically
   * (i.e. BankID SDO).
   */
  signaturePackageFormats?: Array<Packaging.SignaturePackageFormatsEnum>;

  /**
   * PAdES settings that can be defined if the `pades` package format is selected.
   */
  padesSettings?: PadesSettings;

}
export namespace Packaging {
  export type SignaturePackageFormatsEnum = 'xades' | 'pades' | 'no_bankid_pades';
}
