// Generated from XML description of MessageSubscription

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class MessageSubscription {
  messageSubscriptionID?: number;
  messageActionID?: number;
  messageSubscriberID?: number;
  enabled?: boolean;
  activeStartDate?: Date | null;
  activeEndDate?: Date | null;
  description?: string;
  comments?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "MessageSubscription");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.MessageSubscriptionID != null) this.messageSubscriptionID = (data.MessageSubscriptionID != null ? parseInt(data.MessageSubscriptionID, 10) : data.MessageSubscriptionID);
    if (data.MessageActionID != null) this.messageActionID = (data.MessageActionID != null ? parseInt(data.MessageActionID, 10) : data.MessageActionID);
    if (data.MessageSubscriberID != null) this.messageSubscriberID = (data.MessageSubscriberID != null ? parseInt(data.MessageSubscriberID, 10) : data.MessageSubscriberID);
    if (data.Enabled != null) this.enabled = data.Enabled === 'true';
    if (data.ActiveStartDate != null) this.activeStartDate = (data.ActiveStartDate != null ? new Date(data.ActiveStartDate) : data.ActiveStartDate);
    if (data.ActiveEndDate != null) this.activeEndDate = (data.ActiveEndDate != null ? new Date(data.ActiveEndDate) : data.ActiveEndDate);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<MessageSubscription | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MessageSubscription/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch MessageSubscription with id ${id}`);
    } else {
      return new MessageSubscription(await response.text());
    }
  }
}

MessageSubscription satisfies StarRezStructureStatic<MessageSubscription>
