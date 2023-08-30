// Generated from XML description of EntryTemporarySpace

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryTemporarySpace {
  entryTemporarySpaceID?: number;
  entryID?: number;
  roomSpaceID?: number;
  bookingID?: number;
  temporarySpaceTypeEnum?: unknown;
  startDate?: Date;
  endDate?: Date;
  reason?: string;
  notes?: string;
  customBit1?: boolean;
  customBit2?: boolean;
  customString1?: string;
  customString2?: string;
  customString3?: string;
  customString4?: string;
  customString5?: string;
  customString6?: string;
  customDate1?: Date | null;
  customDate2?: Date | null;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryTemporarySpace");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryTemporarySpaceID != null) this.entryTemporarySpaceID = parseInt(data.EntryTemporarySpaceID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.RoomSpaceID != null) this.roomSpaceID = parseInt(data.RoomSpaceID, 10);
    if (data.BookingID != null) this.bookingID = parseInt(data.BookingID, 10);
    if (data.TemporarySpaceTypeEnum != null) this.temporarySpaceTypeEnum = data.TemporarySpaceTypeEnum;
    if (data.StartDate != null) this.startDate = new Date(data.StartDate);
    if (data.EndDate != null) this.endDate = new Date(data.EndDate);
    if (data.Reason != null) this.reason = data.Reason;
    if (data.Notes != null) this.notes = data.Notes;
    if (data.CustomBit1 != null) this.customBit1 = data.CustomBit1 === 'true';
    if (data.CustomBit2 != null) this.customBit2 = data.CustomBit2 === 'true';
    if (data.CustomString1 != null) this.customString1 = data.CustomString1;
    if (data.CustomString2 != null) this.customString2 = data.CustomString2;
    if (data.CustomString3 != null) this.customString3 = data.CustomString3;
    if (data.CustomString4 != null) this.customString4 = data.CustomString4;
    if (data.CustomString5 != null) this.customString5 = data.CustomString5;
    if (data.CustomString6 != null) this.customString6 = data.CustomString6;
    if (data.CustomDate1 != null) this.customDate1 = new Date(data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = new Date(data.CustomDate2);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryTemporarySpace | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryTemporarySpace/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryTemporarySpace with id ${id}`);
    } else {
      return new EntryTemporarySpace(await response.text());
    }
  }
}

EntryTemporarySpace satisfies StarRezStructureStatic<EntryTemporarySpace>
