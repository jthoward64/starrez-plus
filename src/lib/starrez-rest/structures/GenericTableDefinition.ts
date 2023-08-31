// Generated from XML description of GenericTableDefinition

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class GenericTableDefinition {
  genericTableDefinitionID?: number;
  description?: string;
  tableName?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "GenericTableDefinition");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.GenericTableDefinitionID != null) this.genericTableDefinitionID = (data.GenericTableDefinitionID != null ? parseInt(data.GenericTableDefinitionID, 10) : data.GenericTableDefinitionID);
    if (data.Description != null) this.description = data.Description;
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a GenericTableDefinition by its ID or by exact match on other fields.
   * @param param Either the ID of the GenericTableDefinition to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single GenericTableDefinition object or null (if id) or an array of GenericTableDefinition objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<GenericTableDefinition | null>;
  static async select(param: Partial<Record<keyof GenericTableDefinition, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<GenericTableDefinition[]>;
  static async select(param: number | Partial<Record<keyof GenericTableDefinition, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<GenericTableDefinition | GenericTableDefinition[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GenericTableDefinition/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GenericTableDefinition`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch GenericTableDefinition with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new GenericTableDefinition(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new GenericTableDefinition(entry));
      }
    }
  }
}

GenericTableDefinition satisfies StarRezStructureStatic<GenericTableDefinition>
