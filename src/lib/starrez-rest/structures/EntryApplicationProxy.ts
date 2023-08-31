// Generated from XML description of EntryApplicationProxy

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryApplicationProxy {
  entryApplicationProxyID?: number;
  entryApplicationID?: number;
  nameFirst?: string;
  nameLast?: string;
  email?: string;
  relationship?: string;
  pinNumber?: number;
  dateExpiry?: Date | null;
  dateComplete?: Date | null;
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
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryApplicationProxy");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryApplicationProxyID != null) this.entryApplicationProxyID = (data.EntryApplicationProxyID != null ? parseInt(data.EntryApplicationProxyID, 10) : data.EntryApplicationProxyID);
    if (data.EntryApplicationID != null) this.entryApplicationID = (data.EntryApplicationID != null ? parseInt(data.EntryApplicationID, 10) : data.EntryApplicationID);
    if (data.NameFirst != null) this.nameFirst = data.NameFirst;
    if (data.NameLast != null) this.nameLast = data.NameLast;
    if (data.Email != null) this.email = data.Email;
    if (data.Relationship != null) this.relationship = data.Relationship;
    if (data.PinNumber != null) this.pinNumber = (data.PinNumber != null ? parseInt(data.PinNumber, 10) : data.PinNumber);
    if (data.DateExpiry != null) this.dateExpiry = (data.DateExpiry != null ? new Date(data.DateExpiry) : data.DateExpiry);
    if (data.DateComplete != null) this.dateComplete = (data.DateComplete != null ? new Date(data.DateComplete) : data.DateComplete);
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
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryApplicationProxy | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryApplicationProxy/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryApplicationProxy with id ${id}`);
    } else {
      return new EntryApplicationProxy(await response.text());
    }
  }
}

EntryApplicationProxy satisfies StarRezStructureStatic<EntryApplicationProxy>
