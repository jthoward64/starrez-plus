// Generated from XML description of FieldDefault

import { starRezXmlToJson } from "../parsing.js";

export class FieldDefault {
  fieldDefaultID?: number;
  tableName?: string;
  fieldName?: string;
  required?: boolean;
  requiredMessage?: string;
  enforceUnique?: boolean;
  enforceUniqueMessage?: string;
  applyDefault?: boolean;
  value?: string;
  conditional?: boolean;
  conditionalFieldName?: string;
  conditionalValue?: string;
  important?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FieldDefault");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FieldDefaultID != null) this.fieldDefaultID = parseInt(data.FieldDefaultID, 10);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.FieldName != null) this.fieldName = data.FieldName;
    if (data.Required != null) this.required = data.Required === 'true';
    if (data.RequiredMessage != null) this.requiredMessage = data.RequiredMessage;
    if (data.EnforceUnique != null) this.enforceUnique = data.EnforceUnique === 'true';
    if (data.EnforceUniqueMessage != null) this.enforceUniqueMessage = data.EnforceUniqueMessage;
    if (data.ApplyDefault != null) this.applyDefault = data.ApplyDefault === 'true';
    if (data.Value != null) this.value = data.Value;
    if (data.Conditional != null) this.conditional = data.Conditional === 'true';
    if (data.ConditionalFieldName != null) this.conditionalFieldName = data.ConditionalFieldName;
    if (data.ConditionalValue != null) this.conditionalValue = data.ConditionalValue;
    if (data.Important != null) this.important = data.Important === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
