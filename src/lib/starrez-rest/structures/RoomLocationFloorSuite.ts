// Generated from XML description of RoomLocationFloorSuite

import { starRezXmlToJson } from "../parsing.js";

export class RoomLocationFloorSuite {
  roomLocationFloorSuiteID?: number;
  roomLocationSectionID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  isSuite?: boolean;
  overrideGender?: boolean;
  genderTypeEnum?: unknown;
  comments?: string;
  viewOnWeb?: boolean;
  webImageLocation?: string;
  webDescription?: string;
  webComments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomLocationFloorSuite");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomLocationFloorSuiteID != null) this.roomLocationFloorSuiteID = parseInt(data.RoomLocationFloorSuiteID, 10);
    if (data.RoomLocationSectionID != null) this.roomLocationSectionID = parseInt(data.RoomLocationSectionID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.IsSuite != null) this.isSuite = data.IsSuite === 'true';
    if (data.OverrideGender != null) this.overrideGender = data.OverrideGender === 'true';
    if (data.GenderTypeEnum != null) this.genderTypeEnum = data.GenderTypeEnum;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebImageLocation != null) this.webImageLocation = data.WebImageLocation;
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
