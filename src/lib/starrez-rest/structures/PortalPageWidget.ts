// Generated from XML description of PortalPageWidget

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalPageWidget {
  portalPageWidgetID?: number;
  portalPageID?: number;
  sortOrder?: number;
  sectionNumber?: number;
  description?: string;
  className?: string;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalPageWidget");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalPageWidgetID != null) this.portalPageWidgetID = (data.PortalPageWidgetID != null ? parseInt(data.PortalPageWidgetID, 10) : data.PortalPageWidgetID);
    if (data.PortalPageID != null) this.portalPageID = (data.PortalPageID != null ? parseInt(data.PortalPageID, 10) : data.PortalPageID);
    if (data.SortOrder != null) this.sortOrder = (data.SortOrder != null ? parseInt(data.SortOrder, 10) : data.SortOrder);
    if (data.SectionNumber != null) this.sectionNumber = (data.SectionNumber != null ? parseInt(data.SectionNumber, 10) : data.SectionNumber);
    if (data.Description != null) this.description = data.Description;
    if (data.ClassName != null) this.className = data.ClassName;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<PortalPageWidget | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalPageWidget/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalPageWidget with id ${id}`);
    } else {
      return new PortalPageWidget(await response.text());
    }
  }
}

PortalPageWidget satisfies StarRezStructureStatic<PortalPageWidget>
