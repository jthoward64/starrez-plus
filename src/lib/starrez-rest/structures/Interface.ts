// Generated from XML description of Interface

import { starRezXmlToJson } from "../parsing.js";

export class Interface {
  interfaceID?: number;
  interfaceApplicationID?: number;
  interfaceActionEnum?: unknown;
  entryID?: number;
  pinNumber?: number;
  roomSpaceID?: number;
  extensionID?: number;
  old_RoomSpaceID?: number;
  old_ExtensionID?: number;
  logDate?: Date;
  entryName?: string;
  comments?: string;
  machineName?: string;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Interface");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.InterfaceID != null) this.interfaceID = parseInt(data.InterfaceID, 10);
    if (data.InterfaceApplicationID != null) this.interfaceApplicationID = parseInt(data.InterfaceApplicationID, 10);
    if (data.InterfaceActionEnum != null) this.interfaceActionEnum = data.InterfaceActionEnum;
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.PinNumber != null) this.pinNumber = parseInt(data.PinNumber, 10);
    if (data.RoomSpaceID != null) this.roomSpaceID = parseInt(data.RoomSpaceID, 10);
    if (data.ExtensionID != null) this.extensionID = parseInt(data.ExtensionID, 10);
    if (data.Old_RoomSpaceID != null) this.old_RoomSpaceID = parseInt(data.Old_RoomSpaceID, 10);
    if (data.Old_ExtensionID != null) this.old_ExtensionID = parseInt(data.Old_ExtensionID, 10);
    if (data.LogDate != null) this.logDate = new Date(data.LogDate);
    if (data.EntryName != null) this.entryName = data.EntryName;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
