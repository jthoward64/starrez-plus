// Generated from XML description of PortalStepLink

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.PortalStepLinkID != null) this.portalStepLinkID = (data.PortalStepLinkID != null ? parseInt(data.PortalStepLinkID, 10) : data.PortalStepLinkID);
    if (data.PortalStepID != null) this.portalStepID = (data.PortalStepID != null ? parseInt(data.PortalStepID, 10) : data.PortalStepID);
    if (data.Next_PortalStepID != null) this.next_PortalStepID = (data.Next_PortalStepID != null ? parseInt(data.Next_PortalStepID, 10) : data.Next_PortalStepID);
    if (data.CheckOrder != null) this.checkOrder = (data.CheckOrder != null ? parseInt(data.CheckOrder, 10) : data.CheckOrder);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<PortalStepLink | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalStepLink/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalStepLink with id ${id}`);
    } else {
      return new PortalStepLink(await response.text());
    }
  }
}

PortalStepLink satisfies StarRezStructureStatic<PortalStepLink>
