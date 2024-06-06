import profile from "./Asset/Dp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import {fa} from "@fortawesome/react-fontawesome";
let Body = () => {
  return (
    <div className="flex justify-between w-full h-1/2 m-60 bg-black text-white">
      <div className="">
        <h1 className="font-semibold text-xs">Hi, Iam Perarasan</h1>
        <p className="mt-5 font-extrabold text-2xl">Iam <span className="text-red-500">Web Developer</span> <br></br>Full Stack</p>
        {/* <button className="mt-5 bg-red-500 p-2 rounded-2xl">Download Cv</button> */}
        <div className="mt-5 ml-3 decoration:none flex">
          <li > <FontAwesomeIcon icon={faEnvelope} /></li>
          <li><FontAwesomeIcon icon={faLinkedin} /></li>
          <li> <FontAwesomeIcon icon={faGithub} /></li>
          <li> <FontAwesomeIcon icon={faInstagram} /></li>
        </div>
      </div>
      <div className="flex justify-between ">
        <img className="w-1/4 h-1/2  rounded-2xl hover:shadow-white shadow-md" src={profile} alt="Profile"></img>
      </div>
    </div>
  );
};

export default Body;
