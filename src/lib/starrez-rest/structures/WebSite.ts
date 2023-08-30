// Generated from XML description of WebSite

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebSite {
  webSiteID?: number;
  siteName?: string;
  description?: string;
  uRL?: string;
  header?: string;
  footer?: string;
  headerSQL?: string;
  footerSQL?: string;
  webSiteStatusEnum?: unknown;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebSite");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebSiteID != null) this.webSiteID = (data.WebSiteID != null ? parseInt(data.WebSiteID, 10) : data.WebSiteID);
    if (data.SiteName != null) this.siteName = data.SiteName;
    if (data.Description != null) this.description = data.Description;
    if (data.URL != null) this.uRL = data.URL;
    if (data.Header != null) this.header = data.Header;
    if (data.Footer != null) this.footer = data.Footer;
    if (data.HeaderSQL != null) this.headerSQL = data.HeaderSQL;
    if (data.FooterSQL != null) this.footerSQL = data.FooterSQL;
    if (data.WebSiteStatusEnum != null) this.webSiteStatusEnum = data.WebSiteStatusEnum;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WebSite | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebSite/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch WebSite with id ${id}`);
    } else {
      return new WebSite(await response.text());
    }
  }
}

WebSite satisfies StarRezStructureStatic<WebSite>
