// Generated from XML description of DashboardPanel

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class DashboardPanel {
  dashboardPanelID?: number;
  dashboardID?: number;
  refreshIntervalEnum?: unknown;
  compactMode?: boolean;
  titleColour?: string;
  panelClass?: string;
  postion?: string;
  columnOrder?: number;
  collapsed?: boolean;
  panelHeight?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "DashboardPanel");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.DashboardPanelID != null) this.dashboardPanelID = (data.DashboardPanelID != null ? parseInt(data.DashboardPanelID, 10) : data.DashboardPanelID);
    if (data.DashboardID != null) this.dashboardID = (data.DashboardID != null ? parseInt(data.DashboardID, 10) : data.DashboardID);
    if (data.RefreshIntervalEnum != null) this.refreshIntervalEnum = data.RefreshIntervalEnum;
    if (data.CompactMode != null) this.compactMode = data.CompactMode === 'true';
    if (data.TitleColour != null) this.titleColour = data.TitleColour;
    if (data.PanelClass != null) this.panelClass = data.PanelClass;
    if (data.Postion != null) this.postion = data.Postion;
    if (data.ColumnOrder != null) this.columnOrder = (data.ColumnOrder != null ? parseInt(data.ColumnOrder, 10) : data.ColumnOrder);
    if (data.Collapsed != null) this.collapsed = data.Collapsed === 'true';
    if (data.PanelHeight != null) this.panelHeight = (data.PanelHeight != null ? parseInt(data.PanelHeight, 10) : data.PanelHeight);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a DashboardPanel by its ID or by exact match on other fields.
   * @param param Either the ID of the DashboardPanel to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single DashboardPanel object or null (if id) or an array of DashboardPanel objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<DashboardPanel | null>;
  static async select(param: Partial<Record<keyof DashboardPanel, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<DashboardPanel[]>;
  static async select(param: number | Partial<Record<keyof DashboardPanel, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<DashboardPanel | DashboardPanel[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/DashboardPanel/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/DashboardPanel`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch DashboardPanel with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new DashboardPanel(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new DashboardPanel(entry));
      }
    }
  }
}

DashboardPanel satisfies StarRezStructureStatic<DashboardPanel>
