// Generated from XML description of RoomConfigurationAttribute

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.RoomConfigurationAttributeID != null) this.roomConfigurationAttributeID = parseInt(data.RoomConfigurationAttributeID, 10);
    if (data.RoomConfigurationID != null) this.roomConfigurationID = parseInt(data.RoomConfigurationID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.FieldName != null) this.fieldName = data.FieldName;
    if (data.FieldValue != null) this.fieldValue = data.FieldValue;
    if (data.Weighting != null) this.weighting = parseInt(data.Weighting, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
