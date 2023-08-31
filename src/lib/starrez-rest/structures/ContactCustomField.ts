// Generated from XML description of ContactCustomField

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ContactCustomField {
  contactCustomFieldID?: number;
  contactID?: number;
  customFieldDefinitionID?: number;
  fieldDataTypeEnum?: unknown;
  valueString?: string;
  valueDate?: Date | null;
  valueBoolean?: boolean;
  valueInteger?: number;
  valueMoney?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ContactCustomField");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ContactCustomFieldID != null) this.contactCustomFieldID = (data.ContactCustomFieldID != null ? parseInt(data.ContactCustomFieldID, 10) : data.ContactCustomFieldID);
    if (data.ContactID != null) this.contactID = (data.ContactID != null ? parseInt(data.ContactID, 10) : data.ContactID);
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
   * Fetches a ContactCustomField by its ID or by exact match on other fields.
   * @param param Either the ID of the ContactCustomField to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ContactCustomField object or null (if id) or an array of ContactCustomField objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ContactCustomField | null>;
  static async select(param: Partial<Record<keyof ContactCustomField, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ContactCustomField[]>;
  static async select(param: number | Partial<Record<keyof ContactCustomField, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ContactCustomField | ContactCustomField[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ContactCustomField/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ContactCustomField`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ContactCustomField with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ContactCustomField(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ContactCustomField(entry));
      }
    }
  }
}

ContactCustomField satisfies StarRezStructureStatic<ContactCustomField>
