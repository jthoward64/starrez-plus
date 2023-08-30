// Generated from XML description of EntryPosition

import { starRezXmlToJson } from "../parsing.js";

export class EntryPosition {
  entryPositionID?: number;
  entryID?: number;
  termID?: number;
  positionYear?: string;
  termDetail?: string;
  position?: string;
  positionDateStart?: Date | null;
  positionDateEnd?: Date | null;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryPosition");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryPositionID != null) this.entryPositionID = parseInt(data.EntryPositionID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.TermID != null) this.termID = parseInt(data.TermID, 10);
    if (data.PositionYear != null) this.positionYear = data.PositionYear;
    if (data.TermDetail != null) this.termDetail = data.TermDetail;
    if (data.Position != null) this.position = data.Position;
    if (data.PositionDateStart != null) this.positionDateStart = new Date(data.PositionDateStart);
    if (data.PositionDateEnd != null) this.positionDateEnd = new Date(data.PositionDateEnd);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
