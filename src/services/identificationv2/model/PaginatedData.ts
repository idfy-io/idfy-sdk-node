export interface PaginatedData<T> {
  /**
   * The limit of the current paging options.
   */
  limit?: number;

  /**
   * The cursor to send to the endpoint to receive the next batch of responses.
   */
  nextCursor?: string;

  /**
   * An array containing the actual response elements.
   */
  data: [T];
}
