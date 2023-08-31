// Generated from XML description of ElectronicIdentityType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ElectronicIdentityType {
  electronicIdentityTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  viewOnWeb?: boolean;
  urlFormat?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ElectronicIdentityType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ElectronicIdentityTypeID != null) this.electronicIdentityTypeID = (data.ElectronicIdentityTypeID != null ? parseInt(data.ElectronicIdentityTypeID, 10) : data.ElectronicIdentityTypeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.UrlFormat != null) this.urlFormat = data.UrlFormat;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a ElectronicIdentityType by its ID or by exact match on other fields.
   * @param param Either the ID of the ElectronicIdentityType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ElectronicIdentityType object or null (if id) or an array of ElectronicIdentityType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ElectronicIdentityType | null>;
  static async select(param: Partial<Record<keyof ElectronicIdentityType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ElectronicIdentityType[]>;
  static async select(param: number | Partial<Record<keyof ElectronicIdentityType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ElectronicIdentityType | ElectronicIdentityType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ElectronicIdentityType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ElectronicIdentityType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ElectronicIdentityType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ElectronicIdentityType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ElectronicIdentityType(entry));
      }
    }
  }
}

ElectronicIdentityType satisfies StarRezStructureStatic<ElectronicIdentityType>
