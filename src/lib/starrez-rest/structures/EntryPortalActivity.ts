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

    if (data.EntryPortalActivityID != null) this.entryPortalActivityID = (data.EntryPortalActivityID != null ? parseInt(data.EntryPortalActivityID, 10) : data.EntryPortalActivityID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.PortalPageID != null) this.portalPageID = (data.PortalPageID != null ? parseInt(data.PortalPageID, 10) : data.PortalPageID);
    if (data.FirstVisitDate != null) this.firstVisitDate = (data.FirstVisitDate != null ? new Date(data.FirstVisitDate) : data.FirstVisitDate);
    if (data.LastVisitDate != null) this.lastVisitDate = (data.LastVisitDate != null ? new Date(data.LastVisitDate) : data.LastVisitDate);
    if (data.CompleteDate != null) this.completeDate = (data.CompleteDate != null ? new Date(data.CompleteDate) : data.CompleteDate);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryPortalActivity | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryPortalActivity/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryPortalActivity with id ${id}`);
    } else {
      return new EntryPortalActivity(await response.text());
    }
  }
}

EntryPortalActivity satisfies StarRezStructureStatic<EntryPortalActivity>
