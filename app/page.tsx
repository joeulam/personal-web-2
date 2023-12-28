import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Image
        id='Bgs'
        className='Bg'
          src="/IMG_1004.img"
          width={1728}
          height={1117}
          alt='/image/IMG_1004.jpg'
        
        
        />
        <div className="sticky">
          <div className="header grid gap-4 content-center">
              <ul>
                <li><a href="#Bgs">Home</a></li>
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
          <h1 className='AboutTitle'>About</h1>
          <h2 className='AboutDes'>Let me talk about myself</h2>
          <p className='AboutDesp'>
            I'm a student that is heavily intrested in the CS/Finanical
            sector. I'm also a current Computer science and Economics major
            at Boston University, class of 2027.
          </p>
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
