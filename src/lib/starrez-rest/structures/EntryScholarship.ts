// Generated from XML description of EntryScholarship

import { starRezXmlToJson } from "../parsing.js";

export class EntryScholarship {
  entryScholarshipID?: number;
  entryID?: number;
  scholarshipType?: string;
  scholarshipDateStart?: Date | null;
  scholarshipDateEnd?: Date | null;
  scholarshipName?: string;
  description?: string;
  amount?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryScholarship");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryScholarshipID != null) this.entryScholarshipID = parseInt(data.EntryScholarshipID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.ScholarshipType != null) this.scholarshipType = data.ScholarshipType;
    if (data.ScholarshipDateStart != null) this.scholarshipDateStart = new Date(data.ScholarshipDateStart);
    if (data.ScholarshipDateEnd != null) this.scholarshipDateEnd = new Date(data.ScholarshipDateEnd);
    if (data.ScholarshipName != null) this.scholarshipName = data.ScholarshipName;
    if (data.Description != null) this.description = data.Description;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
