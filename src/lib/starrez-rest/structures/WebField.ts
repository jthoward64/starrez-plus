// Generated from XML description of WebField

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class WebField {
  webFieldID?: number;
  webBlockID?: number;
  display?: boolean;
  required?: boolean;
  requiredIndex?: string;
  fieldOrder?: number;
  tableName?: string;
  fieldName?: string;
  webFieldDataTypeEnum?: unknown;
  dataLength?: number;
  defaultValue?: string;
  useDefaultOnly?: boolean;
  dateRangeMin?: Date | null;
  dateRangeMax?: Date | null;
  lookupTableName?: string;
  lookupTableFilter?: string;
  lookupTableOrderBy?: string;
  lookupFieldDataName?: string;
  lookupFieldDisplayName?: string;
  fieldDisplayName?: string;
  fieldDisplayComments?: string;
  webFieldControlTypeEnum?: unknown;
  actionEvent?: string;
  actionFunction?: string;
  dataBound?: boolean;
  regEx?: string;
  allowModify?: boolean;
  cSSClass?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebField");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebFieldID != null) this.webFieldID = parseInt(data.WebFieldID, 10);
    if (data.WebBlockID != null) this.webBlockID = parseInt(data.WebBlockID, 10);
    if (data.Display != null) this.display = data.Display === 'true';
    if (data.Required != null) this.required = data.Required === 'true';
    if (data.RequiredIndex != null) this.requiredIndex = data.RequiredIndex;
    if (data.FieldOrder != null) this.fieldOrder = parseInt(data.FieldOrder, 10);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.FieldName != null) this.fieldName = data.FieldName;
    if (data.WebFieldDataTypeEnum != null) this.webFieldDataTypeEnum = data.WebFieldDataTypeEnum;
    if (data.DataLength != null) this.dataLength = parseInt(data.DataLength, 10);
    if (data.DefaultValue != null) this.defaultValue = data.DefaultValue;
    if (data.UseDefaultOnly != null) this.useDefaultOnly = data.UseDefaultOnly === 'true';
    if (data.DateRangeMin != null) this.dateRangeMin = new Date(data.DateRangeMin);
    if (data.DateRangeMax != null) this.dateRangeMax = new Date(data.DateRangeMax);
    if (data.LookupTableName != null) this.lookupTableName = data.LookupTableName;
    if (data.LookupTableFilter != null) this.lookupTableFilter = data.LookupTableFilter;
    if (data.LookupTableOrderBy != null) this.lookupTableOrderBy = data.LookupTableOrderBy;
    if (data.LookupFieldDataName != null) this.lookupFieldDataName = data.LookupFieldDataName;
    if (data.LookupFieldDisplayName != null) this.lookupFieldDisplayName = data.LookupFieldDisplayName;
    if (data.FieldDisplayName != null) this.fieldDisplayName = data.FieldDisplayName;
    if (data.FieldDisplayComments != null) this.fieldDisplayComments = data.FieldDisplayComments;
    if (data.WebFieldControlTypeEnum != null) this.webFieldControlTypeEnum = data.WebFieldControlTypeEnum;
    if (data.ActionEvent != null) this.actionEvent = data.ActionEvent;
    if (data.ActionFunction != null) this.actionFunction = data.ActionFunction;
    if (data.DataBound != null) this.dataBound = data.DataBound === 'true';
    if (data.RegEx != null) this.regEx = data.RegEx;
    if (data.AllowModify != null) this.allowModify = data.AllowModify === 'true';
    if (data.CSSClass != null) this.cSSClass = data.CSSClass;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WebField | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebField/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch WebField with id ${id}`);
    } else {
      return new WebField(await response.text());
    }
}

}
