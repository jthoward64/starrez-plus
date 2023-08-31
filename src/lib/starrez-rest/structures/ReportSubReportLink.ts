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

  /**
   * Fetches a ReportSubReportLink by its ID or by exact match on other fields.
   * @param param Either the ID of the ReportSubReportLink to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ReportSubReportLink object or null (if id) or an array of ReportSubReportLink objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ReportSubReportLink | null>;
  static async select(param: Partial<Record<keyof ReportSubReportLink, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ReportSubReportLink[]>;
  static async select(param: number | Partial<Record<keyof ReportSubReportLink, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ReportSubReportLink | ReportSubReportLink[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ReportSubReportLink/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ReportSubReportLink`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ReportSubReportLink with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ReportSubReportLink(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ReportSubReportLink(entry));
      }
    }
  }
}

ReportSubReportLink satisfies StarRezStructureStatic<ReportSubReportLink>
