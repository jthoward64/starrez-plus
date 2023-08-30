// Generated from XML description of GLPosting

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class GLPosting {
  gLPostingID?: number;
  gLPostingTypeEnum?: unknown;
  description?: string;
  gLNumber?: string;
  comments?: string;
  recordTypeEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "GLPosting");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.GLPostingID != null) this.gLPostingID = (data.GLPostingID != null ? parseInt(data.GLPostingID, 10) : data.GLPostingID);
    if (data.GLPostingTypeEnum != null) this.gLPostingTypeEnum = data.GLPostingTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.GLNumber != null) this.gLNumber = data.GLNumber;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<GLPosting | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GLPosting/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch GLPosting with id ${id}`);
    } else {
      return new GLPosting(await response.text());
    }
  }
}

GLPosting satisfies StarRezStructureStatic<GLPosting>
