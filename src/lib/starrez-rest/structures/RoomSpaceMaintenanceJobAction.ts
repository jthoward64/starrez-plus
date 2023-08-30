// Generated from XML description of RoomSpaceMaintenanceJobAction

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.RoomSpaceMaintenanceJobActionID != null) this.roomSpaceMaintenanceJobActionID = (data.RoomSpaceMaintenanceJobActionID != null ? parseInt(data.RoomSpaceMaintenanceJobActionID, 10) : data.RoomSpaceMaintenanceJobActionID);
    if (data.RoomSpaceMaintenanceID != null) this.roomSpaceMaintenanceID = (data.RoomSpaceMaintenanceID != null ? parseInt(data.RoomSpaceMaintenanceID, 10) : data.RoomSpaceMaintenanceID);
    if (data.RoomSpaceMaintenanceJobActionDate != null) this.roomSpaceMaintenanceJobActionDate = (data.RoomSpaceMaintenanceJobActionDate != null ? new Date(data.RoomSpaceMaintenanceJobActionDate) : data.RoomSpaceMaintenanceJobActionDate);
    if (data.Type != null) this.type = data.Type;
    if (data.Description != null) this.description = data.Description;
    if (data.Technician != null) this.technician = data.Technician;
    if (data.HourlyRate != null) this.hourlyRate = (data.HourlyRate != null ? parseFloat(data.HourlyRate) : data.HourlyRate);
    if (data.MaterialCost != null) this.materialCost = (data.MaterialCost != null ? parseFloat(data.MaterialCost) : data.MaterialCost);
    if (data.Hours != null) this.hours = (data.Hours != null ? parseFloat(data.Hours) : data.Hours);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

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

RoomSpaceMaintenanceJobAction satisfies StarRezStructureStatic<RoomSpaceMaintenanceJobAction>
