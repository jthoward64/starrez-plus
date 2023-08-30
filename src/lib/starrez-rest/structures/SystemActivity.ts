// Generated from XML description of SystemActivity

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class SystemActivity {
  systemActivityID?: number;
  client?: any;
  tracking?: any;
  activityKey?: any;
  instance?: any;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "SystemActivity");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.SystemActivityID != null) this.systemActivityID = (data.SystemActivityID != null ? parseInt(data.SystemActivityID, 10) : data.SystemActivityID);
    if (data.Client != null) this.client = data.Client;
    if (data.Tracking != null) this.tracking = data.Tracking;
    if (data.ActivityKey != null) this.activityKey = data.ActivityKey;
    if (data.Instance != null) this.instance = data.Instance;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<SystemActivity | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SystemActivity/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch SystemActivity with id ${id}`);
    } else {
      return new SystemActivity(await response.text());
    }
  }
}

SystemActivity satisfies StarRezStructureStatic<SystemActivity>
