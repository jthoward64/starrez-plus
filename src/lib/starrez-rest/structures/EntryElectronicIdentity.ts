// Generated from XML description of EntryElectronicIdentity

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.EntryElectronicIdentityID != null) this.entryElectronicIdentityID = parseInt(data.EntryElectronicIdentityID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.ElectronicIdentityTypeID != null) this.electronicIdentityTypeID = parseInt(data.ElectronicIdentityTypeID, 10);
    if (data.ElectronicIdentity != null) this.electronicIdentity = data.ElectronicIdentity;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
