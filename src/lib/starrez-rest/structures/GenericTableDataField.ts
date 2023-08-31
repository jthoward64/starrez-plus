// Generated from XML description of GenericTableDataField

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class GenericTableDataField {
  genericTableDataFieldID?: number;
  genericTableDataID?: number;
  genericTableDefinitionFieldID?: number;
  fieldDataTypeEnum?: unknown;
  valueString?: string;
  valueDate?: Date | null;
  valueBoolean?: boolean;
  valueInteger?: number;
  valueMoney?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "GenericTableDataField");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.GenericTableDataFieldID != null) this.genericTableDataFieldID = (data.GenericTableDataFieldID != null ? parseInt(data.GenericTableDataFieldID, 10) : data.GenericTableDataFieldID);
    if (data.GenericTableDataID != null) this.genericTableDataID = (data.GenericTableDataID != null ? parseInt(data.GenericTableDataID, 10) : data.GenericTableDataID);
    if (data.GenericTableDefinitionFieldID != null) this.genericTableDefinitionFieldID = (data.GenericTableDefinitionFieldID != null ? parseInt(data.GenericTableDefinitionFieldID, 10) : data.GenericTableDefinitionFieldID);
    if (data.FieldDataTypeEnum != null) this.fieldDataTypeEnum = data.FieldDataTypeEnum;
    if (data.ValueString != null) this.valueString = data.ValueString;
    if (data.ValueDate != null) this.valueDate = (data.ValueDate != null ? new Date(data.ValueDate) : data.ValueDate);
    if (data.ValueBoolean != null) this.valueBoolean = data.ValueBoolean === 'true';
    if (data.ValueInteger != null) this.valueInteger = (data.ValueInteger != null ? parseInt(data.ValueInteger, 10) : data.ValueInteger);
    if (data.ValueMoney != null) this.valueMoney = data.ValueMoney;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a GenericTableDataField by its ID or by exact match on other fields.
   * @param param Either the ID of the GenericTableDataField to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single GenericTableDataField object or null (if id) or an array of GenericTableDataField objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<GenericTableDataField | null>;
  static async select(param: Partial<Record<keyof GenericTableDataField, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<GenericTableDataField[]>;
  static async select(param: number | Partial<Record<keyof GenericTableDataField, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<GenericTableDataField | GenericTableDataField[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GenericTableDataField/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GenericTableDataField`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch GenericTableDataField with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new GenericTableDataField(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new GenericTableDataField(entry));
      }
    }
  }
}

GenericTableDataField satisfies StarRezStructureStatic<GenericTableDataField>
