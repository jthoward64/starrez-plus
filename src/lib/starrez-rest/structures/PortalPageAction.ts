// Generated from XML description of PortalPageAction

import { starRezXmlToJson } from "../parsing.js";

export class PortalPageAction {
  portalPageActionID?: number;
  portalPageID?: number;
  portalActionID?: number;
  eventName?: string;
  checkOrder?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalPageAction");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalPageActionID != null) this.portalPageActionID = parseInt(data.PortalPageActionID, 10);
    if (data.PortalPageID != null) this.portalPageID = parseInt(data.PortalPageID, 10);
    if (data.PortalActionID != null) this.portalActionID = parseInt(data.PortalActionID, 10);
    if (data.EventName != null) this.eventName = data.EventName;
    if (data.CheckOrder != null) this.checkOrder = parseInt(data.CheckOrder, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
