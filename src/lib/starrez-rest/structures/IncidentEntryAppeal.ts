// Generated from XML description of IncidentEntryAppeal

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.IncidentEntryAppealID != null) this.incidentEntryAppealID = parseInt(data.IncidentEntryAppealID, 10);
    if (data.IncidentEntryID != null) this.incidentEntryID = parseInt(data.IncidentEntryID, 10);
    if (data.AppealDateCreated != null) this.appealDateCreated = new Date(data.AppealDateCreated);
    if (data.AppealDate != null) this.appealDate = new Date(data.AppealDate);
    if (data.AppealDateComplete != null) this.appealDateComplete = new Date(data.AppealDateComplete);
    if (data.AppealManager_EntryID != null) this.appealManager_EntryID = parseInt(data.AppealManager_EntryID, 10);
    if (data.IncidentAppealTypeID != null) this.incidentAppealTypeID = parseInt(data.IncidentAppealTypeID, 10);
    if (data.IncidentAppealDecisionID != null) this.incidentAppealDecisionID = parseInt(data.IncidentAppealDecisionID, 10);
    if (data.AppealDescription != null) this.appealDescription = data.AppealDescription;
    if (data.AppealComments != null) this.appealComments = data.AppealComments;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

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
