// Generated from XML description of FunctionBookingAttendee

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class FunctionBookingAttendee {
  functionBookingAttendeeID?: number;
  functionBookingID?: number;
  entryID?: number;
  quantity?: number;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionBookingAttendee");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionBookingAttendeeID != null) this.functionBookingAttendeeID = parseInt(data.FunctionBookingAttendeeID, 10);
    if (data.FunctionBookingID != null) this.functionBookingID = parseInt(data.FunctionBookingID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.Quantity != null) this.quantity = parseInt(data.Quantity, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<FunctionBookingAttendee | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionBookingAttendee/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionBookingAttendee with id ${id}`);
    } else {
      return new FunctionBookingAttendee(await response.text());
    }
}

}
