// Generated from XML description of RoomSpaceMaintenanceMaterials

import { starRezXmlToJson } from "../parsing.js";

export class RoomSpaceMaintenanceMaterials {
  roomSpaceMaintenanceMaterialsID?: number;
  roomSpaceMaintenanceID?: number;
  type?: string;
  description?: string;
  quantity?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceMaintenanceMaterials");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceMaintenanceMaterialsID != null) this.roomSpaceMaintenanceMaterialsID = parseInt(data.RoomSpaceMaintenanceMaterialsID, 10);
    if (data.RoomSpaceMaintenanceID != null) this.roomSpaceMaintenanceID = parseInt(data.RoomSpaceMaintenanceID, 10);
    if (data.Type != null) this.type = data.Type;
    if (data.Description != null) this.description = data.Description;
    if (data.Quantity != null) this.quantity = parseInt(data.Quantity, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
