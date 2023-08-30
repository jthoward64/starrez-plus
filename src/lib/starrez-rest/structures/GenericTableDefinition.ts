// Generated from XML description of GenericTableDefinition

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<GenericTableDefinition | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GenericTableDefinition/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch GenericTableDefinition with id ${id}`);
    } else {
      return new GenericTableDefinition(await response.text());
    }
  }
}

GenericTableDefinition satisfies StarRezStructureStatic<GenericTableDefinition>
