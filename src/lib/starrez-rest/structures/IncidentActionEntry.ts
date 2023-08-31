// Generated from XML description of IncidentActionEntry

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class IncidentActionEntry {
  incidentActionEntryID?: number;
  incidentActionID?: number;
  entryID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentActionEntry");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentActionEntryID != null) this.incidentActionEntryID = (data.IncidentActionEntryID != null ? parseInt(data.IncidentActionEntryID, 10) : data.IncidentActionEntryID);
    if (data.IncidentActionID != null) this.incidentActionID = (data.IncidentActionID != null ? parseInt(data.IncidentActionID, 10) : data.IncidentActionID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a IncidentActionEntry by its ID or by exact match on other fields.
   * @param param Either the ID of the IncidentActionEntry to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single IncidentActionEntry object or null (if id) or an array of IncidentActionEntry objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<IncidentActionEntry | null>;
  static async select(param: Partial<Record<keyof IncidentActionEntry, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentActionEntry[]>;
  static async select(param: number | Partial<Record<keyof IncidentActionEntry, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentActionEntry | IncidentActionEntry[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentActionEntry/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentActionEntry`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentActionEntry with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new IncidentActionEntry(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new IncidentActionEntry(entry));
      }
    }
  }
}

IncidentActionEntry satisfies StarRezStructureStatic<IncidentActionEntry>
