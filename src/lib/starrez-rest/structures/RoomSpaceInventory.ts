// Generated from XML description of RoomSpaceInventory

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.RoomSpaceInventoryID != null) this.roomSpaceInventoryID = (data.RoomSpaceInventoryID != null ? parseInt(data.RoomSpaceInventoryID, 10) : data.RoomSpaceInventoryID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.RoomSpaceInventoryTypeID != null) this.roomSpaceInventoryTypeID = (data.RoomSpaceInventoryTypeID != null ? parseInt(data.RoomSpaceInventoryTypeID, 10) : data.RoomSpaceInventoryTypeID);
    if (data.RoomSpaceID != null) this.roomSpaceID = (data.RoomSpaceID != null ? parseInt(data.RoomSpaceID, 10) : data.RoomSpaceID);
    if (data.RoomSpaceInventoryConditionID != null) this.roomSpaceInventoryConditionID = (data.RoomSpaceInventoryConditionID != null ? parseInt(data.RoomSpaceInventoryConditionID, 10) : data.RoomSpaceInventoryConditionID);
    if (data.RoomSpaceInventoryStatusID != null) this.roomSpaceInventoryStatusID = (data.RoomSpaceInventoryStatusID != null ? parseInt(data.RoomSpaceInventoryStatusID, 10) : data.RoomSpaceInventoryStatusID);
    if (data.Code != null) this.code = data.Code;
    if (data.Description != null) this.description = data.Description;
    if (data.Colour != null) this.colour = data.Colour;
    if (data.ExpiryDate != null) this.expiryDate = (data.ExpiryDate != null ? new Date(data.ExpiryDate) : data.ExpiryDate);
    if (data.WarrantyDate != null) this.warrantyDate = (data.WarrantyDate != null ? new Date(data.WarrantyDate) : data.WarrantyDate);
    if (data.PurchaseDate != null) this.purchaseDate = (data.PurchaseDate != null ? new Date(data.PurchaseDate) : data.PurchaseDate);
    if (data.PurchasePrice != null) this.purchasePrice = data.PurchasePrice;
    if (data.PurchasePlace != null) this.purchasePlace = data.PurchasePlace;
    if (data.PurchaseDetails != null) this.purchaseDetails = data.PurchaseDetails;
    if (data.BrandDetails != null) this.brandDetails = data.BrandDetails;
    if (data.Location != null) this.location = data.Location;
    if (data.HideFromResidents != null) this.hideFromResidents = data.HideFromResidents === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomSpaceInventory by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomSpaceInventory to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomSpaceInventory object or null (if id) or an array of RoomSpaceInventory objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventory | null>;
  static async select(param: Partial<Record<keyof RoomSpaceInventory, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventory[]>;
  static async select(param: number | Partial<Record<keyof RoomSpaceInventory, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventory | RoomSpaceInventory[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventory/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventory`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceInventory with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomSpaceInventory(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomSpaceInventory(entry));
      }
    }
  }
}

RoomSpaceInventory satisfies StarRezStructureStatic<RoomSpaceInventory>
