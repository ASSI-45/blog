import Card from "../components/Card.tsx";
import { Link } from "react-router-dom";

export default function HomePage() {
  return(
    <>
      <div className="flex flex-wrap font-inter">
        <Link to="blog-raspberry-pi-5"><Card title="raspberry pi" disc="About my pi"/></Link>
        <Link to="blog-books"><Card title="Books" disc="Books i own"/></Link>       
      </div>
      {/* <h1 className="text-4xl">Hello world! This site is still under construction 🏗️</h1> */}
   </>
  );
}

