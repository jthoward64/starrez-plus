// Generated from XML description of GenericTableDefinition

import { starRezXmlToJson } from "../parsing.js";

export class GenericTableDefinition {
  genericTableDefinitionID?: number;
  description?: string;
  tableName?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "GenericTableDefinition");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.GenericTableDefinitionID != null) this.genericTableDefinitionID = parseInt(data.GenericTableDefinitionID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
