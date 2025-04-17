import { Link } from "react-router-dom";


export default function Header() {

  return(
    <>
      <div className="m-8 border-b-6 rounded-2xl border-zinc-900 shadow-xl/30">
        <div className="sticky flex justify-between p-5 px-7 rounded-2xl border-solid border-6 border-zinc-700 bg-zinc-900 text-white font-inter shadow-xl/30">
          <h1 className="text-xl">ASSI-45</h1>
          <div>
            <Link to="/" className="px-4">home</Link>
            <Link to="/about" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">about</Link>
          </div>
        </div>
      </div>

    </>
  );
}
