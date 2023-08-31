// Generated from XML description of ProfileType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ProfileType {
  profileTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  profileUseEnum?: unknown;
  viewOnWeb?: boolean;
  webDescription?: string;
  webOrder?: number;
  webComments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ProfileType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ProfileTypeID != null) this.profileTypeID = (data.ProfileTypeID != null ? parseInt(data.ProfileTypeID, 10) : data.ProfileTypeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ProfileUseEnum != null) this.profileUseEnum = data.ProfileUseEnum;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebOrder != null) this.webOrder = (data.WebOrder != null ? parseInt(data.WebOrder, 10) : data.WebOrder);
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a ProfileType by its ID or by exact match on other fields.
   * @param param Either the ID of the ProfileType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ProfileType object or null (if id) or an array of ProfileType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ProfileType | null>;
  static async select(param: Partial<Record<keyof ProfileType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ProfileType[]>;
  static async select(param: number | Partial<Record<keyof ProfileType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ProfileType | ProfileType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ProfileType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ProfileType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ProfileType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ProfileType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ProfileType(entry));
      }
    }
  }
}

ProfileType satisfies StarRezStructureStatic<ProfileType>
