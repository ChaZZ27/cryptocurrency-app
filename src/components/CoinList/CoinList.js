import CoinItem from "./CoinItem";

const CoinList = (props) => {

    return <div className="my-6">
        <ul className="flex flex-wrap">
            {props.list.map(item => <CoinItem key={item.name} name={item.name} id={item.id} image={item.image} symbol={item.symbol} price={item.current_price} price_change_percentage_24h={item.price_change_percentage_24h} />)}
        </ul>
    </div>
}

export default CoinList;