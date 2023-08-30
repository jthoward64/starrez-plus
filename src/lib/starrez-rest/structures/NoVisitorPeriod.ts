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

    if (data.NoVisitorPeriodID != null) this.noVisitorPeriodID = parseInt(data.NoVisitorPeriodID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.NoVisitorStartDate != null) this.noVisitorStartDate = new Date(data.NoVisitorStartDate);
    if (data.NoVisitorEndDate != null) this.noVisitorEndDate = new Date(data.NoVisitorEndDate);
    if (data.Enabled != null) this.enabled = data.Enabled === 'true';
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.VisitorTypeID != null) this.visitorTypeID = parseInt(data.VisitorTypeID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<NoVisitorPeriod | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/NoVisitorPeriod/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch NoVisitorPeriod with id ${id}`);
    } else {
      return new NoVisitorPeriod(await response.text());
    }
  }
}

NoVisitorPeriod satisfies StarRezStructureStatic<NoVisitorPeriod>
