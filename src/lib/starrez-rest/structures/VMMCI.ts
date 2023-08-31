// Generated from XML description of VMMCI

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class VMMCI {
  vMMCIID?: number;
  siteID?: number;
  channelNumber?: number;
  callReason?: number;
  callOriginator?: number;
  divertingExtension?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMMCI");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMMCIID != null) this.vMMCIID = (data.VMMCIID != null ? parseInt(data.VMMCIID, 10) : data.VMMCIID);
    if (data.SiteID != null) this.siteID = (data.SiteID != null ? parseInt(data.SiteID, 10) : data.SiteID);
    if (data.ChannelNumber != null) this.channelNumber = (data.ChannelNumber != null ? parseInt(data.ChannelNumber, 10) : data.ChannelNumber);
    if (data.CallReason != null) this.callReason = (data.CallReason != null ? parseInt(data.CallReason, 10) : data.CallReason);
    if (data.CallOriginator != null) this.callOriginator = (data.CallOriginator != null ? parseInt(data.CallOriginator, 10) : data.CallOriginator);
    if (data.DivertingExtension != null) this.divertingExtension = (data.DivertingExtension != null ? parseInt(data.DivertingExtension, 10) : data.DivertingExtension);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a VMMCI by its ID or by exact match on other fields.
   * @param param Either the ID of the VMMCI to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single VMMCI object or null (if id) or an array of VMMCI objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<VMMCI | null>;
  static async select(param: Partial<Record<keyof VMMCI, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMMCI[]>;
  static async select(param: number | Partial<Record<keyof VMMCI, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMMCI | VMMCI[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMMCI/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMMCI`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VMMCI with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new VMMCI(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new VMMCI(entry));
      }
    }
  }
}

VMMCI satisfies StarRezStructureStatic<VMMCI>
