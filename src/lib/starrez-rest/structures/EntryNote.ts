// Generated from XML description of EntryNote

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryNote {
  entryNoteID?: number;
  entryID?: number;
  directoryFlag?: boolean;
  noteDate?: Date;
  dateCreated?: Date;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  noteType?: string;
  notes?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryNote");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryNoteID != null) this.entryNoteID = (data.EntryNoteID != null ? parseInt(data.EntryNoteID, 10) : data.EntryNoteID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.DirectoryFlag != null) this.directoryFlag = data.DirectoryFlag === 'true';
    if (data.NoteDate != null) this.noteDate = (data.NoteDate != null ? new Date(data.NoteDate) : data.NoteDate);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.NoteType != null) this.noteType = data.NoteType;
    if (data.Notes != null) this.notes = data.Notes;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryNote by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryNote to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryNote object or null (if id) or an array of EntryNote objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryNote | null>;
  static async select(param: Partial<Record<keyof EntryNote, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryNote[]>;
  static async select(param: number | Partial<Record<keyof EntryNote, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryNote | EntryNote[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryNote/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryNote`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryNote with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryNote(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryNote(entry));
      }
    }
  }
}

EntryNote satisfies StarRezStructureStatic<EntryNote>
