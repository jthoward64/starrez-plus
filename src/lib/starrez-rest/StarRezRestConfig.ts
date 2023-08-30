export interface StarRezRestConfig {
  /**
   * @example https://starport.uky.edu/StarRezREST
   */
  baseUrl: URL;
  fetchHeaders: Record<string, string>;
}
