// Generated from XML description of VMGroup

import { starRezXmlToJson } from "../parsing.js";

export class VMGroup {
  vMGroupID?: number;
  groupNumber?: number;
  vMGroupName?: string;
  extensionType?: boolean;
  description?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMGroup");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMGroupID != null) this.vMGroupID = parseInt(data.VMGroupID, 10);
    if (data.GroupNumber != null) this.groupNumber = parseInt(data.GroupNumber, 10);
    if (data.VMGroupName != null) this.vMGroupName = data.VMGroupName;
    if (data.ExtensionType != null) this.extensionType = data.ExtensionType === 'true';
    if (data.Description != null) this.description = data.Description;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
