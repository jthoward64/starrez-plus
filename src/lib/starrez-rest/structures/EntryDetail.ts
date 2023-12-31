// Generated from XML description of EntryDetail

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryDetail {
  entryDetailID?: number;
  entryID?: number;
  photoPath?: string;
  photoImage?: any | null;
  staffID?: number;
  classificationID?: number;
  attendeeStatusEnum?: unknown;
  eventRegistrationFeeID?: number;
  countryOfBirth_CountryID?: number;
  countryOfResidence_CountryID?: number;
  regionOfBirthID?: number;
  nationalityID?: number;
  citizenship_CountryID?: number;
  international?: boolean;
  internationalDetails?: string;
  visa?: boolean;
  visaDetails?: string;
  religion?: string;
  ethnicity?: string;
  medical?: string;
  disability?: string;
  dietary?: string;
  specialNeeds?: string;
  married?: boolean;
  deceased?: boolean;
  livingWithDependents?: boolean;
  dateEntry?: Date | null;
  dateExit?: Date | null;
  residentYear?: number;
  residentStatus?: string;
  occupation?: string;
  hearAboutUs?: string;
  vehicleRegistration?: string;
  vehicleDetails?: string;
  vehiclePermit?: string;
  previousMembership?: string;
  previousMembershipYears?: string;
  previousMemberName?: string;
  previousMemberYears?: string;
  previousMemberRelationship?: string;
  accountHold?: boolean;
  accountCode?: string;
  accountComments?: string;
  accountDueDate?: Date | null;
  account_PaymentTypeID?: number;
  accountBankName?: any;
  accountBankNumber?: any;
  accountDetail1?: any;
  accountDetail2?: any;
  accountDetail3?: any;
  accountDetail4?: any;
  financialSupportID?: number;
  financialComments?: string;
  enrollmentClass?: string;
  enrollmentTerm?: string;
  enrollmentLevel?: string;
  enrollmentStatus?: string;
  enrollmentYear?: number;
  profileInterests?: string;
  career?: string;
  careerComments?: string;
  employmentDetails?: string;
  incidentHold?: boolean;
  incidentHoldComments?: string;
  comments?: string;
  deceasedDate?: Date | null;
  visitorHold?: boolean;
  usesScreenReader?: boolean;
  currentMajor?: string;
  currentMinor?: string;
  currentGPA?: number;
  cumulativeGPA?: number;
  currentHours?: number;
  cumulativeHours?: number;
  athlete?: boolean;
  athleteTeam?: string;
  academicHold?: boolean;
  honorsIndicator?: boolean;
  immunizationsHold?: boolean;
  veteranStatus?: string;
  expectedGraduationDate?: Date | null;
  residency?: string;
  classificationOverride?: boolean;
  situationResponseEnum?: unknown;
  situationResponseDetail?: string;
  situationResponseExpiryDate?: Date | null;
  situationResponseModifiedDate?: Date | null;
  situationResponseSituation?: string | null;
  situationResponseComments?: string | null;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryDetail");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryDetailID != null) this.entryDetailID = (data.EntryDetailID != null ? parseInt(data.EntryDetailID, 10) : data.EntryDetailID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.PhotoPath != null) this.photoPath = data.PhotoPath;
    if (data.PhotoImage != null) this.photoImage = data.PhotoImage;
    if (data.StaffID != null) this.staffID = (data.StaffID != null ? parseInt(data.StaffID, 10) : data.StaffID);
    if (data.ClassificationID != null) this.classificationID = (data.ClassificationID != null ? parseInt(data.ClassificationID, 10) : data.ClassificationID);
    if (data.AttendeeStatusEnum != null) this.attendeeStatusEnum = data.AttendeeStatusEnum;
    if (data.EventRegistrationFeeID != null) this.eventRegistrationFeeID = (data.EventRegistrationFeeID != null ? parseInt(data.EventRegistrationFeeID, 10) : data.EventRegistrationFeeID);
    if (data.CountryOfBirth_CountryID != null) this.countryOfBirth_CountryID = (data.CountryOfBirth_CountryID != null ? parseInt(data.CountryOfBirth_CountryID, 10) : data.CountryOfBirth_CountryID);
    if (data.CountryOfResidence_CountryID != null) this.countryOfResidence_CountryID = (data.CountryOfResidence_CountryID != null ? parseInt(data.CountryOfResidence_CountryID, 10) : data.CountryOfResidence_CountryID);
    if (data.RegionOfBirthID != null) this.regionOfBirthID = (data.RegionOfBirthID != null ? parseInt(data.RegionOfBirthID, 10) : data.RegionOfBirthID);
    if (data.NationalityID != null) this.nationalityID = (data.NationalityID != null ? parseInt(data.NationalityID, 10) : data.NationalityID);
    if (data.Citizenship_CountryID != null) this.citizenship_CountryID = (data.Citizenship_CountryID != null ? parseInt(data.Citizenship_CountryID, 10) : data.Citizenship_CountryID);
    if (data.International != null) this.international = data.International === 'true';
    if (data.InternationalDetails != null) this.internationalDetails = data.InternationalDetails;
    if (data.Visa != null) this.visa = data.Visa === 'true';
    if (data.VisaDetails != null) this.visaDetails = data.VisaDetails;
    if (data.Religion != null) this.religion = data.Religion;
    if (data.Ethnicity != null) this.ethnicity = data.Ethnicity;
    if (data.Medical != null) this.medical = data.Medical;
    if (data.Disability != null) this.disability = data.Disability;
    if (data.Dietary != null) this.dietary = data.Dietary;
    if (data.SpecialNeeds != null) this.specialNeeds = data.SpecialNeeds;
    if (data.Married != null) this.married = data.Married === 'true';
    if (data.Deceased != null) this.deceased = data.Deceased === 'true';
    if (data.LivingWithDependents != null) this.livingWithDependents = data.LivingWithDependents === 'true';
    if (data.DateEntry != null) this.dateEntry = (data.DateEntry != null ? new Date(data.DateEntry) : data.DateEntry);
    if (data.DateExit != null) this.dateExit = (data.DateExit != null ? new Date(data.DateExit) : data.DateExit);
    if (data.ResidentYear != null) this.residentYear = (data.ResidentYear != null ? parseInt(data.ResidentYear, 10) : data.ResidentYear);
    if (data.ResidentStatus != null) this.residentStatus = data.ResidentStatus;
    if (data.Occupation != null) this.occupation = data.Occupation;
    if (data.HearAboutUs != null) this.hearAboutUs = data.HearAboutUs;
    if (data.VehicleRegistration != null) this.vehicleRegistration = data.VehicleRegistration;
    if (data.VehicleDetails != null) this.vehicleDetails = data.VehicleDetails;
    if (data.VehiclePermit != null) this.vehiclePermit = data.VehiclePermit;
    if (data.PreviousMembership != null) this.previousMembership = data.PreviousMembership;
    if (data.PreviousMembershipYears != null) this.previousMembershipYears = data.PreviousMembershipYears;
    if (data.PreviousMemberName != null) this.previousMemberName = data.PreviousMemberName;
    if (data.PreviousMemberYears != null) this.previousMemberYears = data.PreviousMemberYears;
    if (data.PreviousMemberRelationship != null) this.previousMemberRelationship = data.PreviousMemberRelationship;
    if (data.AccountHold != null) this.accountHold = data.AccountHold === 'true';
    if (data.AccountCode != null) this.accountCode = data.AccountCode;
    if (data.AccountComments != null) this.accountComments = data.AccountComments;
    if (data.AccountDueDate != null) this.accountDueDate = (data.AccountDueDate != null ? new Date(data.AccountDueDate) : data.AccountDueDate);
    if (data.Account_PaymentTypeID != null) this.account_PaymentTypeID = (data.Account_PaymentTypeID != null ? parseInt(data.Account_PaymentTypeID, 10) : data.Account_PaymentTypeID);
    if (data.AccountBankName != null) this.accountBankName = data.AccountBankName;
    if (data.AccountBankNumber != null) this.accountBankNumber = data.AccountBankNumber;
    if (data.AccountDetail1 != null) this.accountDetail1 = data.AccountDetail1;
    if (data.AccountDetail2 != null) this.accountDetail2 = data.AccountDetail2;
    if (data.AccountDetail3 != null) this.accountDetail3 = data.AccountDetail3;
    if (data.AccountDetail4 != null) this.accountDetail4 = data.AccountDetail4;
    if (data.FinancialSupportID != null) this.financialSupportID = (data.FinancialSupportID != null ? parseInt(data.FinancialSupportID, 10) : data.FinancialSupportID);
    if (data.FinancialComments != null) this.financialComments = data.FinancialComments;
    if (data.EnrollmentClass != null) this.enrollmentClass = data.EnrollmentClass;
    if (data.EnrollmentTerm != null) this.enrollmentTerm = data.EnrollmentTerm;
    if (data.EnrollmentLevel != null) this.enrollmentLevel = data.EnrollmentLevel;
    if (data.EnrollmentStatus != null) this.enrollmentStatus = data.EnrollmentStatus;
    if (data.EnrollmentYear != null) this.enrollmentYear = (data.EnrollmentYear != null ? parseInt(data.EnrollmentYear, 10) : data.EnrollmentYear);
    if (data.ProfileInterests != null) this.profileInterests = data.ProfileInterests;
    if (data.Career != null) this.career = data.Career;
    if (data.CareerComments != null) this.careerComments = data.CareerComments;
    if (data.EmploymentDetails != null) this.employmentDetails = data.EmploymentDetails;
    if (data.IncidentHold != null) this.incidentHold = data.IncidentHold === 'true';
    if (data.IncidentHoldComments != null) this.incidentHoldComments = data.IncidentHoldComments;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DeceasedDate != null) this.deceasedDate = (data.DeceasedDate != null ? new Date(data.DeceasedDate) : data.DeceasedDate);
    if (data.VisitorHold != null) this.visitorHold = data.VisitorHold === 'true';
    if (data.UsesScreenReader != null) this.usesScreenReader = data.UsesScreenReader === 'true';
    if (data.CurrentMajor != null) this.currentMajor = data.CurrentMajor;
    if (data.CurrentMinor != null) this.currentMinor = data.CurrentMinor;
    if (data.CurrentGPA != null) this.currentGPA = (data.CurrentGPA != null ? parseFloat(data.CurrentGPA) : data.CurrentGPA);
    if (data.CumulativeGPA != null) this.cumulativeGPA = (data.CumulativeGPA != null ? parseFloat(data.CumulativeGPA) : data.CumulativeGPA);
    if (data.CurrentHours != null) this.currentHours = (data.CurrentHours != null ? parseFloat(data.CurrentHours) : data.CurrentHours);
    if (data.CumulativeHours != null) this.cumulativeHours = (data.CumulativeHours != null ? parseFloat(data.CumulativeHours) : data.CumulativeHours);
    if (data.Athlete != null) this.athlete = data.Athlete === 'true';
    if (data.AthleteTeam != null) this.athleteTeam = data.AthleteTeam;
    if (data.AcademicHold != null) this.academicHold = data.AcademicHold === 'true';
    if (data.HonorsIndicator != null) this.honorsIndicator = data.HonorsIndicator === 'true';
    if (data.ImmunizationsHold != null) this.immunizationsHold = data.ImmunizationsHold === 'true';
    if (data.VeteranStatus != null) this.veteranStatus = data.VeteranStatus;
    if (data.ExpectedGraduationDate != null) this.expectedGraduationDate = (data.ExpectedGraduationDate != null ? new Date(data.ExpectedGraduationDate) : data.ExpectedGraduationDate);
    if (data.Residency != null) this.residency = data.Residency;
    if (data.ClassificationOverride != null) this.classificationOverride = data.ClassificationOverride === 'true';
    if (data.SituationResponseEnum != null) this.situationResponseEnum = data.SituationResponseEnum;
    if (data.SituationResponseDetail != null) this.situationResponseDetail = data.SituationResponseDetail;
    if (data.SituationResponseExpiryDate != null) this.situationResponseExpiryDate = (data.SituationResponseExpiryDate != null ? new Date(data.SituationResponseExpiryDate) : data.SituationResponseExpiryDate);
    if (data.SituationResponseModifiedDate != null) this.situationResponseModifiedDate = (data.SituationResponseModifiedDate != null ? new Date(data.SituationResponseModifiedDate) : data.SituationResponseModifiedDate);
    if (data.SituationResponseSituation != null) this.situationResponseSituation = data.SituationResponseSituation;
    if (data.SituationResponseComments != null) this.situationResponseComments = data.SituationResponseComments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryDetail by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryDetail to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryDetail object or null (if id) or an array of EntryDetail objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryDetail | null>;
  static async select(param: Partial<Record<keyof EntryDetail, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryDetail[]>;
  static async select(param: number | Partial<Record<keyof EntryDetail, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryDetail | EntryDetail[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryDetail/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryDetail`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryDetail with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryDetail(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryDetail(entry));
      }
    }
  }
}

EntryDetail satisfies StarRezStructureStatic<EntryDetail>
