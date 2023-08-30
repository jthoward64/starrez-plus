// Generated from XML description of EntryPortalActivity

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryPortalActivity {
  entryPortalActivityID?: number;
  entryID?: number;
  securityUserID?: number;
  portalPageID?: number;
  firstVisitDate?: Date;
  lastVisitDate?: Date;
  completeDate?: Date | null;
  tableName?: string;
  tableID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryPortalActivity");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryPortalActivityID != null) this.entryPortalActivityID = parseInt(data.EntryPortalActivityID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.PortalPageID != null) this.portalPageID = parseInt(data.PortalPageID, 10);
    if (data.FirstVisitDate != null) this.firstVisitDate = new Date(data.FirstVisitDate);
    if (data.LastVisitDate != null) this.lastVisitDate = new Date(data.LastVisitDate);
    if (data.CompleteDate != null) this.completeDate = new Date(data.CompleteDate);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryPortalActivity | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryPortalActivity/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryPortalActivity with id ${id}`);
    } else {
      return new EntryPortalActivity(await response.text());
    }
  }
}

EntryPortalActivity satisfies StarRezStructureStatic<EntryPortalActivity>
