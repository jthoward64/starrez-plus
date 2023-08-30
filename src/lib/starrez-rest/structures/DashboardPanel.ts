// Generated from XML description of DashboardPanel

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.DashboardPanelID != null) this.dashboardPanelID = parseInt(data.DashboardPanelID, 10);
    if (data.DashboardID != null) this.dashboardID = parseInt(data.DashboardID, 10);
    if (data.RefreshIntervalEnum != null) this.refreshIntervalEnum = data.RefreshIntervalEnum;
    if (data.CompactMode != null) this.compactMode = data.CompactMode === 'true';
    if (data.TitleColour != null) this.titleColour = data.TitleColour;
    if (data.PanelClass != null) this.panelClass = data.PanelClass;
    if (data.Postion != null) this.postion = data.Postion;
    if (data.ColumnOrder != null) this.columnOrder = parseInt(data.ColumnOrder, 10);
    if (data.Collapsed != null) this.collapsed = data.Collapsed === 'true';
    if (data.PanelHeight != null) this.panelHeight = parseInt(data.PanelHeight, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
