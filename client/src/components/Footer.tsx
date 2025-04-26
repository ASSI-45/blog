import { IoLogoGithub } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return(
    <>
      <div className="flex bottom-0 justify-center p-5 px-7 m-t-2 mx-8 backdrop-blur-md opacity-75 rounded-t-2xl border-solid border-t-6 border-r-6 border-l-6 border-zinc-700 bg-zinc-900 text-white font-inter">
          {/* <h1 className="text-xl">ASSI-45©</h1> */}
          <div className="flex justify-center">
            <a href="https://github.com/ASSI-45" className="flex justify-center"><IoLogoGithub size="70" color="white"></IoLogoGithub></a>
            <a href="https://www.linkedin.com/in/aslan-umarov-254966269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><CiLinkedin size="70" color="white"/></a>  
          </div> 
      </div>
    </>
  );
}
