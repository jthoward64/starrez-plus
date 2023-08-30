// Generated from XML description of PortalUserSignature

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.PortalUserSignatureID != null) this.portalUserSignatureID = parseInt(data.PortalUserSignatureID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.PortalPageWidgetID != null) this.portalPageWidgetID = parseInt(data.PortalPageWidgetID, 10);
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.Description != null) this.description = data.Description;
    if (data.Signature != null) this.signature = data.Signature;
    if (data.DateSigned != null) this.dateSigned = new Date(data.DateSigned);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
