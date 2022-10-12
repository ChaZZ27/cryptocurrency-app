import { useContext, useState } from "react";
import { CryptoContext } from "../../context/coins-context";

const CoinItem = ({id, name, image, symbol, price, price_change_percentage_24h}) => {

    const context = useContext(CryptoContext)
    const existingCoin = context.fav.find(coin => coin.symbol === symbol)
    const [selected, setSelected] = useState(existingCoin || false);

    const onClickHandler = () => {
        if(existingCoin) {
            setSelected(false);
            context.removeFav(id)
        } else if(context.fav.length < 5) {
            setSelected(true);
            context.addFav({
                'id': id, 
                'name': name, 
                'symbol': symbol, 
                'image': image, 
                'price': price, 
                'price_change': price_change_percentage_24h
            })
        } else return
    }
    

    return <li className="w-full md:w-6/12 lg:w-3/12 p-2">
                <div className={`${existingCoin ? `selected border-slate-600` : `border-transparent`} ${context.fav.length === 5 && !selected ? 'opacity-50' : undefined} relative flex-column md:flex items-center justify-start w-full h-full text-center md:text-left px-5 py-2.5 text-sm font-bold text-black rounded-lg hover:text-slate-600 hover:bg-slate-200 border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors`}>
                    <span className="mr-3"><img src={image} width="32" height="32" alt={symbol} className="inline-block" /></span>
                    <input type="checkbox" checked={selected} disabled={context.fav.length === 5 && !selected} id={symbol} onChange={onClickHandler} className="opacity-0 absolute w-full h-full left-0 top-0" data-testid="coinInput"></input>
                    <label htmlFor={symbol} className="text-lg">{name} ({symbol.toUpperCase()})</label>
                    <span className={price_change_percentage_24h > 0 ? 'text-green-600 text-3xl ml-3' : 'text-red-600 text-3xl ml-3'}>
                            {price_change_percentage_24h > 0 ? '↗' : '↘'}
                    </span>
                </div>
        </li>
}

export default CoinItem;