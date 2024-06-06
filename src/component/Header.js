import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

let Header = () => {
   let contactmenu=document.getElementById("contact-menu")
    let Alert=()=>{
          contactmenu.classList.add("open-menu")
        }
    let alertRemove=()=>{
      contactmenu.classList.remove("open-menu")
    }

  return (
    <div>
      <div className="contact" id="contact-menu">
        <div className="sub-contact">
          <span className="text-base">Hi Everyone! Click Any option to <br></br>contact me Directly</span>
          {/* <h1 className="p-2">phone number:6382497731</h1>
          <h1 className="p-2">Email:perarasanc2319@gmail.com</h1> */}
          <div className="flex justify-evenly">
          <a href="tel:+916382497731">
          <p className="border-0 w-fit p-2 rounded-md"><FontAwesomeIcon icon={faPhone} />Call</p>
          </a>
          <a href="mailto:perarasanc2319@gmail.com">
          <p className="border-0 w-fit p-2 rounded-md ml-2"><FontAwesomeIcon icon={faEnvelope} />Email</p>
          </a>
          </div>
        <button  onClick={alertRemove} className="border-0">X</button>
        </div>
      </div>
    <div className="flex w-full h-20 p-5 justify-between">
      <h1 className="text-lg font-bold ml-5">
        {" "}
        Junior Developer
        <span className="text-red-500 font-bold "> Perarasan</span>{" "}
      </h1>
      <ul className="flex space-x-10 font-medium">
        <li className=" hover:bg-red-500 p-2 rounded-xl">
          <Link to="/">Home</Link>
        </li>
        <li className=" hover:bg-red-500 p-2 rounded-xl">
          <Link to="/Aboutme">About me</Link>
        </li>
        <li className=" hover:bg-red-500 p-2 rounded-xl">
          <Link to="/service">Service</Link>{" "}
        </li>
        <li className=" hover:bg-red-500 p-2 rounded-xl">
          <Link to="/skill">Skills</Link>
        </li>
        <li className=" hover:bg-red-500 p-2 rounded-xl">
          <Link to="/project">Project</Link>
        </li>
      </ul>
      <button className="bg-red-500 p-2 rounded-xl mr-5" id="button" onClick={Alert}>
        Contact Me
      </button>
    </div>
    </div>
  );
};

export default Header;
