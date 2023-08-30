// Generated from XML description of WebSectionTextBlock

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class WebSectionTextBlock {
  webSectionTextBlockID?: number;
  webSectionID?: number;
  blockName?: string;
  blockText?: string;
  sQL?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebSectionTextBlock");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebSectionTextBlockID != null) this.webSectionTextBlockID = parseInt(data.WebSectionTextBlockID, 10);
    if (data.WebSectionID != null) this.webSectionID = parseInt(data.WebSectionID, 10);
    if (data.BlockName != null) this.blockName = data.BlockName;
    if (data.BlockText != null) this.blockText = data.BlockText;
    if (data.SQL != null) this.sQL = data.SQL;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WebSectionTextBlock | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebSectionTextBlock/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch WebSectionTextBlock with id ${id}`);
    } else {
      return new WebSectionTextBlock(await response.text());
    }
}

}