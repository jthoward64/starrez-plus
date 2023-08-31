// Generated from XML description of GroupRoomSpace

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class GroupRoomSpace {
  groupRoomSpaceID?: number;
  groupID?: number;
  roomSpaceID?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "GroupRoomSpace");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.GroupRoomSpaceID != null) this.groupRoomSpaceID = (data.GroupRoomSpaceID != null ? parseInt(data.GroupRoomSpaceID, 10) : data.GroupRoomSpaceID);
    if (data.GroupID != null) this.groupID = (data.GroupID != null ? parseInt(data.GroupID, 10) : data.GroupID);
    if (data.RoomSpaceID != null) this.roomSpaceID = (data.RoomSpaceID != null ? parseInt(data.RoomSpaceID, 10) : data.RoomSpaceID);
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
   * Fetches a GroupRoomSpace by its ID or by exact match on other fields.
   * @param param Either the ID of the GroupRoomSpace to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single GroupRoomSpace object or null (if id) or an array of GroupRoomSpace objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<GroupRoomSpace | null>;
  static async select(param: Partial<Record<keyof GroupRoomSpace, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<GroupRoomSpace[]>;
  static async select(param: number | Partial<Record<keyof GroupRoomSpace, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<GroupRoomSpace | GroupRoomSpace[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GroupRoomSpace/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GroupRoomSpace`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch GroupRoomSpace with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new GroupRoomSpace(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new GroupRoomSpace(entry));
      }
    }
  }
}

GroupRoomSpace satisfies StarRezStructureStatic<GroupRoomSpace>
