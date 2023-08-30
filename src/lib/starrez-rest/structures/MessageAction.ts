// Generated from XML description of MessageAction

import { starRezXmlToJson } from "../parsing.js";

export class MessageAction {
  messageActionID?: number;
  description?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "MessageAction");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.MessageActionID != null) this.messageActionID = parseInt(data.MessageActionID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
