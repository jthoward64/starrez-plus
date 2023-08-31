// Generated from XML description of GenericTableDefinitionField

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.GenericTableDefinitionFieldID != null) this.genericTableDefinitionFieldID = (data.GenericTableDefinitionFieldID != null ? parseInt(data.GenericTableDefinitionFieldID, 10) : data.GenericTableDefinitionFieldID);
    if (data.GenericTableDefinitionID != null) this.genericTableDefinitionID = (data.GenericTableDefinitionID != null ? parseInt(data.GenericTableDefinitionID, 10) : data.GenericTableDefinitionID);
    if (data.FieldDataTypeEnum != null) this.fieldDataTypeEnum = data.FieldDataTypeEnum;
    if (data.GenericFieldOrder != null) this.genericFieldOrder = (data.GenericFieldOrder != null ? parseInt(data.GenericFieldOrder, 10) : data.GenericFieldOrder);
    if (data.GenericFieldName != null) this.genericFieldName = data.GenericFieldName;
    if (data.GenericFieldGroup != null) this.genericFieldGroup = data.GenericFieldGroup;
    if (data.GenericFieldComment != null) this.genericFieldComment = data.GenericFieldComment;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<GenericTableDefinitionField | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GenericTableDefinitionField/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch GenericTableDefinitionField with id ${id}`);
    } else {
      return new GenericTableDefinitionField(await response.text());
    }
  }
}

GenericTableDefinitionField satisfies StarRezStructureStatic<GenericTableDefinitionField>
