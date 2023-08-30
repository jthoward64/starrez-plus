// Generated from XML description of AddressType

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class AddressType {
  addressTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  isEntryAddress?: boolean;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "AddressType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.AddressTypeID != null) this.addressTypeID = parseInt(data.AddressTypeID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.IsEntryAddress != null) this.isEntryAddress = data.IsEntryAddress === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<AddressType | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/AddressType/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch AddressType with id ${id}`);
    } else {
      return new AddressType(await response.text());
    }
  }
}

AddressType satisfies StarRezStructureStatic<AddressType>
