// Generated from XML description of RoomSpaceDetail

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceDetail {
  roomSpaceDetailID?: number;
  roomSpaceID?: number;
  roomService1Date?: Date | null;
  roomService2Date?: Date | null;
  roomService3Date?: Date | null;
  roomService1Comments?: string;
  roomService2Comments?: string;
  roomService3Comments?: string;
  roomService1Force?: boolean;
  roomService2Force?: boolean;
  roomService3Force?: boolean;
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
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceDetail");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceDetailID != null) this.roomSpaceDetailID = parseInt(data.RoomSpaceDetailID, 10);
    if (data.RoomSpaceID != null) this.roomSpaceID = parseInt(data.RoomSpaceID, 10);
    if (data.RoomService1Date != null) this.roomService1Date = new Date(data.RoomService1Date);
    if (data.RoomService2Date != null) this.roomService2Date = new Date(data.RoomService2Date);
    if (data.RoomService3Date != null) this.roomService3Date = new Date(data.RoomService3Date);
    if (data.RoomService1Comments != null) this.roomService1Comments = data.RoomService1Comments;
    if (data.RoomService2Comments != null) this.roomService2Comments = data.RoomService2Comments;
    if (data.RoomService3Comments != null) this.roomService3Comments = data.RoomService3Comments;
    if (data.RoomService1Force != null) this.roomService1Force = data.RoomService1Force === 'true';
    if (data.RoomService2Force != null) this.roomService2Force = data.RoomService2Force === 'true';
    if (data.RoomService3Force != null) this.roomService3Force = data.RoomService3Force === 'true';
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
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceDetail | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceDetail/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceDetail with id ${id}`);
    } else {
      return new RoomSpaceDetail(await response.text());
    }
  }
}

RoomSpaceDetail satisfies StarRezStructureStatic<RoomSpaceDetail>
