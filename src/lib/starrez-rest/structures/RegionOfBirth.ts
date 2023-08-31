// Generated from XML description of RegionOfBirth

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.RegionOfBirthID != null) this.regionOfBirthID = (data.RegionOfBirthID != null ? parseInt(data.RegionOfBirthID, 10) : data.RegionOfBirthID);
    if (data.Description != null) this.description = data.Description;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RegionOfBirth | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RegionOfBirth/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RegionOfBirth with id ${id}`);
    } else {
      return new RegionOfBirth(await response.text());
    }
  }
}

RegionOfBirth satisfies StarRezStructureStatic<RegionOfBirth>
