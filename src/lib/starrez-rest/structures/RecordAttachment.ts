// Generated from XML description of RecordAttachment

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.RecordAttachmentID != null) this.recordAttachmentID = (data.RecordAttachmentID != null ? parseInt(data.RecordAttachmentID, 10) : data.RecordAttachmentID);
    if (data.AttachmentObject != null) this.attachmentObject = data.AttachmentObject;
    if (data.Provider != null) this.provider = data.Provider;
    if (data.ProviderKey != null) this.providerKey = data.ProviderKey;
    if (data.Description != null) this.description = data.Description;
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateExpiry != null) this.dateExpiry = (data.DateExpiry != null ? new Date(data.DateExpiry) : data.DateExpiry);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RecordAttachment by its ID or by exact match on other fields.
   * @param param Either the ID of the RecordAttachment to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RecordAttachment object or null (if id) or an array of RecordAttachment objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RecordAttachment | null>;
  static async select(param: Partial<Record<keyof RecordAttachment, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RecordAttachment[]>;
  static async select(param: number | Partial<Record<keyof RecordAttachment, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RecordAttachment | RecordAttachment[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RecordAttachment/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RecordAttachment`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RecordAttachment with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RecordAttachment(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RecordAttachment(entry));
      }
    }
  }
}

RecordAttachment satisfies StarRezStructureStatic<RecordAttachment>
