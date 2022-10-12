import Main from "./components/UI/Main";
import Navigation from "./components/UI/Navigation";
import CryptoContextProvider from "./context/coins-context";

function App() {
  
  return <CryptoContextProvider>
    <div className="App" data-testid="app">
      <Navigation />
      <Main />
    </div>
  </CryptoContextProvider>
}

export default App;
