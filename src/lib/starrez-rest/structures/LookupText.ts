// Generated from XML description of LookupText

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class LookupText {
  lookupTextID?: number;
  lookupID?: number;
  lookupText?: string;
  lookupValue?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "LookupText");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.LookupTextID != null) this.lookupTextID = (data.LookupTextID != null ? parseInt(data.LookupTextID, 10) : data.LookupTextID);
    if (data.LookupID != null) this.lookupID = (data.LookupID != null ? parseInt(data.LookupID, 10) : data.LookupID);
    if (data.LookupText != null) this.lookupText = data.LookupText;
    if (data.LookupValue != null) this.lookupValue = data.LookupValue;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<LookupText | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/LookupText/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch LookupText with id ${id}`);
    } else {
      return new LookupText(await response.text());
    }
  }
}

LookupText satisfies StarRezStructureStatic<LookupText>
