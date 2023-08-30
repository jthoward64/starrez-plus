// Generated from XML description of NoteType

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.NoteTypeID != null) this.noteTypeID = (data.NoteTypeID != null ? parseInt(data.NoteTypeID, 10) : data.NoteTypeID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.XMLSchema != null) this.xMLSchema = data.XMLSchema;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<NoteType | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/NoteType/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch NoteType with id ${id}`);
    } else {
      return new NoteType(await response.text());
    }
  }
}

NoteType satisfies StarRezStructureStatic<NoteType>
