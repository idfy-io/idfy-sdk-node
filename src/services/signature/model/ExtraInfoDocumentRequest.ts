import { SpecialProperties } from './SpecialProperties';

export interface ExtraInfoDocumentRequest {
  /**
   * A list of the extra information you want to order. Certain types require special properties,
   * see documentation for more information. Additional cost will incur (with the exception of Difi company info).
   */
  types?: ExtraInfoDocumentRequest.TypesEnum[];

  /**
   * A set of key-value pairs with special properties, see documentation for more information.
   */
  specialProperties?: SpecialProperties;

}
export namespace ExtraInfoDocumentRequest {
  export type TypesEnum = 'rightsAndProkura';
}
