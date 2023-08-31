// Generated from XML description of RoomLocationClassification

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomLocationClassification {
  roomLocationClassificationID?: number;
  roomLocationID?: number;
  classificationID?: number;
  maximumBookings?: number;
  roomSpacesUsed?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomLocationClassification");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomLocationClassificationID != null) this.roomLocationClassificationID = (data.RoomLocationClassificationID != null ? parseInt(data.RoomLocationClassificationID, 10) : data.RoomLocationClassificationID);
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.ClassificationID != null) this.classificationID = (data.ClassificationID != null ? parseInt(data.ClassificationID, 10) : data.ClassificationID);
    if (data.MaximumBookings != null) this.maximumBookings = (data.MaximumBookings != null ? parseInt(data.MaximumBookings, 10) : data.MaximumBookings);
    if (data.RoomSpacesUsed != null) this.roomSpacesUsed = (data.RoomSpacesUsed != null ? parseInt(data.RoomSpacesUsed, 10) : data.RoomSpacesUsed);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomLocationClassification by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomLocationClassification to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomLocationClassification object or null (if id) or an array of RoomLocationClassification objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomLocationClassification | null>;
  static async select(param: Partial<Record<keyof RoomLocationClassification, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomLocationClassification[]>;
  static async select(param: number | Partial<Record<keyof RoomLocationClassification, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomLocationClassification | RoomLocationClassification[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomLocationClassification/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomLocationClassification`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomLocationClassification with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomLocationClassification(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomLocationClassification(entry));
      }
    }
  }
}

RoomLocationClassification satisfies StarRezStructureStatic<RoomLocationClassification>
