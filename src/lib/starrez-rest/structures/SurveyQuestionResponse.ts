// Generated from XML description of SurveyQuestionResponse

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.SurveyQuestionResponseID != null) this.surveyQuestionResponseID = parseInt(data.SurveyQuestionResponseID, 10);
    if (data.SurveyResponseID != null) this.surveyResponseID = parseInt(data.SurveyResponseID, 10);
    if (data.SurveyQuestionID != null) this.surveyQuestionID = parseInt(data.SurveyQuestionID, 10);
    if (data.ValueString != null) this.valueString = data.ValueString;
    if (data.ValueDate != null) this.valueDate = new Date(data.ValueDate);
    if (data.ValueBoolean != null) this.valueBoolean = data.ValueBoolean === 'true';
    if (data.ValueInteger != null) this.valueInteger = parseInt(data.ValueInteger, 10);
    if (data.ValueMoney != null) this.valueMoney = data.ValueMoney;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
