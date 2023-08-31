export interface StarRezRestConfig {
  /**
   * @example https://starport.uky.edu/StarRezREST
   */
  baseUrl: URL;
  useBrowserAuth?: boolean;
  base64Credentials?: string;
}
