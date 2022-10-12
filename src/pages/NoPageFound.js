import { Link } from "react-router-dom";

const NoPageFound = () => {
    return <section className="text-center my-10">
        <h1 className="text-xl md:text-5xl mb-5 md:mb-10">Oops! Theres no such page :(</h1>
        <Link to="/home" role="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300">Return to main page</Link>
    </section>
}

export default NoPageFound;