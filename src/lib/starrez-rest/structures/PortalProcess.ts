// Generated from XML description of PortalProcess

import { starRezXmlToJson } from "../parsing.js";

export class PortalProcess {
  portalProcessID?: number;
  portalSiteID?: number;
  description?: string;
  className?: string;
  menuOrder?: number;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalProcess");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalProcessID != null) this.portalProcessID = parseInt(data.PortalProcessID, 10);
    if (data.PortalSiteID != null) this.portalSiteID = parseInt(data.PortalSiteID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.ClassName != null) this.className = data.ClassName;
    if (data.MenuOrder != null) this.menuOrder = parseInt(data.MenuOrder, 10);
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
