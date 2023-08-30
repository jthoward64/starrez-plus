// Generated from XML description of FailedLoginAttempt

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<FailedLoginAttempt | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FailedLoginAttempt/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch FailedLoginAttempt with id ${id}`);
    } else {
      return new FailedLoginAttempt(await response.text());
    }
}

}
