// Generated from XML description of CustomFieldDefinition

import { starRezXmlToJson } from "../parsing.js";

export class CustomFieldDefinition {
  customFieldDefinitionID?: number;
  tableName?: string;
  fieldDataTypeEnum?: unknown;
  description?: string;
  code?: string;
  customFieldOrder?: number;
  customFieldGroup?: string;
  customFieldSection?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "CustomFieldDefinition");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CustomFieldDefinitionID != null) this.customFieldDefinitionID = parseInt(data.CustomFieldDefinitionID, 10);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.FieldDataTypeEnum != null) this.fieldDataTypeEnum = data.FieldDataTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Code != null) this.code = data.Code;
    if (data.CustomFieldOrder != null) this.customFieldOrder = parseInt(data.CustomFieldOrder, 10);
    if (data.CustomFieldGroup != null) this.customFieldGroup = data.CustomFieldGroup;
    if (data.CustomFieldSection != null) this.customFieldSection = data.CustomFieldSection;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
