import Hd from './layout/Hd'
import Ft from './layout/Ft'

import Maintitle from './components/Maintitle'
import Aboutme from './components/Aboutme'
import Project from './components/Project'
import Preinterview from './components/Preinterview'
import db from './db/db.json'
import Contact from './components/Contact'  

function App() {
  return (
    <div className="App bg-black">     
      <Hd />     
      <main className='_m'>
      <Maintitle />
      <section id="project">
      <Project />
      </section>
    
  
        <section id="aboutme">
        <Aboutme />
        </section>
        <section id="contact">
        <Contact />
        </section>
        <section id="preinterview">
        <Preinterview id="preInterview" datainfo={db.preinterview} />
        </section>
      </main>
      <Ft />      
    </div> 
  )
}

export default App