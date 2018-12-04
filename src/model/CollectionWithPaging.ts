import { Links } from './Links';

export interface CollectionWithPaging<T> {
  offset?: number;

  limit?: number;

  size?: number;

  links: Links;

  data: T[];
}
