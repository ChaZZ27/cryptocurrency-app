import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Favorites from "../../pages/Favorites";
import NoPageFound from "../../pages/NoPageFound";

const Main = () => {
    return <main>
        <div className="container mx-auto">
            <div className="mx-4">
            <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<Home />} exact />
                <Route path="favorite" element={<Favorites />} />
                <Route path="*" element={<NoPageFound />} replace />
            </Routes>
            </div>
        </div>
    </main>
}

export default Main;