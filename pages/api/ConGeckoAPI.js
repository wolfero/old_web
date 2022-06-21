export default async (req, res) => {
    res.send("Hello world!");
};


const getData = async () => {
    const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=1h%2C24h%2C7d%2C"
    );
    setCoins(response.data);
};