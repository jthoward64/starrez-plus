// Generated from XML description of RoommateGroupRequest

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoommateGroupRequest {
  roommateGroupRequestID?: number;
  roommateGroupID?: number;
  requested_RoommateGroupID?: number;
  entryApplicationID?: number;
  roommateGroupRequestTypeEnum?: unknown;
  dateExpiry?: Date | null;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoommateGroupRequest");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoommateGroupRequestID != null) this.roommateGroupRequestID = (data.RoommateGroupRequestID != null ? parseInt(data.RoommateGroupRequestID, 10) : data.RoommateGroupRequestID);
    if (data.RoommateGroupID != null) this.roommateGroupID = (data.RoommateGroupID != null ? parseInt(data.RoommateGroupID, 10) : data.RoommateGroupID);
    if (data.Requested_RoommateGroupID != null) this.requested_RoommateGroupID = (data.Requested_RoommateGroupID != null ? parseInt(data.Requested_RoommateGroupID, 10) : data.Requested_RoommateGroupID);
    if (data.EntryApplicationID != null) this.entryApplicationID = (data.EntryApplicationID != null ? parseInt(data.EntryApplicationID, 10) : data.EntryApplicationID);
    if (data.RoommateGroupRequestTypeEnum != null) this.roommateGroupRequestTypeEnum = data.RoommateGroupRequestTypeEnum;
    if (data.DateExpiry != null) this.dateExpiry = (data.DateExpiry != null ? new Date(data.DateExpiry) : data.DateExpiry);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoommateGroupRequest | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoommateGroupRequest/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoommateGroupRequest with id ${id}`);
    } else {
      return new RoommateGroupRequest(await response.text());
    }
  }
}

RoommateGroupRequest satisfies StarRezStructureStatic<RoommateGroupRequest>
