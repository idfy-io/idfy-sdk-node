export interface Event {
  id?: string;

  type?: string;

  payload?: any;

  timestamp?: Date;

  accountId?: string;

  tags?: string[];
}
