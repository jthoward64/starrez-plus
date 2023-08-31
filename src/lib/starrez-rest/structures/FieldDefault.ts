// Generated from XML description of FieldDefault

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FieldDefault {
  fieldDefaultID?: number;
  tableName?: string;
  fieldName?: string;
  required?: boolean;
  requiredMessage?: string;
  enforceUnique?: boolean;
  enforceUniqueMessage?: string;
  applyDefault?: boolean;
  value?: string;
  conditional?: boolean;
  conditionalFieldName?: string;
  conditionalValue?: string;
  important?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FieldDefault");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FieldDefaultID != null) this.fieldDefaultID = (data.FieldDefaultID != null ? parseInt(data.FieldDefaultID, 10) : data.FieldDefaultID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.FieldName != null) this.fieldName = data.FieldName;
    if (data.Required != null) this.required = data.Required === 'true';
    if (data.RequiredMessage != null) this.requiredMessage = data.RequiredMessage;
    if (data.EnforceUnique != null) this.enforceUnique = data.EnforceUnique === 'true';
    if (data.EnforceUniqueMessage != null) this.enforceUniqueMessage = data.EnforceUniqueMessage;
    if (data.ApplyDefault != null) this.applyDefault = data.ApplyDefault === 'true';
    if (data.Value != null) this.value = data.Value;
    if (data.Conditional != null) this.conditional = data.Conditional === 'true';
    if (data.ConditionalFieldName != null) this.conditionalFieldName = data.ConditionalFieldName;
    if (data.ConditionalValue != null) this.conditionalValue = data.ConditionalValue;
    if (data.Important != null) this.important = data.Important === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a FieldDefault by its ID or by exact match on other fields.
   * @param param Either the ID of the FieldDefault to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single FieldDefault object or null (if id) or an array of FieldDefault objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<FieldDefault | null>;
  static async select(param: Partial<Record<keyof FieldDefault, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FieldDefault[]>;
  static async select(param: number | Partial<Record<keyof FieldDefault, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FieldDefault | FieldDefault[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FieldDefault/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FieldDefault`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FieldDefault with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new FieldDefault(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new FieldDefault(entry));
      }
    }
  }
}

FieldDefault satisfies StarRezStructureStatic<FieldDefault>
