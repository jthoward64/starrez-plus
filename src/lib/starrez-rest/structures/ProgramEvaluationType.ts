// Generated from XML description of ProgramEvaluationType

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.ProgramEvaluationTypeID != null) this.programEvaluationTypeID = (data.ProgramEvaluationTypeID != null ? parseInt(data.ProgramEvaluationTypeID, 10) : data.ProgramEvaluationTypeID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ProgramEvaluationType | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ProgramEvaluationType/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ProgramEvaluationType with id ${id}`);
    } else {
      return new ProgramEvaluationType(await response.text());
    }
  }
}

ProgramEvaluationType satisfies StarRezStructureStatic<ProgramEvaluationType>
