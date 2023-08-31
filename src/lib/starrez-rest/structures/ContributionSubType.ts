// Generated from XML description of ContributionSubType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ContributionSubType {
  contributionSubTypeID?: number;
  contributionTypeID?: number;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ContributionSubType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ContributionSubTypeID != null) this.contributionSubTypeID = (data.ContributionSubTypeID != null ? parseInt(data.ContributionSubTypeID, 10) : data.ContributionSubTypeID);
    if (data.ContributionTypeID != null) this.contributionTypeID = (data.ContributionTypeID != null ? parseInt(data.ContributionTypeID, 10) : data.ContributionTypeID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a ContributionSubType by its ID or by exact match on other fields.
   * @param param Either the ID of the ContributionSubType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ContributionSubType object or null (if id) or an array of ContributionSubType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ContributionSubType | null>;
  static async select(param: Partial<Record<keyof ContributionSubType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ContributionSubType[]>;
  static async select(param: number | Partial<Record<keyof ContributionSubType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ContributionSubType | ContributionSubType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ContributionSubType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ContributionSubType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ContributionSubType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ContributionSubType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ContributionSubType(entry));
      }
    }
  }
}

ContributionSubType satisfies StarRezStructureStatic<ContributionSubType>
