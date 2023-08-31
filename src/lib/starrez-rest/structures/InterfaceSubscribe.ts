// Generated from XML description of InterfaceSubscribe

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class InterfaceSubscribe {
  interfaceSubscribeID?: number;
  interfaceApplicationID?: number;
  interfaceActionEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "InterfaceSubscribe");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.InterfaceSubscribeID != null) this.interfaceSubscribeID = (data.InterfaceSubscribeID != null ? parseInt(data.InterfaceSubscribeID, 10) : data.InterfaceSubscribeID);
    if (data.InterfaceApplicationID != null) this.interfaceApplicationID = (data.InterfaceApplicationID != null ? parseInt(data.InterfaceApplicationID, 10) : data.InterfaceApplicationID);
    if (data.InterfaceActionEnum != null) this.interfaceActionEnum = data.InterfaceActionEnum;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<InterfaceSubscribe | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/InterfaceSubscribe/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch InterfaceSubscribe with id ${id}`);
    } else {
      return new InterfaceSubscribe(await response.text());
    }
  }
}

InterfaceSubscribe satisfies StarRezStructureStatic<InterfaceSubscribe>
