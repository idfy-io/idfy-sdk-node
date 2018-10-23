export default interface IdentificationResponse {
  /** The full name of the user as reported back from the identity provider **/
  name?: string;

  /** The first name of the user **/
  firstName?: string;


  /** The middle name of the user (not always available) **/
  middleName?: string;


  /** The last name of the user **/
  lastName?: string;
}
