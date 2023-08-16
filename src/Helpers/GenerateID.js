/**
 * Generate a unique ID for each element
 * @returns {String} String ID
 */
const GenerateId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

export default GenerateId
