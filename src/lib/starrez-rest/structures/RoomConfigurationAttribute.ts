// Generated from XML description of RoomConfigurationAttribute

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomConfigurationAttribute {
  roomConfigurationAttributeID?: number;
  roomConfigurationID?: number;
  recordTypeEnum?: unknown;
  fieldName?: string;
  fieldValue?: string;
  weighting?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomConfigurationAttribute");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomConfigurationAttributeID != null) this.roomConfigurationAttributeID = (data.RoomConfigurationAttributeID != null ? parseInt(data.RoomConfigurationAttributeID, 10) : data.RoomConfigurationAttributeID);
    if (data.RoomConfigurationID != null) this.roomConfigurationID = (data.RoomConfigurationID != null ? parseInt(data.RoomConfigurationID, 10) : data.RoomConfigurationID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.FieldName != null) this.fieldName = data.FieldName;
    if (data.FieldValue != null) this.fieldValue = data.FieldValue;
    if (data.Weighting != null) this.weighting = (data.Weighting != null ? parseInt(data.Weighting, 10) : data.Weighting);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationAttribute | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomConfigurationAttribute/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomConfigurationAttribute with id ${id}`);
    } else {
      return new RoomConfigurationAttribute(await response.text());
    }
  }
}

RoomConfigurationAttribute satisfies StarRezStructureStatic<RoomConfigurationAttribute>
