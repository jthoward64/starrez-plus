// Generated from XML description of VMGroupMailBox

import { starRezXmlToJson } from "../parsing.js";

export class VMGroupMailBox {
  vMGroupMailBoxID?: number;
  vMGroupID?: number;
  vMMailBoxID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMGroupMailBox");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMGroupMailBoxID != null) this.vMGroupMailBoxID = parseInt(data.VMGroupMailBoxID, 10);
    if (data.VMGroupID != null) this.vMGroupID = parseInt(data.VMGroupID, 10);
    if (data.VMMailBoxID != null) this.vMMailBoxID = parseInt(data.VMMailBoxID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
