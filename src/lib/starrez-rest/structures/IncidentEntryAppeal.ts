// Generated from XML description of IncidentEntryAppeal

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class IncidentEntryAppeal {
  incidentEntryAppealID?: number;
  incidentEntryID?: number;
  appealDateCreated?: Date | null;
  appealDate?: Date | null;
  appealDateComplete?: Date | null;
  appealManager_EntryID?: number;
  incidentAppealTypeID?: number;
  incidentAppealDecisionID?: number;
  appealDescription?: string;
  appealComments?: string;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentEntryAppeal");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentEntryAppealID != null) this.incidentEntryAppealID = (data.IncidentEntryAppealID != null ? parseInt(data.IncidentEntryAppealID, 10) : data.IncidentEntryAppealID);
    if (data.IncidentEntryID != null) this.incidentEntryID = (data.IncidentEntryID != null ? parseInt(data.IncidentEntryID, 10) : data.IncidentEntryID);
    if (data.AppealDateCreated != null) this.appealDateCreated = (data.AppealDateCreated != null ? new Date(data.AppealDateCreated) : data.AppealDateCreated);
    if (data.AppealDate != null) this.appealDate = (data.AppealDate != null ? new Date(data.AppealDate) : data.AppealDate);
    if (data.AppealDateComplete != null) this.appealDateComplete = (data.AppealDateComplete != null ? new Date(data.AppealDateComplete) : data.AppealDateComplete);
    if (data.AppealManager_EntryID != null) this.appealManager_EntryID = (data.AppealManager_EntryID != null ? parseInt(data.AppealManager_EntryID, 10) : data.AppealManager_EntryID);
    if (data.IncidentAppealTypeID != null) this.incidentAppealTypeID = (data.IncidentAppealTypeID != null ? parseInt(data.IncidentAppealTypeID, 10) : data.IncidentAppealTypeID);
    if (data.IncidentAppealDecisionID != null) this.incidentAppealDecisionID = (data.IncidentAppealDecisionID != null ? parseInt(data.IncidentAppealDecisionID, 10) : data.IncidentAppealDecisionID);
    if (data.AppealDescription != null) this.appealDescription = data.AppealDescription;
    if (data.AppealComments != null) this.appealComments = data.AppealComments;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<IncidentEntryAppeal | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentEntryAppeal/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentEntryAppeal with id ${id}`);
    } else {
      return new IncidentEntryAppeal(await response.text());
    }
  }
}

IncidentEntryAppeal satisfies StarRezStructureStatic<IncidentEntryAppeal>
