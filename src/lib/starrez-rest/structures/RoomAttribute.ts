// Generated from XML description of RoomAttribute

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomAttribute {
  roomAttributeID?: number;
  roomID?: number;
  recordTypeEnum?: unknown;
  fieldName?: string;
  fieldValue?: string;
  weighting?: number;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomAttribute");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomAttributeID != null) this.roomAttributeID = (data.RoomAttributeID != null ? parseInt(data.RoomAttributeID, 10) : data.RoomAttributeID);
    if (data.RoomID != null) this.roomID = (data.RoomID != null ? parseInt(data.RoomID, 10) : data.RoomID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.FieldName != null) this.fieldName = data.FieldName;
    if (data.FieldValue != null) this.fieldValue = data.FieldValue;
    if (data.Weighting != null) this.weighting = (data.Weighting != null ? parseInt(data.Weighting, 10) : data.Weighting);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomAttribute by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomAttribute to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomAttribute object or null (if id) or an array of RoomAttribute objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomAttribute | null>;
  static async select(param: Partial<Record<keyof RoomAttribute, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomAttribute[]>;
  static async select(param: number | Partial<Record<keyof RoomAttribute, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomAttribute | RoomAttribute[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomAttribute/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomAttribute`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomAttribute with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomAttribute(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomAttribute(entry));
      }
    }
  }
}

RoomAttribute satisfies StarRezStructureStatic<RoomAttribute>
