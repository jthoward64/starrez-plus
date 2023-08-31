// Generated from XML description of ContactNote

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ContactNote {
  contactNoteID?: number;
  contactID?: number;
  directoryFlag?: boolean;
  noteDate?: Date;
  dateCreated?: Date;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  noteType?: string;
  notes?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ContactNote");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ContactNoteID != null) this.contactNoteID = (data.ContactNoteID != null ? parseInt(data.ContactNoteID, 10) : data.ContactNoteID);
    if (data.ContactID != null) this.contactID = (data.ContactID != null ? parseInt(data.ContactID, 10) : data.ContactID);
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
   * Fetches a ContactNote by its ID or by exact match on other fields.
   * @param param Either the ID of the ContactNote to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ContactNote object or null (if id) or an array of ContactNote objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ContactNote | null>;
  static async select(param: Partial<Record<keyof ContactNote, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ContactNote[]>;
  static async select(param: number | Partial<Record<keyof ContactNote, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ContactNote | ContactNote[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ContactNote/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ContactNote`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ContactNote with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ContactNote(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ContactNote(entry));
      }
    }
  }
}

ContactNote satisfies StarRezStructureStatic<ContactNote>
