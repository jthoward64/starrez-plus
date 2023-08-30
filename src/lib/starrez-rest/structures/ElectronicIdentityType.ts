// Generated from XML description of ElectronicIdentityType

import { starRezXmlToJson } from "../parsing.js";

export class ElectronicIdentityType {
  electronicIdentityTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  viewOnWeb?: boolean;
  urlFormat?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ElectronicIdentityType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ElectronicIdentityTypeID != null) this.electronicIdentityTypeID = parseInt(data.ElectronicIdentityTypeID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.UrlFormat != null) this.urlFormat = data.UrlFormat;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
