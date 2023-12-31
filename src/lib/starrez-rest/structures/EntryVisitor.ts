// Generated from XML description of EntryVisitor

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryVisitor {
  entryVisitorID?: number;
  entryID?: number;
  visitorID?: number;
  visitorStatusEnum?: unknown;
  termSessionID?: number;
  arrivalDate?: Date;
  departureDate?: Date;
  visitorTypeID?: number;
  customBit1?: boolean;
  customBit2?: boolean;
  customString1?: string;
  customString2?: string;
  customString3?: string;
  customString4?: string;
  customString5?: string;
  customString6?: string;
  customDate1?: Date | null;
  customDate2?: Date | null;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryVisitor");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryVisitorID != null) this.entryVisitorID = (data.EntryVisitorID != null ? parseInt(data.EntryVisitorID, 10) : data.EntryVisitorID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.VisitorID != null) this.visitorID = (data.VisitorID != null ? parseInt(data.VisitorID, 10) : data.VisitorID);
    if (data.VisitorStatusEnum != null) this.visitorStatusEnum = data.VisitorStatusEnum;
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.ArrivalDate != null) this.arrivalDate = (data.ArrivalDate != null ? new Date(data.ArrivalDate) : data.ArrivalDate);
    if (data.DepartureDate != null) this.departureDate = (data.DepartureDate != null ? new Date(data.DepartureDate) : data.DepartureDate);
    if (data.VisitorTypeID != null) this.visitorTypeID = (data.VisitorTypeID != null ? parseInt(data.VisitorTypeID, 10) : data.VisitorTypeID);
    if (data.CustomBit1 != null) this.customBit1 = data.CustomBit1 === 'true';
    if (data.CustomBit2 != null) this.customBit2 = data.CustomBit2 === 'true';
    if (data.CustomString1 != null) this.customString1 = data.CustomString1;
    if (data.CustomString2 != null) this.customString2 = data.CustomString2;
    if (data.CustomString3 != null) this.customString3 = data.CustomString3;
    if (data.CustomString4 != null) this.customString4 = data.CustomString4;
    if (data.CustomString5 != null) this.customString5 = data.CustomString5;
    if (data.CustomString6 != null) this.customString6 = data.CustomString6;
    if (data.CustomDate1 != null) this.customDate1 = (data.CustomDate1 != null ? new Date(data.CustomDate1) : data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = (data.CustomDate2 != null ? new Date(data.CustomDate2) : data.CustomDate2);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryVisitor by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryVisitor to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryVisitor object or null (if id) or an array of EntryVisitor objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryVisitor | null>;
  static async select(param: Partial<Record<keyof EntryVisitor, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryVisitor[]>;
  static async select(param: number | Partial<Record<keyof EntryVisitor, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryVisitor | EntryVisitor[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryVisitor/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryVisitor`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryVisitor with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryVisitor(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryVisitor(entry));
      }
    }
  }
}

EntryVisitor satisfies StarRezStructureStatic<EntryVisitor>
