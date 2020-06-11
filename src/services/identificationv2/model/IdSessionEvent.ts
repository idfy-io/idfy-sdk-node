export interface IdSessionEvent {
  /**
   * The event ID.
   */
  id: number;

  /**
   * The name of the event.
   */
  name?: string;

  /**
   * The event type.
   */
  eventType: IdSessionEvent.IdSessionEventType;

  /**
   * Time at which the event was raised.
   */
  timestamp?: Date;

  /**
   * Event data.
   */
  eventData?: { [key: string]: object };
}

export namespace IdSessionEvent {
  export type IdSessionEventType = 'success' | 'failure' | 'information';
}
