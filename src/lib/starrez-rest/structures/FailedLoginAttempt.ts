// Generated from XML description of FailedLoginAttempt

import { starRezXmlToJson } from "../parsing.js";

export class FailedLoginAttempt {
  failedLoginAttemptID?: number;
  loginName?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FailedLoginAttempt");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FailedLoginAttemptID != null) this.failedLoginAttemptID = parseInt(data.FailedLoginAttemptID, 10);
    if (data.LoginName != null) this.loginName = data.LoginName;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
