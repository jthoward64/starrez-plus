// Generated from XML description of PortalUserSignature

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalUserSignature {
  portalUserSignatureID?: number;
  entryID?: number;
  portalPageWidgetID?: number;
  tableID?: number;
  tableName?: string;
  description?: string;
  signature?: string;
  dateSigned?: Date;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalUserSignature");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalUserSignatureID != null) this.portalUserSignatureID = (data.PortalUserSignatureID != null ? parseInt(data.PortalUserSignatureID, 10) : data.PortalUserSignatureID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.PortalPageWidgetID != null) this.portalPageWidgetID = (data.PortalPageWidgetID != null ? parseInt(data.PortalPageWidgetID, 10) : data.PortalPageWidgetID);
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.Description != null) this.description = data.Description;
    if (data.Signature != null) this.signature = data.Signature;
    if (data.DateSigned != null) this.dateSigned = (data.DateSigned != null ? new Date(data.DateSigned) : data.DateSigned);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a PortalUserSignature by its ID or by exact match on other fields.
   * @param param Either the ID of the PortalUserSignature to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single PortalUserSignature object or null (if id) or an array of PortalUserSignature objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<PortalUserSignature | null>;
  static async select(param: Partial<Record<keyof PortalUserSignature, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalUserSignature[]>;
  static async select(param: number | Partial<Record<keyof PortalUserSignature, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalUserSignature | PortalUserSignature[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalUserSignature/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalUserSignature`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalUserSignature with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new PortalUserSignature(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new PortalUserSignature(entry));
      }
    }
  }
}

PortalUserSignature satisfies StarRezStructureStatic<PortalUserSignature>
