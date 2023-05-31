import { BrowserRouter, Route, Routes} from "react-router-dom"

import { Navbar, Footer} from './components'
import {Home, Skills, Contact, Projects } from './page'

const App = () => {
  return ( 
      <BrowserRouter>
        <header> 
          <Navbar />
        </header>
        <main className="w-full h-auto bg-primary">
          <Routes>        
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main> 
        <footer>
          <Footer />
        </footer>      
      </BrowserRouter> 
  )
}

export default App