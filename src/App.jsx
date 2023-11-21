import { BrowserRouter, Routes , Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {

  return (
    <>
      <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          </Route>
      </Routes>    
       </BrowserRouter>
    </>
  )
}

export default App