import { BrowserRouter, Route, Routes} from "react-router-dom"

import { Navbar, Footer } from './components'
import {Home, About, Contact, Projects } from './page'


const App = () => {
  return (
    
      <BrowserRouter>
        <header> 
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
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