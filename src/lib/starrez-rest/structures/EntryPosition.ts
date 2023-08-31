// Generated from XML description of EntryPosition

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.EntryPositionID != null) this.entryPositionID = (data.EntryPositionID != null ? parseInt(data.EntryPositionID, 10) : data.EntryPositionID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.TermID != null) this.termID = (data.TermID != null ? parseInt(data.TermID, 10) : data.TermID);
    if (data.PositionYear != null) this.positionYear = data.PositionYear;
    if (data.TermDetail != null) this.termDetail = data.TermDetail;
    if (data.Position != null) this.position = data.Position;
    if (data.PositionDateStart != null) this.positionDateStart = (data.PositionDateStart != null ? new Date(data.PositionDateStart) : data.PositionDateStart);
    if (data.PositionDateEnd != null) this.positionDateEnd = (data.PositionDateEnd != null ? new Date(data.PositionDateEnd) : data.PositionDateEnd);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryPosition | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryPosition/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryPosition with id ${id}`);
    } else {
      return new EntryPosition(await response.text());
    }
  }
}

EntryPosition satisfies StarRezStructureStatic<EntryPosition>
