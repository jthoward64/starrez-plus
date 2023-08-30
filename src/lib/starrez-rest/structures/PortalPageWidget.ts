// Generated from XML description of PortalPageWidget

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.PortalPageWidgetID != null) this.portalPageWidgetID = parseInt(data.PortalPageWidgetID, 10);
    if (data.PortalPageID != null) this.portalPageID = parseInt(data.PortalPageID, 10);
    if (data.SortOrder != null) this.sortOrder = parseInt(data.SortOrder, 10);
    if (data.SectionNumber != null) this.sectionNumber = parseInt(data.SectionNumber, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.ClassName != null) this.className = data.ClassName;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
