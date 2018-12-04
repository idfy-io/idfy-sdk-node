import { DialogAfter } from './DialogAfter';
import { DialogBefore } from './DialogBefore';

export interface Dialogs {
  /**
   * A dialog that will be presented before the document is signed.
   */
  before?: DialogBefore;

  /**
   * A dialog that will be presented after the document is signed.
   */
  after?: DialogAfter;
}
