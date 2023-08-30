export const xmlToJson = {
  'Integer': {
    tsType: 'number',
    mapper: (xmlName) => `(data.${xmlName} != null ? parseInt(data.${xmlName}, 10) : data.${xmlName})`
  },
  'String': {
    tsType: 'string',
    mapper: (xmlName) => `data.${xmlName}`
  },
  'Unknown': {
    tsType: 'unknown',
    mapper: (xmlName) => `data.${xmlName}`
  },
  'DateTimeSeconds': {
    tsType: 'Date',
    mapper: (xmlName) => `(data.${xmlName} != null ? new Date(data.${xmlName}) : data.${xmlName})`
  },
  'DateTime': {
    tsType: 'Date',
    mapper: (xmlName) => `(data.${xmlName} != null ? new Date(data.${xmlName}) : data.${xmlName})`
  },
  'Boolean': {
    tsType: 'boolean',
    mapper: (xmlName) => `data.${xmlName} === 'true'`
  },
  'Binary': {
    tsType: 'any',
    mapper: (xmlName) => `data.${xmlName}`
  },
  'LongString': {
    tsType: 'string',
    mapper: (xmlName) => `data.${xmlName}`
  },
  'Money': {
    tsType: 'string',
    mapper: (xmlName) => `data.${xmlName}`
  },
  'Byte': {
    tsType: 'number',
    mapper: (xmlName) => `(data.${xmlName} != null ? parseInt(data.${xmlName}, 10) : data.${xmlName})`
  },
  'Short': {
    tsType: 'number',
    mapper: (xmlName) => `(data.${xmlName} != null ? parseInt(data.${xmlName}, 10) : data.${xmlName})`
  },
  'Date': {
    tsType: 'Date',
    mapper: (xmlName) => `(data.${xmlName} != null ? new Date(data.${xmlName}) : data.${xmlName})`
  },
  'MinutesSinceMidnight': {
    tsType: 'number',
    mapper: (xmlName) => `(data.${xmlName} != null ? parseInt(data.${xmlName}, 10) : data.${xmlName})`
  },
  'Timestamp': {
    tsType: 'Date',
    mapper: (xmlName) => `(data.${xmlName} != null ? new Date(data.${xmlName}) : data.${xmlName})`
  },
  'BigDecimal': {
    tsType: 'number',
    mapper: (xmlName) => `(data.${xmlName} != null ? parseFloat(data.${xmlName}) : data.${xmlName})`
  },
  'Guid': {
    tsType: 'string',
    mapper: (xmlName) => `data.${xmlName}`
  },
  'Decimal': {
    tsType: 'number',
    mapper: (xmlName) => `(data.${xmlName} != null ? parseFloat(data.${xmlName}) : data.${xmlName})`
  },
  'Duration': {
    tsType: 'string',
    mapper: (xmlName) => `data.${xmlName}`
  }
};
