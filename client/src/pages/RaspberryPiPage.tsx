import AnchorLink from "react-anchor-link-smooth-scroll";

export default function RaspberryPiPage() {
  return(
    <>
      {/* container box */}
      <div className="flex sm:flex-row flex-col">
        {/* anchor link box */}
        <div className="static h-min mt-7 mr-5 mb-5 border-b-6 rounded-3xl border-zinc-900 shadow-xl/30">
          <div className="static h-full p-5 px-7 rounded-2xl border-solid border-6 border-zinc-700 bg-zinc-900 text-white text-nowrap text-center font-inter"> 
            <AnchorLink href="#what">What is a pi</AnchorLink>
            <AnchorLink href="#about"><p>about my pi</p></AnchorLink>
          </div>
        </div> 
        {/* article */}
        <div>
          <h1 className="text-4xl text-indigo-600"id="what">What is a pi</h1>
          <br />
          <p>
            What is a Raspberry Pi 5?
            The Raspberry Pi 5 is the latest single-board computer developed by the Raspberry Pi Foundation, designed to offer greater power, speed, and functionality compared to its predecessors. Released in 2023, it builds on the success of earlier models by introducing significant hardware upgrades, making it even more capable for a wide range of projects — from simple electronics to advanced computing tasks.
            At the heart of the Raspberry Pi 5 is a quad-core Arm Cortex-A76 processor running at 2.4GHz, delivering a noticeable performance boost over the Raspberry Pi 4. It also includes a new GPU (VideoCore VII), offering better graphics performance for tasks like video playback, light gaming, and running graphical interfaces. The board supports up to 8GB of LPDDR4X RAM, which helps it handle multitasking and memory-intensive applications more efficiently.
            One of the standout features of the Raspberry Pi 5 is its improved connectivity. It includes dual 4K HDMI outputs, USB 3.0 ports, a PCIe 2.0 interface (via an external connector), and faster microSD card access. The board also supports Gigabit Ethernet and wireless connectivity through Wi-Fi and Bluetooth.
            Designed with both hobbyists and professionals in mind, the Raspberry Pi 5 is ideal for learning programming, building DIY electronics projects, creating media centers, or even serving as a lightweight desktop computer. Its compact size, affordability, and versatility continue to make it one of the most popular tools in the maker and tech community.
          </p>
          <br />
          <h1 className="text-4xl text-indigo-600">About my pi</h1>
          <br />
            <h1 className="text-2xl" id="about">Specs</h1>
            <br />
            <ul>
              <li>* model 5</li>
              <li>* 8gb ram</li>
              <li>* 32gb drive</li>
            </ul>
          <br />
          <p>
            Currently set it up as a server for this website, using Cloudflare Tunnels and Docker.
            I also have a Postgres database running with Docker.
           
          </p>
        </div>
      </div>
    </>
  );
}