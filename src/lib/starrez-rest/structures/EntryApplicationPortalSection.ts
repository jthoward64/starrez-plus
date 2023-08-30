// Generated from XML description of EntryApplicationPortalSection

import { starRezXmlToJson } from "../parsing.js";

export class EntryApplicationPortalSection {
  entryApplicationPortalSectionID?: number;
  webSectionID?: number;
  entryApplicationID?: number;
  complete?: boolean;
  completeDate?: Date | null;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryApplicationPortalSection");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryApplicationPortalSectionID != null) this.entryApplicationPortalSectionID = parseInt(data.EntryApplicationPortalSectionID, 10);
    if (data.WebSectionID != null) this.webSectionID = parseInt(data.WebSectionID, 10);
    if (data.EntryApplicationID != null) this.entryApplicationID = parseInt(data.EntryApplicationID, 10);
    if (data.Complete != null) this.complete = data.Complete === 'true';
    if (data.CompleteDate != null) this.completeDate = new Date(data.CompleteDate);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
