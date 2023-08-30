// Generated from XML description of EntryApplication

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryApplication {
  entryApplicationID?: number;
  entryID?: number;
  applicationStatusID?: number;
  classificationID?: number;
  termID?: number;
  returning?: boolean;
  expectedArrivalDate?: Date | null;
  expectedArrivalDateLatest?: Date | null;
  expectedDepartureDate?: Date | null;
  applicationDate?: Date | null;
  rating?: string;
  cancelDate?: Date | null;
  enquiryDate?: Date | null;
  receivedDate?: Date | null;
  completeDate?: Date | null;
  receivedFee?: boolean;
  receivedFee_WebPaymentID?: number;
  receivedFee_PaymentID?: number;
  receivedFeeDate?: Date | null;
  receivedFeeAmount?: string;
  receivedDeposit?: boolean;
  receivedDepositWaived?: boolean;
  receivedDeposit_WebPaymentID?: number;
  receivedDeposit_PaymentID?: number;
  receivedDepositDate?: Date | null;
  receivedDepositAmount?: string;
  receivedPhotoDate?: Date | null;
  offeredDate?: Date | null;
  offerSentDate?: Date | null;
  offerReplyEnum?: unknown;
  offerReplyDate?: Date | null;
  offerReplyReason?: string;
  contractSignedDate?: Date | null;
  preferenceComments?: string;
  roomPreferenceComments?: string;
  comments?: string;
  commentsInternal?: string;
  web?: boolean;
  roomSelectionTimeslot?: Date | null;
  roomSelectionNumber?: number;
  roommateGroupID?: number;
  roomMateGroupSortOrder?: number;
  roomMateShowInSearch?: boolean;
  roomMateDescription?: string;
  allocateOptionEnum?: unknown;
  portalTrackingOnly?: boolean;
  tableID?: number;
  tableName?: string;
  customBit1?: boolean;
  customBit2?: boolean;
  customBit3?: boolean;
  customBit4?: boolean;
  customDate1?: Date | null;
  customDate2?: Date | null;
  customDate3?: Date | null;
  customDate4?: Date | null;
  securityUserID?: number;
  dateCreated?: Date;
  timestamp?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryApplication");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryApplicationID != null) this.entryApplicationID = (data.EntryApplicationID != null ? parseInt(data.EntryApplicationID, 10) : data.EntryApplicationID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ApplicationStatusID != null) this.applicationStatusID = (data.ApplicationStatusID != null ? parseInt(data.ApplicationStatusID, 10) : data.ApplicationStatusID);
    if (data.ClassificationID != null) this.classificationID = (data.ClassificationID != null ? parseInt(data.ClassificationID, 10) : data.ClassificationID);
    if (data.TermID != null) this.termID = (data.TermID != null ? parseInt(data.TermID, 10) : data.TermID);
    if (data.Returning != null) this.returning = data.Returning === 'true';
    if (data.ExpectedArrivalDate != null) this.expectedArrivalDate = (data.ExpectedArrivalDate != null ? new Date(data.ExpectedArrivalDate) : data.ExpectedArrivalDate);
    if (data.ExpectedArrivalDateLatest != null) this.expectedArrivalDateLatest = (data.ExpectedArrivalDateLatest != null ? new Date(data.ExpectedArrivalDateLatest) : data.ExpectedArrivalDateLatest);
    if (data.ExpectedDepartureDate != null) this.expectedDepartureDate = (data.ExpectedDepartureDate != null ? new Date(data.ExpectedDepartureDate) : data.ExpectedDepartureDate);
    if (data.ApplicationDate != null) this.applicationDate = (data.ApplicationDate != null ? new Date(data.ApplicationDate) : data.ApplicationDate);
    if (data.Rating != null) this.rating = data.Rating;
    if (data.CancelDate != null) this.cancelDate = (data.CancelDate != null ? new Date(data.CancelDate) : data.CancelDate);
    if (data.EnquiryDate != null) this.enquiryDate = (data.EnquiryDate != null ? new Date(data.EnquiryDate) : data.EnquiryDate);
    if (data.ReceivedDate != null) this.receivedDate = (data.ReceivedDate != null ? new Date(data.ReceivedDate) : data.ReceivedDate);
    if (data.CompleteDate != null) this.completeDate = (data.CompleteDate != null ? new Date(data.CompleteDate) : data.CompleteDate);
    if (data.ReceivedFee != null) this.receivedFee = data.ReceivedFee === 'true';
    if (data.ReceivedFee_WebPaymentID != null) this.receivedFee_WebPaymentID = (data.ReceivedFee_WebPaymentID != null ? parseInt(data.ReceivedFee_WebPaymentID, 10) : data.ReceivedFee_WebPaymentID);
    if (data.ReceivedFee_PaymentID != null) this.receivedFee_PaymentID = (data.ReceivedFee_PaymentID != null ? parseInt(data.ReceivedFee_PaymentID, 10) : data.ReceivedFee_PaymentID);
    if (data.ReceivedFeeDate != null) this.receivedFeeDate = (data.ReceivedFeeDate != null ? new Date(data.ReceivedFeeDate) : data.ReceivedFeeDate);
    if (data.ReceivedFeeAmount != null) this.receivedFeeAmount = data.ReceivedFeeAmount;
    if (data.ReceivedDeposit != null) this.receivedDeposit = data.ReceivedDeposit === 'true';
    if (data.ReceivedDepositWaived != null) this.receivedDepositWaived = data.ReceivedDepositWaived === 'true';
    if (data.ReceivedDeposit_WebPaymentID != null) this.receivedDeposit_WebPaymentID = (data.ReceivedDeposit_WebPaymentID != null ? parseInt(data.ReceivedDeposit_WebPaymentID, 10) : data.ReceivedDeposit_WebPaymentID);
    if (data.ReceivedDeposit_PaymentID != null) this.receivedDeposit_PaymentID = (data.ReceivedDeposit_PaymentID != null ? parseInt(data.ReceivedDeposit_PaymentID, 10) : data.ReceivedDeposit_PaymentID);
    if (data.ReceivedDepositDate != null) this.receivedDepositDate = (data.ReceivedDepositDate != null ? new Date(data.ReceivedDepositDate) : data.ReceivedDepositDate);
    if (data.ReceivedDepositAmount != null) this.receivedDepositAmount = data.ReceivedDepositAmount;
    if (data.ReceivedPhotoDate != null) this.receivedPhotoDate = (data.ReceivedPhotoDate != null ? new Date(data.ReceivedPhotoDate) : data.ReceivedPhotoDate);
    if (data.OfferedDate != null) this.offeredDate = (data.OfferedDate != null ? new Date(data.OfferedDate) : data.OfferedDate);
    if (data.OfferSentDate != null) this.offerSentDate = (data.OfferSentDate != null ? new Date(data.OfferSentDate) : data.OfferSentDate);
    if (data.OfferReplyEnum != null) this.offerReplyEnum = data.OfferReplyEnum;
    if (data.OfferReplyDate != null) this.offerReplyDate = (data.OfferReplyDate != null ? new Date(data.OfferReplyDate) : data.OfferReplyDate);
    if (data.OfferReplyReason != null) this.offerReplyReason = data.OfferReplyReason;
    if (data.ContractSignedDate != null) this.contractSignedDate = (data.ContractSignedDate != null ? new Date(data.ContractSignedDate) : data.ContractSignedDate);
    if (data.PreferenceComments != null) this.preferenceComments = data.PreferenceComments;
    if (data.RoomPreferenceComments != null) this.roomPreferenceComments = data.RoomPreferenceComments;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.CommentsInternal != null) this.commentsInternal = data.CommentsInternal;
    if (data.Web != null) this.web = data.Web === 'true';
    if (data.RoomSelectionTimeslot != null) this.roomSelectionTimeslot = (data.RoomSelectionTimeslot != null ? new Date(data.RoomSelectionTimeslot) : data.RoomSelectionTimeslot);
    if (data.RoomSelectionNumber != null) this.roomSelectionNumber = (data.RoomSelectionNumber != null ? parseInt(data.RoomSelectionNumber, 10) : data.RoomSelectionNumber);
    if (data.RoommateGroupID != null) this.roommateGroupID = (data.RoommateGroupID != null ? parseInt(data.RoommateGroupID, 10) : data.RoommateGroupID);
    if (data.RoomMateGroupSortOrder != null) this.roomMateGroupSortOrder = (data.RoomMateGroupSortOrder != null ? parseInt(data.RoomMateGroupSortOrder, 10) : data.RoomMateGroupSortOrder);
    if (data.RoomMateShowInSearch != null) this.roomMateShowInSearch = data.RoomMateShowInSearch === 'true';
    if (data.RoomMateDescription != null) this.roomMateDescription = data.RoomMateDescription;
    if (data.AllocateOptionEnum != null) this.allocateOptionEnum = data.AllocateOptionEnum;
    if (data.PortalTrackingOnly != null) this.portalTrackingOnly = data.PortalTrackingOnly === 'true';
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.CustomBit1 != null) this.customBit1 = data.CustomBit1 === 'true';
    if (data.CustomBit2 != null) this.customBit2 = data.CustomBit2 === 'true';
    if (data.CustomBit3 != null) this.customBit3 = data.CustomBit3 === 'true';
    if (data.CustomBit4 != null) this.customBit4 = data.CustomBit4 === 'true';
    if (data.CustomDate1 != null) this.customDate1 = (data.CustomDate1 != null ? new Date(data.CustomDate1) : data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = (data.CustomDate2 != null ? new Date(data.CustomDate2) : data.CustomDate2);
    if (data.CustomDate3 != null) this.customDate3 = (data.CustomDate3 != null ? new Date(data.CustomDate3) : data.CustomDate3);
    if (data.CustomDate4 != null) this.customDate4 = (data.CustomDate4 != null ? new Date(data.CustomDate4) : data.CustomDate4);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.timestamp != null) this.timestamp = (data.timestamp != null ? new Date(data.timestamp) : data.timestamp);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryApplication | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryApplication/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryApplication with id ${id}`);
    } else {
      return new EntryApplication(await response.text());
    }
  }
}

EntryApplication satisfies StarRezStructureStatic<EntryApplication>
