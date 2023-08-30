/**
 * DO NOT USE THIS FUNCTION OUTSIDE OF STARREZ STRUCTURES IT IS NOT FULLY TYPE SAFE
 * 
 * This function completely ignores the type of the data it is parsing and returns a Record<string, any> object
 * It also ignores attributes and only parses the text content of the child nodes
 * 
 * @param xml Either an XML string or a Node which contains a single child node with tag name `tagName`
 * @param tagName The tag name of the child node to parse (i.e. "Booking" or "Entry")
 * @returns A Record<string, any> object containing the parsed data
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromXML(xml: string | Node, tagName: string): Record<string, any> | null {
  const parser = new DOMParser();
  let xmlDoc: Document;
  if (typeof xml === 'string') {
    xmlDoc = parser.parseFromString(xml, 'text/xml');
  } else {
    xmlDoc = new Document();
    xmlDoc.appendChild(xml);
  }

  const matches = xmlDoc.getElementsByTagName(tagName);
  let dataNode: Element;
  if (matches.length === 0) {
    return null;
  } else if (matches.length > 1) {
    throw new Error(`XML contains more than one ${tagName} node`);
  } else {
    dataNode = matches[0];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: Record<string, any> = {};
  const properties = dataNode.children;

  for (const property of properties) {
    const propertyName = property.tagName;
    const propertyValue = property.textContent;

    if (propertyName && propertyName in data) {
      data[propertyName] = propertyValue;
    }
  }

  return data;
}
