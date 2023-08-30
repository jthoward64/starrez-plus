// Generated from XML description of ContributionSubType

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ContributionSubType {
  contributionSubTypeID?: number;
  contributionTypeID?: number;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ContributionSubType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ContributionSubTypeID != null) this.contributionSubTypeID = parseInt(data.ContributionSubTypeID, 10);
    if (data.ContributionTypeID != null) this.contributionTypeID = parseInt(data.ContributionTypeID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ContributionSubType | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ContributionSubType/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ContributionSubType with id ${id}`);
    } else {
      return new ContributionSubType(await response.text());
    }
  }
}

ContributionSubType satisfies StarRezStructureStatic<ContributionSubType>
