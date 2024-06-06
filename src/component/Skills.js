import html from "./Asset/html.png"
import css from "./Asset/css.png"
import Javascript from "./Asset/Javascript.png"
import tailwind from "./Asset/tailwind.png"
import Python from "./Asset/Python.png"
import mysql from "./Asset/mysql.png"
import mango from "./Asset/mango.png"
import react from "./Asset/react1.webp"
let Skills=()=>{
    return(
        <div className="justify-center mt-10  w-full h-svh">
             <h1 className="font-extrabold text-2xl flex justify-center">My Skills</h1>
             <div className="mt-32" >
                <ul className="flex justify-evenly">
                <div className=" border-2 hover:shadow-white shadow-md p-2 w-fit h-fit">
                    <li className=""> <img  className="rounded-lg w-20 h-20"src={html} alt="HTML"></img></li>
                </div>
                <div className="border-2 hover:shadow-white shadow-md p-2 w-fit h-fit ml-5 ">
                    <li className=""><img  className="rounded-lg w-20 h-20"src={css} alt="CSS"></img></li>
                    <li className="" ><img className="rounded-lg w-20 h-20 mt-5" src={tailwind} alt="Tailwind"></img></li>
                </div>
                <div className="border-2 hover:shadow-white shadow-md p-3 w-fit h-fit ml-5 ">
                    <li className=""><img  className="rounded-lg w-20 h-20" src={Javascript} alt="Javascript"></img></li>
                    <li className=""><img  className="rounded-lg w-20 h-20  mt-5" src={react} alt="React JS"></img></li>
                </div>
                <div className="border-2 hover:shadow-white shadow-md p-2 w-fit h-fit ml-5 ">
                    <li className="" ><img className="rounded-lg w-20 h-20" src={Python} alt="Python"></img></li>
                </div>
                <div className="border-2 hover:shadow-white shadow-md p-3 w-fit h-fit ml-5 ">
                    <li className=""><img className="rounded-lg w-20 h-20" src={mysql} alt="Mysql"></img></li>
                    <li className=""><img  className="rounded-lg w-20 h-20  mt-5" src={mango} alt="Mongo DB"></img></li>
                </div>
            </ul>
        </div>
        </div>
    )
}

export default Skills;