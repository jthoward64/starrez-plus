// Generated from XML description of RoomAttribute

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomAttribute {
  roomAttributeID?: number;
  roomID?: number;
  recordTypeEnum?: unknown;
  fieldName?: string;
  fieldValue?: string;
  weighting?: number;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomAttribute");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomAttributeID != null) this.roomAttributeID = (data.RoomAttributeID != null ? parseInt(data.RoomAttributeID, 10) : data.RoomAttributeID);
    if (data.RoomID != null) this.roomID = (data.RoomID != null ? parseInt(data.RoomID, 10) : data.RoomID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.FieldName != null) this.fieldName = data.FieldName;
    if (data.FieldValue != null) this.fieldValue = data.FieldValue;
    if (data.Weighting != null) this.weighting = (data.Weighting != null ? parseInt(data.Weighting, 10) : data.Weighting);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomAttribute | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomAttribute/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomAttribute with id ${id}`);
    } else {
      return new RoomAttribute(await response.text());
    }
  }
}

RoomAttribute satisfies StarRezStructureStatic<RoomAttribute>
