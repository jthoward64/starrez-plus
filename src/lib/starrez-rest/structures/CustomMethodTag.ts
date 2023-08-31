// Generated from XML description of CustomMethodTag

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.CustomMethodTagID != null) this.customMethodTagID = (data.CustomMethodTagID != null ? parseInt(data.CustomMethodTagID, 10) : data.CustomMethodTagID);
    if (data.MethodName != null) this.methodName = data.MethodName;
    if (data.AddinFilename != null) this.addinFilename = data.AddinFilename;
    if (data.SessionTag != null) this.sessionTag = (data.SessionTag != null ? parseInt(data.SessionTag, 10) : data.SessionTag);
    if (data.DateLastRan != null) this.dateLastRan = (data.DateLastRan != null ? new Date(data.DateLastRan) : data.DateLastRan);
    if (data.BatchNumber != null) this.batchNumber = (data.BatchNumber != null ? parseInt(data.BatchNumber, 10) : data.BatchNumber);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<CustomMethodTag | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CustomMethodTag/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch CustomMethodTag with id ${id}`);
    } else {
      return new CustomMethodTag(await response.text());
    }
  }
}

CustomMethodTag satisfies StarRezStructureStatic<CustomMethodTag>
