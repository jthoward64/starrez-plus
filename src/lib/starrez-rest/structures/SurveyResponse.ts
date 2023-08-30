// Generated from XML description of SurveyResponse

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class SurveyResponse {
  surveyResponseID?: number;
  surveyID?: number;
  dateStart?: Date | null;
  dateComplete?: Date | null;
  entryID?: number;
  responseStatusID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "SurveyResponse");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.SurveyResponseID != null) this.surveyResponseID = parseInt(data.SurveyResponseID, 10);
    if (data.SurveyID != null) this.surveyID = parseInt(data.SurveyID, 10);
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.DateComplete != null) this.dateComplete = new Date(data.DateComplete);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.ResponseStatusID != null) this.responseStatusID = parseInt(data.ResponseStatusID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<SurveyResponse | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SurveyResponse/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch SurveyResponse with id ${id}`);
    } else {
      return new SurveyResponse(await response.text());
    }
  }
}

SurveyResponse satisfies StarRezStructureStatic<SurveyResponse>
