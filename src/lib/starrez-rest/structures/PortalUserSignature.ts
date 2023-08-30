// Generated from XML description of PortalUserSignature

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalUserSignature {
  portalUserSignatureID?: number;
  entryID?: number;
  portalPageWidgetID?: number;
  tableID?: number;
  tableName?: string;
  description?: string;
  signature?: string;
  dateSigned?: Date;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalUserSignature");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalUserSignatureID != null) this.portalUserSignatureID = (data.PortalUserSignatureID != null ? parseInt(data.PortalUserSignatureID, 10) : data.PortalUserSignatureID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.PortalPageWidgetID != null) this.portalPageWidgetID = (data.PortalPageWidgetID != null ? parseInt(data.PortalPageWidgetID, 10) : data.PortalPageWidgetID);
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.Description != null) this.description = data.Description;
    if (data.Signature != null) this.signature = data.Signature;
    if (data.DateSigned != null) this.dateSigned = (data.DateSigned != null ? new Date(data.DateSigned) : data.DateSigned);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<PortalUserSignature | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalUserSignature/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalUserSignature with id ${id}`);
    } else {
      return new PortalUserSignature(await response.text());
    }
  }
}

PortalUserSignature satisfies StarRezStructureStatic<PortalUserSignature>
