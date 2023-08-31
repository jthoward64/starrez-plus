// Generated from XML description of ProfileItem

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ProfileItem {
  profileItemID?: number;
  profileTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  profileItemTypeEnum?: unknown;
  profileWeightLowDescription?: string;
  profileWeightMediumLowDescription?: string;
  profileWeightMediumDescription?: string;
  profileWeightMediumHighDescription?: string;
  profileWeightHighDescription?: string;
  profileWeightDescription?: string;
  comments?: string;
  webIconClass?: string;
  viewOnWeb?: boolean;
  webDescription?: string;
  webOrder?: number;
  webComments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ProfileItem");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ProfileItemID != null) this.profileItemID = (data.ProfileItemID != null ? parseInt(data.ProfileItemID, 10) : data.ProfileItemID);
    if (data.ProfileTypeID != null) this.profileTypeID = (data.ProfileTypeID != null ? parseInt(data.ProfileTypeID, 10) : data.ProfileTypeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.ProfileItemTypeEnum != null) this.profileItemTypeEnum = data.ProfileItemTypeEnum;
    if (data.ProfileWeightLowDescription != null) this.profileWeightLowDescription = data.ProfileWeightLowDescription;
    if (data.ProfileWeightMediumLowDescription != null) this.profileWeightMediumLowDescription = data.ProfileWeightMediumLowDescription;
    if (data.ProfileWeightMediumDescription != null) this.profileWeightMediumDescription = data.ProfileWeightMediumDescription;
    if (data.ProfileWeightMediumHighDescription != null) this.profileWeightMediumHighDescription = data.ProfileWeightMediumHighDescription;
    if (data.ProfileWeightHighDescription != null) this.profileWeightHighDescription = data.ProfileWeightHighDescription;
    if (data.ProfileWeightDescription != null) this.profileWeightDescription = data.ProfileWeightDescription;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.WebIconClass != null) this.webIconClass = data.WebIconClass;
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
   * Fetches a ProfileItem by its ID or by exact match on other fields.
   * @param param Either the ID of the ProfileItem to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ProfileItem object or null (if id) or an array of ProfileItem objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ProfileItem | null>;
  static async select(param: Partial<Record<keyof ProfileItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ProfileItem[]>;
  static async select(param: number | Partial<Record<keyof ProfileItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ProfileItem | ProfileItem[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ProfileItem/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ProfileItem`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ProfileItem with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ProfileItem(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ProfileItem(entry));
      }
    }
  }
}

ProfileItem satisfies StarRezStructureStatic<ProfileItem>
