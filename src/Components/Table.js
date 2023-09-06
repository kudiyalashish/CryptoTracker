import Bitcoin from "../images/bitcoin.jpg";
import {Link} from "react-router-dom"
function Table({ coin }) {
  return (
    <table className="coin-table">
      {coin
        ? coin.map(function (data) {
            return (
              <TableRow
              id={data.id}
                name={data.name}
                img={data.image}
                symbol={data.symbol}
                price={data.current_price}
                change={data.price_change_percentage_24h.toFixed(2)}
                mkt={data.market_cap_change_24h.toFixed(2)}
              />
            );
          })
        : null}
    </table>
  );
}

function TableRow({id, name, img, symbol, price, change, mkt }) {
  return (
    <Link to={`/Coindata/${id}`}>
    <tr className="coin-row">
      <td className="coin">
        <img src={img} alt="coin-img" />
        <span className="coin-name">{name}</span>
      </td>

      <td className="coin-symbol">{symbol.toUpperCase()}</td>

      <td className="coin-price">${price}</td>

      <td className="coin-price-change">{change}%</td>

      <td className="coin-market-capital">Mkt Cap: ${mkt}</td>
    </tr>
    </Link>
  );
}

export default Table;
