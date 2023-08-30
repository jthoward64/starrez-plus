// Generated from XML description of EmailFromAddressPermission

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EmailFromAddressPermission {
  emailFromAddressPermissionID?: number;
  emailFromAddressID?: number;
  accessTypeEnum?: unknown;
  securityGroupID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EmailFromAddressPermission");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EmailFromAddressPermissionID != null) this.emailFromAddressPermissionID = (data.EmailFromAddressPermissionID != null ? parseInt(data.EmailFromAddressPermissionID, 10) : data.EmailFromAddressPermissionID);
    if (data.EmailFromAddressID != null) this.emailFromAddressID = (data.EmailFromAddressID != null ? parseInt(data.EmailFromAddressID, 10) : data.EmailFromAddressID);
    if (data.AccessTypeEnum != null) this.accessTypeEnum = data.AccessTypeEnum;
    if (data.SecurityGroupID != null) this.securityGroupID = (data.SecurityGroupID != null ? parseInt(data.SecurityGroupID, 10) : data.SecurityGroupID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EmailFromAddressPermission | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EmailFromAddressPermission/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EmailFromAddressPermission with id ${id}`);
    } else {
      return new EmailFromAddressPermission(await response.text());
    }
  }
}

EmailFromAddressPermission satisfies StarRezStructureStatic<EmailFromAddressPermission>
