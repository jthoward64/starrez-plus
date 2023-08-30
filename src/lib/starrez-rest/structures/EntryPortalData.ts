// Generated from XML description of EntryPortalData

import { starRezXmlToJson } from "../parsing.js";

export class EntryPortalData {
  entryPortalDataID?: number;
  entryID?: number;
  securityUserID?: number;
  description?: string;
  tableName?: string;
  tableID?: number;
  value?: string;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryPortalData");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryPortalDataID != null) this.entryPortalDataID = parseInt(data.EntryPortalDataID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.Value != null) this.value = data.Value;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
