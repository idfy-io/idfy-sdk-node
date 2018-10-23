export const endpoints = {
  identification: 'identification',
};

export default class Urls {
  public static defaultBaseUrl = 'https://api.idfy.io';

  public static get defaultOAuthUrl() {
    return this.defaultBaseUrl;
  }
}
