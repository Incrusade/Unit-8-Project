const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")

  .then((response) => {
    console.log("Data from API:", response.data);
  })

  .catch((error) => {
    console.error("Error fetching data:", error.message);
  });
