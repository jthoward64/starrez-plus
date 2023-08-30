// Generated from XML description of PortalPage

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalPage {
  portalPageID?: number;
  portalProcessID?: number;
  description?: string;
  className?: string;
  comments?: string;
  parentID?: number;
  enabled?: boolean;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalPage");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalPageID != null) this.portalPageID = parseInt(data.PortalPageID, 10);
    if (data.PortalProcessID != null) this.portalProcessID = parseInt(data.PortalProcessID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.ClassName != null) this.className = data.ClassName;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ParentID != null) this.parentID = parseInt(data.ParentID, 10);
    if (data.Enabled != null) this.enabled = data.Enabled === 'true';
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<PortalPage | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalPage/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalPage with id ${id}`);
    } else {
      return new PortalPage(await response.text());
    }
  }
}

PortalPage satisfies StarRezStructureStatic<PortalPage>
