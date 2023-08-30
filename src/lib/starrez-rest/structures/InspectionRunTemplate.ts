// Generated from XML description of InspectionRunTemplate

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.InspectionRunTemplateID != null) this.inspectionRunTemplateID = parseInt(data.InspectionRunTemplateID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.InitialInspectionStatusEnum != null) this.initialInspectionStatusEnum = data.InitialInspectionStatusEnum;
    if (data.InspectionProcessEnum != null) this.inspectionProcessEnum = data.InspectionProcessEnum;
    if (data.AutoCreateOnRoomSpaceAssigned_BooleanAskEnum != null) this.autoCreateOnRoomSpaceAssigned_BooleanAskEnum = data.AutoCreateOnRoomSpaceAssigned_BooleanAskEnum;
    if (data.AutoCreateOnCheckOut_BooleanAskEnum != null) this.autoCreateOnCheckOut_BooleanAskEnum = data.AutoCreateOnCheckOut_BooleanAskEnum;
    if (data.RoomLocationID != null) this.roomLocationID = parseInt(data.RoomLocationID, 10);
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.ChargeDescription != null) this.chargeDescription = data.ChargeDescription;
    if (data.AssignedTo_SecurityUserID != null) this.assignedTo_SecurityUserID = parseInt(data.AssignedTo_SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
