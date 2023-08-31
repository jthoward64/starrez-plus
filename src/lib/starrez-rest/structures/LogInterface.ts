// Generated from XML description of LogInterface

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

    if (data.LogInterfaceID != null) this.logInterfaceID = (data.LogInterfaceID != null ? parseInt(data.LogInterfaceID, 10) : data.LogInterfaceID);
    if (data.InterfaceID != null) this.interfaceID = (data.InterfaceID != null ? parseInt(data.InterfaceID, 10) : data.InterfaceID);
    if (data.InterfaceApplicationID != null) this.interfaceApplicationID = (data.InterfaceApplicationID != null ? parseInt(data.InterfaceApplicationID, 10) : data.InterfaceApplicationID);
    if (data.InterfaceActionEnum != null) this.interfaceActionEnum = data.InterfaceActionEnum;
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.PinNumber != null) this.pinNumber = (data.PinNumber != null ? parseInt(data.PinNumber, 10) : data.PinNumber);
    if (data.RoomSpaceID != null) this.roomSpaceID = (data.RoomSpaceID != null ? parseInt(data.RoomSpaceID, 10) : data.RoomSpaceID);
    if (data.ExtensionID != null) this.extensionID = data.ExtensionID;
    if (data.Old_RoomSpaceID != null) this.old_RoomSpaceID = (data.Old_RoomSpaceID != null ? parseInt(data.Old_RoomSpaceID, 10) : data.Old_RoomSpaceID);
    if (data.Old_ExtensionID != null) this.old_ExtensionID = data.Old_ExtensionID;
    if (data.LogDate != null) this.logDate = (data.LogDate != null ? new Date(data.LogDate) : data.LogDate);
    if (data.LogActionedDate != null) this.logActionedDate = (data.LogActionedDate != null ? new Date(data.LogActionedDate) : data.LogActionedDate);
    if (data.EntryName != null) this.entryName = data.EntryName;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.Username != null) this.username = data.Username;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a LogInterface by its ID or by exact match on other fields.
   * @param param Either the ID of the LogInterface to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single LogInterface object or null (if id) or an array of LogInterface objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<LogInterface | null>;
  static async select(param: Partial<Record<keyof LogInterface, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<LogInterface[]>;
  static async select(param: number | Partial<Record<keyof LogInterface, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<LogInterface | LogInterface[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/LogInterface/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/LogInterface`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch LogInterface with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new LogInterface(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new LogInterface(entry));
      }
    }
  }
}

LogInterface satisfies StarRezStructureStatic<LogInterface>
