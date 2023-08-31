// Generated from XML description of RoomLocationSection

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomLocationSection {
  roomLocationSectionID?: number;
  roomLocationID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  viewOnWeb?: boolean;
  webImageLocation?: string;
  webDescription?: string;
  webComments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomLocationSection");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomLocationSectionID != null) this.roomLocationSectionID = (data.RoomLocationSectionID != null ? parseInt(data.RoomLocationSectionID, 10) : data.RoomLocationSectionID);
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebImageLocation != null) this.webImageLocation = data.WebImageLocation;
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomLocationSection by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomLocationSection to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomLocationSection object or null (if id) or an array of RoomLocationSection objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomLocationSection | null>;
  static async select(param: Partial<Record<keyof RoomLocationSection, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomLocationSection[]>;
  static async select(param: number | Partial<Record<keyof RoomLocationSection, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomLocationSection | RoomLocationSection[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomLocationSection/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomLocationSection`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomLocationSection with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomLocationSection(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomLocationSection(entry));
      }
    }
  }
}

RoomLocationSection satisfies StarRezStructureStatic<RoomLocationSection>
