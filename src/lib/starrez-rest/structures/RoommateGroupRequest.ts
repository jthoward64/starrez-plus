// Generated from XML description of RoommateGroupRequest

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.RoommateGroupRequestID != null) this.roommateGroupRequestID = parseInt(data.RoommateGroupRequestID, 10);
    if (data.RoommateGroupID != null) this.roommateGroupID = parseInt(data.RoommateGroupID, 10);
    if (data.Requested_RoommateGroupID != null) this.requested_RoommateGroupID = parseInt(data.Requested_RoommateGroupID, 10);
    if (data.EntryApplicationID != null) this.entryApplicationID = parseInt(data.EntryApplicationID, 10);
    if (data.RoommateGroupRequestTypeEnum != null) this.roommateGroupRequestTypeEnum = data.RoommateGroupRequestTypeEnum;
    if (data.DateExpiry != null) this.dateExpiry = new Date(data.DateExpiry);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

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
