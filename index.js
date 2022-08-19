const fetchData = async () => {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "a29c9a18",
        s: "avengers",
      },
    });
    console.log(response.data)
}
fetchData();
