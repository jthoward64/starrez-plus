// Generated from XML description of DashboardPanel

import { starRezXmlToJson } from "../parsing.js";
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<DashboardPanel | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/DashboardPanel/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch DashboardPanel with id ${id}`);
    } else {
      return new DashboardPanel(await response.text());
    }
  }
}

DashboardPanel satisfies StarRezStructureStatic<DashboardPanel>
