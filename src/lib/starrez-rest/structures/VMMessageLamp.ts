// Generated from XML description of VMMessageLamp

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class VMMessageLamp {
  vMMessageLampID?: number;
  siteID?: number;
  extension?: number;
  lampOn?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMMessageLamp");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMMessageLampID != null) this.vMMessageLampID = parseInt(data.VMMessageLampID, 10);
    if (data.SiteID != null) this.siteID = parseInt(data.SiteID, 10);
    if (data.Extension != null) this.extension = parseInt(data.Extension, 10);
    if (data.LampOn != null) this.lampOn = data.LampOn === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<VMMessageLamp | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMMessageLamp/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch VMMessageLamp with id ${id}`);
    } else {
      return new VMMessageLamp(await response.text());
    }
  }
}

VMMessageLamp satisfies StarRezStructureStatic<VMMessageLamp>
