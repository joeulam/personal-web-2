import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Image
        className='Bg'
          src="/IMG_1004.img"
          width={1728}
          height={1117}
          alt='/image/IMG_1004.jpg'
        
        
        />
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




        <div id="About" className="block">
          <h1>About me</h1>
        </div>

        <div id="Resume" className="block">
          <h1 >Resume</h1>
        </div>

        <div id="Projects" className="block">
          <h1>Projects</h1>
        </div>

        <div id="Contact" className="block">
          <h1>Contact</h1>
        </div>
      
      <div>
        <footer>

        </footer>
      </div>
    </main>
  )
}
