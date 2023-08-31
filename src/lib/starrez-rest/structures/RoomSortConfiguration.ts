// Generated from XML description of RoomSortConfiguration

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSortConfiguration {
  roomSortConfigurationID?: number;
  roomLocationAreaID?: number;
  roomLocationID?: number;
  roomTypeID?: number;
  profileItemID?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSortConfiguration");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSortConfigurationID != null) this.roomSortConfigurationID = (data.RoomSortConfigurationID != null ? parseInt(data.RoomSortConfigurationID, 10) : data.RoomSortConfigurationID);
    if (data.RoomLocationAreaID != null) this.roomLocationAreaID = (data.RoomLocationAreaID != null ? parseInt(data.RoomLocationAreaID, 10) : data.RoomLocationAreaID);
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.RoomTypeID != null) this.roomTypeID = (data.RoomTypeID != null ? parseInt(data.RoomTypeID, 10) : data.RoomTypeID);
    if (data.ProfileItemID != null) this.profileItemID = (data.ProfileItemID != null ? parseInt(data.ProfileItemID, 10) : data.ProfileItemID);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomSortConfiguration by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomSortConfiguration to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomSortConfiguration object or null (if id) or an array of RoomSortConfiguration objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomSortConfiguration | null>;
  static async select(param: Partial<Record<keyof RoomSortConfiguration, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSortConfiguration[]>;
  static async select(param: number | Partial<Record<keyof RoomSortConfiguration, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSortConfiguration | RoomSortConfiguration[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSortConfiguration/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSortConfiguration`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSortConfiguration with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomSortConfiguration(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomSortConfiguration(entry));
      }
    }
  }
}

RoomSortConfiguration satisfies StarRezStructureStatic<RoomSortConfiguration>
