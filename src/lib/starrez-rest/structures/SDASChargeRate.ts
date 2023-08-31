// Generated from XML description of SDASChargeRate

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.SDASChargeRateID != null) this.sDASChargeRateID = (data.SDASChargeRateID != null ? parseInt(data.SDASChargeRateID, 10) : data.SDASChargeRateID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ChargePerMb != null) this.chargePerMb = data.ChargePerMb;
    if (data.ChargeMinimum != null) this.chargeMinimum = data.ChargeMinimum;
    if (data.MonthlyAllowance != null) this.monthlyAllowance = data.MonthlyAllowance;
    if (data.AccessLevel != null) this.accessLevel = data.AccessLevel;
    if (data.IsPlan != null) this.isPlan = data.IsPlan === 'true';
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.TransactionTemplateID != null) this.transactionTemplateID = (data.TransactionTemplateID != null ? parseInt(data.TransactionTemplateID, 10) : data.TransactionTemplateID);
    if (data.PlanAllowance != null) this.planAllowance = (data.PlanAllowance != null ? parseInt(data.PlanAllowance, 10) : data.PlanAllowance);
    if (data.ResidentSelectable != null) this.residentSelectable = data.ResidentSelectable === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a SDASChargeRate by its ID or by exact match on other fields.
   * @param param Either the ID of the SDASChargeRate to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single SDASChargeRate object or null (if id) or an array of SDASChargeRate objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<SDASChargeRate | null>;
  static async select(param: Partial<Record<keyof SDASChargeRate, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<SDASChargeRate[]>;
  static async select(param: number | Partial<Record<keyof SDASChargeRate, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<SDASChargeRate | SDASChargeRate[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SDASChargeRate/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SDASChargeRate`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch SDASChargeRate with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new SDASChargeRate(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new SDASChargeRate(entry));
      }
    }
  }
}

SDASChargeRate satisfies StarRezStructureStatic<SDASChargeRate>
