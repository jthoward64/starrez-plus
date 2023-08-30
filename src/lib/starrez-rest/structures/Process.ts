// Generated from XML description of Process

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Process {
  processID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  termSessionID?: number;
  categoryID?: number;
  roomLocationID?: number;
  comments?: string;
  maxPerEntry?: number;
  timeSlotsForRoom?: boolean;
  viewOnWeb?: boolean;
  webDescription?: string;
  webOrder?: number;
  webComments?: string;
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
    const data = starRezXmlToJson(xml, "Process");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ProcessID != null) this.processID = parseInt(data.ProcessID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.RoomLocationID != null) this.roomLocationID = parseInt(data.RoomLocationID, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.MaxPerEntry != null) this.maxPerEntry = parseInt(data.MaxPerEntry, 10);
    if (data.TimeSlotsForRoom != null) this.timeSlotsForRoom = data.TimeSlotsForRoom === 'true';
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebOrder != null) this.webOrder = parseInt(data.WebOrder, 10);
    if (data.WebComments != null) this.webComments = data.WebComments;
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Process | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Process/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Process with id ${id}`);
    } else {
      return new Process(await response.text());
    }
  }
}

Process satisfies StarRezStructureStatic<Process>
