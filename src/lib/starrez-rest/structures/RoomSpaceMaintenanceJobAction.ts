// Generated from XML description of RoomSpaceMaintenanceJobAction

import { starRezXmlToJson } from "../parsing.js";

export class RoomSpaceMaintenanceJobAction {
  roomSpaceMaintenanceJobActionID?: number;
  roomSpaceMaintenanceID?: number;
  roomSpaceMaintenanceJobActionDate?: Date;
  type?: string;
  description?: string;
  technician?: string;
  hourlyRate?: number;
  materialCost?: number;
  hours?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceMaintenanceJobAction");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceMaintenanceJobActionID != null) this.roomSpaceMaintenanceJobActionID = parseInt(data.RoomSpaceMaintenanceJobActionID, 10);
    if (data.RoomSpaceMaintenanceID != null) this.roomSpaceMaintenanceID = parseInt(data.RoomSpaceMaintenanceID, 10);
    if (data.RoomSpaceMaintenanceJobActionDate != null) this.roomSpaceMaintenanceJobActionDate = new Date(data.RoomSpaceMaintenanceJobActionDate);
    if (data.Type != null) this.type = data.Type;
    if (data.Description != null) this.description = data.Description;
    if (data.Technician != null) this.technician = data.Technician;
    if (data.HourlyRate != null) this.hourlyRate = parseFloat(data.HourlyRate);
    if (data.MaterialCost != null) this.materialCost = parseFloat(data.MaterialCost);
    if (data.Hours != null) this.hours = parseFloat(data.Hours);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
