// Generated from XML description of ProfileItem

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.ProfileItemID != null) this.profileItemID = parseInt(data.ProfileItemID, 10);
    if (data.ProfileTypeID != null) this.profileTypeID = parseInt(data.ProfileTypeID, 10);
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
    if (data.WebOrder != null) this.webOrder = parseInt(data.WebOrder, 10);
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ProfileItem | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ProfileItem/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ProfileItem with id ${id}`);
    } else {
      return new ProfileItem(await response.text());
    }
}

}
