// Generated from XML description of TimeSlot

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class TimeSlot {
  timeSlotID?: number;
  recordTypeEnum?: unknown;
  processID?: number;
  entryID?: number;
  roomLocationSectionID?: number;
  timeSlotDate?: Date;
  duration?: string;
  roomLocationID?: number;
  roomLocationFloorSuiteID?: number;
  roomBaseID?: number;
  locationComments?: string;
  assignedTo_SecurityUserID?: number;
  viewOnWeb?: boolean;
  booked_RoomBaseID?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TimeSlot");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TimeSlotID != null) this.timeSlotID = (data.TimeSlotID != null ? parseInt(data.TimeSlotID, 10) : data.TimeSlotID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.ProcessID != null) this.processID = (data.ProcessID != null ? parseInt(data.ProcessID, 10) : data.ProcessID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.RoomLocationSectionID != null) this.roomLocationSectionID = (data.RoomLocationSectionID != null ? parseInt(data.RoomLocationSectionID, 10) : data.RoomLocationSectionID);
    if (data.TimeSlotDate != null) this.timeSlotDate = (data.TimeSlotDate != null ? new Date(data.TimeSlotDate) : data.TimeSlotDate);
    if (data.Duration != null) this.duration = data.Duration;
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.RoomLocationFloorSuiteID != null) this.roomLocationFloorSuiteID = (data.RoomLocationFloorSuiteID != null ? parseInt(data.RoomLocationFloorSuiteID, 10) : data.RoomLocationFloorSuiteID);
    if (data.RoomBaseID != null) this.roomBaseID = (data.RoomBaseID != null ? parseInt(data.RoomBaseID, 10) : data.RoomBaseID);
    if (data.LocationComments != null) this.locationComments = data.LocationComments;
    if (data.AssignedTo_SecurityUserID != null) this.assignedTo_SecurityUserID = (data.AssignedTo_SecurityUserID != null ? parseInt(data.AssignedTo_SecurityUserID, 10) : data.AssignedTo_SecurityUserID);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.Booked_RoomBaseID != null) this.booked_RoomBaseID = (data.Booked_RoomBaseID != null ? parseInt(data.Booked_RoomBaseID, 10) : data.Booked_RoomBaseID);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a TimeSlot by its ID or by exact match on other fields.
   * @param param Either the ID of the TimeSlot to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single TimeSlot object or null (if id) or an array of TimeSlot objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<TimeSlot | null>;
  static async select(param: Partial<Record<keyof TimeSlot, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TimeSlot[]>;
  static async select(param: number | Partial<Record<keyof TimeSlot, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TimeSlot | TimeSlot[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TimeSlot/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TimeSlot`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TimeSlot with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new TimeSlot(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new TimeSlot(entry));
      }
    }
  }
}

TimeSlot satisfies StarRezStructureStatic<TimeSlot>
