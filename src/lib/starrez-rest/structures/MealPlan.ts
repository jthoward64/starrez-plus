// Generated from XML description of MealPlan

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class MealPlan {
  mealPlanID?: number;
  recordTypeEnum?: unknown;
  termSessionID?: number;
  mealPlanDiningHallID?: number;
  description?: string;
  code?: string;
  dateStart?: Date;
  dateEnd?: Date;
  active?: boolean;
  mealSetupEnum?: unknown;
  chargesNotAllowed?: boolean;
  mealPricingID?: number;
  numberOfMeals?: number;
  numberOfServings?: number;
  chargeItemID?: number;
  allowanceA?: number;
  allowanceARate?: string;
  allowanceB?: number;
  allowanceBRate?: string;
  allowanceC?: number;
  allowanceCRate?: string;
  transactionDateDue?: Date | null;
  updateContractDatesWhenDatesChange?: boolean;
  comments?: string;
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
  viewOnWeb?: boolean;
  webDescription?: string;
  webOrder?: number;
  webComments?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "MealPlan");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.MealPlanID != null) this.mealPlanID = parseInt(data.MealPlanID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
    if (data.MealPlanDiningHallID != null) this.mealPlanDiningHallID = parseInt(data.MealPlanDiningHallID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Code != null) this.code = data.Code;
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.DateEnd != null) this.dateEnd = new Date(data.DateEnd);
    if (data.Active != null) this.active = data.Active === 'true';
    if (data.MealSetupEnum != null) this.mealSetupEnum = data.MealSetupEnum;
    if (data.ChargesNotAllowed != null) this.chargesNotAllowed = data.ChargesNotAllowed === 'true';
    if (data.MealPricingID != null) this.mealPricingID = parseInt(data.MealPricingID, 10);
    if (data.NumberOfMeals != null) this.numberOfMeals = parseInt(data.NumberOfMeals, 10);
    if (data.NumberOfServings != null) this.numberOfServings = parseInt(data.NumberOfServings, 10);
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.AllowanceA != null) this.allowanceA = parseFloat(data.AllowanceA);
    if (data.AllowanceARate != null) this.allowanceARate = data.AllowanceARate;
    if (data.AllowanceB != null) this.allowanceB = parseFloat(data.AllowanceB);
    if (data.AllowanceBRate != null) this.allowanceBRate = data.AllowanceBRate;
    if (data.AllowanceC != null) this.allowanceC = parseFloat(data.AllowanceC);
    if (data.AllowanceCRate != null) this.allowanceCRate = data.AllowanceCRate;
    if (data.TransactionDateDue != null) this.transactionDateDue = new Date(data.TransactionDateDue);
    if (data.UpdateContractDatesWhenDatesChange != null) this.updateContractDatesWhenDatesChange = data.UpdateContractDatesWhenDatesChange === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.CustomBit1 != null) this.customBit1 = data.CustomBit1 === 'true';
    if (data.CustomBit2 != null) this.customBit2 = data.CustomBit2 === 'true';
    if (data.CustomString1 != null) this.customString1 = data.CustomString1;
    if (data.CustomString2 != null) this.customString2 = data.CustomString2;
    if (data.CustomString3 != null) this.customString3 = data.CustomString3;
    if (data.CustomString4 != null) this.customString4 = data.CustomString4;
    if (data.CustomString5 != null) this.customString5 = data.CustomString5;
    if (data.CustomString6 != null) this.customString6 = data.CustomString6;
    if (data.CustomDate1 != null) this.customDate1 = new Date(data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = new Date(data.CustomDate2);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebOrder != null) this.webOrder = parseInt(data.WebOrder, 10);
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<MealPlan | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MealPlan/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch MealPlan with id ${id}`);
    } else {
      return new MealPlan(await response.text());
    }
}

}
