// Generated from XML description of EmailOutbox

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.EmailOutboxID != null) this.emailOutboxID = parseInt(data.EmailOutboxID, 10);
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
    if (data.DateToSend != null) this.dateToSend = new Date(data.DateToSend);
    if (data.Sent != null) this.sent = data.Sent === 'true';
    if (data.SentAt != null) this.sentAt = new Date(data.SentAt);
    if (data.Failed != null) this.failed = data.Failed === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
