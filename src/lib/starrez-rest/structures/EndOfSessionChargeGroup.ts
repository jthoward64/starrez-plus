// Generated from XML description of EndOfSessionChargeGroup

import { starRezXmlToJson } from "../parsing.js";

export class EndOfSessionChargeGroup {
  endOfSessionChargeGroupID?: number;
  endOfSessionID?: number;
  chargeGroupID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EndOfSessionChargeGroup");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EndOfSessionChargeGroupID != null) this.endOfSessionChargeGroupID = parseInt(data.EndOfSessionChargeGroupID, 10);
    if (data.EndOfSessionID != null) this.endOfSessionID = parseInt(data.EndOfSessionID, 10);
    if (data.ChargeGroupID != null) this.chargeGroupID = parseInt(data.ChargeGroupID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
