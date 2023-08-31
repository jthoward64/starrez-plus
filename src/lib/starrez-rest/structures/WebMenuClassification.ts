// Generated from XML description of WebMenuClassification

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebMenuClassification {
  webMenuClassificationID?: number;
  webMenuID?: number;
  termTypeID?: number;
  classificationID?: number;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebMenuClassification");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebMenuClassificationID != null) this.webMenuClassificationID = (data.WebMenuClassificationID != null ? parseInt(data.WebMenuClassificationID, 10) : data.WebMenuClassificationID);
    if (data.WebMenuID != null) this.webMenuID = (data.WebMenuID != null ? parseInt(data.WebMenuID, 10) : data.WebMenuID);
    if (data.TermTypeID != null) this.termTypeID = (data.TermTypeID != null ? parseInt(data.TermTypeID, 10) : data.TermTypeID);
    if (data.ClassificationID != null) this.classificationID = (data.ClassificationID != null ? parseInt(data.ClassificationID, 10) : data.ClassificationID);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WebMenuClassification | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebMenuClassification/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebMenuClassification with id ${id}`);
    } else {
      return new WebMenuClassification(await response.text());
    }
  }
}

WebMenuClassification satisfies StarRezStructureStatic<WebMenuClassification>
