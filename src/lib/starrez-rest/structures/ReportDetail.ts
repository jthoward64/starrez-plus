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

  /**
   * Fetches a ReportDetail by its ID or by exact match on other fields.
   * @param param Either the ID of the ReportDetail to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ReportDetail object or null (if id) or an array of ReportDetail objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ReportDetail | null>;
  static async select(param: Partial<Record<keyof ReportDetail, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ReportDetail[]>;
  static async select(param: number | Partial<Record<keyof ReportDetail, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ReportDetail | ReportDetail[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ReportDetail/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ReportDetail`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ReportDetail with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ReportDetail(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ReportDetail(entry));
      }
    }
  }
}

ReportDetail satisfies StarRezStructureStatic<ReportDetail>
