// Generated from XML description of PortalStepLink

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class PortalStepLink {
  portalStepLinkID?: number;
  portalStepID?: number;
  next_PortalStepID?: number;
  checkOrder?: number;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalStepLink");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalStepLinkID != null) this.portalStepLinkID = parseInt(data.PortalStepLinkID, 10);
    if (data.PortalStepID != null) this.portalStepID = parseInt(data.PortalStepID, 10);
    if (data.Next_PortalStepID != null) this.next_PortalStepID = parseInt(data.Next_PortalStepID, 10);
    if (data.CheckOrder != null) this.checkOrder = parseInt(data.CheckOrder, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<PortalStepLink | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalStepLink/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalStepLink with id ${id}`);
    } else {
      return new PortalStepLink(await response.text());
    }
}

}
