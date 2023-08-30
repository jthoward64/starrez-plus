// Generated from XML description of RecordAttachment

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class RecordAttachment {
  recordAttachmentID?: number;
  attachmentObject?: any | null;
  provider?: string;
  providerKey?: string;
  description?: string;
  tableID?: number;
  tableName?: string;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateExpiry?: Date | null;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RecordAttachment");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RecordAttachmentID != null) this.recordAttachmentID = parseInt(data.RecordAttachmentID, 10);
    if (data.AttachmentObject != null) this.attachmentObject = data.AttachmentObject;
    if (data.Provider != null) this.provider = data.Provider;
    if (data.ProviderKey != null) this.providerKey = data.ProviderKey;
    if (data.Description != null) this.description = data.Description;
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateExpiry != null) this.dateExpiry = new Date(data.DateExpiry);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RecordAttachment | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RecordAttachment/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RecordAttachment with id ${id}`);
    } else {
      return new RecordAttachment(await response.text());
    }
}

}
