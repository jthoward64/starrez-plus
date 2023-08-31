// Generated from XML description of Category

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Category {
  categoryID?: number;
  description?: string;
  parentID?: number;
  categoryLevel?: number;
  categoryTypeEnum?: unknown;
  abbreviation?: string;
  comments?: string;
  default_ChargeGroupID?: number;
  updateEntryDefaults?: boolean;
  updateEntryDefaultsOnChange?: boolean;
  phoneDisableValue?: string;
  phoneRestrictValue?: string;
  phoneControlEnum?: unknown;
  phoneChargeTypeID?: number;
  historyCategoryEnabled?: boolean;
  history_CategoryID?: number;
  alumniCategoryEnabled?: boolean;
  alumni_CategoryID?: number;
  reservationCategoryEnabled?: boolean;
  reservation_CategoryID?: number;
  vMMailBoxTypeID?: number;
  vMCheckOutOptionEnum?: unknown;
  vMCheckOutRemoveMessageEnum?: unknown;
  categoryColour?: string;
  securityUserID?: number;
  dateCreated?: Date;
  timestamp?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Category");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.Description != null) this.description = data.Description;
    if (data.ParentID != null) this.parentID = (data.ParentID != null ? parseInt(data.ParentID, 10) : data.ParentID);
    if (data.CategoryLevel != null) this.categoryLevel = (data.CategoryLevel != null ? parseInt(data.CategoryLevel, 10) : data.CategoryLevel);
    if (data.CategoryTypeEnum != null) this.categoryTypeEnum = data.CategoryTypeEnum;
    if (data.Abbreviation != null) this.abbreviation = data.Abbreviation;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Default_ChargeGroupID != null) this.default_ChargeGroupID = (data.Default_ChargeGroupID != null ? parseInt(data.Default_ChargeGroupID, 10) : data.Default_ChargeGroupID);
    if (data.UpdateEntryDefaults != null) this.updateEntryDefaults = data.UpdateEntryDefaults === 'true';
    if (data.UpdateEntryDefaultsOnChange != null) this.updateEntryDefaultsOnChange = data.UpdateEntryDefaultsOnChange === 'true';
    if (data.PhoneDisableValue != null) this.phoneDisableValue = data.PhoneDisableValue;
    if (data.PhoneRestrictValue != null) this.phoneRestrictValue = data.PhoneRestrictValue;
    if (data.PhoneControlEnum != null) this.phoneControlEnum = data.PhoneControlEnum;
    if (data.PhoneChargeTypeID != null) this.phoneChargeTypeID = (data.PhoneChargeTypeID != null ? parseInt(data.PhoneChargeTypeID, 10) : data.PhoneChargeTypeID);
    if (data.HistoryCategoryEnabled != null) this.historyCategoryEnabled = data.HistoryCategoryEnabled === 'true';
    if (data.History_CategoryID != null) this.history_CategoryID = (data.History_CategoryID != null ? parseInt(data.History_CategoryID, 10) : data.History_CategoryID);
    if (data.AlumniCategoryEnabled != null) this.alumniCategoryEnabled = data.AlumniCategoryEnabled === 'true';
    if (data.Alumni_CategoryID != null) this.alumni_CategoryID = (data.Alumni_CategoryID != null ? parseInt(data.Alumni_CategoryID, 10) : data.Alumni_CategoryID);
    if (data.ReservationCategoryEnabled != null) this.reservationCategoryEnabled = data.ReservationCategoryEnabled === 'true';
    if (data.Reservation_CategoryID != null) this.reservation_CategoryID = (data.Reservation_CategoryID != null ? parseInt(data.Reservation_CategoryID, 10) : data.Reservation_CategoryID);
    if (data.VMMailBoxTypeID != null) this.vMMailBoxTypeID = (data.VMMailBoxTypeID != null ? parseInt(data.VMMailBoxTypeID, 10) : data.VMMailBoxTypeID);
    if (data.VMCheckOutOptionEnum != null) this.vMCheckOutOptionEnum = data.VMCheckOutOptionEnum;
    if (data.VMCheckOutRemoveMessageEnum != null) this.vMCheckOutRemoveMessageEnum = data.VMCheckOutRemoveMessageEnum;
    if (data.CategoryColour != null) this.categoryColour = data.CategoryColour;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.timestamp != null) this.timestamp = (data.timestamp != null ? new Date(data.timestamp) : data.timestamp);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Category | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Category/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Category with id ${id}`);
    } else {
      return new Category(await response.text());
    }
  }
}

Category satisfies StarRezStructureStatic<Category>
