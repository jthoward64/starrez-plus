// Generated from XML description of EntrySituationResponseHistory

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntrySituationResponseHistory {
  entrySituationResponseHistoryID?: number;
  entryID?: number;
  situationResponseEnum?: unknown;
  situationResponseDetail?: string;
  situationResponseExpiryDate?: Date | null;
  createdDate?: Date;
  situationResponseSituation?: string | null;
  situationResponseComments?: string | null;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntrySituationResponseHistory");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntrySituationResponseHistoryID != null) this.entrySituationResponseHistoryID = (data.EntrySituationResponseHistoryID != null ? parseInt(data.EntrySituationResponseHistoryID, 10) : data.EntrySituationResponseHistoryID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.SituationResponseEnum != null) this.situationResponseEnum = data.SituationResponseEnum;
    if (data.SituationResponseDetail != null) this.situationResponseDetail = data.SituationResponseDetail;
    if (data.SituationResponseExpiryDate != null) this.situationResponseExpiryDate = (data.SituationResponseExpiryDate != null ? new Date(data.SituationResponseExpiryDate) : data.SituationResponseExpiryDate);
    if (data.CreatedDate != null) this.createdDate = (data.CreatedDate != null ? new Date(data.CreatedDate) : data.CreatedDate);
    if (data.SituationResponseSituation != null) this.situationResponseSituation = data.SituationResponseSituation;
    if (data.SituationResponseComments != null) this.situationResponseComments = data.SituationResponseComments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntrySituationResponseHistory by its ID or by exact match on other fields.
   * @param param Either the ID of the EntrySituationResponseHistory to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntrySituationResponseHistory object or null (if id) or an array of EntrySituationResponseHistory objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntrySituationResponseHistory | null>;
  static async select(param: Partial<Record<keyof EntrySituationResponseHistory, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntrySituationResponseHistory[]>;
  static async select(param: number | Partial<Record<keyof EntrySituationResponseHistory, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntrySituationResponseHistory | EntrySituationResponseHistory[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntrySituationResponseHistory/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntrySituationResponseHistory`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntrySituationResponseHistory with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntrySituationResponseHistory(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntrySituationResponseHistory(entry));
      }
    }
  }
}

EntrySituationResponseHistory satisfies StarRezStructureStatic<EntrySituationResponseHistory>
