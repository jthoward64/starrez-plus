// Generated from XML description of GenericTableDefinitionField

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class GenericTableDefinitionField {
  genericTableDefinitionFieldID?: number;
  genericTableDefinitionID?: number;
  fieldDataTypeEnum?: unknown;
  genericFieldOrder?: number;
  genericFieldName?: string;
  genericFieldGroup?: string;
  genericFieldComment?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "GenericTableDefinitionField");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.GenericTableDefinitionFieldID != null) this.genericTableDefinitionFieldID = (data.GenericTableDefinitionFieldID != null ? parseInt(data.GenericTableDefinitionFieldID, 10) : data.GenericTableDefinitionFieldID);
    if (data.GenericTableDefinitionID != null) this.genericTableDefinitionID = (data.GenericTableDefinitionID != null ? parseInt(data.GenericTableDefinitionID, 10) : data.GenericTableDefinitionID);
    if (data.FieldDataTypeEnum != null) this.fieldDataTypeEnum = data.FieldDataTypeEnum;
    if (data.GenericFieldOrder != null) this.genericFieldOrder = (data.GenericFieldOrder != null ? parseInt(data.GenericFieldOrder, 10) : data.GenericFieldOrder);
    if (data.GenericFieldName != null) this.genericFieldName = data.GenericFieldName;
    if (data.GenericFieldGroup != null) this.genericFieldGroup = data.GenericFieldGroup;
    if (data.GenericFieldComment != null) this.genericFieldComment = data.GenericFieldComment;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a GenericTableDefinitionField by its ID or by exact match on other fields.
   * @param param Either the ID of the GenericTableDefinitionField to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single GenericTableDefinitionField object or null (if id) or an array of GenericTableDefinitionField objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<GenericTableDefinitionField | null>;
  static async select(param: Partial<Record<keyof GenericTableDefinitionField, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<GenericTableDefinitionField[]>;
  static async select(param: number | Partial<Record<keyof GenericTableDefinitionField, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<GenericTableDefinitionField | GenericTableDefinitionField[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GenericTableDefinitionField/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GenericTableDefinitionField`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch GenericTableDefinitionField with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new GenericTableDefinitionField(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new GenericTableDefinitionField(entry));
      }
    }
  }
}

GenericTableDefinitionField satisfies StarRezStructureStatic<GenericTableDefinitionField>
