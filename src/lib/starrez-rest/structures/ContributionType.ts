// Generated from XML description of ContributionType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ContributionType {
  contributionTypeID?: number;
  description?: string;
  comments?: string;
  categoryID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ContributionType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ContributionTypeID != null) this.contributionTypeID = (data.ContributionTypeID != null ? parseInt(data.ContributionTypeID, 10) : data.ContributionTypeID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a ContributionType by its ID or by exact match on other fields.
   * @param param Either the ID of the ContributionType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ContributionType object or null (if id) or an array of ContributionType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ContributionType | null>;
  static async select(param: Partial<Record<keyof ContributionType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ContributionType[]>;
  static async select(param: number | Partial<Record<keyof ContributionType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ContributionType | ContributionType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ContributionType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ContributionType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ContributionType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ContributionType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ContributionType(entry));
      }
    }
  }
}

ContributionType satisfies StarRezStructureStatic<ContributionType>
