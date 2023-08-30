// Generated from XML description of EntryScholarship

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.EntryScholarshipID != null) this.entryScholarshipID = (data.EntryScholarshipID != null ? parseInt(data.EntryScholarshipID, 10) : data.EntryScholarshipID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ScholarshipType != null) this.scholarshipType = data.ScholarshipType;
    if (data.ScholarshipDateStart != null) this.scholarshipDateStart = (data.ScholarshipDateStart != null ? new Date(data.ScholarshipDateStart) : data.ScholarshipDateStart);
    if (data.ScholarshipDateEnd != null) this.scholarshipDateEnd = (data.ScholarshipDateEnd != null ? new Date(data.ScholarshipDateEnd) : data.ScholarshipDateEnd);
    if (data.ScholarshipName != null) this.scholarshipName = data.ScholarshipName;
    if (data.Description != null) this.description = data.Description;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryScholarship | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryScholarship/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryScholarship with id ${id}`);
    } else {
      return new EntryScholarship(await response.text());
    }
  }
}

EntryScholarship satisfies StarRezStructureStatic<EntryScholarship>
