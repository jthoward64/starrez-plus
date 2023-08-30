// Generated from XML description of WebMenu

import { starRezXmlToJson } from "../parsing.js";

export class WebMenu {
  webMenuID?: number;
  webModuleID?: number;
  description?: string;
  menuOrder?: number;
  comments?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebMenu");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebMenuID != null) this.webMenuID = parseInt(data.WebMenuID, 10);
    if (data.WebModuleID != null) this.webModuleID = parseInt(data.WebModuleID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.MenuOrder != null) this.menuOrder = parseInt(data.MenuOrder, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
