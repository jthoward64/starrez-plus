// Generated from XML description of NoteType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

  /**
   * Fetches a NoteType by its ID or by exact match on other fields.
   * @param param Either the ID of the NoteType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single NoteType object or null (if id) or an array of NoteType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<NoteType | null>;
  static async select(param: Partial<Record<keyof NoteType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<NoteType[]>;
  static async select(param: number | Partial<Record<keyof NoteType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<NoteType | NoteType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/NoteType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/NoteType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch NoteType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new NoteType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new NoteType(entry));
      }
    }
  }
}

NoteType satisfies StarRezStructureStatic<NoteType>
