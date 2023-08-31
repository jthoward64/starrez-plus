// Generated from XML description of EmailFromAddress

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EmailFromAddress {
  emailFromAddressID?: number;
  description?: string;
  fromAddress?: string;
  fromName?: string;
  smtpUsername?: string;
  smtpPassword?: any;
  module?: string;
  comments?: string;
  recordTypeEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EmailFromAddress");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EmailFromAddressID != null) this.emailFromAddressID = (data.EmailFromAddressID != null ? parseInt(data.EmailFromAddressID, 10) : data.EmailFromAddressID);
    if (data.Description != null) this.description = data.Description;
    if (data.FromAddress != null) this.fromAddress = data.FromAddress;
    if (data.FromName != null) this.fromName = data.FromName;
    if (data.SmtpUsername != null) this.smtpUsername = data.SmtpUsername;
    if (data.SmtpPassword != null) this.smtpPassword = data.SmtpPassword;
    if (data.Module != null) this.module = data.Module;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EmailFromAddress by its ID or by exact match on other fields.
   * @param param Either the ID of the EmailFromAddress to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EmailFromAddress object or null (if id) or an array of EmailFromAddress objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EmailFromAddress | null>;
  static async select(param: Partial<Record<keyof EmailFromAddress, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EmailFromAddress[]>;
  static async select(param: number | Partial<Record<keyof EmailFromAddress, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EmailFromAddress | EmailFromAddress[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EmailFromAddress/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EmailFromAddress`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EmailFromAddress with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EmailFromAddress(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EmailFromAddress(entry));
      }
    }
  }
}

EmailFromAddress satisfies StarRezStructureStatic<EmailFromAddress>
