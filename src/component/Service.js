import front from "./Asset/Front-end-service.jpg";
let Service=()=>{
    return (<div className=" w-full h-svh">
                <h1 className="font-extrabold text-2xl flex justify-center">Service</h1>
                <p className="ml-96 mt-5 p-8 border-2 w-fit  hover:shadow-white shadow-md">
                <img  className="" src={front} alt="Front-end image"></img>
                <h1 className="text-lg font-semibold mt-2">Front-end development</h1>
                Desing Website using HTML,tailwind,Javascript and ReactJS</p>
            </div>)
}

export default Service;