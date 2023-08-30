// Generated from XML description of TimeSlot

import { starRezXmlToJson } from "../parsing.js";

export class TimeSlot {
  timeSlotID?: number;
  recordTypeEnum?: unknown;
  processID?: number;
  entryID?: number;
  roomLocationSectionID?: number;
  timeSlotDate?: Date;
  duration?: number;
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

    if (data.TimeSlotID != null) this.timeSlotID = parseInt(data.TimeSlotID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.ProcessID != null) this.processID = parseInt(data.ProcessID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.RoomLocationSectionID != null) this.roomLocationSectionID = parseInt(data.RoomLocationSectionID, 10);
    if (data.TimeSlotDate != null) this.timeSlotDate = new Date(data.TimeSlotDate);
    if (data.Duration != null) this.duration = parseFloat(data.Duration);
    if (data.RoomLocationID != null) this.roomLocationID = parseInt(data.RoomLocationID, 10);
    if (data.RoomLocationFloorSuiteID != null) this.roomLocationFloorSuiteID = parseInt(data.RoomLocationFloorSuiteID, 10);
    if (data.RoomBaseID != null) this.roomBaseID = parseInt(data.RoomBaseID, 10);
    if (data.LocationComments != null) this.locationComments = data.LocationComments;
    if (data.AssignedTo_SecurityUserID != null) this.assignedTo_SecurityUserID = parseInt(data.AssignedTo_SecurityUserID, 10);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.Booked_RoomBaseID != null) this.booked_RoomBaseID = parseInt(data.Booked_RoomBaseID, 10);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
