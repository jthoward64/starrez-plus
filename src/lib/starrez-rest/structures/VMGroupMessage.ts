// Generated from XML description of VMGroupMessage

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class VMGroupMessage {
  vMGroupMessageID?: number;
  vMGroupID?: number;
  vMGroupMessageDate?: Date;
  duration?: number;
  filename?: string;
  subject?: string;
  senderNumber?: string;
  sender?: string;
  priority?: number;
  status?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMGroupMessage");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMGroupMessageID != null) this.vMGroupMessageID = (data.VMGroupMessageID != null ? parseInt(data.VMGroupMessageID, 10) : data.VMGroupMessageID);
    if (data.VMGroupID != null) this.vMGroupID = (data.VMGroupID != null ? parseInt(data.VMGroupID, 10) : data.VMGroupID);
    if (data.VMGroupMessageDate != null) this.vMGroupMessageDate = (data.VMGroupMessageDate != null ? new Date(data.VMGroupMessageDate) : data.VMGroupMessageDate);
    if (data.Duration != null) this.duration = (data.Duration != null ? parseInt(data.Duration, 10) : data.Duration);
    if (data.Filename != null) this.filename = data.Filename;
    if (data.Subject != null) this.subject = data.Subject;
    if (data.SenderNumber != null) this.senderNumber = data.SenderNumber;
    if (data.Sender != null) this.sender = data.Sender;
    if (data.Priority != null) this.priority = (data.Priority != null ? parseInt(data.Priority, 10) : data.Priority);
    if (data.Status != null) this.status = (data.Status != null ? parseInt(data.Status, 10) : data.Status);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a VMGroupMessage by its ID or by exact match on other fields.
   * @param param Either the ID of the VMGroupMessage to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single VMGroupMessage object or null (if id) or an array of VMGroupMessage objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<VMGroupMessage | null>;
  static async select(param: Partial<Record<keyof VMGroupMessage, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMGroupMessage[]>;
  static async select(param: number | Partial<Record<keyof VMGroupMessage, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMGroupMessage | VMGroupMessage[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMGroupMessage/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMGroupMessage`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VMGroupMessage with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new VMGroupMessage(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new VMGroupMessage(entry));
      }
    }
  }
}

VMGroupMessage satisfies StarRezStructureStatic<VMGroupMessage>
