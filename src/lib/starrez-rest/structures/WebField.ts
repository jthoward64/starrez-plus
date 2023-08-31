// Generated from XML description of WebField

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.WebFieldID != null) this.webFieldID = (data.WebFieldID != null ? parseInt(data.WebFieldID, 10) : data.WebFieldID);
    if (data.WebBlockID != null) this.webBlockID = (data.WebBlockID != null ? parseInt(data.WebBlockID, 10) : data.WebBlockID);
    if (data.Display != null) this.display = data.Display === 'true';
    if (data.Required != null) this.required = data.Required === 'true';
    if (data.RequiredIndex != null) this.requiredIndex = data.RequiredIndex;
    if (data.FieldOrder != null) this.fieldOrder = (data.FieldOrder != null ? parseInt(data.FieldOrder, 10) : data.FieldOrder);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.FieldName != null) this.fieldName = data.FieldName;
    if (data.WebFieldDataTypeEnum != null) this.webFieldDataTypeEnum = data.WebFieldDataTypeEnum;
    if (data.DataLength != null) this.dataLength = (data.DataLength != null ? parseInt(data.DataLength, 10) : data.DataLength);
    if (data.DefaultValue != null) this.defaultValue = data.DefaultValue;
    if (data.UseDefaultOnly != null) this.useDefaultOnly = data.UseDefaultOnly === 'true';
    if (data.DateRangeMin != null) this.dateRangeMin = (data.DateRangeMin != null ? new Date(data.DateRangeMin) : data.DateRangeMin);
    if (data.DateRangeMax != null) this.dateRangeMax = (data.DateRangeMax != null ? new Date(data.DateRangeMax) : data.DateRangeMax);
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
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WebField | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebField/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebField with id ${id}`);
    } else {
      return new WebField(await response.text());
    }
  }
}

WebField satisfies StarRezStructureStatic<WebField>
