import { IdSessionEvent } from './IdSessionEvent';

export interface AuditTrail {
  /**
   * The certificate used to identify the user.
   */
  certificate?: string;

  /**
   * Events raised for the current session.
   */
  events?: IdSessionEvent[];
}
