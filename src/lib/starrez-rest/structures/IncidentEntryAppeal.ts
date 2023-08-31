// Generated from XML description of IncidentEntryAppeal

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class IncidentEntryAppeal {
  incidentEntryAppealID?: number;
  incidentEntryID?: number;
  appealDateCreated?: Date | null;
  appealDate?: Date | null;
  appealDateComplete?: Date | null;
  appealManager_EntryID?: number;
  incidentAppealTypeID?: number;
  incidentAppealDecisionID?: number;
  appealDescription?: string;
  appealComments?: string;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentEntryAppeal");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentEntryAppealID != null) this.incidentEntryAppealID = (data.IncidentEntryAppealID != null ? parseInt(data.IncidentEntryAppealID, 10) : data.IncidentEntryAppealID);
    if (data.IncidentEntryID != null) this.incidentEntryID = (data.IncidentEntryID != null ? parseInt(data.IncidentEntryID, 10) : data.IncidentEntryID);
    if (data.AppealDateCreated != null) this.appealDateCreated = (data.AppealDateCreated != null ? new Date(data.AppealDateCreated) : data.AppealDateCreated);
    if (data.AppealDate != null) this.appealDate = (data.AppealDate != null ? new Date(data.AppealDate) : data.AppealDate);
    if (data.AppealDateComplete != null) this.appealDateComplete = (data.AppealDateComplete != null ? new Date(data.AppealDateComplete) : data.AppealDateComplete);
    if (data.AppealManager_EntryID != null) this.appealManager_EntryID = (data.AppealManager_EntryID != null ? parseInt(data.AppealManager_EntryID, 10) : data.AppealManager_EntryID);
    if (data.IncidentAppealTypeID != null) this.incidentAppealTypeID = (data.IncidentAppealTypeID != null ? parseInt(data.IncidentAppealTypeID, 10) : data.IncidentAppealTypeID);
    if (data.IncidentAppealDecisionID != null) this.incidentAppealDecisionID = (data.IncidentAppealDecisionID != null ? parseInt(data.IncidentAppealDecisionID, 10) : data.IncidentAppealDecisionID);
    if (data.AppealDescription != null) this.appealDescription = data.AppealDescription;
    if (data.AppealComments != null) this.appealComments = data.AppealComments;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a IncidentEntryAppeal by its ID or by exact match on other fields.
   * @param param Either the ID of the IncidentEntryAppeal to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single IncidentEntryAppeal object or null (if id) or an array of IncidentEntryAppeal objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<IncidentEntryAppeal | null>;
  static async select(param: Partial<Record<keyof IncidentEntryAppeal, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentEntryAppeal[]>;
  static async select(param: number | Partial<Record<keyof IncidentEntryAppeal, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentEntryAppeal | IncidentEntryAppeal[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentEntryAppeal/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentEntryAppeal`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentEntryAppeal with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new IncidentEntryAppeal(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new IncidentEntryAppeal(entry));
      }
    }
  }
}

IncidentEntryAppeal satisfies StarRezStructureStatic<IncidentEntryAppeal>
