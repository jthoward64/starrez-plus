// Generated from XML description of PortalTheme

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalTheme {
  portalThemeID?: number;
  description?: string;
  themeLayout?: string;
  allowInUrl?: boolean;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalTheme");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalThemeID != null) this.portalThemeID = parseInt(data.PortalThemeID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.ThemeLayout != null) this.themeLayout = data.ThemeLayout;
    if (data.AllowInUrl != null) this.allowInUrl = data.AllowInUrl === 'true';
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<PortalTheme | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalTheme/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalTheme with id ${id}`);
    } else {
      return new PortalTheme(await response.text());
    }
  }
}

PortalTheme satisfies StarRezStructureStatic<PortalTheme>
