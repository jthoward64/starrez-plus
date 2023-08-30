// Generated from XML description of RoomSpaceInventory

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class RoomSpaceInventory {
  roomSpaceInventoryID?: number;
  recordTypeEnum?: unknown;
  roomSpaceInventoryTypeID?: number;
  roomSpaceID?: number;
  roomSpaceInventoryConditionID?: number;
  roomSpaceInventoryStatusID?: number;
  code?: string;
  description?: string;
  colour?: string;
  expiryDate?: Date;
  warrantyDate?: Date | null;
  purchaseDate?: Date;
  purchasePrice?: string;
  purchasePlace?: string;
  purchaseDetails?: string;
  brandDetails?: string;
  location?: string;
  hideFromResidents?: boolean;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceInventory");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceInventoryID != null) this.roomSpaceInventoryID = parseInt(data.RoomSpaceInventoryID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.RoomSpaceInventoryTypeID != null) this.roomSpaceInventoryTypeID = parseInt(data.RoomSpaceInventoryTypeID, 10);
    if (data.RoomSpaceID != null) this.roomSpaceID = parseInt(data.RoomSpaceID, 10);
    if (data.RoomSpaceInventoryConditionID != null) this.roomSpaceInventoryConditionID = parseInt(data.RoomSpaceInventoryConditionID, 10);
    if (data.RoomSpaceInventoryStatusID != null) this.roomSpaceInventoryStatusID = parseInt(data.RoomSpaceInventoryStatusID, 10);
    if (data.Code != null) this.code = data.Code;
    if (data.Description != null) this.description = data.Description;
    if (data.Colour != null) this.colour = data.Colour;
    if (data.ExpiryDate != null) this.expiryDate = new Date(data.ExpiryDate);
    if (data.WarrantyDate != null) this.warrantyDate = new Date(data.WarrantyDate);
    if (data.PurchaseDate != null) this.purchaseDate = new Date(data.PurchaseDate);
    if (data.PurchasePrice != null) this.purchasePrice = data.PurchasePrice;
    if (data.PurchasePlace != null) this.purchasePlace = data.PurchasePlace;
    if (data.PurchaseDetails != null) this.purchaseDetails = data.PurchaseDetails;
    if (data.BrandDetails != null) this.brandDetails = data.BrandDetails;
    if (data.Location != null) this.location = data.Location;
    if (data.HideFromResidents != null) this.hideFromResidents = data.HideFromResidents === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventory | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventory/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceInventory with id ${id}`);
    } else {
      return new RoomSpaceInventory(await response.text());
    }
}

}
