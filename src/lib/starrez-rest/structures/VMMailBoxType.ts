// Generated from XML description of VMMailBoxType

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class VMMailBoxType {
  vMMailBoxTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  allowCallDelivery?: boolean;
  allowGroupCreate?: boolean;
  allowGroupMessage?: boolean;
  allowShared?: boolean;
  fixedSharedGreeting?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMMailBoxType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMMailBoxTypeID != null) this.vMMailBoxTypeID = (data.VMMailBoxTypeID != null ? parseInt(data.VMMailBoxTypeID, 10) : data.VMMailBoxTypeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.AllowCallDelivery != null) this.allowCallDelivery = data.AllowCallDelivery === 'true';
    if (data.AllowGroupCreate != null) this.allowGroupCreate = data.AllowGroupCreate === 'true';
    if (data.AllowGroupMessage != null) this.allowGroupMessage = data.AllowGroupMessage === 'true';
    if (data.AllowShared != null) this.allowShared = data.AllowShared === 'true';
    if (data.FixedSharedGreeting != null) this.fixedSharedGreeting = data.FixedSharedGreeting === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<VMMailBoxType | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMMailBoxType/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VMMailBoxType with id ${id}`);
    } else {
      return new VMMailBoxType(await response.text());
    }
  }
}

VMMailBoxType satisfies StarRezStructureStatic<VMMailBoxType>
