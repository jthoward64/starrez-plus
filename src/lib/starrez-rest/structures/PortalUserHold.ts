// Generated from XML description of PortalUserHold

import { starRezXmlToJson } from "../parsing.js";

export class PortalUserHold {
  portalUserHoldID?: number;
  portalUserTokenID?: number;
  holdDateTime_Expire?: Date | null;
  tableName?: string;
  tableID?: number;
  quantity?: number;
  applicableDateStart?: Date | null;
  applicableDateEnd?: Date | null;
  data?: any;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalUserHold");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalUserHoldID != null) this.portalUserHoldID = parseInt(data.PortalUserHoldID, 10);
    if (data.PortalUserTokenID != null) this.portalUserTokenID = parseInt(data.PortalUserTokenID, 10);
    if (data.HoldDateTime_Expire != null) this.holdDateTime_Expire = new Date(data.HoldDateTime_Expire);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.Quantity != null) this.quantity = parseInt(data.Quantity, 10);
    if (data.ApplicableDateStart != null) this.applicableDateStart = new Date(data.ApplicableDateStart);
    if (data.ApplicableDateEnd != null) this.applicableDateEnd = new Date(data.ApplicableDateEnd);
    if (data.Data != null) this.data = data.Data;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
