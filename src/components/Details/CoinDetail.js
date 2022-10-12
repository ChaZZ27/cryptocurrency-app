import { useContext } from "react";
import { CryptoContext } from "../../context/coins-context";
import CoinChart from "./CoinChart";

const CoinDetail = ({coinDetail}) => {
    const context = useContext(CryptoContext);
    const removeFromFav = () => {
        context.removeFav(coinDetail.id)
    }

    return <div className="flex flex-col text-left border-2 rounded-lg p-5 mb-5 last:mb-0 w-full">
        
        <div className="details-outer flex flex-wrap items-center justify-center sm:justify-start">
            <img src={coinDetail.image} alt={coinDetail.name} width="96" height="96" className="mb-4 sm:mr-8 md:mb-0 max-w" />
            <table className="w-full md:w-6/12 details text-center sm:text-left">
                <tbody>
                <tr className="flex flex-col w-full sm:border-0 sm:table-row">
                    <td className="w-full sm:w-6/12 bg-slate-200 sm:bg-white p-2 sm:p-0">Name:</td>
                    <td className="w-full sm:w-6/12 border-2 sm:border-0 p-2 sm:p-0">
                        <span className="text-xl font-bold">{coinDetail.name}</span>
                    </td>
                </tr>
                <tr className="flex flex-col w-full sm:mb-0 sm:border-0 sm:table-row">
                    <td className="w-full sm:w-6/12 bg-slate-200 sm:bg-white p-2 sm:p-0">Symbol:</td>
                    <td className="w-full sm:w-6/12 border-2 sm:border-0 p-2 sm:p-0">
                        <span className="text-xl font-bold">{coinDetail.symbol.toUpperCase()}</span>
                    </td>
                </tr>
                <tr className="flex flex-col w-full sm:mb-0 sm:border-0 sm:table-row">
                    <td className="w-full sm:w-6/12 bg-slate-200 sm:bg-white p-2 sm:p-0">Price:</td>
                    <td className="w-full sm:w-6/12 border-2 sm:border-0 p-2 sm:p-0">
                        <span className={`text-2xl font-bold ${coinDetail.price_change > 0 ? `text-green-600` : `text-red-600`}`}>
                            ${coinDetail.price}
                            <sup>
                                {coinDetail.price_change > 0 ? '↗'  : '↘'}
                            </sup>
                        </span>
                    </td>
                </tr>
                <tr className="flex flex-col w-full sm:mb-0 sm:border-0 sm:table-row">
                    <td className="w-full sm:w-6/12 bg-slate-200 sm:bg-white p-2 sm:p-0" colSpan="2">
                        <button type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={removeFromFav}>Remove from list</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <CoinChart id={coinDetail.id} />
    </div>
}

export default CoinDetail;