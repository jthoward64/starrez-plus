// Generated from XML description of VMMessage

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class VMMessage {
  vMMessageID?: number;
  vMMailBoxID?: number;
  vMMessageDate?: Date;
  duration?: number;
  vMGroupMessageID?: number;
  filename?: string;
  subject?: string;
  sender?: string;
  senderNumber?: string;
  priority?: number;
  status?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMMessage");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMMessageID != null) this.vMMessageID = (data.VMMessageID != null ? parseInt(data.VMMessageID, 10) : data.VMMessageID);
    if (data.VMMailBoxID != null) this.vMMailBoxID = (data.VMMailBoxID != null ? parseInt(data.VMMailBoxID, 10) : data.VMMailBoxID);
    if (data.VMMessageDate != null) this.vMMessageDate = (data.VMMessageDate != null ? new Date(data.VMMessageDate) : data.VMMessageDate);
    if (data.Duration != null) this.duration = (data.Duration != null ? parseInt(data.Duration, 10) : data.Duration);
    if (data.VMGroupMessageID != null) this.vMGroupMessageID = (data.VMGroupMessageID != null ? parseInt(data.VMGroupMessageID, 10) : data.VMGroupMessageID);
    if (data.Filename != null) this.filename = data.Filename;
    if (data.Subject != null) this.subject = data.Subject;
    if (data.Sender != null) this.sender = data.Sender;
    if (data.SenderNumber != null) this.senderNumber = data.SenderNumber;
    if (data.Priority != null) this.priority = (data.Priority != null ? parseInt(data.Priority, 10) : data.Priority);
    if (data.Status != null) this.status = (data.Status != null ? parseInt(data.Status, 10) : data.Status);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a VMMessage by its ID or by exact match on other fields.
   * @param param Either the ID of the VMMessage to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single VMMessage object or null (if id) or an array of VMMessage objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<VMMessage | null>;
  static async select(param: Partial<Record<keyof VMMessage, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMMessage[]>;
  static async select(param: number | Partial<Record<keyof VMMessage, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMMessage | VMMessage[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMMessage/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMMessage`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VMMessage with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new VMMessage(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new VMMessage(entry));
      }
    }
  }
}

VMMessage satisfies StarRezStructureStatic<VMMessage>
