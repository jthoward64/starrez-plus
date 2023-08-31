// Generated from XML description of WaitListEntryApplication

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WaitListEntryApplication {
  waitListEntryApplicationID?: number;
  waitListID?: number;
  entryApplicationID?: number;
  waitListOrder?: number;
  numberOfBedrooms?: number;
  numberOfBathrooms?: number;
  rentAmount?: string;
  active?: boolean;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WaitListEntryApplication");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WaitListEntryApplicationID != null) this.waitListEntryApplicationID = (data.WaitListEntryApplicationID != null ? parseInt(data.WaitListEntryApplicationID, 10) : data.WaitListEntryApplicationID);
    if (data.WaitListID != null) this.waitListID = (data.WaitListID != null ? parseInt(data.WaitListID, 10) : data.WaitListID);
    if (data.EntryApplicationID != null) this.entryApplicationID = (data.EntryApplicationID != null ? parseInt(data.EntryApplicationID, 10) : data.EntryApplicationID);
    if (data.WaitListOrder != null) this.waitListOrder = (data.WaitListOrder != null ? parseInt(data.WaitListOrder, 10) : data.WaitListOrder);
    if (data.NumberOfBedrooms != null) this.numberOfBedrooms = (data.NumberOfBedrooms != null ? parseInt(data.NumberOfBedrooms, 10) : data.NumberOfBedrooms);
    if (data.NumberOfBathrooms != null) this.numberOfBathrooms = (data.NumberOfBathrooms != null ? parseInt(data.NumberOfBathrooms, 10) : data.NumberOfBathrooms);
    if (data.RentAmount != null) this.rentAmount = data.RentAmount;
    if (data.Active != null) this.active = data.Active === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WaitListEntryApplication by its ID or by exact match on other fields.
   * @param param Either the ID of the WaitListEntryApplication to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WaitListEntryApplication object or null (if id) or an array of WaitListEntryApplication objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WaitListEntryApplication | null>;
  static async select(param: Partial<Record<keyof WaitListEntryApplication, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WaitListEntryApplication[]>;
  static async select(param: number | Partial<Record<keyof WaitListEntryApplication, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WaitListEntryApplication | WaitListEntryApplication[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WaitListEntryApplication/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WaitListEntryApplication`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WaitListEntryApplication with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WaitListEntryApplication(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WaitListEntryApplication(entry));
      }
    }
  }
}

WaitListEntryApplication satisfies StarRezStructureStatic<WaitListEntryApplication>
