// Generated from XML description of PortalStep

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalStep {
  portalStepID?: number;
  portalProcessID?: number;
  tableID?: number;
  tableName?: string;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalStep");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalStepID != null) this.portalStepID = (data.PortalStepID != null ? parseInt(data.PortalStepID, 10) : data.PortalStepID);
    if (data.PortalProcessID != null) this.portalProcessID = (data.PortalProcessID != null ? parseInt(data.PortalProcessID, 10) : data.PortalProcessID);
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a PortalStep by its ID or by exact match on other fields.
   * @param param Either the ID of the PortalStep to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single PortalStep object or null (if id) or an array of PortalStep objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<PortalStep | null>;
  static async select(param: Partial<Record<keyof PortalStep, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalStep[]>;
  static async select(param: number | Partial<Record<keyof PortalStep, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalStep | PortalStep[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalStep/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalStep`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalStep with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new PortalStep(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new PortalStep(entry));
      }
    }
  }
}

PortalStep satisfies StarRezStructureStatic<PortalStep>
