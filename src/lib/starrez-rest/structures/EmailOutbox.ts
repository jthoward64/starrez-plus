// Generated from XML description of EmailOutbox

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EmailOutbox {
  emailOutboxID?: number;
  addressTo?: string;
  addressCC?: string;
  addressBCC?: string;
  fromAddress?: string;
  fromName?: string;
  smtpUsername?: string;
  smtpPassword?: any;
  subject?: string;
  body?: string;
  attachmentPath?: string;
  dateToSend?: Date;
  sent?: boolean;
  sentAt?: Date | null;
  failed?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EmailOutbox");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EmailOutboxID != null) this.emailOutboxID = (data.EmailOutboxID != null ? parseInt(data.EmailOutboxID, 10) : data.EmailOutboxID);
    if (data.AddressTo != null) this.addressTo = data.AddressTo;
    if (data.AddressCC != null) this.addressCC = data.AddressCC;
    if (data.AddressBCC != null) this.addressBCC = data.AddressBCC;
    if (data.FromAddress != null) this.fromAddress = data.FromAddress;
    if (data.FromName != null) this.fromName = data.FromName;
    if (data.SmtpUsername != null) this.smtpUsername = data.SmtpUsername;
    if (data.SmtpPassword != null) this.smtpPassword = data.SmtpPassword;
    if (data.Subject != null) this.subject = data.Subject;
    if (data.Body != null) this.body = data.Body;
    if (data.AttachmentPath != null) this.attachmentPath = data.AttachmentPath;
    if (data.DateToSend != null) this.dateToSend = (data.DateToSend != null ? new Date(data.DateToSend) : data.DateToSend);
    if (data.Sent != null) this.sent = data.Sent === 'true';
    if (data.SentAt != null) this.sentAt = (data.SentAt != null ? new Date(data.SentAt) : data.SentAt);
    if (data.Failed != null) this.failed = data.Failed === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EmailOutbox by its ID or by exact match on other fields.
   * @param param Either the ID of the EmailOutbox to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EmailOutbox object or null (if id) or an array of EmailOutbox objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EmailOutbox | null>;
  static async select(param: Partial<Record<keyof EmailOutbox, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EmailOutbox[]>;
  static async select(param: number | Partial<Record<keyof EmailOutbox, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EmailOutbox | EmailOutbox[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EmailOutbox/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EmailOutbox`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EmailOutbox with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EmailOutbox(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EmailOutbox(entry));
      }
    }
  }
}

EmailOutbox satisfies StarRezStructureStatic<EmailOutbox>
