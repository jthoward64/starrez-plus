// Generated from XML description of NoVisitorPeriod

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class NoVisitorPeriod {
  noVisitorPeriodID?: number;
  description?: string;
  noVisitorStartDate?: Date;
  noVisitorEndDate?: Date;
  enabled?: boolean;
  recordTypeEnum?: unknown;
  visitorTypeID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "NoVisitorPeriod");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.NoVisitorPeriodID != null) this.noVisitorPeriodID = (data.NoVisitorPeriodID != null ? parseInt(data.NoVisitorPeriodID, 10) : data.NoVisitorPeriodID);
    if (data.Description != null) this.description = data.Description;
    if (data.NoVisitorStartDate != null) this.noVisitorStartDate = (data.NoVisitorStartDate != null ? new Date(data.NoVisitorStartDate) : data.NoVisitorStartDate);
    if (data.NoVisitorEndDate != null) this.noVisitorEndDate = (data.NoVisitorEndDate != null ? new Date(data.NoVisitorEndDate) : data.NoVisitorEndDate);
    if (data.Enabled != null) this.enabled = data.Enabled === 'true';
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.VisitorTypeID != null) this.visitorTypeID = (data.VisitorTypeID != null ? parseInt(data.VisitorTypeID, 10) : data.VisitorTypeID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<NoVisitorPeriod | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/NoVisitorPeriod/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch NoVisitorPeriod with id ${id}`);
    } else {
      return new NoVisitorPeriod(await response.text());
    }
  }
}

NoVisitorPeriod satisfies StarRezStructureStatic<NoVisitorPeriod>
