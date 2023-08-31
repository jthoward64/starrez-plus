// Generated from XML description of ConcernEntryCorrespondence

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ConcernEntryCorrespondence {
  concernEntryID?: number;
  concernEntryCorrespondenceID?: number;
  correspondenceSourceID?: number;
  correspondenceDate?: Date;
  correspondenceName?: string;
  description?: string;
  comments?: string;
  documentPath?: string;
  fromEmail?: string;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  viewOnWeb?: boolean;
  viewedDate?: Date | null;
  correspondenceStatusEnum?: unknown;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ConcernEntryCorrespondence");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ConcernEntryID != null) this.concernEntryID = (data.ConcernEntryID != null ? parseInt(data.ConcernEntryID, 10) : data.ConcernEntryID);
    if (data.ConcernEntryCorrespondenceID != null) this.concernEntryCorrespondenceID = (data.ConcernEntryCorrespondenceID != null ? parseInt(data.ConcernEntryCorrespondenceID, 10) : data.ConcernEntryCorrespondenceID);
    if (data.CorrespondenceSourceID != null) this.correspondenceSourceID = (data.CorrespondenceSourceID != null ? parseInt(data.CorrespondenceSourceID, 10) : data.CorrespondenceSourceID);
    if (data.CorrespondenceDate != null) this.correspondenceDate = (data.CorrespondenceDate != null ? new Date(data.CorrespondenceDate) : data.CorrespondenceDate);
    if (data.CorrespondenceName != null) this.correspondenceName = data.CorrespondenceName;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DocumentPath != null) this.documentPath = data.DocumentPath;
    if (data.FromEmail != null) this.fromEmail = data.FromEmail;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.ViewedDate != null) this.viewedDate = (data.ViewedDate != null ? new Date(data.ViewedDate) : data.ViewedDate);
    if (data.CorrespondenceStatusEnum != null) this.correspondenceStatusEnum = data.CorrespondenceStatusEnum;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ConcernEntryCorrespondence | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ConcernEntryCorrespondence/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ConcernEntryCorrespondence with id ${id}`);
    } else {
      return new ConcernEntryCorrespondence(await response.text());
    }
  }
}

ConcernEntryCorrespondence satisfies StarRezStructureStatic<ConcernEntryCorrespondence>
