// Generated from XML description of AutoAllocateRun

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class AutoAllocateRun {
  autoAllocateRunID?: number;
  description?: string;
  autoAllocateObject?: any;
  autoAllocateResults?: string;
  lastRan_SecurityUserID?: number;
  lastRanDate?: Date | null;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  enabled?: boolean;
  overrideEntryIDs?: string;
  isCommitted?: boolean;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "AutoAllocateRun");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.AutoAllocateRunID != null) this.autoAllocateRunID = (data.AutoAllocateRunID != null ? parseInt(data.AutoAllocateRunID, 10) : data.AutoAllocateRunID);
    if (data.Description != null) this.description = data.Description;
    if (data.AutoAllocateObject != null) this.autoAllocateObject = data.AutoAllocateObject;
    if (data.AutoAllocateResults != null) this.autoAllocateResults = data.AutoAllocateResults;
    if (data.LastRan_SecurityUserID != null) this.lastRan_SecurityUserID = (data.LastRan_SecurityUserID != null ? parseInt(data.LastRan_SecurityUserID, 10) : data.LastRan_SecurityUserID);
    if (data.LastRanDate != null) this.lastRanDate = (data.LastRanDate != null ? new Date(data.LastRanDate) : data.LastRanDate);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.Enabled != null) this.enabled = data.Enabled === 'true';
    if (data.OverrideEntryIDs != null) this.overrideEntryIDs = data.OverrideEntryIDs;
    if (data.IsCommitted != null) this.isCommitted = data.IsCommitted === 'true';
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<AutoAllocateRun | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/AutoAllocateRun/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch AutoAllocateRun with id ${id}`);
    } else {
      return new AutoAllocateRun(await response.text());
    }
  }
}

AutoAllocateRun satisfies StarRezStructureStatic<AutoAllocateRun>
