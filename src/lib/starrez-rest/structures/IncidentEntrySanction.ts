// Generated from XML description of IncidentEntrySanction

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class IncidentEntrySanction {
  incidentEntrySanctionID?: number;
  incidentEntryID?: number;
  incidentSanctionTypeID?: number;
  incidentSanctionSubTypeID?: number;
  incidentEntryAppealID?: number;
  sanctionDate?: Date;
  dateDue?: Date | null;
  dateComplete?: Date | null;
  description?: string;
  comments?: string;
  referral?: string;
  chargeAmount?: string;
  transactionID?: number;
  status?: string;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentEntrySanction");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentEntrySanctionID != null) this.incidentEntrySanctionID = (data.IncidentEntrySanctionID != null ? parseInt(data.IncidentEntrySanctionID, 10) : data.IncidentEntrySanctionID);
    if (data.IncidentEntryID != null) this.incidentEntryID = (data.IncidentEntryID != null ? parseInt(data.IncidentEntryID, 10) : data.IncidentEntryID);
    if (data.IncidentSanctionTypeID != null) this.incidentSanctionTypeID = (data.IncidentSanctionTypeID != null ? parseInt(data.IncidentSanctionTypeID, 10) : data.IncidentSanctionTypeID);
    if (data.IncidentSanctionSubTypeID != null) this.incidentSanctionSubTypeID = (data.IncidentSanctionSubTypeID != null ? parseInt(data.IncidentSanctionSubTypeID, 10) : data.IncidentSanctionSubTypeID);
    if (data.IncidentEntryAppealID != null) this.incidentEntryAppealID = (data.IncidentEntryAppealID != null ? parseInt(data.IncidentEntryAppealID, 10) : data.IncidentEntryAppealID);
    if (data.SanctionDate != null) this.sanctionDate = (data.SanctionDate != null ? new Date(data.SanctionDate) : data.SanctionDate);
    if (data.DateDue != null) this.dateDue = (data.DateDue != null ? new Date(data.DateDue) : data.DateDue);
    if (data.DateComplete != null) this.dateComplete = (data.DateComplete != null ? new Date(data.DateComplete) : data.DateComplete);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Referral != null) this.referral = data.Referral;
    if (data.ChargeAmount != null) this.chargeAmount = data.ChargeAmount;
    if (data.TransactionID != null) this.transactionID = (data.TransactionID != null ? parseInt(data.TransactionID, 10) : data.TransactionID);
    if (data.Status != null) this.status = data.Status;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a IncidentEntrySanction by its ID or by exact match on other fields.
   * @param param Either the ID of the IncidentEntrySanction to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single IncidentEntrySanction object or null (if id) or an array of IncidentEntrySanction objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<IncidentEntrySanction | null>;
  static async select(param: Partial<Record<keyof IncidentEntrySanction, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentEntrySanction[]>;
  static async select(param: number | Partial<Record<keyof IncidentEntrySanction, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentEntrySanction | IncidentEntrySanction[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentEntrySanction/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentEntrySanction`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentEntrySanction with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new IncidentEntrySanction(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new IncidentEntrySanction(entry));
      }
    }
  }
}

IncidentEntrySanction satisfies StarRezStructureStatic<IncidentEntrySanction>
