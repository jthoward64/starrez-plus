// Generated from XML description of EntryApplicationPortalSection

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryApplicationPortalSection {
  entryApplicationPortalSectionID?: number;
  webSectionID?: number;
  entryApplicationID?: number;
  complete?: boolean;
  completeDate?: Date | null;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryApplicationPortalSection");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryApplicationPortalSectionID != null) this.entryApplicationPortalSectionID = (data.EntryApplicationPortalSectionID != null ? parseInt(data.EntryApplicationPortalSectionID, 10) : data.EntryApplicationPortalSectionID);
    if (data.WebSectionID != null) this.webSectionID = (data.WebSectionID != null ? parseInt(data.WebSectionID, 10) : data.WebSectionID);
    if (data.EntryApplicationID != null) this.entryApplicationID = (data.EntryApplicationID != null ? parseInt(data.EntryApplicationID, 10) : data.EntryApplicationID);
    if (data.Complete != null) this.complete = data.Complete === 'true';
    if (data.CompleteDate != null) this.completeDate = (data.CompleteDate != null ? new Date(data.CompleteDate) : data.CompleteDate);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryApplicationPortalSection by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryApplicationPortalSection to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryApplicationPortalSection object or null (if id) or an array of EntryApplicationPortalSection objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryApplicationPortalSection | null>;
  static async select(param: Partial<Record<keyof EntryApplicationPortalSection, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryApplicationPortalSection[]>;
  static async select(param: number | Partial<Record<keyof EntryApplicationPortalSection, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryApplicationPortalSection | EntryApplicationPortalSection[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryApplicationPortalSection/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryApplicationPortalSection`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryApplicationPortalSection with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryApplicationPortalSection(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryApplicationPortalSection(entry));
      }
    }
  }
}

EntryApplicationPortalSection satisfies StarRezStructureStatic<EntryApplicationPortalSection>
