// Generated from XML description of CustomMethodTag

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class CustomMethodTag {
  customMethodTagID?: number;
  methodName?: string;
  addinFilename?: string;
  sessionTag?: number;
  dateLastRan?: Date;
  batchNumber?: number;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "CustomMethodTag");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CustomMethodTagID != null) this.customMethodTagID = parseInt(data.CustomMethodTagID, 10);
    if (data.MethodName != null) this.methodName = data.MethodName;
    if (data.AddinFilename != null) this.addinFilename = data.AddinFilename;
    if (data.SessionTag != null) this.sessionTag = parseInt(data.SessionTag, 10);
    if (data.DateLastRan != null) this.dateLastRan = new Date(data.DateLastRan);
    if (data.BatchNumber != null) this.batchNumber = parseInt(data.BatchNumber, 10);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<CustomMethodTag | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CustomMethodTag/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch CustomMethodTag with id ${id}`);
    } else {
      return new CustomMethodTag(await response.text());
    }
}

}
