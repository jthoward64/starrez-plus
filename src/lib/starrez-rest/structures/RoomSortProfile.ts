// Generated from XML description of RoomSortProfile

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSortProfile {
  roomSortProfileID?: number;
  name?: string;
  termID?: number;
  roomSortProfileTypeEnum?: unknown;
  dateStart?: Date | null;
  dateEnd?: Date | null;
  viewOnPortal?: boolean;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSortProfile");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSortProfileID != null) this.roomSortProfileID = parseInt(data.RoomSortProfileID, 10);
    if (data.Name != null) this.name = data.Name;
    if (data.TermID != null) this.termID = parseInt(data.TermID, 10);
    if (data.RoomSortProfileTypeEnum != null) this.roomSortProfileTypeEnum = data.RoomSortProfileTypeEnum;
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.DateEnd != null) this.dateEnd = new Date(data.DateEnd);
    if (data.ViewOnPortal != null) this.viewOnPortal = data.ViewOnPortal === 'true';
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSortProfile | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSortProfile/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSortProfile with id ${id}`);
    } else {
      return new RoomSortProfile(await response.text());
    }
  }
}

RoomSortProfile satisfies StarRezStructureStatic<RoomSortProfile>
