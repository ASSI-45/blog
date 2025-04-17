import Card from "../components/Card.tsx";
import { Link } from "react-router-dom";

export default function HomePage() {
  return(
    <>
      <div className="flex flex-wrap">
        <Link to="blog-raspberry-pi-5"><Card/></Link>
      </div>
      {/* <h1 className="text-4xl">Hello world! This site is still under construction 🏗️</h1> */}
   </>
  );
}

