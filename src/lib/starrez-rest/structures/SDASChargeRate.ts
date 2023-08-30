// Generated from XML description of SDASChargeRate

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class SDASChargeRate {
  sDASChargeRateID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  chargePerMb?: string;
  chargeMinimum?: string;
  monthlyAllowance?: string;
  accessLevel?: string;
  isPlan?: boolean;
  chargeItemID?: number;
  transactionTemplateID?: number;
  planAllowance?: number;
  residentSelectable?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "SDASChargeRate");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.SDASChargeRateID != null) this.sDASChargeRateID = parseInt(data.SDASChargeRateID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ChargePerMb != null) this.chargePerMb = data.ChargePerMb;
    if (data.ChargeMinimum != null) this.chargeMinimum = data.ChargeMinimum;
    if (data.MonthlyAllowance != null) this.monthlyAllowance = data.MonthlyAllowance;
    if (data.AccessLevel != null) this.accessLevel = data.AccessLevel;
    if (data.IsPlan != null) this.isPlan = data.IsPlan === 'true';
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.TransactionTemplateID != null) this.transactionTemplateID = parseInt(data.TransactionTemplateID, 10);
    if (data.PlanAllowance != null) this.planAllowance = parseInt(data.PlanAllowance, 10);
    if (data.ResidentSelectable != null) this.residentSelectable = data.ResidentSelectable === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<SDASChargeRate | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SDASChargeRate/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch SDASChargeRate with id ${id}`);
    } else {
      return new SDASChargeRate(await response.text());
    }
}

}