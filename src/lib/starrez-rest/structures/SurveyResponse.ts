// Generated from XML description of SurveyResponse

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

    if (data.SurveyResponseID != null) this.surveyResponseID = (data.SurveyResponseID != null ? parseInt(data.SurveyResponseID, 10) : data.SurveyResponseID);
    if (data.SurveyID != null) this.surveyID = (data.SurveyID != null ? parseInt(data.SurveyID, 10) : data.SurveyID);
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateComplete != null) this.dateComplete = (data.DateComplete != null ? new Date(data.DateComplete) : data.DateComplete);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ResponseStatusID != null) this.responseStatusID = (data.ResponseStatusID != null ? parseInt(data.ResponseStatusID, 10) : data.ResponseStatusID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a SurveyResponse by its ID or by exact match on other fields.
   * @param param Either the ID of the SurveyResponse to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single SurveyResponse object or null (if id) or an array of SurveyResponse objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<SurveyResponse | null>;
  static async select(param: Partial<Record<keyof SurveyResponse, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<SurveyResponse[]>;
  static async select(param: number | Partial<Record<keyof SurveyResponse, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<SurveyResponse | SurveyResponse[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SurveyResponse/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SurveyResponse`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch SurveyResponse with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new SurveyResponse(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new SurveyResponse(entry));
      }
    }
  }
}

SurveyResponse satisfies StarRezStructureStatic<SurveyResponse>
