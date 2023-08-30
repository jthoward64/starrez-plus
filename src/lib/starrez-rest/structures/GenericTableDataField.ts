// Generated from XML description of GenericTableDataField

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class GenericTableDataField {
  genericTableDataFieldID?: number;
  genericTableDataID?: number;
  genericTableDefinitionFieldID?: number;
  fieldDataTypeEnum?: unknown;
  valueString?: string;
  valueDate?: Date | null;
  valueBoolean?: boolean;
  valueInteger?: number;
  valueMoney?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "GenericTableDataField");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.GenericTableDataFieldID != null) this.genericTableDataFieldID = parseInt(data.GenericTableDataFieldID, 10);
    if (data.GenericTableDataID != null) this.genericTableDataID = parseInt(data.GenericTableDataID, 10);
    if (data.GenericTableDefinitionFieldID != null) this.genericTableDefinitionFieldID = parseInt(data.GenericTableDefinitionFieldID, 10);
    if (data.FieldDataTypeEnum != null) this.fieldDataTypeEnum = data.FieldDataTypeEnum;
    if (data.ValueString != null) this.valueString = data.ValueString;
    if (data.ValueDate != null) this.valueDate = new Date(data.ValueDate);
    if (data.ValueBoolean != null) this.valueBoolean = data.ValueBoolean === 'true';
    if (data.ValueInteger != null) this.valueInteger = parseInt(data.ValueInteger, 10);
    if (data.ValueMoney != null) this.valueMoney = data.ValueMoney;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<GenericTableDataField | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GenericTableDataField/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch GenericTableDataField with id ${id}`);
    } else {
      return new GenericTableDataField(await response.text());
    }
  }
}

GenericTableDataField satisfies StarRezStructureStatic<GenericTableDataField>
