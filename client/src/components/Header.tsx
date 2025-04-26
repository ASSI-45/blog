import { Link } from "react-router-dom";


export default function Header() {

  return(
    <>
      <div className="m-8 border-b-6 rounded-2xl border-zinc-900 shadow-xl/30">
        <div className="sticky flex justify-between p-5 px-7 rounded-2xl border-solid border-6 border-zinc-700 bg-zinc-900 text-white font-inter shadow-xl/30">
          <h1 className="text-xl">ASSI-45</h1>
          <div className="pt-0.5">
            <Link to="/" className="px-4">home</Link>
            <Link to="/about" className="text-white bg-indigo-600 border border-indigo-300 focus:outline-none hover:bg-indigo-400 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">about</Link>
          </div>
        </div>
      </div>

    </>
  );
}
