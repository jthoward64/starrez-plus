import { StarRezRestConfig } from "./StarRezRestConfig";

export interface StarRezStructureStatic<T> {
  new(xml: string | Node): T;
  fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<T | null>;
}
