// Generated from XML description of RoomSpaceKeyType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceKeyType {
  roomSpaceKeyTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  issueOnCheckIn?: boolean;
  updateDateStartWithCheckInDate_BooleanAskEnum?: unknown;
  updateDateEndWithCheckOutDate_BooleanAskEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceKeyType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceKeyTypeID != null) this.roomSpaceKeyTypeID = (data.RoomSpaceKeyTypeID != null ? parseInt(data.RoomSpaceKeyTypeID, 10) : data.RoomSpaceKeyTypeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.IssueOnCheckIn != null) this.issueOnCheckIn = data.IssueOnCheckIn === 'true';
    if (data.UpdateDateStartWithCheckInDate_BooleanAskEnum != null) this.updateDateStartWithCheckInDate_BooleanAskEnum = data.UpdateDateStartWithCheckInDate_BooleanAskEnum;
    if (data.UpdateDateEndWithCheckOutDate_BooleanAskEnum != null) this.updateDateEndWithCheckOutDate_BooleanAskEnum = data.UpdateDateEndWithCheckOutDate_BooleanAskEnum;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomSpaceKeyType by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomSpaceKeyType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomSpaceKeyType object or null (if id) or an array of RoomSpaceKeyType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceKeyType | null>;
  static async select(param: Partial<Record<keyof RoomSpaceKeyType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceKeyType[]>;
  static async select(param: number | Partial<Record<keyof RoomSpaceKeyType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceKeyType | RoomSpaceKeyType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceKeyType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceKeyType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceKeyType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomSpaceKeyType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomSpaceKeyType(entry));
      }
    }
  }
}

RoomSpaceKeyType satisfies StarRezStructureStatic<RoomSpaceKeyType>
