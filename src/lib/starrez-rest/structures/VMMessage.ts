// Generated from XML description of VMMessage

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.VMMessageID != null) this.vMMessageID = parseInt(data.VMMessageID, 10);
    if (data.VMMailBoxID != null) this.vMMailBoxID = parseInt(data.VMMailBoxID, 10);
    if (data.VMMessageDate != null) this.vMMessageDate = new Date(data.VMMessageDate);
    if (data.Duration != null) this.duration = parseInt(data.Duration, 10);
    if (data.VMGroupMessageID != null) this.vMGroupMessageID = parseInt(data.VMGroupMessageID, 10);
    if (data.Filename != null) this.filename = data.Filename;
    if (data.Subject != null) this.subject = data.Subject;
    if (data.Sender != null) this.sender = data.Sender;
    if (data.SenderNumber != null) this.senderNumber = data.SenderNumber;
    if (data.Priority != null) this.priority = parseInt(data.Priority, 10);
    if (data.Status != null) this.status = parseInt(data.Status, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
