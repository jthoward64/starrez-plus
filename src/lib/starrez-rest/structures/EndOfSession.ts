// Generated from XML description of EndOfSession

import { starRezXmlToJson } from "../parsing.js";

export class EndOfSession {
  endOfSessionID?: number;
  endOfSessionTypeEnum?: unknown;
  dateSession?: Date;
  comments?: string;
  machineName?: string;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EndOfSession");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EndOfSessionID != null) this.endOfSessionID = parseInt(data.EndOfSessionID, 10);
    if (data.EndOfSessionTypeEnum != null) this.endOfSessionTypeEnum = data.EndOfSessionTypeEnum;
    if (data.DateSession != null) this.dateSession = new Date(data.DateSession);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
