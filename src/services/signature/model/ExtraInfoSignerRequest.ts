import { SpecialProperties } from './SpecialProperties';

export interface ExtraInfoSignerRequest {
  /**
   * A list of the extra information you want to order. Certain types require special properties,
   * see documentation for more information. Additional cost will incur (with the exception of Difi company info).
   */
  types?: Array<ExtraInfoSignerRequest.TypesEnum>;

  specialProperties?: SpecialProperties;

}
export namespace ExtraInfoSignerRequest {
  export type TypesEnum = 'personalInfo' | 'companyInfo' | 'companyInfoAutoComplete' | 'personalCreditCheck' |
    'businessCreditCheck' | 'officialPersonalInfo' | 'bankIDApisAmlPersonSanctionPep' | 'bankIDApisAmlCurrentAddress';
}
