// Generated from XML description of EmailFromAddress

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class EmailFromAddress {
  emailFromAddressID?: number;
  description?: string;
  fromAddress?: string;
  fromName?: string;
  smtpUsername?: string;
  smtpPassword?: any;
  module?: string;
  comments?: string;
  recordTypeEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EmailFromAddress");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EmailFromAddressID != null) this.emailFromAddressID = parseInt(data.EmailFromAddressID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.FromAddress != null) this.fromAddress = data.FromAddress;
    if (data.FromName != null) this.fromName = data.FromName;
    if (data.SmtpUsername != null) this.smtpUsername = data.SmtpUsername;
    if (data.SmtpPassword != null) this.smtpPassword = data.SmtpPassword;
    if (data.Module != null) this.module = data.Module;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EmailFromAddress | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EmailFromAddress/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EmailFromAddress with id ${id}`);
    } else {
      return new EmailFromAddress(await response.text());
    }
}

}
