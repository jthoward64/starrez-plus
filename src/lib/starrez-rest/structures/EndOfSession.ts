// Generated from XML description of EndOfSession

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.EndOfSessionID != null) this.endOfSessionID = (data.EndOfSessionID != null ? parseInt(data.EndOfSessionID, 10) : data.EndOfSessionID);
    if (data.EndOfSessionTypeEnum != null) this.endOfSessionTypeEnum = data.EndOfSessionTypeEnum;
    if (data.DateSession != null) this.dateSession = (data.DateSession != null ? new Date(data.DateSession) : data.DateSession);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EndOfSession | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EndOfSession/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EndOfSession with id ${id}`);
    } else {
      return new EndOfSession(await response.text());
    }
  }
}

EndOfSession satisfies StarRezStructureStatic<EndOfSession>
