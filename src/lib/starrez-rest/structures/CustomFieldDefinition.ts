// Generated from XML description of CustomFieldDefinition

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class CustomFieldDefinition {
  customFieldDefinitionID?: number;
  tableName?: string;
  fieldDataTypeEnum?: unknown;
  description?: string;
  code?: string;
  customFieldOrder?: number;
  customFieldGroup?: string;
  customFieldSection?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "CustomFieldDefinition");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CustomFieldDefinitionID != null) this.customFieldDefinitionID = (data.CustomFieldDefinitionID != null ? parseInt(data.CustomFieldDefinitionID, 10) : data.CustomFieldDefinitionID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.FieldDataTypeEnum != null) this.fieldDataTypeEnum = data.FieldDataTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Code != null) this.code = data.Code;
    if (data.CustomFieldOrder != null) this.customFieldOrder = (data.CustomFieldOrder != null ? parseInt(data.CustomFieldOrder, 10) : data.CustomFieldOrder);
    if (data.CustomFieldGroup != null) this.customFieldGroup = data.CustomFieldGroup;
    if (data.CustomFieldSection != null) this.customFieldSection = data.CustomFieldSection;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a CustomFieldDefinition by its ID or by exact match on other fields.
   * @param param Either the ID of the CustomFieldDefinition to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single CustomFieldDefinition object or null (if id) or an array of CustomFieldDefinition objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<CustomFieldDefinition | null>;
  static async select(param: Partial<Record<keyof CustomFieldDefinition, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<CustomFieldDefinition[]>;
  static async select(param: number | Partial<Record<keyof CustomFieldDefinition, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<CustomFieldDefinition | CustomFieldDefinition[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CustomFieldDefinition/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CustomFieldDefinition`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch CustomFieldDefinition with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new CustomFieldDefinition(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new CustomFieldDefinition(entry));
      }
    }
  }
}

CustomFieldDefinition satisfies StarRezStructureStatic<CustomFieldDefinition>
