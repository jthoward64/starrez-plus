// Generated from XML description of VMGroup

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class VMGroup {
  vMGroupID?: number;
  groupNumber?: number;
  vMGroupName?: string;
  extensionType?: boolean;
  description?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMGroup");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMGroupID != null) this.vMGroupID = (data.VMGroupID != null ? parseInt(data.VMGroupID, 10) : data.VMGroupID);
    if (data.GroupNumber != null) this.groupNumber = (data.GroupNumber != null ? parseInt(data.GroupNumber, 10) : data.GroupNumber);
    if (data.VMGroupName != null) this.vMGroupName = data.VMGroupName;
    if (data.ExtensionType != null) this.extensionType = data.ExtensionType === 'true';
    if (data.Description != null) this.description = data.Description;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<VMGroup | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMGroup/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VMGroup with id ${id}`);
    } else {
      return new VMGroup(await response.text());
    }
  }
}

VMGroup satisfies StarRezStructureStatic<VMGroup>
