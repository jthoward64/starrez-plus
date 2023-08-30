import { StarRezRestConfig } from "./StarRezRestConfig";

export class StarRezRestRequester {
  constructor(private config: StarRezRestConfig) {
  }

  public async get<T>(path: string): Promise<T> {
  }