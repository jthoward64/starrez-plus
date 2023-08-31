// Generated from XML description of PortalPageAction

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalPageAction {
  portalPageActionID?: number;
  portalPageID?: number;
  portalActionID?: number;
  eventName?: string;
  checkOrder?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalPageAction");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalPageActionID != null) this.portalPageActionID = (data.PortalPageActionID != null ? parseInt(data.PortalPageActionID, 10) : data.PortalPageActionID);
    if (data.PortalPageID != null) this.portalPageID = (data.PortalPageID != null ? parseInt(data.PortalPageID, 10) : data.PortalPageID);
    if (data.PortalActionID != null) this.portalActionID = (data.PortalActionID != null ? parseInt(data.PortalActionID, 10) : data.PortalActionID);
    if (data.EventName != null) this.eventName = data.EventName;
    if (data.CheckOrder != null) this.checkOrder = (data.CheckOrder != null ? parseInt(data.CheckOrder, 10) : data.CheckOrder);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a PortalPageAction by its ID or by exact match on other fields.
   * @param param Either the ID of the PortalPageAction to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single PortalPageAction object or null (if id) or an array of PortalPageAction objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<PortalPageAction | null>;
  static async select(param: Partial<Record<keyof PortalPageAction, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalPageAction[]>;
  static async select(param: number | Partial<Record<keyof PortalPageAction, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalPageAction | PortalPageAction[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalPageAction/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalPageAction`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalPageAction with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new PortalPageAction(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new PortalPageAction(entry));
      }
    }
  }
}

PortalPageAction satisfies StarRezStructureStatic<PortalPageAction>
