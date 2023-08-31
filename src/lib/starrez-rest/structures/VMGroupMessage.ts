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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<VMGroupMessage | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMGroupMessage/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VMGroupMessage with id ${id}`);
    } else {
      return new VMGroupMessage(await response.text());
    }
  }
}

VMGroupMessage satisfies StarRezStructureStatic<VMGroupMessage>
