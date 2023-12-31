// Generated from XML description of EntryCorrespondence

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.From_EntryID != null) this.from_EntryID = (data.From_EntryID != null ? parseInt(data.From_EntryID, 10) : data.From_EntryID);
    if (data.EntryCorrespondenceID != null) this.entryCorrespondenceID = (data.EntryCorrespondenceID != null ? parseInt(data.EntryCorrespondenceID, 10) : data.EntryCorrespondenceID);
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

  /**
   * Fetches a EntryCorrespondence by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryCorrespondence to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryCorrespondence object or null (if id) or an array of EntryCorrespondence objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryCorrespondence | null>;
  static async select(param: Partial<Record<keyof EntryCorrespondence, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryCorrespondence[]>;
  static async select(param: number | Partial<Record<keyof EntryCorrespondence, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryCorrespondence | EntryCorrespondence[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryCorrespondence/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryCorrespondence`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryCorrespondence with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryCorrespondence(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryCorrespondence(entry));
      }
    }
  }
}

EntryCorrespondence satisfies StarRezStructureStatic<EntryCorrespondence>
