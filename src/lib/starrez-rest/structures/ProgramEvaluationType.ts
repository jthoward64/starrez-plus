// Generated from XML description of ProgramEvaluationType

import { starRezXmlToJson } from "../parsing.js";

export class ProgramEvaluationType {
  programEvaluationTypeID?: number;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ProgramEvaluationType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ProgramEvaluationTypeID != null) this.programEvaluationTypeID = parseInt(data.ProgramEvaluationTypeID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
