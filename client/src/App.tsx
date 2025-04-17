import { Routes, Route } from "react-router"
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import AboutPage from "./pages/AboutPage.tsx"
import HomePage from "./pages/HomePage.tsx"

export default function App() {

  return (
    <>
      <div className="h-screen flex flex-col justify-between">
          <Header></Header>
        <div className="bg-zinc-70 mb-auto justify-self-center px-15 py-5 text-left text-xl text-white font-inter">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>

    </>
  )
}