// Generated from XML description of VMGroupMessage

import { starRezXmlToJson } from "../parsing.js";
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

    if (data.VMGroupMessageID != null) this.vMGroupMessageID = parseInt(data.VMGroupMessageID, 10);
    if (data.VMGroupID != null) this.vMGroupID = parseInt(data.VMGroupID, 10);
    if (data.VMGroupMessageDate != null) this.vMGroupMessageDate = new Date(data.VMGroupMessageDate);
    if (data.Duration != null) this.duration = parseInt(data.Duration, 10);
    if (data.Filename != null) this.filename = data.Filename;
    if (data.Subject != null) this.subject = data.Subject;
    if (data.SenderNumber != null) this.senderNumber = data.SenderNumber;
    if (data.Sender != null) this.sender = data.Sender;
    if (data.Priority != null) this.priority = parseInt(data.Priority, 10);
    if (data.Status != null) this.status = parseInt(data.Status, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<VMGroupMessage | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMGroupMessage/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch VMGroupMessage with id ${id}`);
    } else {
      return new VMGroupMessage(await response.text());
    }
  }
}

VMGroupMessage satisfies StarRezStructureStatic<VMGroupMessage>
