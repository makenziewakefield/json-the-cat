const { fetchBreedDescription } = require('./breedFetcher');

const breedFetcher = () => {
  const breedName = process.argv[2];
  if (!breedName) {
    console.error("Please provide breed name.");
  } else {
    fetchBreedDescription(breedName, (error, description) => {
      if (error) {
        console.error("Error: ", error.message);
      } else {
        console.log("Description: ", description);
      }
    })
  }
};

breedFetcher();