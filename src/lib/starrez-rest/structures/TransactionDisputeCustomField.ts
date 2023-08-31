// Generated from XML description of TransactionDisputeCustomField

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class TransactionDisputeCustomField {
  transactionDisputeCustomFieldID?: number;
  transactionDisputeID?: number;
  customFieldDefinitionID?: number;
  fieldDataTypeEnum?: unknown;
  valueString?: string;
  valueDate?: Date | null;
  valueBoolean?: boolean;
  valueInteger?: number;
  valueMoney?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TransactionDisputeCustomField");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TransactionDisputeCustomFieldID != null) this.transactionDisputeCustomFieldID = (data.TransactionDisputeCustomFieldID != null ? parseInt(data.TransactionDisputeCustomFieldID, 10) : data.TransactionDisputeCustomFieldID);
    if (data.TransactionDisputeID != null) this.transactionDisputeID = (data.TransactionDisputeID != null ? parseInt(data.TransactionDisputeID, 10) : data.TransactionDisputeID);
    if (data.CustomFieldDefinitionID != null) this.customFieldDefinitionID = (data.CustomFieldDefinitionID != null ? parseInt(data.CustomFieldDefinitionID, 10) : data.CustomFieldDefinitionID);
    if (data.FieldDataTypeEnum != null) this.fieldDataTypeEnum = data.FieldDataTypeEnum;
    if (data.ValueString != null) this.valueString = data.ValueString;
    if (data.ValueDate != null) this.valueDate = (data.ValueDate != null ? new Date(data.ValueDate) : data.ValueDate);
    if (data.ValueBoolean != null) this.valueBoolean = data.ValueBoolean === 'true';
    if (data.ValueInteger != null) this.valueInteger = (data.ValueInteger != null ? parseInt(data.ValueInteger, 10) : data.ValueInteger);
    if (data.ValueMoney != null) this.valueMoney = data.ValueMoney;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<TransactionDisputeCustomField | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionDisputeCustomField/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TransactionDisputeCustomField with id ${id}`);
    } else {
      return new TransactionDisputeCustomField(await response.text());
    }
  }
}

TransactionDisputeCustomField satisfies StarRezStructureStatic<TransactionDisputeCustomField>
