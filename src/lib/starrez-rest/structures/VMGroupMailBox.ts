// Generated from XML description of VMGroupMailBox

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class VMGroupMailBox {
  vMGroupMailBoxID?: number;
  vMGroupID?: number;
  vMMailBoxID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMGroupMailBox");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMGroupMailBoxID != null) this.vMGroupMailBoxID = (data.VMGroupMailBoxID != null ? parseInt(data.VMGroupMailBoxID, 10) : data.VMGroupMailBoxID);
    if (data.VMGroupID != null) this.vMGroupID = (data.VMGroupID != null ? parseInt(data.VMGroupID, 10) : data.VMGroupID);
    if (data.VMMailBoxID != null) this.vMMailBoxID = (data.VMMailBoxID != null ? parseInt(data.VMMailBoxID, 10) : data.VMMailBoxID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<VMGroupMailBox | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMGroupMailBox/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch VMGroupMailBox with id ${id}`);
    } else {
      return new VMGroupMailBox(await response.text());
    }
  }
}

VMGroupMailBox satisfies StarRezStructureStatic<VMGroupMailBox>
