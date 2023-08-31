// Generated from XML description of EventNote

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EventNote {
  eventNoteID?: number;
  eventID?: number;
  directoryFlag?: boolean;
  noteDate?: Date;
  dateCreated?: Date;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  noteType?: string;
  notes?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EventNote");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EventNoteID != null) this.eventNoteID = (data.EventNoteID != null ? parseInt(data.EventNoteID, 10) : data.EventNoteID);
    if (data.EventID != null) this.eventID = (data.EventID != null ? parseInt(data.EventID, 10) : data.EventID);
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
   * Fetches a EventNote by its ID or by exact match on other fields.
   * @param param Either the ID of the EventNote to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EventNote object or null (if id) or an array of EventNote objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EventNote | null>;
  static async select(param: Partial<Record<keyof EventNote, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EventNote[]>;
  static async select(param: number | Partial<Record<keyof EventNote, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EventNote | EventNote[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EventNote/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EventNote`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EventNote with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EventNote(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EventNote(entry));
      }
    }
  }
}

EventNote satisfies StarRezStructureStatic<EventNote>
