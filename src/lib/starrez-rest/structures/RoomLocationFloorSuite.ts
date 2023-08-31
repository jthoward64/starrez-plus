// Generated from XML description of RoomLocationFloorSuite

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomLocationFloorSuite {
  roomLocationFloorSuiteID?: number;
  roomLocationSectionID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  isSuite?: boolean;
  overrideGender?: boolean;
  genderTypeEnum?: unknown;
  comments?: string;
  viewOnWeb?: boolean;
  webImageLocation?: string;
  webDescription?: string;
  webComments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomLocationFloorSuite");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomLocationFloorSuiteID != null) this.roomLocationFloorSuiteID = (data.RoomLocationFloorSuiteID != null ? parseInt(data.RoomLocationFloorSuiteID, 10) : data.RoomLocationFloorSuiteID);
    if (data.RoomLocationSectionID != null) this.roomLocationSectionID = (data.RoomLocationSectionID != null ? parseInt(data.RoomLocationSectionID, 10) : data.RoomLocationSectionID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.IsSuite != null) this.isSuite = data.IsSuite === 'true';
    if (data.OverrideGender != null) this.overrideGender = data.OverrideGender === 'true';
    if (data.GenderTypeEnum != null) this.genderTypeEnum = data.GenderTypeEnum;
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
   * Fetches a RoomLocationFloorSuite by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomLocationFloorSuite to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomLocationFloorSuite object or null (if id) or an array of RoomLocationFloorSuite objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomLocationFloorSuite | null>;
  static async select(param: Partial<Record<keyof RoomLocationFloorSuite, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomLocationFloorSuite[]>;
  static async select(param: number | Partial<Record<keyof RoomLocationFloorSuite, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomLocationFloorSuite | RoomLocationFloorSuite[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomLocationFloorSuite/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomLocationFloorSuite`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomLocationFloorSuite with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomLocationFloorSuite(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomLocationFloorSuite(entry));
      }
    }
  }
}

RoomLocationFloorSuite satisfies StarRezStructureStatic<RoomLocationFloorSuite>
