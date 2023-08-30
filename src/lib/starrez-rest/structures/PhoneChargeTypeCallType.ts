// Generated from XML description of PhoneChargeTypeCallType

import { starRezXmlToJson } from "../parsing.js";
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

    if (data.PhoneChargeTypeCallTypeID != null) this.phoneChargeTypeCallTypeID = parseInt(data.PhoneChargeTypeCallTypeID, 10);
    if (data.PhoneChargeTypeID != null) this.phoneChargeTypeID = parseInt(data.PhoneChargeTypeID, 10);
    if (data.CallTypeEnum != null) this.callTypeEnum = data.CallTypeEnum;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.Cost1 != null) this.cost1 = data.Cost1;
    if (data.Markup1 != null) this.markup1 = parseInt(data.Markup1, 10);
    if (data.Cost2 != null) this.cost2 = data.Cost2;
    if (data.Markup2 != null) this.markup2 = parseInt(data.Markup2, 10);
    if (data.Cost3 != null) this.cost3 = data.Cost3;
    if (data.Markup3 != null) this.markup3 = parseInt(data.Markup3, 10);
    if (data.Cost4 != null) this.cost4 = data.Cost4;
    if (data.Markup4 != null) this.markup4 = parseInt(data.Markup4, 10);
    if (data.Cost5 != null) this.cost5 = data.Cost5;
    if (data.Markup5 != null) this.markup5 = parseInt(data.Markup5, 10);
    if (data.Round != null) this.round = data.Round === 'true';
    if (data.RoundTo != null) this.roundTo = data.RoundTo;
    if (data.FixedCharge != null) this.fixedCharge = data.FixedCharge;
    if (data.MaxCharge != null) this.maxCharge = data.MaxCharge;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<PhoneChargeTypeCallType | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PhoneChargeTypeCallType/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch PhoneChargeTypeCallType with id ${id}`);
    } else {
      return new PhoneChargeTypeCallType(await response.text());
    }
  }
}

PhoneChargeTypeCallType satisfies StarRezStructureStatic<PhoneChargeTypeCallType>
