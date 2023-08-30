// Generated from XML description of LogInterface

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class LogInterface {
  logInterfaceID?: number;
  interfaceID?: number;
  interfaceApplicationID?: number;
  interfaceActionEnum?: unknown;
  entryID?: number;
  pinNumber?: number;
  roomSpaceID?: number;
  extensionID?: string;
  old_RoomSpaceID?: number;
  old_ExtensionID?: string;
  logDate?: Date;
  logActionedDate?: Date;
  entryName?: string;
  comments?: string;
  machineName?: string;
  username?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "LogInterface");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.LogInterfaceID != null) this.logInterfaceID = parseInt(data.LogInterfaceID, 10);
    if (data.InterfaceID != null) this.interfaceID = parseInt(data.InterfaceID, 10);
    if (data.InterfaceApplicationID != null) this.interfaceApplicationID = parseInt(data.InterfaceApplicationID, 10);
    if (data.InterfaceActionEnum != null) this.interfaceActionEnum = data.InterfaceActionEnum;
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.PinNumber != null) this.pinNumber = parseInt(data.PinNumber, 10);
    if (data.RoomSpaceID != null) this.roomSpaceID = parseInt(data.RoomSpaceID, 10);
    if (data.ExtensionID != null) this.extensionID = data.ExtensionID;
    if (data.Old_RoomSpaceID != null) this.old_RoomSpaceID = parseInt(data.Old_RoomSpaceID, 10);
    if (data.Old_ExtensionID != null) this.old_ExtensionID = data.Old_ExtensionID;
    if (data.LogDate != null) this.logDate = new Date(data.LogDate);
    if (data.LogActionedDate != null) this.logActionedDate = new Date(data.LogActionedDate);
    if (data.EntryName != null) this.entryName = data.EntryName;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.Username != null) this.username = data.Username;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<LogInterface | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/LogInterface/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch LogInterface with id ${id}`);
    } else {
      return new LogInterface(await response.text());
    }
  }
}

LogInterface satisfies StarRezStructureStatic<LogInterface>
