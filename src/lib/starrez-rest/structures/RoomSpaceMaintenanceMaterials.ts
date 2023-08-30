// Generated from XML description of RoomSpaceMaintenanceMaterials

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceMaintenanceMaterials | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceMaintenanceMaterials/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceMaintenanceMaterials with id ${id}`);
    } else {
      return new RoomSpaceMaintenanceMaterials(await response.text());
    }
}

}
