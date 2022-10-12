import { Link } from "react-router-dom";
import { useContext } from "react";
import { CryptoContext } from "../context/coins-context";
import CoinDetail from "../components/Details/CoinDetail";

const Favorites = () => {
    const context = useContext(CryptoContext);
    let data;
    if(localStorage.getItem('favCoins')) {
        data = JSON.parse(localStorage.getItem('favCoins'));
    } else {
        data = context.fav;
    }

    if(!data.length) {
        return <section className="text-center my-10">
                <h1 className="text-xl md:text-5xl mb-5 md:mb-10">Favorites</h1>
                <h2 className="text-lg md:text-2xl mb-5 md:mb-10">You have no favorites currencies yet</h2>
                <Link to="/" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300">Return to main page</Link> 
            </section>
    } else {
        return <section className="text-center my-10">
        <h1 className="text-xl md:text-5xl mb-5 md:mb-10">Your favorite cryptocurrencies</h1>
        <p className="font-bold text-l md:text-lg mb-5 md:mb-10">Here is the list of your favorite coins with details</p>

        {data.map(item => <CoinDetail key={item.id} coinDetail={item} />)}
        </section>
    }
}

export default Favorites;