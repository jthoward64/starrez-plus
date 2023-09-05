export interface StarRezRestConfig {
  /**
   * Do not include a trailing slash or any query parameters, the base url should probably end with '/StarRezREST'
   * @example https://starport.uky.edu/StarRezREST
   */
  baseUrl: string;
  portalUrl: string;
  // useBrowserAuth?: boolean;
  authorizationHeader?: `Basic ${string}` | `Bearer ${string}`;
}
