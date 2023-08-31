// Generated from XML description of EntrySituationResponseHistory

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntrySituationResponseHistory {
  entrySituationResponseHistoryID?: number;
  entryID?: number;
  situationResponseEnum?: unknown;
  situationResponseDetail?: string;
  situationResponseExpiryDate?: Date | null;
  createdDate?: Date;
  situationResponseSituation?: string | null;
  situationResponseComments?: string | null;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntrySituationResponseHistory");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntrySituationResponseHistoryID != null) this.entrySituationResponseHistoryID = (data.EntrySituationResponseHistoryID != null ? parseInt(data.EntrySituationResponseHistoryID, 10) : data.EntrySituationResponseHistoryID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.SituationResponseEnum != null) this.situationResponseEnum = data.SituationResponseEnum;
    if (data.SituationResponseDetail != null) this.situationResponseDetail = data.SituationResponseDetail;
    if (data.SituationResponseExpiryDate != null) this.situationResponseExpiryDate = (data.SituationResponseExpiryDate != null ? new Date(data.SituationResponseExpiryDate) : data.SituationResponseExpiryDate);
    if (data.CreatedDate != null) this.createdDate = (data.CreatedDate != null ? new Date(data.CreatedDate) : data.CreatedDate);
    if (data.SituationResponseSituation != null) this.situationResponseSituation = data.SituationResponseSituation;
    if (data.SituationResponseComments != null) this.situationResponseComments = data.SituationResponseComments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntrySituationResponseHistory | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntrySituationResponseHistory/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntrySituationResponseHistory with id ${id}`);
    } else {
      return new EntrySituationResponseHistory(await response.text());
    }
  }
}

EntrySituationResponseHistory satisfies StarRezStructureStatic<EntrySituationResponseHistory>
