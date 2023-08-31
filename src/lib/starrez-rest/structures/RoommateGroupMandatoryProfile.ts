// Generated from XML description of RoommateGroupMandatoryProfile

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoommateGroupMandatoryProfile {
  roommateGroupMandatoryProfileID?: number;
  roommateGroupID?: number;
  profileItemID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoommateGroupMandatoryProfile");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoommateGroupMandatoryProfileID != null) this.roommateGroupMandatoryProfileID = (data.RoommateGroupMandatoryProfileID != null ? parseInt(data.RoommateGroupMandatoryProfileID, 10) : data.RoommateGroupMandatoryProfileID);
    if (data.RoommateGroupID != null) this.roommateGroupID = (data.RoommateGroupID != null ? parseInt(data.RoommateGroupID, 10) : data.RoommateGroupID);
    if (data.ProfileItemID != null) this.profileItemID = (data.ProfileItemID != null ? parseInt(data.ProfileItemID, 10) : data.ProfileItemID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoommateGroupMandatoryProfile by its ID or by exact match on other fields.
   * @param param Either the ID of the RoommateGroupMandatoryProfile to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoommateGroupMandatoryProfile object or null (if id) or an array of RoommateGroupMandatoryProfile objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoommateGroupMandatoryProfile | null>;
  static async select(param: Partial<Record<keyof RoommateGroupMandatoryProfile, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoommateGroupMandatoryProfile[]>;
  static async select(param: number | Partial<Record<keyof RoommateGroupMandatoryProfile, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoommateGroupMandatoryProfile | RoommateGroupMandatoryProfile[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoommateGroupMandatoryProfile/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoommateGroupMandatoryProfile`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoommateGroupMandatoryProfile with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoommateGroupMandatoryProfile(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoommateGroupMandatoryProfile(entry));
      }
    }
  }
}

RoommateGroupMandatoryProfile satisfies StarRezStructureStatic<RoommateGroupMandatoryProfile>
