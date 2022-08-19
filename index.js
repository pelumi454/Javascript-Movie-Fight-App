const fetchData = async () => {
    const response = await axios.get('', {
        params: {
            apikey: 'd9835cc5',
            s: 'avangers'
        }
    })
    console.log(response.data)
}
fetchData();
