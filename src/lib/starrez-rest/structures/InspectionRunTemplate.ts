// Generated from XML description of InspectionRunTemplate

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

  /**
   * Fetches a InspectionRunTemplate by its ID or by exact match on other fields.
   * @param param Either the ID of the InspectionRunTemplate to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single InspectionRunTemplate object or null (if id) or an array of InspectionRunTemplate objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<InspectionRunTemplate | null>;
  static async select(param: Partial<Record<keyof InspectionRunTemplate, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<InspectionRunTemplate[]>;
  static async select(param: number | Partial<Record<keyof InspectionRunTemplate, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<InspectionRunTemplate | InspectionRunTemplate[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/InspectionRunTemplate/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/InspectionRunTemplate`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch InspectionRunTemplate with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new InspectionRunTemplate(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new InspectionRunTemplate(entry));
      }
    }
  }
}

InspectionRunTemplate satisfies StarRezStructureStatic<InspectionRunTemplate>
