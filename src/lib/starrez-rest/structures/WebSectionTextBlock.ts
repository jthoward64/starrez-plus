// Generated from XML description of WebSectionTextBlock

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.WebSectionTextBlockID != null) this.webSectionTextBlockID = (data.WebSectionTextBlockID != null ? parseInt(data.WebSectionTextBlockID, 10) : data.WebSectionTextBlockID);
    if (data.WebSectionID != null) this.webSectionID = (data.WebSectionID != null ? parseInt(data.WebSectionID, 10) : data.WebSectionID);
    if (data.BlockName != null) this.blockName = data.BlockName;
    if (data.BlockText != null) this.blockText = data.BlockText;
    if (data.SQL != null) this.sQL = data.SQL;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

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

WebSectionTextBlock satisfies StarRezStructureStatic<WebSectionTextBlock>
