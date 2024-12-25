import { Helmet } from "react-helmet-async";
import { Categories } from "../components/Categories"
import { Mission } from "../components/Mission"
import { NewArrival } from "../components/NewArrival"
import { Hero } from './../components/Hero';

export const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Hero />
            <Mission />
            <Categories />
            <NewArrival />
        </div>
    )
}
