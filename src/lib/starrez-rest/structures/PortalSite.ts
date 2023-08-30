// Generated from XML description of PortalSite

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class PortalSite {
  portalSiteID?: number;
  description?: string;
  title?: string;
  url?: string;
  portalThemeID?: number;
  eventID?: number;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalSite");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalSiteID != null) this.portalSiteID = parseInt(data.PortalSiteID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Title != null) this.title = data.Title;
    if (data.Url != null) this.url = data.Url;
    if (data.PortalThemeID != null) this.portalThemeID = parseInt(data.PortalThemeID, 10);
    if (data.EventID != null) this.eventID = parseInt(data.EventID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<PortalSite | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalSite/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalSite with id ${id}`);
    } else {
      return new PortalSite(await response.text());
    }
}

}
