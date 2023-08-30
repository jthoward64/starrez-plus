// Generated from XML description of VMGroupExtension

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class VMGroupExtension {
  vMGroupExtensionID?: number;
  vMGroupID?: number;
  extensionID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMGroupExtension");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMGroupExtensionID != null) this.vMGroupExtensionID = parseInt(data.VMGroupExtensionID, 10);
    if (data.VMGroupID != null) this.vMGroupID = parseInt(data.VMGroupID, 10);
    if (data.ExtensionID != null) this.extensionID = parseInt(data.ExtensionID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<VMGroupExtension | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMGroupExtension/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch VMGroupExtension with id ${id}`);
    } else {
      return new VMGroupExtension(await response.text());
    }
  }
}

VMGroupExtension satisfies StarRezStructureStatic<VMGroupExtension>
