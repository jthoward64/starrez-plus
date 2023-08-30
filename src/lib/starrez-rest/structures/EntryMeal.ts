// Generated from XML description of EntryMeal

import { starRezXmlToJson } from "../parsing.js";

export class EntryMeal {
  entryMealID?: number;
  entryID?: number;
  mealPlanID?: number;
  termSessionID?: number;
  mealStatusEnum?: unknown;
  bookingID?: number;
  numberOfGuests?: number;
  numberOfMeals?: number;
  breakfast?: number;
  lunch?: number;
  dinner?: number;
  other?: number;
  dateStart?: Date;
  dateEnd?: Date;
  contractDateStart?: Date;
  contractDateEnd?: Date;
  allowanceAInitial?: number;
  allowanceAUsed?: number;
  allowanceBInitial?: number;
  allowanceBUsed?: number;
  allowanceCInitial?: number;
  allowanceCUsed?: number;
  cancelled?: boolean;
  processedCharged?: boolean;
  processedCancelled?: boolean;
  comments?: string;
  dateChargedTo?: Date;
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
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryMeal");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryMealID != null) this.entryMealID = parseInt(data.EntryMealID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.MealPlanID != null) this.mealPlanID = parseInt(data.MealPlanID, 10);
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
    if (data.MealStatusEnum != null) this.mealStatusEnum = data.MealStatusEnum;
    if (data.BookingID != null) this.bookingID = parseInt(data.BookingID, 10);
    if (data.NumberOfGuests != null) this.numberOfGuests = parseInt(data.NumberOfGuests, 10);
    if (data.NumberOfMeals != null) this.numberOfMeals = parseInt(data.NumberOfMeals, 10);
    if (data.Breakfast != null) this.breakfast = parseInt(data.Breakfast, 10);
    if (data.Lunch != null) this.lunch = parseInt(data.Lunch, 10);
    if (data.Dinner != null) this.dinner = parseInt(data.Dinner, 10);
    if (data.Other != null) this.other = parseInt(data.Other, 10);
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.DateEnd != null) this.dateEnd = new Date(data.DateEnd);
    if (data.ContractDateStart != null) this.contractDateStart = new Date(data.ContractDateStart);
    if (data.ContractDateEnd != null) this.contractDateEnd = new Date(data.ContractDateEnd);
    if (data.AllowanceAInitial != null) this.allowanceAInitial = parseFloat(data.AllowanceAInitial);
    if (data.AllowanceAUsed != null) this.allowanceAUsed = parseFloat(data.AllowanceAUsed);
    if (data.AllowanceBInitial != null) this.allowanceBInitial = parseFloat(data.AllowanceBInitial);
    if (data.AllowanceBUsed != null) this.allowanceBUsed = parseFloat(data.AllowanceBUsed);
    if (data.AllowanceCInitial != null) this.allowanceCInitial = parseFloat(data.AllowanceCInitial);
    if (data.AllowanceCUsed != null) this.allowanceCUsed = parseFloat(data.AllowanceCUsed);
    if (data.Cancelled != null) this.cancelled = data.Cancelled === 'true';
    if (data.ProcessedCharged != null) this.processedCharged = data.ProcessedCharged === 'true';
    if (data.ProcessedCancelled != null) this.processedCancelled = data.ProcessedCancelled === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateChargedTo != null) this.dateChargedTo = new Date(data.DateChargedTo);
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
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
