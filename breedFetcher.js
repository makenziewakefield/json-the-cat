const request = require('request');

const apiURL = 'https://api.thecatapi.com/v1/breeds';

const fetchBreedDescription = (breedName, callback) => {
  const url = `${apiURL}/${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const breedData = JSON.parse(body);
      if (breedData.length > 0) {
        const firstEntry = breedData[0];
        callback(null, firstEntry.description);
      } else {
        callback(new Error('No data found for breed.'), null);
      }
    }
  })
}

module.exports = { fetchBreedDescription };