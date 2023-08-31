// Generated from XML description of BookingCustomField

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class BookingCustomField {
  bookingCustomFieldID?: number;
  bookingID?: number;
  customFieldDefinitionID?: number;
  fieldDataTypeEnum?: unknown;
  valueString?: string;
  valueDate?: Date | null;
  valueBoolean?: boolean;
  valueInteger?: number;
  valueMoney?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "BookingCustomField");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.BookingCustomFieldID != null) this.bookingCustomFieldID = (data.BookingCustomFieldID != null ? parseInt(data.BookingCustomFieldID, 10) : data.BookingCustomFieldID);
    if (data.BookingID != null) this.bookingID = (data.BookingID != null ? parseInt(data.BookingID, 10) : data.BookingID);
    if (data.CustomFieldDefinitionID != null) this.customFieldDefinitionID = (data.CustomFieldDefinitionID != null ? parseInt(data.CustomFieldDefinitionID, 10) : data.CustomFieldDefinitionID);
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
   * Fetches a BookingCustomField by its ID or by exact match on other fields.
   * @param param Either the ID of the BookingCustomField to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single BookingCustomField object or null (if id) or an array of BookingCustomField objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<BookingCustomField | null>;
  static async select(param: Partial<Record<keyof BookingCustomField, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<BookingCustomField[]>;
  static async select(param: number | Partial<Record<keyof BookingCustomField, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<BookingCustomField | BookingCustomField[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingCustomField/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingCustomField`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch BookingCustomField with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new BookingCustomField(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new BookingCustomField(entry));
      }
    }
  }
}

BookingCustomField satisfies StarRezStructureStatic<BookingCustomField>
