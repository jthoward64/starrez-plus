// Generated from XML description of FunctionRoomSetup

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.FunctionRoomSetupID != null) this.functionRoomSetupID = (data.FunctionRoomSetupID != null ? parseInt(data.FunctionRoomSetupID, 10) : data.FunctionRoomSetupID);
    if (data.FunctionRoomID != null) this.functionRoomID = (data.FunctionRoomID != null ? parseInt(data.FunctionRoomID, 10) : data.FunctionRoomID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Capacity != null) this.capacity = (data.Capacity != null ? parseInt(data.Capacity, 10) : data.Capacity);
    if (data.DefaultSetup != null) this.defaultSetup = data.DefaultSetup === 'true';
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a FunctionRoomSetup by its ID or by exact match on other fields.
   * @param param Either the ID of the FunctionRoomSetup to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single FunctionRoomSetup object or null (if id) or an array of FunctionRoomSetup objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<FunctionRoomSetup | null>;
  static async select(param: Partial<Record<keyof FunctionRoomSetup, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionRoomSetup[]>;
  static async select(param: number | Partial<Record<keyof FunctionRoomSetup, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionRoomSetup | FunctionRoomSetup[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionRoomSetup/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionRoomSetup`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionRoomSetup with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new FunctionRoomSetup(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new FunctionRoomSetup(entry));
      }
    }
  }
}

FunctionRoomSetup satisfies StarRezStructureStatic<FunctionRoomSetup>
