// Generated from XML description of Document

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.DocumentID != null) this.documentID = parseInt(data.DocumentID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.DocumentTypeDescription != null) this.documentTypeDescription = data.DocumentTypeDescription;
    if (data.DateExpiry != null) this.dateExpiry = new Date(data.DateExpiry);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Tag != null) this.tag = data.Tag;
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Document | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Document/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Document with id ${id}`);
    } else {
      return new Document(await response.text());
    }
}

}
