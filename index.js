import {
  hasRequiredProps,
  formatEventOutput,
} from "../response/helpers/generalHelpers.js";
import { REQUIRED_PROPS } from "./constants/propsConstants.js";
import { events } from "./responseEvents/mockEvents.js";

/**
 * Generates an array of event descriptions based on the provided events.
 *
 * @param {Array} eventsInput
 * @param {Array} REQUIRED_PROPS
 * @param {string} lang bg/en
 *
 * @returns {Array} - An array of strings
 */
const generateEventDescriptions = (eventsInput, props, lang) => {
  return eventsInput
    .filter((event) => hasRequiredProps(event, props))
    .map((event) => formatEventOutput(event, lang));
};

console.log(generateEventDescriptions(events, REQUIRED_PROPS, "bg"));

// optional / required keys - there are two optional props Source & Metadata
//  but they are not in the list of required keys
// and if they are missing the event will be dropped
