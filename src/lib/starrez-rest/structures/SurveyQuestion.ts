// Generated from XML description of SurveyQuestion

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.SurveyQuestionID != null) this.surveyQuestionID = parseInt(data.SurveyQuestionID, 10);
    if (data.SurveyID != null) this.surveyID = parseInt(data.SurveyID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.QuestionGroup != null) this.questionGroup = data.QuestionGroup;
    if (data.FieldControlTypeEnum != null) this.fieldControlTypeEnum = data.FieldControlTypeEnum;
    if (data.QuestionOrder != null) this.questionOrder = parseInt(data.QuestionOrder, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
