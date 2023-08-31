// Generated from XML description of PortalChoice

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

  /**
   * Fetches a PortalChoice by its ID or by exact match on other fields.
   * @param param Either the ID of the PortalChoice to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single PortalChoice object or null (if id) or an array of PortalChoice objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<PortalChoice | null>;
  static async select(param: Partial<Record<keyof PortalChoice, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalChoice[]>;
  static async select(param: number | Partial<Record<keyof PortalChoice, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalChoice | PortalChoice[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalChoice/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalChoice`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalChoice with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new PortalChoice(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new PortalChoice(entry));
      }
    }
  }
}

PortalChoice satisfies StarRezStructureStatic<PortalChoice>
