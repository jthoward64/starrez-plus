// Generated from XML description of GenericTableDefinitionField

import { starRezXmlToJson } from "../parsing.js";

export class GenericTableDefinitionField {
  genericTableDefinitionFieldID?: number;
  genericTableDefinitionID?: number;
  fieldDataTypeEnum?: unknown;
  genericFieldOrder?: number;
  genericFieldName?: string;
  genericFieldGroup?: string;
  genericFieldComment?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "GenericTableDefinitionField");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.GenericTableDefinitionFieldID != null) this.genericTableDefinitionFieldID = parseInt(data.GenericTableDefinitionFieldID, 10);
    if (data.GenericTableDefinitionID != null) this.genericTableDefinitionID = parseInt(data.GenericTableDefinitionID, 10);
    if (data.FieldDataTypeEnum != null) this.fieldDataTypeEnum = data.FieldDataTypeEnum;
    if (data.GenericFieldOrder != null) this.genericFieldOrder = parseInt(data.GenericFieldOrder, 10);
    if (data.GenericFieldName != null) this.genericFieldName = data.GenericFieldName;
    if (data.GenericFieldGroup != null) this.genericFieldGroup = data.GenericFieldGroup;
    if (data.GenericFieldComment != null) this.genericFieldComment = data.GenericFieldComment;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
