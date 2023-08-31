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

    if (data.WebModuleID != null) this.webModuleID = (data.WebModuleID != null ? parseInt(data.WebModuleID, 10) : data.WebModuleID);
    if (data.WebSiteID != null) this.webSiteID = (data.WebSiteID != null ? parseInt(data.WebSiteID, 10) : data.WebSiteID);
    if (data.ModuleName != null) this.moduleName = data.ModuleName;
    if (data.Description != null) this.description = data.Description;
    if (data.ModuleOrder != null) this.moduleOrder = (data.ModuleOrder != null ? parseInt(data.ModuleOrder, 10) : data.ModuleOrder);
    if (data.Manager != null) this.manager = data.Manager;
    if (data.Visible != null) this.visible = data.Visible === 'true';
    if (data.AccessRoles != null) this.accessRoles = data.AccessRoles;
    if (data.GlobalModule != null) this.globalModule = data.GlobalModule === 'true';
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WebModule | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebModule/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebModule with id ${id}`);
    } else {
      return new WebModule(await response.text());
    }
  }
}

WebModule satisfies StarRezStructureStatic<WebModule>
