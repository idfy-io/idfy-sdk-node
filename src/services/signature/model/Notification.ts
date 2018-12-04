import { CanceledReceipt } from './CanceledReceipt';
import { ExpiredReceipt } from './ExpiredReceipt';
import { FinalReceipt } from './FinalReceipt';
import { Reminder } from './Reminder';
import { SignRequest } from './SignRequest';
import { SignatureReceipt } from './SignatureReceipt';

export interface Notification {
  /**
   * Email/SMS notifications reminding the signers that they have received a new document to sign.
   */
  signRequest?: SignRequest;

  /**
   * Email/SMS notifications reminding the signers that they have an unsigned document.
   */
  reminder?: Reminder;

  /**
   * Email/SMS notifications as a receipt for a successful signature.
   */
  signatureReceipt?: SignatureReceipt;

  /**
   * Email/SMS notifications as a receipt when a document has received all required signatures.
   */
  finalReceipt?: FinalReceipt;

  /**
   * Email/SMS notifications when a document has been cancelled and can no longer be signed.
   */
  canceledReceipt?: CanceledReceipt;

  /**
   * Email/SMS notifications when a document has expired and can no longer be signed.
   */
  expiredReceipt?: ExpiredReceipt;

}
