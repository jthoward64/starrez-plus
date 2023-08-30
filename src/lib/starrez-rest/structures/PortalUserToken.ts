// Generated from XML description of PortalUserToken

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.PortalUserTokenID != null) this.portalUserTokenID = parseInt(data.PortalUserTokenID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.PortalSiteID != null) this.portalSiteID = parseInt(data.PortalSiteID, 10);
    if (data.IPAddress != null) this.iPAddress = data.IPAddress;
    if (data.Token != null) this.token = data.Token;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.ExpiryDate != null) this.expiryDate = new Date(data.ExpiryDate);
    if (data.AuthProviderKey != null) this.authProviderKey = data.AuthProviderKey;
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<PortalUserToken | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalUserToken/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalUserToken with id ${id}`);
    } else {
      return new PortalUserToken(await response.text());
    }
}

}
