// Generated from XML description of FunctionResourceBooking

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FunctionResourceBooking {
  functionResourceBookingID?: number;
  functionRoomBookingID?: number;
  functionResourceID?: number;
  quantity?: number;
  functionResourceAmount?: string;
  functionResourceAmountCost?: string;
  setupNotes?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionResourceBooking");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionResourceBookingID != null) this.functionResourceBookingID = parseInt(data.FunctionResourceBookingID, 10);
    if (data.FunctionRoomBookingID != null) this.functionRoomBookingID = parseInt(data.FunctionRoomBookingID, 10);
    if (data.FunctionResourceID != null) this.functionResourceID = parseInt(data.FunctionResourceID, 10);
    if (data.Quantity != null) this.quantity = parseInt(data.Quantity, 10);
    if (data.FunctionResourceAmount != null) this.functionResourceAmount = data.FunctionResourceAmount;
    if (data.FunctionResourceAmountCost != null) this.functionResourceAmountCost = data.FunctionResourceAmountCost;
    if (data.SetupNotes != null) this.setupNotes = data.SetupNotes;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<FunctionResourceBooking | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionResourceBooking/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionResourceBooking with id ${id}`);
    } else {
      return new FunctionResourceBooking(await response.text());
    }
  }
}

FunctionResourceBooking satisfies StarRezStructureStatic<FunctionResourceBooking>
