// Generated from XML description of VMGroupExtension

import { starRezXmlToJson } from "../parsing.js";

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
}
