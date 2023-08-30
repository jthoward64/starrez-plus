// Generated from XML description of IncidentActionEntry

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class IncidentActionEntry {
  incidentActionEntryID?: number;
  incidentActionID?: number;
  entryID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentActionEntry");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentActionEntryID != null) this.incidentActionEntryID = parseInt(data.IncidentActionEntryID, 10);
    if (data.IncidentActionID != null) this.incidentActionID = parseInt(data.IncidentActionID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<IncidentActionEntry | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentActionEntry/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentActionEntry with id ${id}`);
    } else {
      return new IncidentActionEntry(await response.text());
    }
  }
}

IncidentActionEntry satisfies StarRezStructureStatic<IncidentActionEntry>
