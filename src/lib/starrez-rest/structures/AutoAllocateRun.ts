// Generated from XML description of AutoAllocateRun

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class AutoAllocateRun {
  autoAllocateRunID?: number;
  description?: string;
  autoAllocateObject?: any;
  autoAllocateResults?: string;
  lastRan_SecurityUserID?: number;
  lastRanDate?: Date | null;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  enabled?: boolean;
  overrideEntryIDs?: string;
  isCommitted?: boolean;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "AutoAllocateRun");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.AutoAllocateRunID != null) this.autoAllocateRunID = (data.AutoAllocateRunID != null ? parseInt(data.AutoAllocateRunID, 10) : data.AutoAllocateRunID);
    if (data.Description != null) this.description = data.Description;
    if (data.AutoAllocateObject != null) this.autoAllocateObject = data.AutoAllocateObject;
    if (data.AutoAllocateResults != null) this.autoAllocateResults = data.AutoAllocateResults;
    if (data.LastRan_SecurityUserID != null) this.lastRan_SecurityUserID = (data.LastRan_SecurityUserID != null ? parseInt(data.LastRan_SecurityUserID, 10) : data.LastRan_SecurityUserID);
    if (data.LastRanDate != null) this.lastRanDate = (data.LastRanDate != null ? new Date(data.LastRanDate) : data.LastRanDate);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.Enabled != null) this.enabled = data.Enabled === 'true';
    if (data.OverrideEntryIDs != null) this.overrideEntryIDs = data.OverrideEntryIDs;
    if (data.IsCommitted != null) this.isCommitted = data.IsCommitted === 'true';
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a AutoAllocateRun by its ID or by exact match on other fields.
   * @param param Either the ID of the AutoAllocateRun to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single AutoAllocateRun object or null (if id) or an array of AutoAllocateRun objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<AutoAllocateRun | null>;
  static async select(param: Partial<Record<keyof AutoAllocateRun, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<AutoAllocateRun[]>;
  static async select(param: number | Partial<Record<keyof AutoAllocateRun, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<AutoAllocateRun | AutoAllocateRun[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/AutoAllocateRun/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/AutoAllocateRun`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch AutoAllocateRun with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new AutoAllocateRun(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new AutoAllocateRun(entry));
      }
    }
  }
}

AutoAllocateRun satisfies StarRezStructureStatic<AutoAllocateRun>
