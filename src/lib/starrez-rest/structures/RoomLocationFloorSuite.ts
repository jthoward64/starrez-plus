// Generated from XML description of RoomLocationFloorSuite

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.RoomLocationFloorSuiteID != null) this.roomLocationFloorSuiteID = (data.RoomLocationFloorSuiteID != null ? parseInt(data.RoomLocationFloorSuiteID, 10) : data.RoomLocationFloorSuiteID);
    if (data.RoomLocationSectionID != null) this.roomLocationSectionID = (data.RoomLocationSectionID != null ? parseInt(data.RoomLocationSectionID, 10) : data.RoomLocationSectionID);
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
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomLocationFloorSuite | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomLocationFloorSuite/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomLocationFloorSuite with id ${id}`);
    } else {
      return new RoomLocationFloorSuite(await response.text());
    }
  }
}

RoomLocationFloorSuite satisfies StarRezStructureStatic<RoomLocationFloorSuite>
