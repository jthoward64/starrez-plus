// Generated from XML description of GenericTableData

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class GenericTableData {
  genericTableDataID?: number;
  genericTableDefinitionID?: number;
  tableID?: number;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "GenericTableData");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.GenericTableDataID != null) this.genericTableDataID = (data.GenericTableDataID != null ? parseInt(data.GenericTableDataID, 10) : data.GenericTableDataID);
    if (data.GenericTableDefinitionID != null) this.genericTableDefinitionID = (data.GenericTableDefinitionID != null ? parseInt(data.GenericTableDefinitionID, 10) : data.GenericTableDefinitionID);
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a GenericTableData by its ID or by exact match on other fields.
   * @param param Either the ID of the GenericTableData to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single GenericTableData object or null (if id) or an array of GenericTableData objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<GenericTableData | null>;
  static async select(param: Partial<Record<keyof GenericTableData, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<GenericTableData[]>;
  static async select(param: number | Partial<Record<keyof GenericTableData, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<GenericTableData | GenericTableData[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GenericTableData/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GenericTableData`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch GenericTableData with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new GenericTableData(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new GenericTableData(entry));
      }
    }
  }
}

GenericTableData satisfies StarRezStructureStatic<GenericTableData>
