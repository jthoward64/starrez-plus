// Generated from XML description of NoteType

import { starRezXmlToJson } from "../parsing.js";

export class NoteType {
  noteTypeID?: number;
  tableName?: string;
  description?: string;
  comments?: string;
  xMLSchema?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "NoteType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.NoteTypeID != null) this.noteTypeID = parseInt(data.NoteTypeID, 10);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.XMLSchema != null) this.xMLSchema = data.XMLSchema;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
