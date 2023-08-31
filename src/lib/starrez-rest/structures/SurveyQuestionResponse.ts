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

  /**
   * Fetches a SurveyQuestionResponse by its ID or by exact match on other fields.
   * @param param Either the ID of the SurveyQuestionResponse to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single SurveyQuestionResponse object or null (if id) or an array of SurveyQuestionResponse objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<SurveyQuestionResponse | null>;
  static async select(param: Partial<Record<keyof SurveyQuestionResponse, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<SurveyQuestionResponse[]>;
  static async select(param: number | Partial<Record<keyof SurveyQuestionResponse, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<SurveyQuestionResponse | SurveyQuestionResponse[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SurveyQuestionResponse/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SurveyQuestionResponse`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch SurveyQuestionResponse with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new SurveyQuestionResponse(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new SurveyQuestionResponse(entry));
      }
    }
  }
}

SurveyQuestionResponse satisfies StarRezStructureStatic<SurveyQuestionResponse>
