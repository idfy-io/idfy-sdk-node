export default class APIHelper {
  public static appendQueryParams(url: string, params: { [key: string]: any }): string {
    const q = [];
    for (const p in params) {
      if (params.hasOwnProperty(p) && params[p]) {
        const val = params[p] instanceof Date
          ? params[p].toISOString()
          : params[p];

        q.push(`${p}=${val}`);
      }
    }

    return q.length > 0
      ? `${url}?${q.join('&')}`
      : url;
  }
}
