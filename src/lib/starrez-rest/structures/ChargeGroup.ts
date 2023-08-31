// Generated from XML description of ChargeGroup

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ChargeGroup {
  chargeGroupID?: number;
  recordTypeEnum?: unknown;
  abbreviation?: string;
  categoryID?: number;
  description?: string;
  hold?: boolean;
  deposit?: boolean;
  balancePaymentWithCharge?: boolean;
  taxDeductible?: boolean;
  allowTransactionDelete?: boolean;
  creditLimitAmount?: string;
  webAccountView?: boolean;
  webAccountPayments?: boolean;
  webAccountComments?: string;
  managedExternally?: boolean;
  isRent?: boolean;
  defaultToActiveBooking?: boolean;
  customBit1?: boolean;
  customBit2?: boolean;
  customString1?: string;
  customString2?: string;
  customString3?: string;
  customString4?: string;
  customString5?: string;
  customString6?: string;
  customDate1?: Date | null;
  customDate2?: Date | null;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ChargeGroup");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ChargeGroupID != null) this.chargeGroupID = (data.ChargeGroupID != null ? parseInt(data.ChargeGroupID, 10) : data.ChargeGroupID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Abbreviation != null) this.abbreviation = data.Abbreviation;
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.Description != null) this.description = data.Description;
    if (data.Hold != null) this.hold = data.Hold === 'true';
    if (data.Deposit != null) this.deposit = data.Deposit === 'true';
    if (data.BalancePaymentWithCharge != null) this.balancePaymentWithCharge = data.BalancePaymentWithCharge === 'true';
    if (data.TaxDeductible != null) this.taxDeductible = data.TaxDeductible === 'true';
    if (data.AllowTransactionDelete != null) this.allowTransactionDelete = data.AllowTransactionDelete === 'true';
    if (data.CreditLimitAmount != null) this.creditLimitAmount = data.CreditLimitAmount;
    if (data.WebAccountView != null) this.webAccountView = data.WebAccountView === 'true';
    if (data.WebAccountPayments != null) this.webAccountPayments = data.WebAccountPayments === 'true';
    if (data.WebAccountComments != null) this.webAccountComments = data.WebAccountComments;
    if (data.ManagedExternally != null) this.managedExternally = data.ManagedExternally === 'true';
    if (data.IsRent != null) this.isRent = data.IsRent === 'true';
    if (data.DefaultToActiveBooking != null) this.defaultToActiveBooking = data.DefaultToActiveBooking === 'true';
    if (data.CustomBit1 != null) this.customBit1 = data.CustomBit1 === 'true';
    if (data.CustomBit2 != null) this.customBit2 = data.CustomBit2 === 'true';
    if (data.CustomString1 != null) this.customString1 = data.CustomString1;
    if (data.CustomString2 != null) this.customString2 = data.CustomString2;
    if (data.CustomString3 != null) this.customString3 = data.CustomString3;
    if (data.CustomString4 != null) this.customString4 = data.CustomString4;
    if (data.CustomString5 != null) this.customString5 = data.CustomString5;
    if (data.CustomString6 != null) this.customString6 = data.CustomString6;
    if (data.CustomDate1 != null) this.customDate1 = (data.CustomDate1 != null ? new Date(data.CustomDate1) : data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = (data.CustomDate2 != null ? new Date(data.CustomDate2) : data.CustomDate2);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ChargeGroup | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ChargeGroup/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ChargeGroup with id ${id}`);
    } else {
      return new ChargeGroup(await response.text());
    }
  }
}

ChargeGroup satisfies StarRezStructureStatic<ChargeGroup>
