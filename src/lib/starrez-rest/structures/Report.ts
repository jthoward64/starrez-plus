// Generated from XML description of Report

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Report {
  reportID?: number;
  parentID?: number;
  folder?: boolean;
  reportTypeDescription?: string;
  description?: string;
  comments?: string;
  controlAssemblyName?: string;
  controlTypeName?: string;
  helperAssemblyName?: string;
  helperTypeName?: string;
  mainTableName?: string;
  displayInDetailForm?: boolean;
  displayInActionMenu?: boolean;
  securityUserID?: number;
  xslTemplate?: string;
  lastRan_SecurityUserID?: number;
  lastRanDate?: Date | null;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  isSubReport?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Report");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ReportID != null) this.reportID = (data.ReportID != null ? parseInt(data.ReportID, 10) : data.ReportID);
    if (data.ParentID != null) this.parentID = (data.ParentID != null ? parseInt(data.ParentID, 10) : data.ParentID);
    if (data.Folder != null) this.folder = data.Folder === 'true';
    if (data.ReportTypeDescription != null) this.reportTypeDescription = data.ReportTypeDescription;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ControlAssemblyName != null) this.controlAssemblyName = data.ControlAssemblyName;
    if (data.ControlTypeName != null) this.controlTypeName = data.ControlTypeName;
    if (data.HelperAssemblyName != null) this.helperAssemblyName = data.HelperAssemblyName;
    if (data.HelperTypeName != null) this.helperTypeName = data.HelperTypeName;
    if (data.MainTableName != null) this.mainTableName = data.MainTableName;
    if (data.DisplayInDetailForm != null) this.displayInDetailForm = data.DisplayInDetailForm === 'true';
    if (data.DisplayInActionMenu != null) this.displayInActionMenu = data.DisplayInActionMenu === 'true';
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.XslTemplate != null) this.xslTemplate = data.XslTemplate;
    if (data.LastRan_SecurityUserID != null) this.lastRan_SecurityUserID = (data.LastRan_SecurityUserID != null ? parseInt(data.LastRan_SecurityUserID, 10) : data.LastRan_SecurityUserID);
    if (data.LastRanDate != null) this.lastRanDate = (data.LastRanDate != null ? new Date(data.LastRanDate) : data.LastRanDate);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.IsSubReport != null) this.isSubReport = data.IsSubReport === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Report by its ID or by exact match on other fields.
   * @param param Either the ID of the Report to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Report object or null (if id) or an array of Report objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Report | null>;
  static async select(param: Partial<Record<keyof Report, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Report[]>;
  static async select(param: number | Partial<Record<keyof Report, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Report | Report[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Report/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Report`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Report with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Report(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Report(entry));
      }
    }
  }
}

Report satisfies StarRezStructureStatic<Report>
