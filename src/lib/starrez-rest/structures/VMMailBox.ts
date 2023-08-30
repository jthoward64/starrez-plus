// Generated from XML description of VMMailBox

import { starRezXmlToJson } from "../parsing.js";
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

    if (data.VMMailBoxID != null) this.vMMailBoxID = parseInt(data.VMMailBoxID, 10);
    if (data.VMMailBoxTypeID != null) this.vMMailBoxTypeID = parseInt(data.VMMailBoxTypeID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.ExtensionID != null) this.extensionID = parseInt(data.ExtensionID, 10);
    if (data.Enabled != null) this.enabled = data.Enabled === 'true';
    if (data.PinNumber != null) this.pinNumber = parseInt(data.PinNumber, 10);
    if (data.AutoPlay != null) this.autoPlay = data.AutoPlay === 'true';
    if (data.AlternateGreeting != null) this.alternateGreeting = data.AlternateGreeting === 'true';
    if (data.AlternateGreetingStartMinute != null) this.alternateGreetingStartMinute = parseInt(data.AlternateGreetingStartMinute, 10);
    if (data.AlternateGreetingEndMinute != null) this.alternateGreetingEndMinute = parseInt(data.AlternateGreetingEndMinute, 10);
    if (data.AlternateGreetingDays != null) this.alternateGreetingDays = data.AlternateGreetingDays;
    if (data.AlternateDivertNumber != null) this.alternateDivertNumber = data.AlternateDivertNumber;
    if (data.AlternateDivertType != null) this.alternateDivertType = parseInt(data.AlternateDivertType, 10);
    if (data.MailBoxAction != null) this.mailBoxAction = parseInt(data.MailBoxAction, 10);
    if (data.DivertNumber != null) this.divertNumber = data.DivertNumber;
    if (data.DivertType != null) this.divertType = parseInt(data.DivertType, 10);
    if (data.MessageTimeStamp != null) this.messageTimeStamp = data.MessageTimeStamp === 'true';
    if (data.MessageAutoDelete != null) this.messageAutoDelete = data.MessageAutoDelete === 'true';
    if (data.VMMailBoxName != null) this.vMMailBoxName = data.VMMailBoxName;
    if (data.MessageDelivery != null) this.messageDelivery = parseInt(data.MessageDelivery, 10);
    if (data.Emailaddress != null) this.emailaddress = data.Emailaddress;
    if (data.SecondsBeforeAnswer != null) this.secondsBeforeAnswer = parseInt(data.SecondsBeforeAnswer, 10);
    if (data.CLINumberOverride != null) this.cLINumberOverride = data.CLINumberOverride;
    if (data.FixedSharedGreeting != null) this.fixedSharedGreeting = data.FixedSharedGreeting === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<VMMailBox | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMMailBox/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch VMMailBox with id ${id}`);
    } else {
      return new VMMailBox(await response.text());
    }
  }
}

VMMailBox satisfies StarRezStructureStatic<VMMailBox>
