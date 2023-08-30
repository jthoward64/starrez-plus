// Generated from XML description of RoomSpaceKey

import { starRezXmlToJson } from "../parsing.js";

export class RoomSpaceKey {
  roomSpaceKeyID?: number;
  roomSpaceID?: number;
  roomSpaceKeyTypeID?: number;
  roomSpaceKeyStatusEnum?: unknown;
  roomSpaceKeyBookingID?: number;
  serialNumber?: string;
  description?: string;
  location?: string;
  store?: string;
  cut?: string;
  details?: string;
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
    const data = starRezXmlToJson(xml, "RoomSpaceKey");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceKeyID != null) this.roomSpaceKeyID = parseInt(data.RoomSpaceKeyID, 10);
    if (data.RoomSpaceID != null) this.roomSpaceID = parseInt(data.RoomSpaceID, 10);
    if (data.RoomSpaceKeyTypeID != null) this.roomSpaceKeyTypeID = parseInt(data.RoomSpaceKeyTypeID, 10);
    if (data.RoomSpaceKeyStatusEnum != null) this.roomSpaceKeyStatusEnum = data.RoomSpaceKeyStatusEnum;
    if (data.RoomSpaceKeyBookingID != null) this.roomSpaceKeyBookingID = parseInt(data.RoomSpaceKeyBookingID, 10);
    if (data.SerialNumber != null) this.serialNumber = data.SerialNumber;
    if (data.Description != null) this.description = data.Description;
    if (data.Location != null) this.location = data.Location;
    if (data.Store != null) this.store = data.Store;
    if (data.Cut != null) this.cut = data.Cut;
    if (data.Details != null) this.details = data.Details;
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
}
