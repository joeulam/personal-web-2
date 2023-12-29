import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material-next/LinearProgress';


import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';







export default function Home() {
  return (
    <main>
      <SpeedInsights/>
      <Analytics />

      <Image
        id='Bgs'
        className='Bg'
          src="/IMG_1004.img"
          width={1800}
          height={1117}
          alt='/image/IMG_1004.jpg'
        
        
        />


        <div className="stickys">
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
                    zIndex:'5',
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
                      zIndex:'5',
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
                      zIndex:'5',
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
                    zIndex:'5',
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

        <div id="About" className="h-[140vh] bg-[#03071e]">
          <h1 className='AboutTitle'>About me</h1>
          <div className='mt-20 photoBlock'>
            <div className='avatar mb-10'>
              <Avatar alt="Remy Sharp" src="/IMG_2811.jpg" sx={{zIndex: '7', width: '20%', height: '20%' }}/>
            </div>


            <div>
              <p className='AboutDesp ml-10'>
                I'm a student that is heavily intrested in the CS/Finanical
                sector. I'm also a current Computer science and Economics major
                at Boston University, class of 2027.
              </p>
            </div>
          </div>


          <div className='z-[1] SkillsBlock relative ml-40 mt-20'>
            <div className='SkillsBlockL absolute left-40 top-0'>
                <h2>Profile</h2>
                <hr className='w-[20vw]'/>
                <p>Currently looking for a internship. If you think I'm a good fit, please contant me via joey.lamm@outlook.com.</p>
              </div>

              <div className='SkillsBlockR absolute mr-20 right-60'>
                <h2>Skills</h2>
                <hr className='w-[30vw]'/>
                <p>I'm a highly intergratable teamworker that is strong in research and coding. My areas of expertise are computer science and economics.</p>
                
                
                <div className=''>
                  <div>
                    <div>
                      MS Suite
                    </div>
                    <div className='inline-block'>
                      <Box sx={{ zIndex:'5', color:"black", width: 400 , height: 10 }}>
                        <LinearProgress value={90} variant="determinate" />
                      </Box>
                    </div>
                    <p className='inline-block ml-5'>90%</p>

                  </div>
                  

                  <div>
                    <div>
                      Python
                    </div>
                    <div className='inline-block'>
                      <Box sx={{ zIndex:'5', width: 400 , height: 10 }}>
                        <LinearProgress value={88} variant="determinate" />
                      </Box>
                    </div>
                    <p className='inline-block ml-5'>88%</p>

                  </div>


                  <div>
                    <div>
                      JS/TS/React
                    </div>
                    <div className='inline-block'>
                      <Box sx={{ zIndex:'5', width: 400 , height: 10 }}>
                        <LinearProgress value={77} variant="determinate" />
                      </Box>
                    </div>
                    <p className='inline-block ml-5'>77%</p>

                  </div>


                  <div>
                    <div>
                      Java
                    </div>
                    <div className='inline-block'>
                      <Box sx={{ zIndex:'5', width: 400 , height: 10 }}>
                        <LinearProgress value={67} variant="determinate" />
                      </Box>
                    </div>
                    <p className='inline-block ml-5'>67%</p>

                  </div>

                  <div>
                    <div>
                      C++
                    </div>
                    <div className='inline-block'>
                      <Box sx={{ zIndex:'5', width: 400 , height: 10 }}>
                        <LinearProgress value={56} variant="determinate" />
                      </Box>
                    </div>
                    <p className='inline-block ml-5'>56%</p>

                  </div>
              </div>
            </div>


            
          </div>
        </div>

        <div id="Resume" className="h-[100vh] bg-[#0A0F2B]">
          <h1>Resume</h1>

        </div>

        <div id="Projects" className="block">
          <h1>Projects</h1>
        </div>

        <div id="Contact" className="">
          <h1>Contact</h1>
        </div>
      
      <div>
        <footer>

        </footer>
      </div>
    </main>
  )
}
