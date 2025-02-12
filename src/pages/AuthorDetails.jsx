
import { useLoaderData } from "react-router-dom"

const AuthorDetails = () => {
   
    const data = useLoaderData()
    const { image, name, notableWorks, description } = data
    return (

        <div >
            <div className="pt-10 sm:pt-16 pb-20 md:pb-28">
                <div className="w-80 sm:gap-8 sm:w-[560px] mx-auto flex flex-col sm:flex-row items-center card shadow-lg px-6 gap-3  justify-center bg-white py-7 sm:py-14 sm:px-8">
                    <div className="w-36 h-44 sm:w-full relative">
                        <img src={image} className=" w-full h-full pb-2" alt="" />

                    </div>
                    <div className="text-center pt-1">
                        <h3 className="font-semibold sm:text-base">{name}</h3>


                        <div className="">
                            <p className="text-center "> {description}</p>
                            <div className="mt-2 ">
                                <p className="font-semibold text-base">Famous Books</p> {
                                notableWorks.map((work,idx) => (<li className="text-start sm:ml-5" key={idx}>{work}</li>)
                                    
                                )
                                
                                }</div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorDetails
