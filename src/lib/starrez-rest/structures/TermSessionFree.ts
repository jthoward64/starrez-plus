// Generated from XML description of TermSessionFree

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class TermSessionFree {
  termSessionFreeID?: number;
  recordTypeEnum?: unknown;
  termSessionID?: number;
  dateStart?: Date | null;
  dateEnd?: Date | null;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TermSessionFree");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TermSessionFreeID != null) this.termSessionFreeID = parseInt(data.TermSessionFreeID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.DateEnd != null) this.dateEnd = new Date(data.DateEnd);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<TermSessionFree | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TermSessionFree/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch TermSessionFree with id ${id}`);
    } else {
      return new TermSessionFree(await response.text());
    }
  }
}

TermSessionFree satisfies StarRezStructureStatic<TermSessionFree>
