// Generated from XML description of GenericTableData

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class GenericTableData {
  genericTableDataID?: number;
  genericTableDefinitionID?: number;
  tableID?: number;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "GenericTableData");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.GenericTableDataID != null) this.genericTableDataID = (data.GenericTableDataID != null ? parseInt(data.GenericTableDataID, 10) : data.GenericTableDataID);
    if (data.GenericTableDefinitionID != null) this.genericTableDefinitionID = (data.GenericTableDefinitionID != null ? parseInt(data.GenericTableDefinitionID, 10) : data.GenericTableDefinitionID);
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<GenericTableData | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GenericTableData/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch GenericTableData with id ${id}`);
    } else {
      return new GenericTableData(await response.text());
    }
  }
}

GenericTableData satisfies StarRezStructureStatic<GenericTableData>
