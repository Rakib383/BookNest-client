import { Categories } from "../components/Categories"
import { Mission } from "../components/Mission"
import { NewArrival } from "../components/NewArrival"

export const HomePage = () => {
    return (
        <div>
            <Mission/>
            <Categories/>
            <NewArrival/>
        </div>
    )
}
