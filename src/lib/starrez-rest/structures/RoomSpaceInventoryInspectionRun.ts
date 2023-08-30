// Generated from XML description of RoomSpaceInventoryInspectionRun

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class RoomSpaceInventoryInspectionRun {
  roomSpaceInventoryInspectionRunID?: number;
  recordTypeEnum?: unknown;
  date?: Date | null;
  description?: string;
  assignedTo_SecurityUserID?: number;
  termSessionID?: number;
  chargeItemID?: number;
  categoryID?: number;
  inspectionProcessEnum?: unknown;
  viewOnWeb?: boolean;
  chargeDescription?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceInventoryInspectionRun");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceInventoryInspectionRunID != null) this.roomSpaceInventoryInspectionRunID = parseInt(data.RoomSpaceInventoryInspectionRunID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Date != null) this.date = new Date(data.Date);
    if (data.Description != null) this.description = data.Description;
    if (data.AssignedTo_SecurityUserID != null) this.assignedTo_SecurityUserID = parseInt(data.AssignedTo_SecurityUserID, 10);
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.InspectionProcessEnum != null) this.inspectionProcessEnum = data.InspectionProcessEnum;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.ChargeDescription != null) this.chargeDescription = data.ChargeDescription;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryInspectionRun | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventoryInspectionRun/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceInventoryInspectionRun with id ${id}`);
    } else {
      return new RoomSpaceInventoryInspectionRun(await response.text());
    }
}

}
