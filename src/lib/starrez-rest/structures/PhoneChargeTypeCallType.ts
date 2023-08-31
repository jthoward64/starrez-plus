// Generated from XML description of PhoneChargeTypeCallType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PhoneChargeTypeCallType {
  phoneChargeTypeCallTypeID?: number;
  phoneChargeTypeID?: number;
  callTypeEnum?: unknown;
  recordTypeEnum?: unknown;
  chargeItemID?: number;
  cost1?: string;
  markup1?: number;
  cost2?: string;
  markup2?: number;
  cost3?: string;
  markup3?: number;
  cost4?: string;
  markup4?: number;
  cost5?: string;
  markup5?: number;
  round?: boolean;
  roundTo?: string;
  fixedCharge?: string;
  maxCharge?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PhoneChargeTypeCallType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PhoneChargeTypeCallTypeID != null) this.phoneChargeTypeCallTypeID = (data.PhoneChargeTypeCallTypeID != null ? parseInt(data.PhoneChargeTypeCallTypeID, 10) : data.PhoneChargeTypeCallTypeID);
    if (data.PhoneChargeTypeID != null) this.phoneChargeTypeID = (data.PhoneChargeTypeID != null ? parseInt(data.PhoneChargeTypeID, 10) : data.PhoneChargeTypeID);
    if (data.CallTypeEnum != null) this.callTypeEnum = data.CallTypeEnum;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.Cost1 != null) this.cost1 = data.Cost1;
    if (data.Markup1 != null) this.markup1 = (data.Markup1 != null ? parseInt(data.Markup1, 10) : data.Markup1);
    if (data.Cost2 != null) this.cost2 = data.Cost2;
    if (data.Markup2 != null) this.markup2 = (data.Markup2 != null ? parseInt(data.Markup2, 10) : data.Markup2);
    if (data.Cost3 != null) this.cost3 = data.Cost3;
    if (data.Markup3 != null) this.markup3 = (data.Markup3 != null ? parseInt(data.Markup3, 10) : data.Markup3);
    if (data.Cost4 != null) this.cost4 = data.Cost4;
    if (data.Markup4 != null) this.markup4 = (data.Markup4 != null ? parseInt(data.Markup4, 10) : data.Markup4);
    if (data.Cost5 != null) this.cost5 = data.Cost5;
    if (data.Markup5 != null) this.markup5 = (data.Markup5 != null ? parseInt(data.Markup5, 10) : data.Markup5);
    if (data.Round != null) this.round = data.Round === 'true';
    if (data.RoundTo != null) this.roundTo = data.RoundTo;
    if (data.FixedCharge != null) this.fixedCharge = data.FixedCharge;
    if (data.MaxCharge != null) this.maxCharge = data.MaxCharge;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a PhoneChargeTypeCallType by its ID or by exact match on other fields.
   * @param param Either the ID of the PhoneChargeTypeCallType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single PhoneChargeTypeCallType object or null (if id) or an array of PhoneChargeTypeCallType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<PhoneChargeTypeCallType | null>;
  static async select(param: Partial<Record<keyof PhoneChargeTypeCallType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PhoneChargeTypeCallType[]>;
  static async select(param: number | Partial<Record<keyof PhoneChargeTypeCallType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PhoneChargeTypeCallType | PhoneChargeTypeCallType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PhoneChargeTypeCallType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PhoneChargeTypeCallType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PhoneChargeTypeCallType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new PhoneChargeTypeCallType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new PhoneChargeTypeCallType(entry));
      }
    }
  }
}

PhoneChargeTypeCallType satisfies StarRezStructureStatic<PhoneChargeTypeCallType>
