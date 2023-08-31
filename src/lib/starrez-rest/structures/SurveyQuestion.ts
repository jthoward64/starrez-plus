// Generated from XML description of SurveyQuestion

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class SurveyQuestion {
  surveyQuestionID?: number;
  surveyID?: number;
  description?: string;
  comments?: string;
  questionGroup?: string;
  fieldControlTypeEnum?: unknown;
  questionOrder?: number;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "SurveyQuestion");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.SurveyQuestionID != null) this.surveyQuestionID = (data.SurveyQuestionID != null ? parseInt(data.SurveyQuestionID, 10) : data.SurveyQuestionID);
    if (data.SurveyID != null) this.surveyID = (data.SurveyID != null ? parseInt(data.SurveyID, 10) : data.SurveyID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.QuestionGroup != null) this.questionGroup = data.QuestionGroup;
    if (data.FieldControlTypeEnum != null) this.fieldControlTypeEnum = data.FieldControlTypeEnum;
    if (data.QuestionOrder != null) this.questionOrder = (data.QuestionOrder != null ? parseInt(data.QuestionOrder, 10) : data.QuestionOrder);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a SurveyQuestion by its ID or by exact match on other fields.
   * @param param Either the ID of the SurveyQuestion to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single SurveyQuestion object or null (if id) or an array of SurveyQuestion objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<SurveyQuestion | null>;
  static async select(param: Partial<Record<keyof SurveyQuestion, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<SurveyQuestion[]>;
  static async select(param: number | Partial<Record<keyof SurveyQuestion, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<SurveyQuestion | SurveyQuestion[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SurveyQuestion/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SurveyQuestion`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch SurveyQuestion with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new SurveyQuestion(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new SurveyQuestion(entry));
      }
    }
  }
}

SurveyQuestion satisfies StarRezStructureStatic<SurveyQuestion>
