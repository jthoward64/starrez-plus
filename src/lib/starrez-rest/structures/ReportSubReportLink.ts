// Generated from XML description of ReportSubReportLink

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ReportSubReportLink {
  reportSubReportLinkID?: number;
  reportID?: number;
  sub_ReportID?: number;
  subReportLinkField?: string;
  reportLinkField?: string;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ReportSubReportLink");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ReportSubReportLinkID != null) this.reportSubReportLinkID = (data.ReportSubReportLinkID != null ? parseInt(data.ReportSubReportLinkID, 10) : data.ReportSubReportLinkID);
    if (data.ReportID != null) this.reportID = (data.ReportID != null ? parseInt(data.ReportID, 10) : data.ReportID);
    if (data.Sub_ReportID != null) this.sub_ReportID = (data.Sub_ReportID != null ? parseInt(data.Sub_ReportID, 10) : data.Sub_ReportID);
    if (data.SubReportLinkField != null) this.subReportLinkField = data.SubReportLinkField;
    if (data.ReportLinkField != null) this.reportLinkField = data.ReportLinkField;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ReportSubReportLink | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ReportSubReportLink/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ReportSubReportLink with id ${id}`);
    } else {
      return new ReportSubReportLink(await response.text());
    }
  }
}

ReportSubReportLink satisfies StarRezStructureStatic<ReportSubReportLink>
