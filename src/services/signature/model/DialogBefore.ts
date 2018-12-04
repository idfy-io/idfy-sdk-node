export interface DialogBefore {
  /**
   * Determines if a the user must confirm that the dialog message has been read before they can continue.
   */
  useCheckBox?: boolean;

  /**
   * The title of the dialog.
   */
  title?: string;

  /**
   * The message body of the dialog.
   */
  message?: string;
}
