// Generated from XML description of RoomSpaceMaintenanceJobAction

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceMaintenanceJobAction | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceMaintenanceJobAction/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceMaintenanceJobAction with id ${id}`);
    } else {
      return new RoomSpaceMaintenanceJobAction(await response.text());
    }
}

}
