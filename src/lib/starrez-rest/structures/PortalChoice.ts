// Generated from XML description of PortalChoice

import { starRezXmlToJson } from "../parsing.js";

export class PortalChoice {
  portalChoiceID?: number;
  portalProcessID?: number;
  description?: string;
  comments?: string;
  className?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalChoice");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalChoiceID != null) this.portalChoiceID = parseInt(data.PortalChoiceID, 10);
    if (data.PortalProcessID != null) this.portalProcessID = parseInt(data.PortalProcessID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ClassName != null) this.className = data.ClassName;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
