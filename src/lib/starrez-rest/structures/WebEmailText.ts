// Generated from XML description of WebEmailText

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebEmailText {
  webEmailTextID?: number;
  webSectionID?: number;
  emailName?: string;
  subject?: string;
  bodyText?: string;
  sQL?: string;
  securityUserID?: number;
  dateCreated?: Date;
  emailFromAddressID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebEmailText");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebEmailTextID != null) this.webEmailTextID = (data.WebEmailTextID != null ? parseInt(data.WebEmailTextID, 10) : data.WebEmailTextID);
    if (data.WebSectionID != null) this.webSectionID = (data.WebSectionID != null ? parseInt(data.WebSectionID, 10) : data.WebSectionID);
    if (data.EmailName != null) this.emailName = data.EmailName;
    if (data.Subject != null) this.subject = data.Subject;
    if (data.BodyText != null) this.bodyText = data.BodyText;
    if (data.SQL != null) this.sQL = data.SQL;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.EmailFromAddressID != null) this.emailFromAddressID = (data.EmailFromAddressID != null ? parseInt(data.EmailFromAddressID, 10) : data.EmailFromAddressID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WebEmailText | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebEmailText/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch WebEmailText with id ${id}`);
    } else {
      return new WebEmailText(await response.text());
    }
  }
}

WebEmailText satisfies StarRezStructureStatic<WebEmailText>
