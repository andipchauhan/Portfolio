import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from "react";
import './App.css'
import About from './pages/about';
import Projects from './pages/projects';
import Feed from './pages/feed'
import Links from './pages/links'
import Skills from './pages/skills'
function App() {
  const [activeSection, setActiveSection] = useState("about-me"); 
  return (
    <Router>
      <div className="top">
        <img src="src/assets/dark-mode.png" alt="" />
      </div>
      <main>
        <div className="animation"></div>
        <div className="dp">
          <img src="src/assets/dp.jpg" alt="" />
        </div>
        <div className='follow'>
          <a href="https://www.instagram.com/andipchauhan" target=''> <p>Follow</p> <img src="src/assets/instagram.svg" alt="" /></a>
        </div>
        <div className="info">
          <div className="name">Andip Chauhan</div>
          <div className="about">
            <p>Brings ideas to life with code! ✨
              </p>
              <p>Web Engineer. Creative Developer. 

              </p>
          </div>
          <div className="additional">
            <span>
            <img src="src/assets/available.svg" alt="" /> Available 
            </span>
            <span>
            <img src="src/assets/links.svg" alt="" /><a href="/links" className='gradient'>/links</a>
            </span>
            <span>
              <img src="src/assets/cake.svg" alt="" /> October 22nd 
            </span>
            <span>
              <img src="src/assets/calender.svg" alt="" /> Joined Jan 2025 
            </span>
          </div>
          <div className="send">
            <p>Send me a Hello!👋</p>
            <div className="mail">
              <input type="text" placeholder='Your Message'/>
              <a href="">
              <div className="mail-button">
                Send!
              </div>
              </a>
            </div>
          </div>
          <div className="sections">
      <Link className="linkTags" to="/Feed">
        <section 
          className={`feed ${activeSection === "feed" ? "active" : ""}`}
          onClick={() => setActiveSection("feed")}
        >
          <span>Feed</span>
          <div className="underbar"></div>
        </section>
      </Link>

      <Link className="linkTags" to="/">
        <section 
          className={`about-me ${activeSection === "about-me" ? "active" : ""}`}
          onClick={() => setActiveSection("about-me")}
        >
          <span>About me</span>
          <div className="underbar"></div>
        </section>
      </Link>

      <Link className="linkTags" to="/Projects">
        <section 
          className={`skills ${activeSection === "skills" ? "active" : ""}`}
          onClick={() => setActiveSection("skills")}
        >
          <span>Projects</span>
          <div className="underbar"></div>
        </section>
      </Link>

      <Link className="linkTags" to="/Skills">
        <section 
          className={`projects ${activeSection === "projects" ? "active" : ""}`}
          onClick={() => setActiveSection("projects")}
        >
          <span>Skills</span>
          <div className="underbar"></div>
        </section>
      </Link>
    </div>
        </div>
        <div className="content">
        <Routes>
            <Route path="/*" element={<About />} />
            <Route path="/Feed" element={<Feed />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Skills" element={<Skills />} />
        </Routes>
        </div>
      </main>
      <footer>
        <a href="https://www.instagram.com/andipchauhan"><span><img src="src/assets/instagram.svg" alt="" srcSet="" /></span></a>
        <a href="https://www.linkedin.com/in/andipchauhan"><span><img src="src/assets/linkedin.svg" alt="" srcSet="" /></span></a>
        <a href="https://leetcode.com/u/andipchauhan"><span><img src="src/assets/leetcode.svg" alt="" srcSet="" /></span></a>
        <a href="https://github.com/andipchauhan"><span><img src="src/assets/github.svg" alt="" srcSet="" /></span></a>
      </footer>
      </Router>
  )
}

export default App
