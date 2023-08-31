// Generated from XML description of PortalUserToken

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalUserToken {
  portalUserTokenID?: number;
  entryID?: number;
  portalSiteID?: number;
  iPAddress?: string;
  token?: string;
  dateCreated?: Date;
  expiryDate?: Date;
  authProviderKey?: string;
  machineName?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalUserToken");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalUserTokenID != null) this.portalUserTokenID = (data.PortalUserTokenID != null ? parseInt(data.PortalUserTokenID, 10) : data.PortalUserTokenID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.PortalSiteID != null) this.portalSiteID = (data.PortalSiteID != null ? parseInt(data.PortalSiteID, 10) : data.PortalSiteID);
    if (data.IPAddress != null) this.iPAddress = data.IPAddress;
    if (data.Token != null) this.token = data.Token;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.ExpiryDate != null) this.expiryDate = (data.ExpiryDate != null ? new Date(data.ExpiryDate) : data.ExpiryDate);
    if (data.AuthProviderKey != null) this.authProviderKey = data.AuthProviderKey;
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a PortalUserToken by its ID or by exact match on other fields.
   * @param param Either the ID of the PortalUserToken to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single PortalUserToken object or null (if id) or an array of PortalUserToken objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<PortalUserToken | null>;
  static async select(param: Partial<Record<keyof PortalUserToken, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalUserToken[]>;
  static async select(param: number | Partial<Record<keyof PortalUserToken, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalUserToken | PortalUserToken[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalUserToken/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalUserToken`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalUserToken with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new PortalUserToken(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new PortalUserToken(entry));
      }
    }
  }
}

PortalUserToken satisfies StarRezStructureStatic<PortalUserToken>
