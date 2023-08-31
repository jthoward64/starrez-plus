// Generated from XML description of RoomClassification

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomClassification {
  roomClassificationID?: number;
  roomID?: number;
  classificationID?: number;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomClassification");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomClassificationID != null) this.roomClassificationID = (data.RoomClassificationID != null ? parseInt(data.RoomClassificationID, 10) : data.RoomClassificationID);
    if (data.RoomID != null) this.roomID = (data.RoomID != null ? parseInt(data.RoomID, 10) : data.RoomID);
    if (data.ClassificationID != null) this.classificationID = (data.ClassificationID != null ? parseInt(data.ClassificationID, 10) : data.ClassificationID);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomClassification by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomClassification to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomClassification object or null (if id) or an array of RoomClassification objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomClassification | null>;
  static async select(param: Partial<Record<keyof RoomClassification, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomClassification[]>;
  static async select(param: number | Partial<Record<keyof RoomClassification, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomClassification | RoomClassification[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomClassification/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomClassification`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomClassification with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomClassification(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomClassification(entry));
      }
    }
  }
}

RoomClassification satisfies StarRezStructureStatic<RoomClassification>
