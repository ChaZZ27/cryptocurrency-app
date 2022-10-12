import logo from '../../assets/cryptocurrency.png';
import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react';
import { CryptoContext } from '../../context/coins-context';

const Navigation = () => {
    const { fav } = useContext(CryptoContext);

    let data;
    if(localStorage.getItem('favCoins')) {
        data = JSON.parse(localStorage.getItem('favCoins'));
    } else {
        data = fav;
    }

    return <header className="bg-slate-800 color-white text-white">
        <nav className="container mx-auto py-4" data-testid='nav'>
            <div className="flex mx-4 items-center">
                <div className="mr-2 md:mr-8"><Link to="/"><img src={logo} width="32" height="32" alt="Coin App" /></Link></div>
                <ul className="flex mx-4">
                    <li className="ml-0 mx-4"><NavLink end className={(navData) => navData.isActive ? 'underline': ''} data-testid="link-home" to="/">Home</NavLink></li>
                    <li className="mx-4"><NavLink className={(navData) => navData.isActive ? 'underline': ''} data-testid="link-favorite" to="/favorite">Your favorite ({data.length})</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
}

export default Navigation;