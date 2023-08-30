// Generated from XML description of Extension

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Extension {
  extensionID?: number;
  description?: string;
  virtual?: string;
  siteID?: number;
  phoneNumber?: string;
  equipmentNumber1?: string;
  equipmentNumber2?: string;
  equipmentNumber3?: string;
  equipmentComments?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Extension");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ExtensionID != null) this.extensionID = (data.ExtensionID != null ? parseInt(data.ExtensionID, 10) : data.ExtensionID);
    if (data.Description != null) this.description = data.Description;
    if (data.Virtual != null) this.virtual = data.Virtual;
    if (data.SiteID != null) this.siteID = (data.SiteID != null ? parseInt(data.SiteID, 10) : data.SiteID);
    if (data.PhoneNumber != null) this.phoneNumber = data.PhoneNumber;
    if (data.EquipmentNumber1 != null) this.equipmentNumber1 = data.EquipmentNumber1;
    if (data.EquipmentNumber2 != null) this.equipmentNumber2 = data.EquipmentNumber2;
    if (data.EquipmentNumber3 != null) this.equipmentNumber3 = data.EquipmentNumber3;
    if (data.EquipmentComments != null) this.equipmentComments = data.EquipmentComments;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Extension | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Extension/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Extension with id ${id}`);
    } else {
      return new Extension(await response.text());
    }
  }
}

Extension satisfies StarRezStructureStatic<Extension>
