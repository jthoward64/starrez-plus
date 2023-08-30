// Generated from XML description of EntryDetail

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.EntryDetailID != null) this.entryDetailID = parseInt(data.EntryDetailID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.PhotoPath != null) this.photoPath = data.PhotoPath;
    if (data.PhotoImage != null) this.photoImage = data.PhotoImage;
    if (data.StaffID != null) this.staffID = parseInt(data.StaffID, 10);
    if (data.ClassificationID != null) this.classificationID = parseInt(data.ClassificationID, 10);
    if (data.AttendeeStatusEnum != null) this.attendeeStatusEnum = data.AttendeeStatusEnum;
    if (data.EventRegistrationFeeID != null) this.eventRegistrationFeeID = parseInt(data.EventRegistrationFeeID, 10);
    if (data.CountryOfBirth_CountryID != null) this.countryOfBirth_CountryID = parseInt(data.CountryOfBirth_CountryID, 10);
    if (data.CountryOfResidence_CountryID != null) this.countryOfResidence_CountryID = parseInt(data.CountryOfResidence_CountryID, 10);
    if (data.RegionOfBirthID != null) this.regionOfBirthID = parseInt(data.RegionOfBirthID, 10);
    if (data.NationalityID != null) this.nationalityID = parseInt(data.NationalityID, 10);
    if (data.Citizenship_CountryID != null) this.citizenship_CountryID = parseInt(data.Citizenship_CountryID, 10);
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
    if (data.DateEntry != null) this.dateEntry = new Date(data.DateEntry);
    if (data.DateExit != null) this.dateExit = new Date(data.DateExit);
    if (data.ResidentYear != null) this.residentYear = parseInt(data.ResidentYear, 10);
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
    if (data.AccountDueDate != null) this.accountDueDate = new Date(data.AccountDueDate);
    if (data.Account_PaymentTypeID != null) this.account_PaymentTypeID = parseInt(data.Account_PaymentTypeID, 10);
    if (data.AccountBankName != null) this.accountBankName = data.AccountBankName;
    if (data.AccountBankNumber != null) this.accountBankNumber = data.AccountBankNumber;
    if (data.AccountDetail1 != null) this.accountDetail1 = data.AccountDetail1;
    if (data.AccountDetail2 != null) this.accountDetail2 = data.AccountDetail2;
    if (data.AccountDetail3 != null) this.accountDetail3 = data.AccountDetail3;
    if (data.AccountDetail4 != null) this.accountDetail4 = data.AccountDetail4;
    if (data.FinancialSupportID != null) this.financialSupportID = parseInt(data.FinancialSupportID, 10);
    if (data.FinancialComments != null) this.financialComments = data.FinancialComments;
    if (data.EnrollmentClass != null) this.enrollmentClass = data.EnrollmentClass;
    if (data.EnrollmentTerm != null) this.enrollmentTerm = data.EnrollmentTerm;
    if (data.EnrollmentLevel != null) this.enrollmentLevel = data.EnrollmentLevel;
    if (data.EnrollmentStatus != null) this.enrollmentStatus = data.EnrollmentStatus;
    if (data.EnrollmentYear != null) this.enrollmentYear = parseInt(data.EnrollmentYear, 10);
    if (data.ProfileInterests != null) this.profileInterests = data.ProfileInterests;
    if (data.Career != null) this.career = data.Career;
    if (data.CareerComments != null) this.careerComments = data.CareerComments;
    if (data.EmploymentDetails != null) this.employmentDetails = data.EmploymentDetails;
    if (data.IncidentHold != null) this.incidentHold = data.IncidentHold === 'true';
    if (data.IncidentHoldComments != null) this.incidentHoldComments = data.IncidentHoldComments;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DeceasedDate != null) this.deceasedDate = new Date(data.DeceasedDate);
    if (data.VisitorHold != null) this.visitorHold = data.VisitorHold === 'true';
    if (data.UsesScreenReader != null) this.usesScreenReader = data.UsesScreenReader === 'true';
    if (data.CurrentMajor != null) this.currentMajor = data.CurrentMajor;
    if (data.CurrentMinor != null) this.currentMinor = data.CurrentMinor;
    if (data.CurrentGPA != null) this.currentGPA = parseFloat(data.CurrentGPA);
    if (data.CumulativeGPA != null) this.cumulativeGPA = parseFloat(data.CumulativeGPA);
    if (data.CurrentHours != null) this.currentHours = parseFloat(data.CurrentHours);
    if (data.CumulativeHours != null) this.cumulativeHours = parseFloat(data.CumulativeHours);
    if (data.Athlete != null) this.athlete = data.Athlete === 'true';
    if (data.AthleteTeam != null) this.athleteTeam = data.AthleteTeam;
    if (data.AcademicHold != null) this.academicHold = data.AcademicHold === 'true';
    if (data.HonorsIndicator != null) this.honorsIndicator = data.HonorsIndicator === 'true';
    if (data.ImmunizationsHold != null) this.immunizationsHold = data.ImmunizationsHold === 'true';
    if (data.VeteranStatus != null) this.veteranStatus = data.VeteranStatus;
    if (data.ExpectedGraduationDate != null) this.expectedGraduationDate = new Date(data.ExpectedGraduationDate);
    if (data.Residency != null) this.residency = data.Residency;
    if (data.ClassificationOverride != null) this.classificationOverride = data.ClassificationOverride === 'true';
    if (data.SituationResponseEnum != null) this.situationResponseEnum = data.SituationResponseEnum;
    if (data.SituationResponseDetail != null) this.situationResponseDetail = data.SituationResponseDetail;
    if (data.SituationResponseExpiryDate != null) this.situationResponseExpiryDate = new Date(data.SituationResponseExpiryDate);
    if (data.SituationResponseModifiedDate != null) this.situationResponseModifiedDate = new Date(data.SituationResponseModifiedDate);
    if (data.SituationResponseSituation != null) this.situationResponseSituation = data.SituationResponseSituation;
    if (data.SituationResponseComments != null) this.situationResponseComments = data.SituationResponseComments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryDetail | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryDetail/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryDetail with id ${id}`);
    } else {
      return new EntryDetail(await response.text());
    }
}

}