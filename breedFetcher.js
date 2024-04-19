const request = require('request');

const apiURL = 'https://api.thecatapi.com/v1/breeds';

const breedFetcher = (breedName) => {
  const url = `${apiURL}/${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error: ', error);
    } else {
      const breedData = JSON.parse(body);
      if (breedData.length > 0) {
        const firstEntry = breedData[0];
        console.log('Description: ', firstEntry.description);
      } else {
        console.log('No data found for the breed.');
      }
    }
  });
};

const breedName = process.argv[2];

if (!breedName) {
  console.error("Please provide breed name.");
} else {
  breedFetcher(breedName);
}