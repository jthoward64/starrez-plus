// Generated from XML description of WebControl

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebControl {
  webControlID?: number;
  webSectionID?: number;
  controlTitle?: string;
  controlName?: string;
  controlOrder?: number;
  showTitle?: boolean;
  source?: string;
  pane?: string;
  accessRoles?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebControl");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebControlID != null) this.webControlID = parseInt(data.WebControlID, 10);
    if (data.WebSectionID != null) this.webSectionID = parseInt(data.WebSectionID, 10);
    if (data.ControlTitle != null) this.controlTitle = data.ControlTitle;
    if (data.ControlName != null) this.controlName = data.ControlName;
    if (data.ControlOrder != null) this.controlOrder = parseInt(data.ControlOrder, 10);
    if (data.ShowTitle != null) this.showTitle = data.ShowTitle === 'true';
    if (data.Source != null) this.source = data.Source;
    if (data.Pane != null) this.pane = data.Pane;
    if (data.AccessRoles != null) this.accessRoles = data.AccessRoles;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WebControl | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebControl/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch WebControl with id ${id}`);
    } else {
      return new WebControl(await response.text());
    }
  }
}

WebControl satisfies StarRezStructureStatic<WebControl>
