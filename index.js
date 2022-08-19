const fetchData = async () => {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "a29c9a18",
        i: "tt0848228",
      },
    });
    console.log(response.data)
}
fetchData();
