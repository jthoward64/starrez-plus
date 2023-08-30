// Generated from XML description of ReportDetail

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.ReportDetailID != null) this.reportDetailID = parseInt(data.ReportDetailID, 10);
    if (data.ReportID != null) this.reportID = parseInt(data.ReportID, 10);
    if (data.ParentID != null) this.parentID = parseInt(data.ParentID, 10);
    if (data.ReportName != null) this.reportName = data.ReportName;
    if (data.ReportNameExtra != null) this.reportNameExtra = data.ReportNameExtra;
    if (data.SubReportLinkField != null) this.subReportLinkField = data.SubReportLinkField;
    if (data.SubReportLinkBaseField != null) this.subReportLinkBaseField = data.SubReportLinkBaseField;
    if (data.ReportLayoutObject != null) this.reportLayoutObject = data.ReportLayoutObject;
    if (data.ReportDataSourceObject != null) this.reportDataSourceObject = data.ReportDataSourceObject;
    if (data.DevExpressLayoutXml != null) this.devExpressLayoutXml = data.DevExpressLayoutXml;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ReportDetail | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ReportDetail/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ReportDetail with id ${id}`);
    } else {
      return new ReportDetail(await response.text());
    }
}

}
