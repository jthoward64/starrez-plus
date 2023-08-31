// Generated from XML description of ReportDetail

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ReportDetail {
  reportDetailID?: number;
  reportID?: number;
  parentID?: number;
  reportName?: string;
  reportNameExtra?: string;
  subReportLinkField?: string;
  subReportLinkBaseField?: string;
  reportLayoutObject?: any | null;
  reportDataSourceObject?: any | null;
  devExpressLayoutXml?: string | null;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ReportDetail");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ReportDetailID != null) this.reportDetailID = (data.ReportDetailID != null ? parseInt(data.ReportDetailID, 10) : data.ReportDetailID);
    if (data.ReportID != null) this.reportID = (data.ReportID != null ? parseInt(data.ReportID, 10) : data.ReportID);
    if (data.ParentID != null) this.parentID = (data.ParentID != null ? parseInt(data.ParentID, 10) : data.ParentID);
    if (data.ReportName != null) this.reportName = data.ReportName;
    if (data.ReportNameExtra != null) this.reportNameExtra = data.ReportNameExtra;
    if (data.SubReportLinkField != null) this.subReportLinkField = data.SubReportLinkField;
    if (data.SubReportLinkBaseField != null) this.subReportLinkBaseField = data.SubReportLinkBaseField;
    if (data.ReportLayoutObject != null) this.reportLayoutObject = data.ReportLayoutObject;
    if (data.ReportDataSourceObject != null) this.reportDataSourceObject = data.ReportDataSourceObject;
    if (data.DevExpressLayoutXml != null) this.devExpressLayoutXml = data.DevExpressLayoutXml;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ReportDetail | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ReportDetail/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ReportDetail with id ${id}`);
    } else {
      return new ReportDetail(await response.text());
    }
  }
}

ReportDetail satisfies StarRezStructureStatic<ReportDetail>
