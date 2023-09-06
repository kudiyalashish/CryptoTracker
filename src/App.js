import Heading from "./Components/Heading";
import Search from "./Components/Search";
import Table from "./Components/Table";
import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [coin, setCoin] = useState(null);
  const [filteredCoin, setfilteredCoin] = useState(null);
  useEffect(function () {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then(function (response) {
        setCoin(response.data);
        setfilteredCoin(response.data);
      });
  }, []);
  function SearchCoin(value) {
    if (value === "") setfilteredCoin(coin);
    else
      setfilteredCoin(
        coin.filter(function (data) {
          return data.name.toLowerCase().startsWith(value);
        })
      );
  }
  return (
    <div className="App">
      <Heading />
      <Search func={SearchCoin} />
      <Table coin={filteredCoin} />
    </div>
  );
}
