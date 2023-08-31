// Generated from XML description of Document

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Document {
  documentID?: number;
  description?: string;
  documentTypeDescription?: string;
  dateExpiry?: Date | null;
  comments?: string;
  tag?: string;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Document");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.DocumentID != null) this.documentID = (data.DocumentID != null ? parseInt(data.DocumentID, 10) : data.DocumentID);
    if (data.Description != null) this.description = data.Description;
    if (data.DocumentTypeDescription != null) this.documentTypeDescription = data.DocumentTypeDescription;
    if (data.DateExpiry != null) this.dateExpiry = (data.DateExpiry != null ? new Date(data.DateExpiry) : data.DateExpiry);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Tag != null) this.tag = data.Tag;
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Document by its ID or by exact match on other fields.
   * @param param Either the ID of the Document to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Document object or null (if id) or an array of Document objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Document | null>;
  static async select(param: Partial<Record<keyof Document, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Document[]>;
  static async select(param: number | Partial<Record<keyof Document, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Document | Document[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Document/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Document`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Document with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Document(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Document(entry));
      }
    }
  }
}

Document satisfies StarRezStructureStatic<Document>
