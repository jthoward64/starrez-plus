// Generated from XML description of FieldDefault

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.FieldDefaultID != null) this.fieldDefaultID = (data.FieldDefaultID != null ? parseInt(data.FieldDefaultID, 10) : data.FieldDefaultID);
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
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<FieldDefault | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FieldDefault/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch FieldDefault with id ${id}`);
    } else {
      return new FieldDefault(await response.text());
    }
  }
}

FieldDefault satisfies StarRezStructureStatic<FieldDefault>
