// Generated from XML description of IncidentEntrySanction

import { starRezXmlToJson } from "../parsing.js";

export class IncidentEntrySanction {
  incidentEntrySanctionID?: number;
  incidentEntryID?: number;
  incidentSanctionTypeID?: number;
  incidentSanctionSubTypeID?: number;
  incidentEntryAppealID?: number;
  sanctionDate?: Date;
  dateDue?: Date | null;
  dateComplete?: Date | null;
  description?: string;
  comments?: string;
  referral?: string;
  chargeAmount?: string;
  transactionID?: number;
  status?: string;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentEntrySanction");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentEntrySanctionID != null) this.incidentEntrySanctionID = parseInt(data.IncidentEntrySanctionID, 10);
    if (data.IncidentEntryID != null) this.incidentEntryID = parseInt(data.IncidentEntryID, 10);
    if (data.IncidentSanctionTypeID != null) this.incidentSanctionTypeID = parseInt(data.IncidentSanctionTypeID, 10);
    if (data.IncidentSanctionSubTypeID != null) this.incidentSanctionSubTypeID = parseInt(data.IncidentSanctionSubTypeID, 10);
    if (data.IncidentEntryAppealID != null) this.incidentEntryAppealID = parseInt(data.IncidentEntryAppealID, 10);
    if (data.SanctionDate != null) this.sanctionDate = new Date(data.SanctionDate);
    if (data.DateDue != null) this.dateDue = new Date(data.DateDue);
    if (data.DateComplete != null) this.dateComplete = new Date(data.DateComplete);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Referral != null) this.referral = data.Referral;
    if (data.ChargeAmount != null) this.chargeAmount = data.ChargeAmount;
    if (data.TransactionID != null) this.transactionID = parseInt(data.TransactionID, 10);
    if (data.Status != null) this.status = data.Status;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
