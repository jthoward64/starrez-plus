// Generated from XML description of PortalChoice

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalChoice {
  portalChoiceID?: number;
  portalProcessID?: number;
  description?: string;
  comments?: string;
  className?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalChoice");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalChoiceID != null) this.portalChoiceID = (data.PortalChoiceID != null ? parseInt(data.PortalChoiceID, 10) : data.PortalChoiceID);
    if (data.PortalProcessID != null) this.portalProcessID = (data.PortalProcessID != null ? parseInt(data.PortalProcessID, 10) : data.PortalProcessID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ClassName != null) this.className = data.ClassName;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<PortalChoice | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalChoice/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalChoice with id ${id}`);
    } else {
      return new PortalChoice(await response.text());
    }
  }
}

PortalChoice satisfies StarRezStructureStatic<PortalChoice>
