// Generated from XML description of TermRule

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class TermRule {
  termRuleID?: number;
  termID?: number;
  webSectionID?: number;
  active?: boolean;
  activeDateOpen?: Date | null;
  activeDateClose?: Date | null;
  comments?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TermRule");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TermRuleID != null) this.termRuleID = parseInt(data.TermRuleID, 10);
    if (data.TermID != null) this.termID = parseInt(data.TermID, 10);
    if (data.WebSectionID != null) this.webSectionID = parseInt(data.WebSectionID, 10);
    if (data.Active != null) this.active = data.Active === 'true';
    if (data.ActiveDateOpen != null) this.activeDateOpen = new Date(data.ActiveDateOpen);
    if (data.ActiveDateClose != null) this.activeDateClose = new Date(data.ActiveDateClose);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<TermRule | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TermRule/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch TermRule with id ${id}`);
    } else {
      return new TermRule(await response.text());
    }
}

}
