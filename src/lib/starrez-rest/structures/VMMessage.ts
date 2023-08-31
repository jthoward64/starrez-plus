// Generated from XML description of VMMessage

import { starRezXmlToJson } from "../parsing.js";
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<VMMessage | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMMessage/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VMMessage with id ${id}`);
    } else {
      return new VMMessage(await response.text());
    }
  }
}

VMMessage satisfies StarRezStructureStatic<VMMessage>
