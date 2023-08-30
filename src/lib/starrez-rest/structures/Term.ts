// Generated from XML description of Term

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Term {
  termID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  webDescription?: string;
  categoryID?: number;
  termCode?: string;
  termTypeID?: number;
  active?: boolean;
  activeDateOpen?: Date | null;
  activeDateClose?: Date | null;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Term");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TermID != null) this.termID = parseInt(data.TermID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.TermCode != null) this.termCode = data.TermCode;
    if (data.TermTypeID != null) this.termTypeID = parseInt(data.TermTypeID, 10);
    if (data.Active != null) this.active = data.Active === 'true';
    if (data.ActiveDateOpen != null) this.activeDateOpen = new Date(data.ActiveDateOpen);
    if (data.ActiveDateClose != null) this.activeDateClose = new Date(data.ActiveDateClose);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Term | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Term/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Term with id ${id}`);
    } else {
      return new Term(await response.text());
    }
  }
}

Term satisfies StarRezStructureStatic<Term>
