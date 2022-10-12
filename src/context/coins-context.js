import React, { useState } from "react";

export const CryptoContext = React.createContext({
    fav: JSON.parse(localStorage.getItem('favCoins')) || [],
    addFav: (id) => {},
    removeFav: (id) => {}
})

const CryptoContextProvider = (props) => {
    const [fav,  setFav] = useState(JSON.parse(localStorage.getItem('favCoins')) || []);

    const addToFavHandler = (coin) => {
        setFav(prevData => {
            localStorage.setItem('favCoins', JSON.stringify([...prevData, coin]));
            return [...prevData, coin]
        })

    } 
    const removeFromFavHandler = (id) => {
        setFav(prevData => {
            localStorage.setItem('favCoins', JSON.stringify(prevData.filter(coin => coin.id !== id)));
            return prevData.filter(coin => coin.id !== id);
        })
    }

    const contextValue = {
        fav,
        addFav: addToFavHandler,
        removeFav: removeFromFavHandler
    }

    return <CryptoContext.Provider value={contextValue}>
        {props.children}
    </CryptoContext.Provider>
}

export default CryptoContextProvider