// Generated from XML description of DynamicListPermission

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class DynamicListPermission {
  dynamicListPermissionID?: number;
  dynamicListID?: number;
  accessTypeEnum?: unknown;
  securityGroupID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "DynamicListPermission");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.DynamicListPermissionID != null) this.dynamicListPermissionID = parseInt(data.DynamicListPermissionID, 10);
    if (data.DynamicListID != null) this.dynamicListID = parseInt(data.DynamicListID, 10);
    if (data.AccessTypeEnum != null) this.accessTypeEnum = data.AccessTypeEnum;
    if (data.SecurityGroupID != null) this.securityGroupID = parseInt(data.SecurityGroupID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<DynamicListPermission | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/DynamicListPermission/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch DynamicListPermission with id ${id}`);
    } else {
      return new DynamicListPermission(await response.text());
    }
}

}
