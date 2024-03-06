import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material-next/LinearProgress';
import Timelines from './timeline';
import Timelines2 from './timeline2';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddIcon from '@mui/icons-material/Add';

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
          src="/IMG_1695.jpg"
          width={1800}
          height={1117}
          alt='/image/IMG_1004.jpg'
        
        
        />
        <div className="stickys">
          <div className="text-center header grid gap-4 content-center">
              <ul className=''>
                <li className='mx-2 sm:mx-5'><a href="#Bgs">Home</a></li>
                <li className='mx-2 sm:mx-5'><a href="#About">About</a></li>
                <li className='mx-2 sm:mx-5'><a href="#Resume">Resume</a></li>
                <li className='mx-2 sm:mx-5'><a href="#Projects">Projects</a></li>
                <li className='mx-2 sm:mx-5'><a href='https://github.com/joeulam'>Github</a></li>
              </ul>
            </div>
          <hr className='w-1/2 lg:w-{20vw}'/>
        </div>

        




        <div>
          <div id="Mids">
            <h1 className="text-center mt-[30vh] block text-[#fdf0d5] text-[48px] lg:text-[64px]">Joey Lam</h1>
          </div>

          <div className="text-center text-[#fdf0d5]">
            <div className="mx-2 sm:mx-5 inline">
              Student
            </div>
            <div className="mx-2 sm:mx-5 inline">
              Software Engineer
            </div>
            <div className="mx-2 sm:mx-5 inline">
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

        <div id="About" className="h-[160vh] bg-[#03071e]">
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
                <p>Currently looking for a internship. If you think I'm a good fit, please contant me via <a className="hover:text-[#BF40BF]" href='mailto:joey.lamm@outlook.com'>joey.lamm@outlook.com</a>.</p>
                
                <div className='cv'>
                  <a href="/cv.pdf" download="Joey Lam CV">Download my CV</a>
                </div>

              
              </div>

              <div className='SkillsBlockR absolute mr-20 right-60'>
                <h2>Skills</h2>
                <hr className='w-[30vw]'/>
                <p>I'm a highly intergratable teamworker that is strong in research and coding. My areas of expertise are computer science and economics.</p>
                
                
                <div>
                  <div>
                    <div className="mt-5">
                      MS Suite
                    </div>
                    <div className='inline-block'>
                      <Box sx={{ zIndex:'5', color:"black", width: 400 , height: 10 }}>
                        <LinearProgress value={90} variant="determinate" />
                      </Box>
                    </div>

                    <div>
                      <p className='inline-block'>90%</p>
                    </div>

                  </div>
                  

                  <div>
                    <div className="mt-5">
                      Python
                    </div>
                    <div className='inline-block'>
                      <Box sx={{ zIndex:'5', width: 400 , height: 10 }}>
                        <LinearProgress value={88} variant="determinate" />
                      </Box>
                    </div>
                    <div>
                       <p className='inline-block'>88%</p>
                    </div>
                  </div>


                  <div>
                    <div className="mt-5">
                      JS/TS/React
                    </div>
                    <div className='inline-block'>
                      <Box sx={{ zIndex:'5', width: 400 , height: 10 }}>
                        <LinearProgress value={77} variant="determinate" />
                      </Box>
                    </div>
                    <div>
                      <p className='inline-block'>77%</p>
                    </div>
                  </div>


                  <div>
                    <div className="mt-5">
                      Java
                    </div>
                    <div className='inline-block'>
                      <Box sx={{ zIndex:'5', width: 400 , height: 10 }}>
                        <LinearProgress value={67} variant="determinate" />
                      </Box>
                    </div>
                    <div>
                      <p className='inline-block'>67%</p>
                    </div>
                  </div>

                  <div>
                    <div className="mt-5">
                      C++
                    </div>
                    <div className='inline-block'>
                      <Box sx={{ zIndex:'5', width: 400 , height: 10 }}>
                        <LinearProgress value={56} variant="determinate" />
                      </Box>
                    </div>
                    <div>
                      <p className='inline-block'>56%</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div id="Resume" className="Resume h-[150vh] bg-[#0A0F2B]">
          <h1 className='text-[#fdf0d5] ml-[45vw] pt-20'>Resume</h1>
          <h3 className='text-[#fdf0d5] ml-[43vw] mt-5' >My work exprience</h3>
          <div className="ml-[-3vw] mt-5">
            <Timelines/>
          </div>

          <div className="ml-[-3vw] mt-10">
              <h1 className='text-[#fdf0d5] ml-[42vw] mt-5'>Educational History</h1>
              <Timelines2/>
          </div>

        </div>

        <div id="Projects" className="block bg-[#0A0F2B] pb-[10vh]">
          <h1 className='text-[32px] text-white ml-[45vw] mb-[10vh] pt-[10vh]'>Projects</h1>
          <div className='ml-20 mr-20'>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
              <Grid xs={4}>
                <Card className='container'>
                      <Image
                        src="/website.png"
                        width={1800}
                        height={1117}
                        alt='/'
                      />
                      <div className='overlay'>
                        <div className='text'>
                          <h3 className='text-[24px] text-[#fdf0d5] w-[100%]'>My personal website</h3>
                          <p className='text-[12px] text-[#e5e5e5] w-[100%] mb-5'>Used Nextjs, csstailwind, and MUI</p>
                          <p className='text-[16px] text-[#fdf0d5] w-[100%]'>Created to showcase my acomplishments</p>
                        </div>
                      </div>

                </Card>
              </Grid>



              <Grid xs={4}>
                <Card className='container'>
                  <Image
                    src="/photoweb.png"
                    width={1800}
                    height={1117}
                    alt='/'
                  />
                  <div className='overlay'>
                        <div className='text'>
                          <h3 className='text-[24px] text-[#fdf0d5] w-[100%]'>Photography website</h3>
                          <p className='text-[12px] text-[#e5e5e5] w-[100%] mb-5'>Used Nextjs, CSSTailwind, MUI, and Framer motion</p>
                          <p className='text-[16px] text-[#fdf0d5] w-[100%]'>Created to host my photography photos</p>
                        </div>
                      </div>
                </Card>
              </Grid>


              <Grid xs={4}>
                <Card className='container'>
                  <Image
                      src="/algo.png"
                      width={1800}
                      height={1117}
                      alt='/'
                    />
                  <div className='overlay'>
                    <div className='text'>
                      <h3 className='text-[24px] text-[#fdf0d5] w-[100%]'>Algo.v1</h3>
                      <p className='text-[12px] text-[#e5e5e5] w-[100%] mb-5'>Used Python, Alpaca API, yfinance, Websocket and Pandas</p>
                      <p className='text-[16px] text-[#fdf0d5] w-[100%]'>Created a trading algorithm that took data from Yahoo finance and used Alpaca to execute the trades</p>

                    </div>
                  </div>
                </Card>
              </Grid>

              <Grid xs={4}>
                <Card className='container'>
                  <Image
                        src="/websitev1.png"
                        width={1800}
                        height={1117}
                        alt='/'
                      />
                  <div className='overlay'>
                    <div className='text'>
                    <h3 className='text-[24px] text-[#fdf0d5] w-[100%]'>Personal website V1</h3>
                          <p className='text-[12px] text-[#e5e5e5] w-[100%] mb-5'>Used Nextjs and csstailwind</p>
                          <p className='text-[16px] text-[#fdf0d5] w-[100%]'>My first iteration for a personal website</p>

                    </div>
                  </div>
                </Card>
                
              </Grid>

              <Grid xs={4}>
                <Card className='container'>
                  <Image
                        src="/heyo.web.png"
                        width={1800}
                        height={1117}
                        alt='/'
                      />
                  <div className='overlay'>
                    <div className='text'>
                      <h3 className='text-[24px] text-[#fdf0d5] w-[100%]'>Heyo</h3>
                      <p className='text-[12px] text-[#e5e5e5] w-[100%] mb-5'>Used Electron.js, CSS, HTML, and postgresql</p>
                      <p className='text-[16px] text-[#fdf0d5] w-[100%]'>Created during the height of Covid-19. Its an application that allows users to rate their feelings and write down hows their day </p>

                    </div>
                  </div>
                </Card>
                
              </Grid>

            </Grid>
          </div>
          
        </div>
      <div>
        <footer>
          <div className='h-[10vh] pl-20 pb-3 pt-8 bg-[#1b263b] '>
            <p className='text-[#DEDBDA]'>© Copyright 2023 Joey Lam</p>
          </div>
        </footer>
      </div>
     
    </main>
  )
}
