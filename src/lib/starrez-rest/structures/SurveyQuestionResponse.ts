// Generated from XML description of SurveyQuestionResponse

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class SurveyQuestionResponse {
  surveyQuestionResponseID?: number;
  surveyResponseID?: number;
  surveyQuestionID?: number;
  valueString?: string;
  valueDate?: Date | null;
  valueBoolean?: boolean;
  valueInteger?: number;
  valueMoney?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "SurveyQuestionResponse");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.SurveyQuestionResponseID != null) this.surveyQuestionResponseID = (data.SurveyQuestionResponseID != null ? parseInt(data.SurveyQuestionResponseID, 10) : data.SurveyQuestionResponseID);
    if (data.SurveyResponseID != null) this.surveyResponseID = (data.SurveyResponseID != null ? parseInt(data.SurveyResponseID, 10) : data.SurveyResponseID);
    if (data.SurveyQuestionID != null) this.surveyQuestionID = (data.SurveyQuestionID != null ? parseInt(data.SurveyQuestionID, 10) : data.SurveyQuestionID);
    if (data.ValueString != null) this.valueString = data.ValueString;
    if (data.ValueDate != null) this.valueDate = (data.ValueDate != null ? new Date(data.ValueDate) : data.ValueDate);
    if (data.ValueBoolean != null) this.valueBoolean = data.ValueBoolean === 'true';
    if (data.ValueInteger != null) this.valueInteger = (data.ValueInteger != null ? parseInt(data.ValueInteger, 10) : data.ValueInteger);
    if (data.ValueMoney != null) this.valueMoney = data.ValueMoney;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<SurveyQuestionResponse | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SurveyQuestionResponse/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch SurveyQuestionResponse with id ${id}`);
    } else {
      return new SurveyQuestionResponse(await response.text());
    }
  }
}

SurveyQuestionResponse satisfies StarRezStructureStatic<SurveyQuestionResponse>
