// Generated from XML description of EntryMeal

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.EntryMealID != null) this.entryMealID = (data.EntryMealID != null ? parseInt(data.EntryMealID, 10) : data.EntryMealID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.MealPlanID != null) this.mealPlanID = (data.MealPlanID != null ? parseInt(data.MealPlanID, 10) : data.MealPlanID);
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.MealStatusEnum != null) this.mealStatusEnum = data.MealStatusEnum;
    if (data.BookingID != null) this.bookingID = (data.BookingID != null ? parseInt(data.BookingID, 10) : data.BookingID);
    if (data.NumberOfGuests != null) this.numberOfGuests = (data.NumberOfGuests != null ? parseInt(data.NumberOfGuests, 10) : data.NumberOfGuests);
    if (data.NumberOfMeals != null) this.numberOfMeals = (data.NumberOfMeals != null ? parseInt(data.NumberOfMeals, 10) : data.NumberOfMeals);
    if (data.Breakfast != null) this.breakfast = (data.Breakfast != null ? parseInt(data.Breakfast, 10) : data.Breakfast);
    if (data.Lunch != null) this.lunch = (data.Lunch != null ? parseInt(data.Lunch, 10) : data.Lunch);
    if (data.Dinner != null) this.dinner = (data.Dinner != null ? parseInt(data.Dinner, 10) : data.Dinner);
    if (data.Other != null) this.other = (data.Other != null ? parseInt(data.Other, 10) : data.Other);
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateEnd != null) this.dateEnd = (data.DateEnd != null ? new Date(data.DateEnd) : data.DateEnd);
    if (data.ContractDateStart != null) this.contractDateStart = (data.ContractDateStart != null ? new Date(data.ContractDateStart) : data.ContractDateStart);
    if (data.ContractDateEnd != null) this.contractDateEnd = (data.ContractDateEnd != null ? new Date(data.ContractDateEnd) : data.ContractDateEnd);
    if (data.AllowanceAInitial != null) this.allowanceAInitial = (data.AllowanceAInitial != null ? parseFloat(data.AllowanceAInitial) : data.AllowanceAInitial);
    if (data.AllowanceAUsed != null) this.allowanceAUsed = (data.AllowanceAUsed != null ? parseFloat(data.AllowanceAUsed) : data.AllowanceAUsed);
    if (data.AllowanceBInitial != null) this.allowanceBInitial = (data.AllowanceBInitial != null ? parseFloat(data.AllowanceBInitial) : data.AllowanceBInitial);
    if (data.AllowanceBUsed != null) this.allowanceBUsed = (data.AllowanceBUsed != null ? parseFloat(data.AllowanceBUsed) : data.AllowanceBUsed);
    if (data.AllowanceCInitial != null) this.allowanceCInitial = (data.AllowanceCInitial != null ? parseFloat(data.AllowanceCInitial) : data.AllowanceCInitial);
    if (data.AllowanceCUsed != null) this.allowanceCUsed = (data.AllowanceCUsed != null ? parseFloat(data.AllowanceCUsed) : data.AllowanceCUsed);
    if (data.Cancelled != null) this.cancelled = data.Cancelled === 'true';
    if (data.ProcessedCharged != null) this.processedCharged = data.ProcessedCharged === 'true';
    if (data.ProcessedCancelled != null) this.processedCancelled = data.ProcessedCancelled === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateChargedTo != null) this.dateChargedTo = (data.DateChargedTo != null ? new Date(data.DateChargedTo) : data.DateChargedTo);
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
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryMeal by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryMeal to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryMeal object or null (if id) or an array of EntryMeal objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryMeal | null>;
  static async select(param: Partial<Record<keyof EntryMeal, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryMeal[]>;
  static async select(param: number | Partial<Record<keyof EntryMeal, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryMeal | EntryMeal[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryMeal/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryMeal`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryMeal with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryMeal(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryMeal(entry));
      }
    }
  }
}

EntryMeal satisfies StarRezStructureStatic<EntryMeal>
