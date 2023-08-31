import { StarRezRestConfig } from "./StarRezRestConfig";

export interface StarRezStructureStatic<T> {
  new(xml: string | Node): T;
  select(param: number | Partial<Record<keyof T, { toString: () => string }>>, starRezConfig: StarRezRestConfig): Promise<T | T[] | null>;
}
