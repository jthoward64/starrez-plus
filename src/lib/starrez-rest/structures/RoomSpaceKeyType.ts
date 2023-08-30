// Generated from XML description of RoomSpaceKeyType

import { starRezXmlToJson } from "../parsing.js";

export class RoomSpaceKeyType {
  roomSpaceKeyTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  issueOnCheckIn?: boolean;
  updateDateStartWithCheckInDate_BooleanAskEnum?: unknown;
  updateDateEndWithCheckOutDate_BooleanAskEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceKeyType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceKeyTypeID != null) this.roomSpaceKeyTypeID = parseInt(data.RoomSpaceKeyTypeID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.IssueOnCheckIn != null) this.issueOnCheckIn = data.IssueOnCheckIn === 'true';
    if (data.UpdateDateStartWithCheckInDate_BooleanAskEnum != null) this.updateDateStartWithCheckInDate_BooleanAskEnum = data.UpdateDateStartWithCheckInDate_BooleanAskEnum;
    if (data.UpdateDateEndWithCheckOutDate_BooleanAskEnum != null) this.updateDateEndWithCheckOutDate_BooleanAskEnum = data.UpdateDateEndWithCheckOutDate_BooleanAskEnum;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
