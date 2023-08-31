// Generated from XML description of VMGroup

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class VMGroup {
  vMGroupID?: number;
  groupNumber?: number;
  vMGroupName?: string;
  extensionType?: boolean;
  description?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMGroup");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMGroupID != null) this.vMGroupID = (data.VMGroupID != null ? parseInt(data.VMGroupID, 10) : data.VMGroupID);
    if (data.GroupNumber != null) this.groupNumber = (data.GroupNumber != null ? parseInt(data.GroupNumber, 10) : data.GroupNumber);
    if (data.VMGroupName != null) this.vMGroupName = data.VMGroupName;
    if (data.ExtensionType != null) this.extensionType = data.ExtensionType === 'true';
    if (data.Description != null) this.description = data.Description;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a VMGroup by its ID or by exact match on other fields.
   * @param param Either the ID of the VMGroup to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single VMGroup object or null (if id) or an array of VMGroup objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<VMGroup | null>;
  static async select(param: Partial<Record<keyof VMGroup, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMGroup[]>;
  static async select(param: number | Partial<Record<keyof VMGroup, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMGroup | VMGroup[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMGroup/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMGroup`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VMGroup with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new VMGroup(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new VMGroup(entry));
      }
    }
  }
}

VMGroup satisfies StarRezStructureStatic<VMGroup>
