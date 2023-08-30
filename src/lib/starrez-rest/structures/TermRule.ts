// Generated from XML description of TermRule

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.TermRuleID != null) this.termRuleID = (data.TermRuleID != null ? parseInt(data.TermRuleID, 10) : data.TermRuleID);
    if (data.TermID != null) this.termID = (data.TermID != null ? parseInt(data.TermID, 10) : data.TermID);
    if (data.WebSectionID != null) this.webSectionID = (data.WebSectionID != null ? parseInt(data.WebSectionID, 10) : data.WebSectionID);
    if (data.Active != null) this.active = data.Active === 'true';
    if (data.ActiveDateOpen != null) this.activeDateOpen = (data.ActiveDateOpen != null ? new Date(data.ActiveDateOpen) : data.ActiveDateOpen);
    if (data.ActiveDateClose != null) this.activeDateClose = (data.ActiveDateClose != null ? new Date(data.ActiveDateClose) : data.ActiveDateClose);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

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

TermRule satisfies StarRezStructureStatic<TermRule>
