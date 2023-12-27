
export default function Home() {
  return (
    <main>
      
      <div className="sticky">
        <div className="header grid gap-4 content-center">
            <ul>
              <li><a href="#Mids">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Resume">Resume</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul>
          </div>
        
        <hr/>
      </div>
      <div id="Mids">

      </div>



      <div  className="Mid">

        <div >
          <h1 className="Name">Joey Lam</h1>
        </div>

        <div className="Descdes">
          <div className="Desc">
            Student
          </div>
          <div className="Desc">
            Software Engineer
          </div>
          <div className="Desc">
            Inventor
          </div>
        </div>
        
        <div className='Socials'>
        </div>

      </div>

      <div className="block">
        <h1 id="Resume">Resume</h1>
      </div>
      <div id="Projects" className="block">
        Projects
      </div>
      <div id="Contact" className="block">
        Contact
      </div>
      <div>
        <footer>

        </footer>
      </div>
    </main>
  )
}
