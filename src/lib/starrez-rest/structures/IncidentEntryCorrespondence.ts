// Generated from XML description of IncidentEntryCorrespondence

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class IncidentEntryCorrespondence {
  incidentEntryID?: number;
  incidentEntryCorrespondenceID?: number;
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
    const data = starRezXmlToJson(xml, "IncidentEntryCorrespondence");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentEntryID != null) this.incidentEntryID = (data.IncidentEntryID != null ? parseInt(data.IncidentEntryID, 10) : data.IncidentEntryID);
    if (data.IncidentEntryCorrespondenceID != null) this.incidentEntryCorrespondenceID = (data.IncidentEntryCorrespondenceID != null ? parseInt(data.IncidentEntryCorrespondenceID, 10) : data.IncidentEntryCorrespondenceID);
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
   * Fetches a IncidentEntryCorrespondence by its ID or by exact match on other fields.
   * @param param Either the ID of the IncidentEntryCorrespondence to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single IncidentEntryCorrespondence object or null (if id) or an array of IncidentEntryCorrespondence objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<IncidentEntryCorrespondence | null>;
  static async select(param: Partial<Record<keyof IncidentEntryCorrespondence, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentEntryCorrespondence[]>;
  static async select(param: number | Partial<Record<keyof IncidentEntryCorrespondence, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentEntryCorrespondence | IncidentEntryCorrespondence[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentEntryCorrespondence/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentEntryCorrespondence`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentEntryCorrespondence with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new IncidentEntryCorrespondence(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new IncidentEntryCorrespondence(entry));
      }
    }
  }
}

IncidentEntryCorrespondence satisfies StarRezStructureStatic<IncidentEntryCorrespondence>
