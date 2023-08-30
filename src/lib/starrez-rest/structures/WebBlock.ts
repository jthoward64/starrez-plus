// Generated from XML description of WebBlock

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class WebBlock {
  webBlockID?: number;
  webSectionID?: number;
  blockName?: string;
  display?: boolean;
  blockOrder?: number;
  header?: string;
  comments?: string;
  webBlockTypeEnum?: unknown;
  customObjectName?: string;
  repeat?: number;
  destTable?: string;
  destTableSortBy?: string;
  sourceTable?: string;
  filter?: string;
  orderBy?: string;
  headerField?: string;
  headerField2?: string;
  noInsertCondition?: string;
  dataFilter?: string;
  linkingField?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebBlock");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebBlockID != null) this.webBlockID = parseInt(data.WebBlockID, 10);
    if (data.WebSectionID != null) this.webSectionID = parseInt(data.WebSectionID, 10);
    if (data.BlockName != null) this.blockName = data.BlockName;
    if (data.Display != null) this.display = data.Display === 'true';
    if (data.BlockOrder != null) this.blockOrder = parseInt(data.BlockOrder, 10);
    if (data.Header != null) this.header = data.Header;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.WebBlockTypeEnum != null) this.webBlockTypeEnum = data.WebBlockTypeEnum;
    if (data.CustomObjectName != null) this.customObjectName = data.CustomObjectName;
    if (data.Repeat != null) this.repeat = parseInt(data.Repeat, 10);
    if (data.DestTable != null) this.destTable = data.DestTable;
    if (data.DestTableSortBy != null) this.destTableSortBy = data.DestTableSortBy;
    if (data.SourceTable != null) this.sourceTable = data.SourceTable;
    if (data.Filter != null) this.filter = data.Filter;
    if (data.OrderBy != null) this.orderBy = data.OrderBy;
    if (data.HeaderField != null) this.headerField = data.HeaderField;
    if (data.HeaderField2 != null) this.headerField2 = data.HeaderField2;
    if (data.NoInsertCondition != null) this.noInsertCondition = data.NoInsertCondition;
    if (data.DataFilter != null) this.dataFilter = data.DataFilter;
    if (data.LinkingField != null) this.linkingField = data.LinkingField;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WebBlock | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebBlock/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch WebBlock with id ${id}`);
    } else {
      return new WebBlock(await response.text());
    }
}

}