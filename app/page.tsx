import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Box from '@mui/material/Box';

import { SpeedInsights } from "@vercel/speed-insights/next"







export default function Home() {
  return (
    <main>
      <SpeedInsights/>
      <Image
        id='Bgs'
        className='Bg'
          src="/IMG_1004.img"
          width={1800}
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

        <div className=''>
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
          
          <div className='Socials mt-5'>
            <div>
              <a href='https://www.instagram.com/joeulamb/'><InstagramIcon className='mr-5' 
              sx={{ color: 'white',
                    width: '5%', 
                    height: '5%',
                    transition: 'transform 0.5s, color 0.5s', // Set the desired transition properties and duration
                    ":hover": {
                      transform: "scale3d(1.2, 1.2, 1)",
                      color: "#2A9D8F",
                    }
                  }}/>
                </a>
            </div>
            <div><a href='https://www.linkedin.com/in/joey-lam-89057021b/'>
              <LinkedInIcon className='mr-5' 
                sx={{ color: 'white',
                      width: '5%', 
                      height: '5%',
                      transition: 'transform 0.5s, color 0.5s', // Set the desired transition properties and duration
                    ":hover": {
                      transform: "scale3d(1.2, 1.2, 1)",
                      color: "#2A9D8F",
                    }
                  }}/>
              </a>
            </div>
            <div><a href='mailto:joey.lamm@outlook.com'>
              <EmailIcon 
              sx={{ color: 'white',
                      width: '5%', 
                      height: '5%',
                      transition: 'transform 0.5s, color 0.5s', // Set the desired transition properties and duration
                    ":hover": {
                      transform: "scale3d(1.2, 1.2, 1)",
                      color: "#2A9D8F",
                    }
                  }}/>
                  </a>
            </div>
          
          </div>
          <Box>
            <a href='#About'>
              <ExpandCircleDownIcon className="arrow_down duration-700"
              sx={{ color: 'white',
                    width: '5%', 
                    height: '5%',
                    transition: 'transform 0.5s, color 0.5s', // Set the desired transition properties and duration
                    ":hover": {
                      transform: "scale3d(1.5, 1.5, 1)",
                      color: "#F4A261",
                    }
                    }
                  }
                />
            </a>
          </Box>
        </div>

        <div id="About" className="block">
          <h1 className='AboutTitle'>About</h1>
          <h2 className='AboutDes'>Let me talk about myself</h2>
          <div>
            <Image
              src="/IMG_1004.img"
              width={300}
              height={300}
              alt='/image/IMG_1004.jpg'
            
            />
            <p className='AboutDesp'>
            I'm a student that is heavily intrested in the CS/Finanical
            sector. I'm also a current Computer science and Economics major
            at Boston University, class of 2027.
          </p>
          </div>
          
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
