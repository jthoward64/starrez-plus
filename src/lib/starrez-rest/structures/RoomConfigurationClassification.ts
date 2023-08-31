// Generated from XML description of RoomConfigurationClassification

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomConfigurationClassification {
  roomConfigurationClassificationID?: number;
  roomConfigurationID?: number;
  classificationID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomConfigurationClassification");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomConfigurationClassificationID != null) this.roomConfigurationClassificationID = (data.RoomConfigurationClassificationID != null ? parseInt(data.RoomConfigurationClassificationID, 10) : data.RoomConfigurationClassificationID);
    if (data.RoomConfigurationID != null) this.roomConfigurationID = (data.RoomConfigurationID != null ? parseInt(data.RoomConfigurationID, 10) : data.RoomConfigurationID);
    if (data.ClassificationID != null) this.classificationID = (data.ClassificationID != null ? parseInt(data.ClassificationID, 10) : data.ClassificationID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomConfigurationClassification by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomConfigurationClassification to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomConfigurationClassification object or null (if id) or an array of RoomConfigurationClassification objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationClassification | null>;
  static async select(param: Partial<Record<keyof RoomConfigurationClassification, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationClassification[]>;
  static async select(param: number | Partial<Record<keyof RoomConfigurationClassification, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationClassification | RoomConfigurationClassification[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomConfigurationClassification/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomConfigurationClassification`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomConfigurationClassification with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomConfigurationClassification(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomConfigurationClassification(entry));
      }
    }
  }
}

RoomConfigurationClassification satisfies StarRezStructureStatic<RoomConfigurationClassification>
