// Generated from XML description of EntryPosition

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryPosition {
  entryPositionID?: number;
  entryID?: number;
  termID?: number;
  positionYear?: string;
  termDetail?: string;
  position?: string;
  positionDateStart?: Date | null;
  positionDateEnd?: Date | null;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryPosition");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryPositionID != null) this.entryPositionID = (data.EntryPositionID != null ? parseInt(data.EntryPositionID, 10) : data.EntryPositionID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.TermID != null) this.termID = (data.TermID != null ? parseInt(data.TermID, 10) : data.TermID);
    if (data.PositionYear != null) this.positionYear = data.PositionYear;
    if (data.TermDetail != null) this.termDetail = data.TermDetail;
    if (data.Position != null) this.position = data.Position;
    if (data.PositionDateStart != null) this.positionDateStart = (data.PositionDateStart != null ? new Date(data.PositionDateStart) : data.PositionDateStart);
    if (data.PositionDateEnd != null) this.positionDateEnd = (data.PositionDateEnd != null ? new Date(data.PositionDateEnd) : data.PositionDateEnd);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryPosition by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryPosition to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryPosition object or null (if id) or an array of EntryPosition objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryPosition | null>;
  static async select(param: Partial<Record<keyof EntryPosition, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryPosition[]>;
  static async select(param: number | Partial<Record<keyof EntryPosition, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryPosition | EntryPosition[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryPosition/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryPosition`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryPosition with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryPosition(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryPosition(entry));
      }
    }
  }
}

EntryPosition satisfies StarRezStructureStatic<EntryPosition>
