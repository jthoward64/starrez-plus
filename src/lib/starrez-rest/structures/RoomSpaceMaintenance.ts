// Generated from XML description of RoomSpaceMaintenance

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceMaintenance {
  roomSpaceMaintenanceID?: number;
  roomSpaceID?: number;
  dateReported?: Date;
  dateDue?: Date | null;
  jobStatus?: string;
  otherServiceNumber?: string;
  roomSpaceMaintenanceCategoryID?: number;
  roomSpaceMaintenanceItemID?: number;
  reportedByName?: string;
  reportedByPhone?: string;
  occupant_EntryID?: number;
  occupantEntryName?: string;
  occupantPresent?: boolean;
  occupantPresentReason?: string;
  jobSent?: boolean;
  status?: string;
  location?: string;
  description?: string;
  priorityID?: number;
  technician?: string;
  startDate?: Date | null;
  completeDate?: Date | null;
  roomSpaceClosedID?: number;
  repairDescription?: string;
  contactID?: number;
  contractorDate?: Date | null;
  contractorETA?: string;
  contractorOrderNumber?: string;
  contractorCostEstimate?: string;
  contractorCost?: string;
  cause?: string;
  chargeType?: string;
  accountCode?: string;
  charge?: boolean;
  contractDate?: Date | null;
  charge_EntryID?: number;
  chargeAmount?: string;
  chargeInvoiced?: boolean;
  chargeInvoiceNumber?: string;
  viewOnWeb?: boolean;
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
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceMaintenance");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceMaintenanceID != null) this.roomSpaceMaintenanceID = (data.RoomSpaceMaintenanceID != null ? parseInt(data.RoomSpaceMaintenanceID, 10) : data.RoomSpaceMaintenanceID);
    if (data.RoomSpaceID != null) this.roomSpaceID = (data.RoomSpaceID != null ? parseInt(data.RoomSpaceID, 10) : data.RoomSpaceID);
    if (data.DateReported != null) this.dateReported = (data.DateReported != null ? new Date(data.DateReported) : data.DateReported);
    if (data.DateDue != null) this.dateDue = (data.DateDue != null ? new Date(data.DateDue) : data.DateDue);
    if (data.JobStatus != null) this.jobStatus = data.JobStatus;
    if (data.OtherServiceNumber != null) this.otherServiceNumber = data.OtherServiceNumber;
    if (data.RoomSpaceMaintenanceCategoryID != null) this.roomSpaceMaintenanceCategoryID = (data.RoomSpaceMaintenanceCategoryID != null ? parseInt(data.RoomSpaceMaintenanceCategoryID, 10) : data.RoomSpaceMaintenanceCategoryID);
    if (data.RoomSpaceMaintenanceItemID != null) this.roomSpaceMaintenanceItemID = (data.RoomSpaceMaintenanceItemID != null ? parseInt(data.RoomSpaceMaintenanceItemID, 10) : data.RoomSpaceMaintenanceItemID);
    if (data.ReportedByName != null) this.reportedByName = data.ReportedByName;
    if (data.ReportedByPhone != null) this.reportedByPhone = data.ReportedByPhone;
    if (data.Occupant_EntryID != null) this.occupant_EntryID = (data.Occupant_EntryID != null ? parseInt(data.Occupant_EntryID, 10) : data.Occupant_EntryID);
    if (data.OccupantEntryName != null) this.occupantEntryName = data.OccupantEntryName;
    if (data.OccupantPresent != null) this.occupantPresent = data.OccupantPresent === 'true';
    if (data.OccupantPresentReason != null) this.occupantPresentReason = data.OccupantPresentReason;
    if (data.JobSent != null) this.jobSent = data.JobSent === 'true';
    if (data.Status != null) this.status = data.Status;
    if (data.Location != null) this.location = data.Location;
    if (data.Description != null) this.description = data.Description;
    if (data.PriorityID != null) this.priorityID = (data.PriorityID != null ? parseInt(data.PriorityID, 10) : data.PriorityID);
    if (data.Technician != null) this.technician = data.Technician;
    if (data.StartDate != null) this.startDate = (data.StartDate != null ? new Date(data.StartDate) : data.StartDate);
    if (data.CompleteDate != null) this.completeDate = (data.CompleteDate != null ? new Date(data.CompleteDate) : data.CompleteDate);
    if (data.RoomSpaceClosedID != null) this.roomSpaceClosedID = (data.RoomSpaceClosedID != null ? parseInt(data.RoomSpaceClosedID, 10) : data.RoomSpaceClosedID);
    if (data.RepairDescription != null) this.repairDescription = data.RepairDescription;
    if (data.ContactID != null) this.contactID = (data.ContactID != null ? parseInt(data.ContactID, 10) : data.ContactID);
    if (data.ContractorDate != null) this.contractorDate = (data.ContractorDate != null ? new Date(data.ContractorDate) : data.ContractorDate);
    if (data.ContractorETA != null) this.contractorETA = data.ContractorETA;
    if (data.ContractorOrderNumber != null) this.contractorOrderNumber = data.ContractorOrderNumber;
    if (data.ContractorCostEstimate != null) this.contractorCostEstimate = data.ContractorCostEstimate;
    if (data.ContractorCost != null) this.contractorCost = data.ContractorCost;
    if (data.Cause != null) this.cause = data.Cause;
    if (data.ChargeType != null) this.chargeType = data.ChargeType;
    if (data.AccountCode != null) this.accountCode = data.AccountCode;
    if (data.Charge != null) this.charge = data.Charge === 'true';
    if (data.ContractDate != null) this.contractDate = (data.ContractDate != null ? new Date(data.ContractDate) : data.ContractDate);
    if (data.Charge_EntryID != null) this.charge_EntryID = (data.Charge_EntryID != null ? parseInt(data.Charge_EntryID, 10) : data.Charge_EntryID);
    if (data.ChargeAmount != null) this.chargeAmount = data.ChargeAmount;
    if (data.ChargeInvoiced != null) this.chargeInvoiced = data.ChargeInvoiced === 'true';
    if (data.ChargeInvoiceNumber != null) this.chargeInvoiceNumber = data.ChargeInvoiceNumber;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
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
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomSpaceMaintenance by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomSpaceMaintenance to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomSpaceMaintenance object or null (if id) or an array of RoomSpaceMaintenance objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceMaintenance | null>;
  static async select(param: Partial<Record<keyof RoomSpaceMaintenance, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceMaintenance[]>;
  static async select(param: number | Partial<Record<keyof RoomSpaceMaintenance, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceMaintenance | RoomSpaceMaintenance[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceMaintenance/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceMaintenance`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceMaintenance with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomSpaceMaintenance(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomSpaceMaintenance(entry));
      }
    }
  }
}

RoomSpaceMaintenance satisfies StarRezStructureStatic<RoomSpaceMaintenance>
