// Generated from XML description of WebEmailText

import { starRezXmlToJson } from "../parsing.js";

export class WebEmailText {
  webEmailTextID?: number;
  webSectionID?: number;
  emailName?: string;
  subject?: string;
  bodyText?: string;
  sQL?: string;
  securityUserID?: number;
  dateCreated?: Date;
  emailFromAddressID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebEmailText");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebEmailTextID != null) this.webEmailTextID = parseInt(data.WebEmailTextID, 10);
    if (data.WebSectionID != null) this.webSectionID = parseInt(data.WebSectionID, 10);
    if (data.EmailName != null) this.emailName = data.EmailName;
    if (data.Subject != null) this.subject = data.Subject;
    if (data.BodyText != null) this.bodyText = data.BodyText;
    if (data.SQL != null) this.sQL = data.SQL;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.EmailFromAddressID != null) this.emailFromAddressID = parseInt(data.EmailFromAddressID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
