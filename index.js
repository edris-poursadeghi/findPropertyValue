function findPropertyValue(data, property) {
    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].hasOwnProperty(property)) {
          return data[i][property];
        }
      }
    } else if (typeof data === 'object') {
      if (data.hasOwnProperty(property)) {
        return data[property];
      }
    }
    return undefined;
  }

  module.exports = findPropertyValue;