// Generated from XML description of InterfaceSubscribe

import { starRezXmlToJson } from "../parsing.js";

export class InterfaceSubscribe {
  interfaceSubscribeID?: number;
  interfaceApplicationID?: number;
  interfaceActionEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "InterfaceSubscribe");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.InterfaceSubscribeID != null) this.interfaceSubscribeID = parseInt(data.InterfaceSubscribeID, 10);
    if (data.InterfaceApplicationID != null) this.interfaceApplicationID = parseInt(data.InterfaceApplicationID, 10);
    if (data.InterfaceActionEnum != null) this.interfaceActionEnum = data.InterfaceActionEnum;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
