// Generated from XML description of WaitListEntryApplication

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WaitListEntryApplication {
  waitListEntryApplicationID?: number;
  waitListID?: number;
  entryApplicationID?: number;
  waitListOrder?: number;
  numberOfBedrooms?: number;
  numberOfBathrooms?: number;
  rentAmount?: string;
  active?: boolean;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WaitListEntryApplication");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WaitListEntryApplicationID != null) this.waitListEntryApplicationID = (data.WaitListEntryApplicationID != null ? parseInt(data.WaitListEntryApplicationID, 10) : data.WaitListEntryApplicationID);
    if (data.WaitListID != null) this.waitListID = (data.WaitListID != null ? parseInt(data.WaitListID, 10) : data.WaitListID);
    if (data.EntryApplicationID != null) this.entryApplicationID = (data.EntryApplicationID != null ? parseInt(data.EntryApplicationID, 10) : data.EntryApplicationID);
    if (data.WaitListOrder != null) this.waitListOrder = (data.WaitListOrder != null ? parseInt(data.WaitListOrder, 10) : data.WaitListOrder);
    if (data.NumberOfBedrooms != null) this.numberOfBedrooms = (data.NumberOfBedrooms != null ? parseInt(data.NumberOfBedrooms, 10) : data.NumberOfBedrooms);
    if (data.NumberOfBathrooms != null) this.numberOfBathrooms = (data.NumberOfBathrooms != null ? parseInt(data.NumberOfBathrooms, 10) : data.NumberOfBathrooms);
    if (data.RentAmount != null) this.rentAmount = data.RentAmount;
    if (data.Active != null) this.active = data.Active === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WaitListEntryApplication | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WaitListEntryApplication/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch WaitListEntryApplication with id ${id}`);
    } else {
      return new WaitListEntryApplication(await response.text());
    }
  }
}

WaitListEntryApplication satisfies StarRezStructureStatic<WaitListEntryApplication>
