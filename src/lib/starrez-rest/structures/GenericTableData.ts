// Generated from XML description of GenericTableData

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.GenericTableDataID != null) this.genericTableDataID = parseInt(data.GenericTableDataID, 10);
    if (data.GenericTableDefinitionID != null) this.genericTableDefinitionID = parseInt(data.GenericTableDefinitionID, 10);
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
