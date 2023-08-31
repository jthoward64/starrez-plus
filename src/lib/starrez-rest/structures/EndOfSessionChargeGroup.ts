// Generated from XML description of EndOfSessionChargeGroup

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EndOfSessionChargeGroup {
  endOfSessionChargeGroupID?: number;
  endOfSessionID?: number;
  chargeGroupID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EndOfSessionChargeGroup");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EndOfSessionChargeGroupID != null) this.endOfSessionChargeGroupID = (data.EndOfSessionChargeGroupID != null ? parseInt(data.EndOfSessionChargeGroupID, 10) : data.EndOfSessionChargeGroupID);
    if (data.EndOfSessionID != null) this.endOfSessionID = (data.EndOfSessionID != null ? parseInt(data.EndOfSessionID, 10) : data.EndOfSessionID);
    if (data.ChargeGroupID != null) this.chargeGroupID = (data.ChargeGroupID != null ? parseInt(data.ChargeGroupID, 10) : data.ChargeGroupID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EndOfSessionChargeGroup | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EndOfSessionChargeGroup/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EndOfSessionChargeGroup with id ${id}`);
    } else {
      return new EndOfSessionChargeGroup(await response.text());
    }
  }
}

EndOfSessionChargeGroup satisfies StarRezStructureStatic<EndOfSessionChargeGroup>
