import { Signer } from './Signer';
import { Advanced } from './Advanced';
import { DataToSign } from './DataToSign';
import { ContactDetails } from './ContactDetails';
import { Status } from './Status';
import { ResourceLink } from './ResourceLink';

export interface Document {
  /**
   * The document's unique identifier.
   */
  documentId?: string;

  /**
   * List of signers for the document.
   */
  signers?: Signer[];

  /**
   * The status of the document.
   */
  status?: Status;

  /**
   * HATEOAS extra info links retrieved for the document.
   */
  links?: ResourceLink[];

  /**
   * The title of the document which will be presented to the user.
   */
  title: string;

  /**
   * The description of the document.
   */
  description?: string;

  /**
   * Your reference to this document.
   */
  externalId: string;

  /**
   * The data that will be signed.
   */
  dataToSign: DataToSign;

  /**
   * The company's contact information.
   */
  contactDetails: ContactDetails;

  /**
   * Settings for custom notification texts. Remark: Also requires you to setup
   * notifications for each signer you want to notify.
   */
  notification?: Notification;

  /**
   * Optional settings for advanced configuration.
   */
  advanced?: Advanced;
}
