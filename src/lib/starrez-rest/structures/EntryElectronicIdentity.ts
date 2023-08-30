// Generated from XML description of EntryElectronicIdentity

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryElectronicIdentity {
  entryElectronicIdentityID?: number;
  entryID?: number;
  electronicIdentityTypeID?: number;
  electronicIdentity?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryElectronicIdentity");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryElectronicIdentityID != null) this.entryElectronicIdentityID = (data.EntryElectronicIdentityID != null ? parseInt(data.EntryElectronicIdentityID, 10) : data.EntryElectronicIdentityID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ElectronicIdentityTypeID != null) this.electronicIdentityTypeID = (data.ElectronicIdentityTypeID != null ? parseInt(data.ElectronicIdentityTypeID, 10) : data.ElectronicIdentityTypeID);
    if (data.ElectronicIdentity != null) this.electronicIdentity = data.ElectronicIdentity;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryElectronicIdentity | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryElectronicIdentity/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryElectronicIdentity with id ${id}`);
    } else {
      return new EntryElectronicIdentity(await response.text());
    }
  }
}

EntryElectronicIdentity satisfies StarRezStructureStatic<EntryElectronicIdentity>
