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

  /**
   * Fetches a LicensingServiceLocalBackup by its ID or by exact match on other fields.
   * @param param Either the ID of the LicensingServiceLocalBackup to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single LicensingServiceLocalBackup object or null (if id) or an array of LicensingServiceLocalBackup objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<LicensingServiceLocalBackup | null>;
  static async select(param: Partial<Record<keyof LicensingServiceLocalBackup, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<LicensingServiceLocalBackup[]>;
  static async select(param: number | Partial<Record<keyof LicensingServiceLocalBackup, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<LicensingServiceLocalBackup | LicensingServiceLocalBackup[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/LicensingServiceLocalBackup/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/LicensingServiceLocalBackup`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch LicensingServiceLocalBackup with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new LicensingServiceLocalBackup(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new LicensingServiceLocalBackup(entry));
      }
    }
  }
}

LicensingServiceLocalBackup satisfies StarRezStructureStatic<LicensingServiceLocalBackup>
