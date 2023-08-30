// Generated from XML description of ReportSubReportLink

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.ReportSubReportLinkID != null) this.reportSubReportLinkID = parseInt(data.ReportSubReportLinkID, 10);
    if (data.ReportID != null) this.reportID = parseInt(data.ReportID, 10);
    if (data.Sub_ReportID != null) this.sub_ReportID = parseInt(data.Sub_ReportID, 10);
    if (data.SubReportLinkField != null) this.subReportLinkField = data.SubReportLinkField;
    if (data.ReportLinkField != null) this.reportLinkField = data.ReportLinkField;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
