// Generated from XML description of WebModule

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebModule {
  webModuleID?: number;
  webSiteID?: number;
  moduleName?: string;
  description?: string;
  moduleOrder?: number;
  manager?: string;
  visible?: boolean;
  accessRoles?: string;
  globalModule?: boolean;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebModule");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebModuleID != null) this.webModuleID = parseInt(data.WebModuleID, 10);
    if (data.WebSiteID != null) this.webSiteID = parseInt(data.WebSiteID, 10);
    if (data.ModuleName != null) this.moduleName = data.ModuleName;
    if (data.Description != null) this.description = data.Description;
    if (data.ModuleOrder != null) this.moduleOrder = parseInt(data.ModuleOrder, 10);
    if (data.Manager != null) this.manager = data.Manager;
    if (data.Visible != null) this.visible = data.Visible === 'true';
    if (data.AccessRoles != null) this.accessRoles = data.AccessRoles;
    if (data.GlobalModule != null) this.globalModule = data.GlobalModule === 'true';
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WebModule | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebModule/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch WebModule with id ${id}`);
    } else {
      return new WebModule(await response.text());
    }
  }
}

WebModule satisfies StarRezStructureStatic<WebModule>
