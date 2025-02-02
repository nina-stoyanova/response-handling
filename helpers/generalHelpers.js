/**
 * Checks if an object contains all required properties, including nested ones.
 *
 * @param {Object} obj
 * @param {string[]} requiredProps
 * @returns {boolean} - Returns `true` if all required properties exist, otherwise `false`.
 *
 */
export const hasRequiredProps = (obj, requiredProps) => {
  return requiredProps.every((path) => {
    const keys = path.split("."); // Handle nested properties like "payload.targetEntity"
    let current = obj;

    for (const key of keys) {
      if (!current || !current.hasOwnProperty(key)) {
        return false;
      }
      current = current[key]; // Move deeper
    }

    return true;
  });
};

/**
 * Formats a timestamp into a human-readable date string in "DD MMM YYYY" format.
 *
 * @param {number|string} timestamp
 * @returns {string}
 *
 * @example
 * console.log(formatTimestamp(1706800000000)); // "01 Feb 2024"
 */
export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

/**
 * Formats an individual event into a descriptive string.
 *
 * @param {Object} event - The event object to be formatted.
 * @param {Object} event.payload
 * @param {string} event.payload.userName
 * @param {string} event.payload.targetEntity
 * @param {string} event.payload.targetId
 * @param {number} event.timestamp
 *
 * @returns {string}
 */
export const formatEventOutput = (event) => {
  return `${event.payload.userName} viewed ${event.payload.targetEntity} ${
    event.payload.targetId
  } at ${formatTimestamp(event.timestamp)}`;
};
