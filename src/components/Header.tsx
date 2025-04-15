import { Link } from "react-router-dom";


export default function Header() {

  return(
    <>
      <div className="flex justify-between p-3 px-8 bg-zinc-900 text-white font-inter">
        <h1 className="">ASSI-45</h1>
        <div>
          <Link to="/" className="px-4">home</Link>
          <Link to="/about">about</Link>
        </div>
      </div>
    </>
  );
}
