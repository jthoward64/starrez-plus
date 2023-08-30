// Generated from XML description of FunctionRoomSetup

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class FunctionRoomSetup {
  functionRoomSetupID?: number;
  functionRoomID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  capacity?: number;
  defaultSetup?: boolean;
  viewOnWeb?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionRoomSetup");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionRoomSetupID != null) this.functionRoomSetupID = parseInt(data.FunctionRoomSetupID, 10);
    if (data.FunctionRoomID != null) this.functionRoomID = parseInt(data.FunctionRoomID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Capacity != null) this.capacity = parseInt(data.Capacity, 10);
    if (data.DefaultSetup != null) this.defaultSetup = data.DefaultSetup === 'true';
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<FunctionRoomSetup | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionRoomSetup/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionRoomSetup with id ${id}`);
    } else {
      return new FunctionRoomSetup(await response.text());
    }
}

}
