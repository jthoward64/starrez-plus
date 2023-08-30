// Generated from XML description of Message

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Message {
  messageID?: number;
  messageActionID?: number;
  messageSubscriptionID?: number;
  messageDate?: Date;
  securityUserID?: number;
  machineName?: string;
  className?: string;
  existingData?: string;
  newData?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Message");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.MessageID != null) this.messageID = parseInt(data.MessageID, 10);
    if (data.MessageActionID != null) this.messageActionID = parseInt(data.MessageActionID, 10);
    if (data.MessageSubscriptionID != null) this.messageSubscriptionID = parseInt(data.MessageSubscriptionID, 10);
    if (data.MessageDate != null) this.messageDate = new Date(data.MessageDate);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.ClassName != null) this.className = data.ClassName;
    if (data.ExistingData != null) this.existingData = data.ExistingData;
    if (data.NewData != null) this.newData = data.NewData;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Message | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Message/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Message with id ${id}`);
    } else {
      return new Message(await response.text());
    }
  }
}

Message satisfies StarRezStructureStatic<Message>
