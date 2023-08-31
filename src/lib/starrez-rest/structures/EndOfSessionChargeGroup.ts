// Generated from XML description of EndOfSessionChargeGroup

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EndOfSessionChargeGroup {
  endOfSessionChargeGroupID?: number;
  endOfSessionID?: number;
  chargeGroupID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EndOfSessionChargeGroup");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EndOfSessionChargeGroupID != null) this.endOfSessionChargeGroupID = (data.EndOfSessionChargeGroupID != null ? parseInt(data.EndOfSessionChargeGroupID, 10) : data.EndOfSessionChargeGroupID);
    if (data.EndOfSessionID != null) this.endOfSessionID = (data.EndOfSessionID != null ? parseInt(data.EndOfSessionID, 10) : data.EndOfSessionID);
    if (data.ChargeGroupID != null) this.chargeGroupID = (data.ChargeGroupID != null ? parseInt(data.ChargeGroupID, 10) : data.ChargeGroupID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EndOfSessionChargeGroup by its ID or by exact match on other fields.
   * @param param Either the ID of the EndOfSessionChargeGroup to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EndOfSessionChargeGroup object or null (if id) or an array of EndOfSessionChargeGroup objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EndOfSessionChargeGroup | null>;
  static async select(param: Partial<Record<keyof EndOfSessionChargeGroup, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EndOfSessionChargeGroup[]>;
  static async select(param: number | Partial<Record<keyof EndOfSessionChargeGroup, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EndOfSessionChargeGroup | EndOfSessionChargeGroup[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EndOfSessionChargeGroup/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EndOfSessionChargeGroup`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EndOfSessionChargeGroup with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EndOfSessionChargeGroup(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EndOfSessionChargeGroup(entry));
      }
    }
  }
}

EndOfSessionChargeGroup satisfies StarRezStructureStatic<EndOfSessionChargeGroup>
