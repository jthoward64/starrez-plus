// Generated from XML description of EntryCorrespondence

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class EntryCorrespondence {
  entryID?: number;
  from_EntryID?: number;
  entryCorrespondenceID?: number;
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
    const data = starRezXmlToJson(xml, "EntryCorrespondence");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.From_EntryID != null) this.from_EntryID = parseInt(data.From_EntryID, 10);
    if (data.EntryCorrespondenceID != null) this.entryCorrespondenceID = parseInt(data.EntryCorrespondenceID, 10);
    if (data.CorrespondenceSourceID != null) this.correspondenceSourceID = parseInt(data.CorrespondenceSourceID, 10);
    if (data.CorrespondenceDate != null) this.correspondenceDate = new Date(data.CorrespondenceDate);
    if (data.CorrespondenceName != null) this.correspondenceName = data.CorrespondenceName;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DocumentPath != null) this.documentPath = data.DocumentPath;
    if (data.FromEmail != null) this.fromEmail = data.FromEmail;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.ViewedDate != null) this.viewedDate = new Date(data.ViewedDate);
    if (data.CorrespondenceStatusEnum != null) this.correspondenceStatusEnum = data.CorrespondenceStatusEnum;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryCorrespondence | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryCorrespondence/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryCorrespondence with id ${id}`);
    } else {
      return new EntryCorrespondence(await response.text());
    }
}

}
