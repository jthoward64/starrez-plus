// Generated from XML description of VMGroup

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.VMGroupID != null) this.vMGroupID = parseInt(data.VMGroupID, 10);
    if (data.GroupNumber != null) this.groupNumber = parseInt(data.GroupNumber, 10);
    if (data.VMGroupName != null) this.vMGroupName = data.VMGroupName;
    if (data.ExtensionType != null) this.extensionType = data.ExtensionType === 'true';
    if (data.Description != null) this.description = data.Description;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<VMGroup | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMGroup/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch VMGroup with id ${id}`);
    } else {
      return new VMGroup(await response.text());
    }
}

}
