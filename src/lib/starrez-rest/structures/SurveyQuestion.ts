// Generated from XML description of SurveyQuestion

import { starRezXmlToJson } from "../parsing.js";
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<SurveyQuestion | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SurveyQuestion/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch SurveyQuestion with id ${id}`);
    } else {
      return new SurveyQuestion(await response.text());
    }
  }
}

SurveyQuestion satisfies StarRezStructureStatic<SurveyQuestion>
