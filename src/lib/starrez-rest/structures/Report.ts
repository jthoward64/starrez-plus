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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Report | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Report/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Report with id ${id}`);
    } else {
      return new Report(await response.text());
    }
  }
}

Report satisfies StarRezStructureStatic<Report>
