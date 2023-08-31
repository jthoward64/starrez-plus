// Generated from XML description of WebBlock

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.WebBlockID != null) this.webBlockID = (data.WebBlockID != null ? parseInt(data.WebBlockID, 10) : data.WebBlockID);
    if (data.WebSectionID != null) this.webSectionID = (data.WebSectionID != null ? parseInt(data.WebSectionID, 10) : data.WebSectionID);
    if (data.BlockName != null) this.blockName = data.BlockName;
    if (data.Display != null) this.display = data.Display === 'true';
    if (data.BlockOrder != null) this.blockOrder = (data.BlockOrder != null ? parseInt(data.BlockOrder, 10) : data.BlockOrder);
    if (data.Header != null) this.header = data.Header;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.WebBlockTypeEnum != null) this.webBlockTypeEnum = data.WebBlockTypeEnum;
    if (data.CustomObjectName != null) this.customObjectName = data.CustomObjectName;
    if (data.Repeat != null) this.repeat = (data.Repeat != null ? parseInt(data.Repeat, 10) : data.Repeat);
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
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WebBlock by its ID or by exact match on other fields.
   * @param param Either the ID of the WebBlock to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WebBlock object or null (if id) or an array of WebBlock objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WebBlock | null>;
  static async select(param: Partial<Record<keyof WebBlock, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebBlock[]>;
  static async select(param: number | Partial<Record<keyof WebBlock, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebBlock | WebBlock[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebBlock/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebBlock`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebBlock with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WebBlock(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WebBlock(entry));
      }
    }
  }
}

WebBlock satisfies StarRezStructureStatic<WebBlock>
