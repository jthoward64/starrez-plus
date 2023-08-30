// Generated from XML description of ElectronicIdentityType

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ElectronicIdentityType {
  electronicIdentityTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  viewOnWeb?: boolean;
  urlFormat?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ElectronicIdentityType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ElectronicIdentityTypeID != null) this.electronicIdentityTypeID = (data.ElectronicIdentityTypeID != null ? parseInt(data.ElectronicIdentityTypeID, 10) : data.ElectronicIdentityTypeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.UrlFormat != null) this.urlFormat = data.UrlFormat;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ElectronicIdentityType | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ElectronicIdentityType/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ElectronicIdentityType with id ${id}`);
    } else {
      return new ElectronicIdentityType(await response.text());
    }
  }
}

ElectronicIdentityType satisfies StarRezStructureStatic<ElectronicIdentityType>
