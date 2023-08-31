// Generated from XML description of EntryEvent

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryEvent {
  entryEventID?: number;
  entryID?: number;
  eventID?: number;
  eventRegistrationFeeID?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryEvent");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryEventID != null) this.entryEventID = (data.EntryEventID != null ? parseInt(data.EntryEventID, 10) : data.EntryEventID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.EventID != null) this.eventID = (data.EventID != null ? parseInt(data.EventID, 10) : data.EventID);
    if (data.EventRegistrationFeeID != null) this.eventRegistrationFeeID = (data.EventRegistrationFeeID != null ? parseInt(data.EventRegistrationFeeID, 10) : data.EventRegistrationFeeID);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryEvent by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryEvent to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryEvent object or null (if id) or an array of EntryEvent objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryEvent | null>;
  static async select(param: Partial<Record<keyof EntryEvent, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryEvent[]>;
  static async select(param: number | Partial<Record<keyof EntryEvent, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryEvent | EntryEvent[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryEvent/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryEvent`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryEvent with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryEvent(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryEvent(entry));
      }
    }
  }
}

EntryEvent satisfies StarRezStructureStatic<EntryEvent>
