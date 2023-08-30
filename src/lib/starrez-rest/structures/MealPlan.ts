// Generated from XML description of MealPlan

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.MealPlanID != null) this.mealPlanID = (data.MealPlanID != null ? parseInt(data.MealPlanID, 10) : data.MealPlanID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.MealPlanDiningHallID != null) this.mealPlanDiningHallID = (data.MealPlanDiningHallID != null ? parseInt(data.MealPlanDiningHallID, 10) : data.MealPlanDiningHallID);
    if (data.Description != null) this.description = data.Description;
    if (data.Code != null) this.code = data.Code;
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateEnd != null) this.dateEnd = (data.DateEnd != null ? new Date(data.DateEnd) : data.DateEnd);
    if (data.Active != null) this.active = data.Active === 'true';
    if (data.MealSetupEnum != null) this.mealSetupEnum = data.MealSetupEnum;
    if (data.ChargesNotAllowed != null) this.chargesNotAllowed = data.ChargesNotAllowed === 'true';
    if (data.MealPricingID != null) this.mealPricingID = (data.MealPricingID != null ? parseInt(data.MealPricingID, 10) : data.MealPricingID);
    if (data.NumberOfMeals != null) this.numberOfMeals = (data.NumberOfMeals != null ? parseInt(data.NumberOfMeals, 10) : data.NumberOfMeals);
    if (data.NumberOfServings != null) this.numberOfServings = (data.NumberOfServings != null ? parseInt(data.NumberOfServings, 10) : data.NumberOfServings);
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.AllowanceA != null) this.allowanceA = (data.AllowanceA != null ? parseFloat(data.AllowanceA) : data.AllowanceA);
    if (data.AllowanceARate != null) this.allowanceARate = data.AllowanceARate;
    if (data.AllowanceB != null) this.allowanceB = (data.AllowanceB != null ? parseFloat(data.AllowanceB) : data.AllowanceB);
    if (data.AllowanceBRate != null) this.allowanceBRate = data.AllowanceBRate;
    if (data.AllowanceC != null) this.allowanceC = (data.AllowanceC != null ? parseFloat(data.AllowanceC) : data.AllowanceC);
    if (data.AllowanceCRate != null) this.allowanceCRate = data.AllowanceCRate;
    if (data.TransactionDateDue != null) this.transactionDateDue = (data.TransactionDateDue != null ? new Date(data.TransactionDateDue) : data.TransactionDateDue);
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
    if (data.CustomDate1 != null) this.customDate1 = (data.CustomDate1 != null ? new Date(data.CustomDate1) : data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = (data.CustomDate2 != null ? new Date(data.CustomDate2) : data.CustomDate2);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebOrder != null) this.webOrder = (data.WebOrder != null ? parseInt(data.WebOrder, 10) : data.WebOrder);
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

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

MealPlan satisfies StarRezStructureStatic<MealPlan>
