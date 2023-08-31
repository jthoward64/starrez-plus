// Generated from XML description of LicensingServiceLocalBackup

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class LicensingServiceLocalBackup {
  licensingServiceLocalBackupID?: number;
  backupItemKey?: string;
  backupItemValue?: any;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "LicensingServiceLocalBackup");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.LicensingServiceLocalBackupID != null) this.licensingServiceLocalBackupID = (data.LicensingServiceLocalBackupID != null ? parseInt(data.LicensingServiceLocalBackupID, 10) : data.LicensingServiceLocalBackupID);
    if (data.BackupItemKey != null) this.backupItemKey = data.BackupItemKey;
    if (data.BackupItemValue != null) this.backupItemValue = data.BackupItemValue;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<LicensingServiceLocalBackup | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/LicensingServiceLocalBackup/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch LicensingServiceLocalBackup with id ${id}`);
    } else {
      return new LicensingServiceLocalBackup(await response.text());
    }
  }
}

LicensingServiceLocalBackup satisfies StarRezStructureStatic<LicensingServiceLocalBackup>
