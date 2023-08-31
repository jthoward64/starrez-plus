// Generated from XML description of Title

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Title {
  titleID?: number;
  description?: string;
  updateGender?: boolean;
  genderEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Title");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TitleID != null) this.titleID = (data.TitleID != null ? parseInt(data.TitleID, 10) : data.TitleID);
    if (data.Description != null) this.description = data.Description;
    if (data.UpdateGender != null) this.updateGender = data.UpdateGender === 'true';
    if (data.GenderEnum != null) this.genderEnum = data.GenderEnum;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Title | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Title/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Title with id ${id}`);
    } else {
      return new Title(await response.text());
    }
  }
}

Title satisfies StarRezStructureStatic<Title>
