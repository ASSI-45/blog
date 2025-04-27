import AnchorLink from "react-anchor-link-smooth-scroll";

export default function RaspberryPiPage() {
  return(
    <>
      {/* container box */}
      <div className="flex sm:flex-row flex-col">
        {/* anchor link box */}
        <div className="static h-min mt-7 mr-5 mb-5 border-b-6 rounded-3xl border-zinc-900 shadow-xl/30">
          <div className="static h-full p-5 px-7 rounded-2xl border-solid border-6 border-zinc-700 bg-zinc-900 text-white text-nowrap text-center font-inter"> 
            <AnchorLink href="#read"><p>Read</p></AnchorLink>
            <AnchorLink href="#reading"><p>Reading</p></AnchorLink>
            <AnchorLink href="#shelf"><p>On the shelf</p></AnchorLink>
          </div>
        </div> 
        {/* article */}
        <div>
          <h1 className="text-4xl text-indigo-600"id="read">Read</h1>
          <p>
            <ul>
              <li>☑️ Practical SQL: A Beginner's Guide to Storytelling with Data by Anthony DeBarros</li>
            </ul>
          </p>
          <br />
          <h1 className="text-4xl text-indigo-600"id="reading">Reading</h1>
          <p>
            <ul>
              <li>☐ Learning React by Banks and Porcello</li>
              <li>☐ Node.js 8 the Right Way by Jim R. Wilson</li>
              <li>☐ Eloquent JavaScript by Marijn Haverbeke</li>
            </ul>
          </p>
          <br />
          <h1 className="text-4xl text-indigo-600"id="shelf">On the shelf</h1>
          <p>
            <ul>
              <li>* Pragmatic Programmer 20 year Anniversary edition by by Andy Hunt and Dave Thomas</li>
              <li>* Clean code by Robert Cecil Martin</li>
            </ul>
          </p>
       </div>
      </div>
    </>
  );
}