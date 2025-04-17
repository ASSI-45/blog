import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  return(
    <>
      <div className="flex bottom-0 justify-center p-5 px-7 my-2 mx-8 backdrop-blur-md opacity-75 rounded-t-2xl border-solid border-t-4 border-r-4 border-l-4 border-zinc-700 bg-zinc-900 text-white font-inter shadow-xl/30">
        <footer >
          <a href="https://github.com/ASSI-45" className="flex justify-self-center"><IoLogoGithub size="70" color="white"></IoLogoGithub></a>
        </footer>
      </div>
    </>
  );
}
