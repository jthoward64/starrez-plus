// Generated from XML description of FailedLoginAttempt

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FailedLoginAttempt {
  failedLoginAttemptID?: number;
  loginName?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FailedLoginAttempt");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FailedLoginAttemptID != null) this.failedLoginAttemptID = (data.FailedLoginAttemptID != null ? parseInt(data.FailedLoginAttemptID, 10) : data.FailedLoginAttemptID);
    if (data.LoginName != null) this.loginName = data.LoginName;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<FailedLoginAttempt | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FailedLoginAttempt/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FailedLoginAttempt with id ${id}`);
    } else {
      return new FailedLoginAttempt(await response.text());
    }
  }
}

FailedLoginAttempt satisfies StarRezStructureStatic<FailedLoginAttempt>
