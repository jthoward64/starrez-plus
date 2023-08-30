// Generated from XML description of EntryApplication

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.EntryApplicationID != null) this.entryApplicationID = parseInt(data.EntryApplicationID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.ApplicationStatusID != null) this.applicationStatusID = parseInt(data.ApplicationStatusID, 10);
    if (data.ClassificationID != null) this.classificationID = parseInt(data.ClassificationID, 10);
    if (data.TermID != null) this.termID = parseInt(data.TermID, 10);
    if (data.Returning != null) this.returning = data.Returning === 'true';
    if (data.ExpectedArrivalDate != null) this.expectedArrivalDate = new Date(data.ExpectedArrivalDate);
    if (data.ExpectedArrivalDateLatest != null) this.expectedArrivalDateLatest = new Date(data.ExpectedArrivalDateLatest);
    if (data.ExpectedDepartureDate != null) this.expectedDepartureDate = new Date(data.ExpectedDepartureDate);
    if (data.ApplicationDate != null) this.applicationDate = new Date(data.ApplicationDate);
    if (data.Rating != null) this.rating = data.Rating;
    if (data.CancelDate != null) this.cancelDate = new Date(data.CancelDate);
    if (data.EnquiryDate != null) this.enquiryDate = new Date(data.EnquiryDate);
    if (data.ReceivedDate != null) this.receivedDate = new Date(data.ReceivedDate);
    if (data.CompleteDate != null) this.completeDate = new Date(data.CompleteDate);
    if (data.ReceivedFee != null) this.receivedFee = data.ReceivedFee === 'true';
    if (data.ReceivedFee_WebPaymentID != null) this.receivedFee_WebPaymentID = parseInt(data.ReceivedFee_WebPaymentID, 10);
    if (data.ReceivedFee_PaymentID != null) this.receivedFee_PaymentID = parseInt(data.ReceivedFee_PaymentID, 10);
    if (data.ReceivedFeeDate != null) this.receivedFeeDate = new Date(data.ReceivedFeeDate);
    if (data.ReceivedFeeAmount != null) this.receivedFeeAmount = data.ReceivedFeeAmount;
    if (data.ReceivedDeposit != null) this.receivedDeposit = data.ReceivedDeposit === 'true';
    if (data.ReceivedDepositWaived != null) this.receivedDepositWaived = data.ReceivedDepositWaived === 'true';
    if (data.ReceivedDeposit_WebPaymentID != null) this.receivedDeposit_WebPaymentID = parseInt(data.ReceivedDeposit_WebPaymentID, 10);
    if (data.ReceivedDeposit_PaymentID != null) this.receivedDeposit_PaymentID = parseInt(data.ReceivedDeposit_PaymentID, 10);
    if (data.ReceivedDepositDate != null) this.receivedDepositDate = new Date(data.ReceivedDepositDate);
    if (data.ReceivedDepositAmount != null) this.receivedDepositAmount = data.ReceivedDepositAmount;
    if (data.ReceivedPhotoDate != null) this.receivedPhotoDate = new Date(data.ReceivedPhotoDate);
    if (data.OfferedDate != null) this.offeredDate = new Date(data.OfferedDate);
    if (data.OfferSentDate != null) this.offerSentDate = new Date(data.OfferSentDate);
    if (data.OfferReplyEnum != null) this.offerReplyEnum = data.OfferReplyEnum;
    if (data.OfferReplyDate != null) this.offerReplyDate = new Date(data.OfferReplyDate);
    if (data.OfferReplyReason != null) this.offerReplyReason = data.OfferReplyReason;
    if (data.ContractSignedDate != null) this.contractSignedDate = new Date(data.ContractSignedDate);
    if (data.PreferenceComments != null) this.preferenceComments = data.PreferenceComments;
    if (data.RoomPreferenceComments != null) this.roomPreferenceComments = data.RoomPreferenceComments;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.CommentsInternal != null) this.commentsInternal = data.CommentsInternal;
    if (data.Web != null) this.web = data.Web === 'true';
    if (data.RoomSelectionTimeslot != null) this.roomSelectionTimeslot = new Date(data.RoomSelectionTimeslot);
    if (data.RoomSelectionNumber != null) this.roomSelectionNumber = parseInt(data.RoomSelectionNumber, 10);
    if (data.RoommateGroupID != null) this.roommateGroupID = parseInt(data.RoommateGroupID, 10);
    if (data.RoomMateGroupSortOrder != null) this.roomMateGroupSortOrder = parseInt(data.RoomMateGroupSortOrder, 10);
    if (data.RoomMateShowInSearch != null) this.roomMateShowInSearch = data.RoomMateShowInSearch === 'true';
    if (data.RoomMateDescription != null) this.roomMateDescription = data.RoomMateDescription;
    if (data.AllocateOptionEnum != null) this.allocateOptionEnum = data.AllocateOptionEnum;
    if (data.PortalTrackingOnly != null) this.portalTrackingOnly = data.PortalTrackingOnly === 'true';
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.CustomBit1 != null) this.customBit1 = data.CustomBit1 === 'true';
    if (data.CustomBit2 != null) this.customBit2 = data.CustomBit2 === 'true';
    if (data.CustomBit3 != null) this.customBit3 = data.CustomBit3 === 'true';
    if (data.CustomBit4 != null) this.customBit4 = data.CustomBit4 === 'true';
    if (data.CustomDate1 != null) this.customDate1 = new Date(data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = new Date(data.CustomDate2);
    if (data.CustomDate3 != null) this.customDate3 = new Date(data.CustomDate3);
    if (data.CustomDate4 != null) this.customDate4 = new Date(data.CustomDate4);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.timestamp != null) this.timestamp = new Date(data.timestamp);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
