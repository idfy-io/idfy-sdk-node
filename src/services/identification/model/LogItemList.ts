import { IdentificationLogItem } from '../';

export interface LogItemList {
  /**
   * Link to the next results if not set there are less then the return limit of 1000
   */
  NextLink?: string;

  /**
   * The total amount of links (pages) for the list
   */
  TotalLinks?: number;

  /**
   * List of results
   */
  List?: IdentificationLogItem[];
}
