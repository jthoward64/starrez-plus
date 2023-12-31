// Generated from XML description of VMMailBox

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class VMMailBox {
  vMMailBoxID?: number;
  vMMailBoxTypeID?: number;
  entryID?: number;
  extensionID?: number;
  enabled?: boolean;
  pinNumber?: number;
  autoPlay?: boolean;
  alternateGreeting?: boolean;
  alternateGreetingStartMinute?: number;
  alternateGreetingEndMinute?: number;
  alternateGreetingDays?: string;
  alternateDivertNumber?: string;
  alternateDivertType?: number;
  mailBoxAction?: number;
  divertNumber?: string;
  divertType?: number;
  messageTimeStamp?: boolean;
  messageAutoDelete?: boolean;
  vMMailBoxName?: string;
  messageDelivery?: number;
  emailaddress?: string;
  secondsBeforeAnswer?: number;
  cLINumberOverride?: string;
  fixedSharedGreeting?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMMailBox");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMMailBoxID != null) this.vMMailBoxID = (data.VMMailBoxID != null ? parseInt(data.VMMailBoxID, 10) : data.VMMailBoxID);
    if (data.VMMailBoxTypeID != null) this.vMMailBoxTypeID = (data.VMMailBoxTypeID != null ? parseInt(data.VMMailBoxTypeID, 10) : data.VMMailBoxTypeID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ExtensionID != null) this.extensionID = (data.ExtensionID != null ? parseInt(data.ExtensionID, 10) : data.ExtensionID);
    if (data.Enabled != null) this.enabled = data.Enabled === 'true';
    if (data.PinNumber != null) this.pinNumber = (data.PinNumber != null ? parseInt(data.PinNumber, 10) : data.PinNumber);
    if (data.AutoPlay != null) this.autoPlay = data.AutoPlay === 'true';
    if (data.AlternateGreeting != null) this.alternateGreeting = data.AlternateGreeting === 'true';
    if (data.AlternateGreetingStartMinute != null) this.alternateGreetingStartMinute = (data.AlternateGreetingStartMinute != null ? parseInt(data.AlternateGreetingStartMinute, 10) : data.AlternateGreetingStartMinute);
    if (data.AlternateGreetingEndMinute != null) this.alternateGreetingEndMinute = (data.AlternateGreetingEndMinute != null ? parseInt(data.AlternateGreetingEndMinute, 10) : data.AlternateGreetingEndMinute);
    if (data.AlternateGreetingDays != null) this.alternateGreetingDays = data.AlternateGreetingDays;
    if (data.AlternateDivertNumber != null) this.alternateDivertNumber = data.AlternateDivertNumber;
    if (data.AlternateDivertType != null) this.alternateDivertType = (data.AlternateDivertType != null ? parseInt(data.AlternateDivertType, 10) : data.AlternateDivertType);
    if (data.MailBoxAction != null) this.mailBoxAction = (data.MailBoxAction != null ? parseInt(data.MailBoxAction, 10) : data.MailBoxAction);
    if (data.DivertNumber != null) this.divertNumber = data.DivertNumber;
    if (data.DivertType != null) this.divertType = (data.DivertType != null ? parseInt(data.DivertType, 10) : data.DivertType);
    if (data.MessageTimeStamp != null) this.messageTimeStamp = data.MessageTimeStamp === 'true';
    if (data.MessageAutoDelete != null) this.messageAutoDelete = data.MessageAutoDelete === 'true';
    if (data.VMMailBoxName != null) this.vMMailBoxName = data.VMMailBoxName;
    if (data.MessageDelivery != null) this.messageDelivery = (data.MessageDelivery != null ? parseInt(data.MessageDelivery, 10) : data.MessageDelivery);
    if (data.Emailaddress != null) this.emailaddress = data.Emailaddress;
    if (data.SecondsBeforeAnswer != null) this.secondsBeforeAnswer = (data.SecondsBeforeAnswer != null ? parseInt(data.SecondsBeforeAnswer, 10) : data.SecondsBeforeAnswer);
    if (data.CLINumberOverride != null) this.cLINumberOverride = data.CLINumberOverride;
    if (data.FixedSharedGreeting != null) this.fixedSharedGreeting = data.FixedSharedGreeting === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a VMMailBox by its ID or by exact match on other fields.
   * @param param Either the ID of the VMMailBox to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single VMMailBox object or null (if id) or an array of VMMailBox objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<VMMailBox | null>;
  static async select(param: Partial<Record<keyof VMMailBox, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMMailBox[]>;
  static async select(param: number | Partial<Record<keyof VMMailBox, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMMailBox | VMMailBox[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMMailBox/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMMailBox`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VMMailBox with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new VMMailBox(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new VMMailBox(entry));
      }
    }
  }
}

VMMailBox satisfies StarRezStructureStatic<VMMailBox>
