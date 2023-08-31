// Generated from XML description of ChargeItem

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ChargeItem {
  chargeItemID?: number;
  chargeGroupID?: number;
  recordTypeEnum?: unknown;
  abbreviation?: string;
  description?: string;
  gLNumber?: string;
  tax_GLPostingID?: number;
  accountReceivable_GLPostingID?: number;
  defaultAmount?: string;
  taxRate?: number;
  taxRate2?: number;
  taxRate3?: number;
  amountInputAsExTax?: boolean;
  taxOrderEnum?: unknown;
  taxCategoryEnum?: unknown;
  unearnedIncome_ChargeItemID?: number;
  disputable?: boolean;
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
    const data = starRezXmlToJson(xml, "ChargeItem");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.ChargeGroupID != null) this.chargeGroupID = (data.ChargeGroupID != null ? parseInt(data.ChargeGroupID, 10) : data.ChargeGroupID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Abbreviation != null) this.abbreviation = data.Abbreviation;
    if (data.Description != null) this.description = data.Description;
    if (data.GLNumber != null) this.gLNumber = data.GLNumber;
    if (data.Tax_GLPostingID != null) this.tax_GLPostingID = (data.Tax_GLPostingID != null ? parseInt(data.Tax_GLPostingID, 10) : data.Tax_GLPostingID);
    if (data.AccountReceivable_GLPostingID != null) this.accountReceivable_GLPostingID = (data.AccountReceivable_GLPostingID != null ? parseInt(data.AccountReceivable_GLPostingID, 10) : data.AccountReceivable_GLPostingID);
    if (data.DefaultAmount != null) this.defaultAmount = data.DefaultAmount;
    if (data.TaxRate != null) this.taxRate = (data.TaxRate != null ? parseFloat(data.TaxRate) : data.TaxRate);
    if (data.TaxRate2 != null) this.taxRate2 = (data.TaxRate2 != null ? parseFloat(data.TaxRate2) : data.TaxRate2);
    if (data.TaxRate3 != null) this.taxRate3 = (data.TaxRate3 != null ? parseFloat(data.TaxRate3) : data.TaxRate3);
    if (data.AmountInputAsExTax != null) this.amountInputAsExTax = data.AmountInputAsExTax === 'true';
    if (data.TaxOrderEnum != null) this.taxOrderEnum = data.TaxOrderEnum;
    if (data.TaxCategoryEnum != null) this.taxCategoryEnum = data.TaxCategoryEnum;
    if (data.UnearnedIncome_ChargeItemID != null) this.unearnedIncome_ChargeItemID = (data.UnearnedIncome_ChargeItemID != null ? parseInt(data.UnearnedIncome_ChargeItemID, 10) : data.UnearnedIncome_ChargeItemID);
    if (data.Disputable != null) this.disputable = data.Disputable === 'true';
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ChargeItem | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ChargeItem/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ChargeItem with id ${id}`);
    } else {
      return new ChargeItem(await response.text());
    }
  }
}

ChargeItem satisfies StarRezStructureStatic<ChargeItem>
