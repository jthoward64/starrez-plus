// Generated from XML description of EntryApplicationPortalSection

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.EntryApplicationPortalSectionID != null) this.entryApplicationPortalSectionID = (data.EntryApplicationPortalSectionID != null ? parseInt(data.EntryApplicationPortalSectionID, 10) : data.EntryApplicationPortalSectionID);
    if (data.WebSectionID != null) this.webSectionID = (data.WebSectionID != null ? parseInt(data.WebSectionID, 10) : data.WebSectionID);
    if (data.EntryApplicationID != null) this.entryApplicationID = (data.EntryApplicationID != null ? parseInt(data.EntryApplicationID, 10) : data.EntryApplicationID);
    if (data.Complete != null) this.complete = data.Complete === 'true';
    if (data.CompleteDate != null) this.completeDate = (data.CompleteDate != null ? new Date(data.CompleteDate) : data.CompleteDate);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryApplicationPortalSection | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryApplicationPortalSection/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryApplicationPortalSection with id ${id}`);
    } else {
      return new EntryApplicationPortalSection(await response.text());
    }
  }
}

EntryApplicationPortalSection satisfies StarRezStructureStatic<EntryApplicationPortalSection>
