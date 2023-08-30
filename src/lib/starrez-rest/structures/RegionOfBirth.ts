// Generated from XML description of RegionOfBirth

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class RegionOfBirth {
  regionOfBirthID?: number;
  description?: string;
  recordTypeEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RegionOfBirth");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RegionOfBirthID != null) this.regionOfBirthID = parseInt(data.RegionOfBirthID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RegionOfBirth | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RegionOfBirth/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RegionOfBirth with id ${id}`);
    } else {
      return new RegionOfBirth(await response.text());
    }
}

}
