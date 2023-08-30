// Generated from XML description of RoomSpaceMaintenance

import { starRezXmlToJson } from "../parsing.js";
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

    if (data.RoomSpaceMaintenanceID != null) this.roomSpaceMaintenanceID = parseInt(data.RoomSpaceMaintenanceID, 10);
    if (data.RoomSpaceID != null) this.roomSpaceID = parseInt(data.RoomSpaceID, 10);
    if (data.DateReported != null) this.dateReported = new Date(data.DateReported);
    if (data.DateDue != null) this.dateDue = new Date(data.DateDue);
    if (data.JobStatus != null) this.jobStatus = data.JobStatus;
    if (data.OtherServiceNumber != null) this.otherServiceNumber = data.OtherServiceNumber;
    if (data.RoomSpaceMaintenanceCategoryID != null) this.roomSpaceMaintenanceCategoryID = parseInt(data.RoomSpaceMaintenanceCategoryID, 10);
    if (data.RoomSpaceMaintenanceItemID != null) this.roomSpaceMaintenanceItemID = parseInt(data.RoomSpaceMaintenanceItemID, 10);
    if (data.ReportedByName != null) this.reportedByName = data.ReportedByName;
    if (data.ReportedByPhone != null) this.reportedByPhone = data.ReportedByPhone;
    if (data.Occupant_EntryID != null) this.occupant_EntryID = parseInt(data.Occupant_EntryID, 10);
    if (data.OccupantEntryName != null) this.occupantEntryName = data.OccupantEntryName;
    if (data.OccupantPresent != null) this.occupantPresent = data.OccupantPresent === 'true';
    if (data.OccupantPresentReason != null) this.occupantPresentReason = data.OccupantPresentReason;
    if (data.JobSent != null) this.jobSent = data.JobSent === 'true';
    if (data.Status != null) this.status = data.Status;
    if (data.Location != null) this.location = data.Location;
    if (data.Description != null) this.description = data.Description;
    if (data.PriorityID != null) this.priorityID = parseInt(data.PriorityID, 10);
    if (data.Technician != null) this.technician = data.Technician;
    if (data.StartDate != null) this.startDate = new Date(data.StartDate);
    if (data.CompleteDate != null) this.completeDate = new Date(data.CompleteDate);
    if (data.RoomSpaceClosedID != null) this.roomSpaceClosedID = parseInt(data.RoomSpaceClosedID, 10);
    if (data.RepairDescription != null) this.repairDescription = data.RepairDescription;
    if (data.ContactID != null) this.contactID = parseInt(data.ContactID, 10);
    if (data.ContractorDate != null) this.contractorDate = new Date(data.ContractorDate);
    if (data.ContractorETA != null) this.contractorETA = data.ContractorETA;
    if (data.ContractorOrderNumber != null) this.contractorOrderNumber = data.ContractorOrderNumber;
    if (data.ContractorCostEstimate != null) this.contractorCostEstimate = data.ContractorCostEstimate;
    if (data.ContractorCost != null) this.contractorCost = data.ContractorCost;
    if (data.Cause != null) this.cause = data.Cause;
    if (data.ChargeType != null) this.chargeType = data.ChargeType;
    if (data.AccountCode != null) this.accountCode = data.AccountCode;
    if (data.Charge != null) this.charge = data.Charge === 'true';
    if (data.ContractDate != null) this.contractDate = new Date(data.ContractDate);
    if (data.Charge_EntryID != null) this.charge_EntryID = parseInt(data.Charge_EntryID, 10);
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
    if (data.CustomDate1 != null) this.customDate1 = new Date(data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = new Date(data.CustomDate2);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceMaintenance | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceMaintenance/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceMaintenance with id ${id}`);
    } else {
      return new RoomSpaceMaintenance(await response.text());
    }
  }
}

RoomSpaceMaintenance satisfies StarRezStructureStatic<RoomSpaceMaintenance>
