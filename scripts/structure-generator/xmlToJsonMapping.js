export const xmlToJson = {
  'Integer': {
    tsType: 'number',
    mapper: (xmlName) => `parseInt(data.${xmlName}, 10)`
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
    mapper: (xmlName) => `new Date(data.${xmlName})`
  },
  'DateTime': {
    tsType: 'Date',
    mapper: (xmlName) => `new Date(data.${xmlName})`
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
    mapper: (xmlName) => `parseInt(data.${xmlName}, 10)`
  },
  'Short': {
    tsType: 'number',
    mapper: (xmlName) => `parseInt(data.${xmlName}, 10)`
  },
  'Date': {
    tsType: 'Date',
    mapper: (xmlName) => `new Date(data.${xmlName})`
  },
  'MinutesSinceMidnight': {
    tsType: 'number',
    mapper: (xmlName) => `parseInt(data.${xmlName}, 10)`
  },
  'Timestamp': {
    tsType: 'Date',
    mapper: (xmlName) => `new Date(data.${xmlName})`
  },
  'BigDecimal': {
    tsType: 'number',
    mapper: (xmlName) => `parseFloat(data.${xmlName})`
  },
  'Guid': {
    tsType: 'string',
    mapper: (xmlName) => `data.${xmlName}`
  },
  'Decimal': {
    tsType: 'number',
    mapper: (xmlName) => `parseFloat(data.${xmlName})`
  },
  'Duration': {
    tsType: 'number',
    mapper: (xmlName) => `parseFloat(data.${xmlName})`
  }
};
