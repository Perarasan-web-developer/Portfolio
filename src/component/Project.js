import Food from "./Asset/food-order-image.jpg"
import Portfolio from "./Asset/portfolio-cover-image.jpg"
import Bike from "./Asset/bike-website-cover-image.jpg"
import Travel from "./Asset/travel-website-cover.jpg"
import Battery from "./Asset/battery-cover-image.jpg"
import Moon from "./Asset/moon-cover-image.jpg"
import Netflix from "./Asset/Netflix-image.jpg"
import { useState } from "react"
let Project=()=>{
    let [showFood, setShowFood]=useState(false);
    let food=()=>{
        setShowFood(!showFood);
    }
    let [showPortfolio, setShowPortfolio]=useState(false);
    let portfolio=()=>{
        setShowPortfolio(!showPortfolio);
    }
    let [showBike, setShowBike]=useState(false);
    let bike=()=>{
        setShowBike(!showBike);
    }
    let [showTravel, setShowTravel]=useState(false);
    let travel=()=>{
        setShowTravel(!showTravel);
    }
    let [showBattery, setShowBattery]=useState(false);
    let battery=()=>{
        setShowBattery(!showBattery);
    }
    let [showMoon, setShowMoon]=useState(false);
    let moon=()=>{
        setShowMoon(!showMoon);
    }
    let [showNetflix,setShowNetflix]=useState(false)
    let netflix=()=>{
        setShowNetflix(!showNetflix)
    }

    return(
        <div className="w-full h-full" >
            <h1 className="flex justify-center font-bold text-xl mt-10">Project</h1>
            <div className="h-full w-fit">
            <div className="flex flex-wrap items-center ml-20">
               {/* food order website */}
                <div className=" mt-3 border-2 hover:shadow-white shadow-md p-10 w-2/4" onClick={food} >
                    <h2 className="font-semibold text-lg">Food-Order-Website</h2>
                <p className="mt-3">Food-order-application using ReactJS.</p>
                {
                    showFood&&(<div><img src={Food} alt="Food"></img></div>)
                }
            </div>
            <h5 className="ml-20">Click here to live Demo </h5><a href="https://food-order-application-263f7.web.app/" className="ml-10"><button className=" bg-white text-black hover:bg-red-500 p-2 rounded-xl">Live Demo</button></a>
          
          {/* portfolio */}
            <div className=" mt-3 border-2 hover:shadow-white shadow-md p-10 w-2/4" onClick={portfolio}>
                <h2 className="font-semibold text-lg">Portfolio</h2>
                <p className="mt-3">Portfolio website using ReactJs.</p>
                {
                    showPortfolio&&(<div><img src={Portfolio} alt="Portfolio"></img></div>)
                }
            </div>
            <h5 className="ml-20">Click here to live Demo </h5><a href="" className="ml-10"><button className="bg-white text-black hover:bg-red-500 p-2 rounded-xl">Live Demo</button></a>
     
        {/* Netflix  */}
            <div className=" mt-3 border-2 hover:shadow-white shadow-md p-10 w-2/4" onClick={netflix}>
                <h2 className="font-semibold text-lg">Netflix</h2>
                <p className="mt-3">Netflix  website using ReactJs  to develop the website and we can use to store <br></br>data in firebace website.</p>
                {
                    showNetflix&&(<div><img src={Netflix} alt="Netflix"></img></div>)
                }
             </div>  
             <h5 className="ml-20">Click here to live Demo </h5><a href="https://netflixgpt-cd91b.web.app" className="ml-10"><button className="bg-white text-black hover:bg-red-500 p-2 rounded-xl">Live Demo</button></a>

            {/*demo website bike   */}
            <div className="  mt-3  border-2 hover:shadow-white shadow-md p-10 w-2/4" onClick={bike}>
                <h2 className="font-semibold text-lg">Demo-Bike-Website</h2>
                <p className="mt-3">Bike website using HTML and Bootstrap.</p>
                {
                    showBike&&(<div><img src={Bike} alt="Bike"></img></div>)
                }
            </div>
            <h5 className="ml-20">Click here to live Demo </h5><a href="https://perarasan-web-developer.github.io/bikewebsite/" className="ml-10"><button className="mt-3 bg-white text-black hover:bg-red-500 p-2 rounded-xl">Live Demo</button></a>
           
           {/* travel website */}
            <div className="mt-3 border-2 hover:shadow-white shadow-md p-10 w-2/4" onClick={travel}>
                <h1 className="font-semibold text-lg"> Travel website with Login Page </h1>
                <p className="mt-3">Travel website using HTML and CSS.</p>
                {
                    showTravel&&(<div><img src={Travel} alt="Travel"></img></div>)
                } 
            </div>
            <h5 className="ml-20">Click here to live Demo </h5><a href="" className="ml-10"><button className="mt-3 bg-white text-black hover:bg-red-500 p-2 rounded-xl">Live Demo</button></a>
          
          {/* Battery animation */}
            <div className="mt-3 border-2 hover:shadow-white shadow-md p-10 w-2/4" onClick={battery}>
                <h1 className="font-semibold text-lg"> Battery Animation </h1>
                <p className="mt-3">Battery Animation gif using HTML and CSS.</p>
                {
                    showBattery&&(<div><img src={Battery} alt="Battery"></img></div>)
                }
            </div>
            <h5 className="ml-20">Click here to live Demo </h5><a href="" className="ml-10"><button className="mt-3 bg-white text-black  hover:bg-red-500 p-2 rounded-xl">Live Demo</button></a>
          
          {/* Moon Animation */}
            <div className="mt-3 border-2 hover:shadow-white shadow-md p-10 w-2/4" onClick={moon}>
                <h1 className="font-semibold text-lg"> Moon Animation </h1>
                <p className="mt-3">Moon Animation gif using HTML and CSS.</p>
                {
                    showMoon&&(<div><img src={Moon} alt="Moon"></img></div>)
                }
            </div>
            <h5 className="ml-20">Click here to live Demo </h5><a href="" className="ml-10"><button className="mt-3 bg-white text-black hover:bg-red-500 p-2 rounded-xl">Live Demo</button></a>
            </div>
            </div>
        </div>
    )
}

export default Project;