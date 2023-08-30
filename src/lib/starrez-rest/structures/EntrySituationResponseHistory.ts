// Generated from XML description of EntrySituationResponseHistory

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.EntrySituationResponseHistoryID != null) this.entrySituationResponseHistoryID = parseInt(data.EntrySituationResponseHistoryID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.SituationResponseEnum != null) this.situationResponseEnum = data.SituationResponseEnum;
    if (data.SituationResponseDetail != null) this.situationResponseDetail = data.SituationResponseDetail;
    if (data.SituationResponseExpiryDate != null) this.situationResponseExpiryDate = new Date(data.SituationResponseExpiryDate);
    if (data.CreatedDate != null) this.createdDate = new Date(data.CreatedDate);
    if (data.SituationResponseSituation != null) this.situationResponseSituation = data.SituationResponseSituation;
    if (data.SituationResponseComments != null) this.situationResponseComments = data.SituationResponseComments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntrySituationResponseHistory | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntrySituationResponseHistory/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EntrySituationResponseHistory with id ${id}`);
    } else {
      return new EntrySituationResponseHistory(await response.text());
    }
}

}
