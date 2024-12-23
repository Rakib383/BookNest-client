import { Categories } from "../components/Categories"
import { Mission } from "../components/Mission"
import { NewArrival } from "../components/NewArrival"
import { Hero } from './../components/Hero';

export const HomePage = () => {
    return (
        <div>
            <Hero />
            <Mission/>
            <Categories/>
            <NewArrival/>
        </div>
    )
}
