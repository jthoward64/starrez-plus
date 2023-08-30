// Generated from XML description of Title

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.TitleID != null) this.titleID = parseInt(data.TitleID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.UpdateGender != null) this.updateGender = data.UpdateGender === 'true';
    if (data.GenderEnum != null) this.genderEnum = data.GenderEnum;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Title | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Title/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Title with id ${id}`);
    } else {
      return new Title(await response.text());
    }
}

}
