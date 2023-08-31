// Generated from XML description of RoomConfigurationAttribute

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomConfigurationAttribute {
  roomConfigurationAttributeID?: number;
  roomConfigurationID?: number;
  recordTypeEnum?: unknown;
  fieldName?: string;
  fieldValue?: string;
  weighting?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomConfigurationAttribute");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomConfigurationAttributeID != null) this.roomConfigurationAttributeID = (data.RoomConfigurationAttributeID != null ? parseInt(data.RoomConfigurationAttributeID, 10) : data.RoomConfigurationAttributeID);
    if (data.RoomConfigurationID != null) this.roomConfigurationID = (data.RoomConfigurationID != null ? parseInt(data.RoomConfigurationID, 10) : data.RoomConfigurationID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.FieldName != null) this.fieldName = data.FieldName;
    if (data.FieldValue != null) this.fieldValue = data.FieldValue;
    if (data.Weighting != null) this.weighting = (data.Weighting != null ? parseInt(data.Weighting, 10) : data.Weighting);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomConfigurationAttribute by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomConfigurationAttribute to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomConfigurationAttribute object or null (if id) or an array of RoomConfigurationAttribute objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationAttribute | null>;
  static async select(param: Partial<Record<keyof RoomConfigurationAttribute, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationAttribute[]>;
  static async select(param: number | Partial<Record<keyof RoomConfigurationAttribute, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationAttribute | RoomConfigurationAttribute[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomConfigurationAttribute/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomConfigurationAttribute`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomConfigurationAttribute with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomConfigurationAttribute(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomConfigurationAttribute(entry));
      }
    }
  }
}

RoomConfigurationAttribute satisfies StarRezStructureStatic<RoomConfigurationAttribute>
