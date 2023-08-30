// Generated from XML description of MessageSubscription

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.MessageSubscriptionID != null) this.messageSubscriptionID = parseInt(data.MessageSubscriptionID, 10);
    if (data.MessageActionID != null) this.messageActionID = parseInt(data.MessageActionID, 10);
    if (data.MessageSubscriberID != null) this.messageSubscriberID = parseInt(data.MessageSubscriberID, 10);
    if (data.Enabled != null) this.enabled = data.Enabled === 'true';
    if (data.ActiveStartDate != null) this.activeStartDate = new Date(data.ActiveStartDate);
    if (data.ActiveEndDate != null) this.activeEndDate = new Date(data.ActiveEndDate);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

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
