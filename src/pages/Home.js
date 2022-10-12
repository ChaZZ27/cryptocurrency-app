import CoinList from "../components/CoinList/CoinList";
import { Fragment, useEffect, useState } from "react";
import Loader from "../helpers/Loader";

const Home = () => {
    const [coins, setCoinsState] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        let result;

        if(!localStorage.getItem('coins') === undefined) {
            
            result = JSON.parse(localStorage.getItem('coins'));
            setLoading(false);
            setError(false);
        } else {
            await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h')
            .then(response => {
                if(response.ok) {
                    setLoading(false);
                    setError(false);
                    return response.json();
                }
            }).then(data => {
                localStorage.setItem('coins', JSON.stringify(data));
                return result = JSON.parse(localStorage.getItem('coins'));
            }).catch(error => {
                setError(true);
                setLoading(false);
            })
        }
        setCoinsState(result)
        setLoading(false);
    }

    const refetchHandler = () => {
        setLoading(true);
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, [])
    
    return <section className="text-center my-10">
            <h1 className="text-xl md:text-5xl mb-5 md:mb-10">Welcome!</h1>
            <p className="font-bold text-l md:text-lg mb-5 md:mb-10">Below you can find list of 50 most popular cryprocurrencies!</p>
            <h2>Please click on coin to select them*:</h2>
            <sup>* you can select up to 5 coins</sup>

            {loading && <Loader />}
            {coins && !error && <CoinList list={coins} /> }
            
            {localStorage.getItem('coins') === 'undefined' || error ? <Fragment>
                <p className="text-lg text-red-400 mt-4"><b>Sorry! Something went wrong!</b></p>
                <p>Please click below to try again</p>
                <div className="mt-8">
                    <button type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={refetchHandler}>Reload</button>
                </div>
            </Fragment> : null}

            <b className="block mt-8 text-sm">
                Data are gathered from coingecko.com
                <br />
                Application can handle up to 50 request per minute.
            </b>
    </section>
    
}

export default Home;