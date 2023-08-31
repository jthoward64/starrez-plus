// Generated from XML description of InspectionRunTemplate

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class InspectionRunTemplate {
  inspectionRunTemplateID?: number;
  description?: string;
  termSessionID?: number;
  categoryID?: number;
  viewOnWeb?: boolean;
  initialInspectionStatusEnum?: unknown;
  inspectionProcessEnum?: unknown;
  autoCreateOnRoomSpaceAssigned_BooleanAskEnum?: unknown;
  autoCreateOnCheckOut_BooleanAskEnum?: unknown;
  roomLocationID?: number;
  chargeItemID?: number;
  chargeDescription?: string;
  assignedTo_SecurityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "InspectionRunTemplate");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.InspectionRunTemplateID != null) this.inspectionRunTemplateID = (data.InspectionRunTemplateID != null ? parseInt(data.InspectionRunTemplateID, 10) : data.InspectionRunTemplateID);
    if (data.Description != null) this.description = data.Description;
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.InitialInspectionStatusEnum != null) this.initialInspectionStatusEnum = data.InitialInspectionStatusEnum;
    if (data.InspectionProcessEnum != null) this.inspectionProcessEnum = data.InspectionProcessEnum;
    if (data.AutoCreateOnRoomSpaceAssigned_BooleanAskEnum != null) this.autoCreateOnRoomSpaceAssigned_BooleanAskEnum = data.AutoCreateOnRoomSpaceAssigned_BooleanAskEnum;
    if (data.AutoCreateOnCheckOut_BooleanAskEnum != null) this.autoCreateOnCheckOut_BooleanAskEnum = data.AutoCreateOnCheckOut_BooleanAskEnum;
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.ChargeDescription != null) this.chargeDescription = data.ChargeDescription;
    if (data.AssignedTo_SecurityUserID != null) this.assignedTo_SecurityUserID = (data.AssignedTo_SecurityUserID != null ? parseInt(data.AssignedTo_SecurityUserID, 10) : data.AssignedTo_SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<InspectionRunTemplate | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/InspectionRunTemplate/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch InspectionRunTemplate with id ${id}`);
    } else {
      return new InspectionRunTemplate(await response.text());
    }
  }
}

InspectionRunTemplate satisfies StarRezStructureStatic<InspectionRunTemplate>
