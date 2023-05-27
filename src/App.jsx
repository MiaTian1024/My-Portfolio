import { BrowserRouter } from "react-router-dom"

import { About, Contact, Hero, Navbar, Projects, StarCanvas } from './components'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
            </div>
            <About />
            <Projects />
            <div className="relative z-0">
                <Contact />
                <StarCanvas />
            </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App