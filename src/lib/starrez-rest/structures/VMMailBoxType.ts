// Generated from XML description of VMMailBoxType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class VMMailBoxType {
  vMMailBoxTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  allowCallDelivery?: boolean;
  allowGroupCreate?: boolean;
  allowGroupMessage?: boolean;
  allowShared?: boolean;
  fixedSharedGreeting?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMMailBoxType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMMailBoxTypeID != null) this.vMMailBoxTypeID = (data.VMMailBoxTypeID != null ? parseInt(data.VMMailBoxTypeID, 10) : data.VMMailBoxTypeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.AllowCallDelivery != null) this.allowCallDelivery = data.AllowCallDelivery === 'true';
    if (data.AllowGroupCreate != null) this.allowGroupCreate = data.AllowGroupCreate === 'true';
    if (data.AllowGroupMessage != null) this.allowGroupMessage = data.AllowGroupMessage === 'true';
    if (data.AllowShared != null) this.allowShared = data.AllowShared === 'true';
    if (data.FixedSharedGreeting != null) this.fixedSharedGreeting = data.FixedSharedGreeting === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a VMMailBoxType by its ID or by exact match on other fields.
   * @param param Either the ID of the VMMailBoxType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single VMMailBoxType object or null (if id) or an array of VMMailBoxType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<VMMailBoxType | null>;
  static async select(param: Partial<Record<keyof VMMailBoxType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMMailBoxType[]>;
  static async select(param: number | Partial<Record<keyof VMMailBoxType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMMailBoxType | VMMailBoxType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMMailBoxType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMMailBoxType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VMMailBoxType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new VMMailBoxType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new VMMailBoxType(entry));
      }
    }
  }
}

VMMailBoxType satisfies StarRezStructureStatic<VMMailBoxType>
