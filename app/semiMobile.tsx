import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material-next/LinearProgress';
import Timelines from './timeline';
import Timelines2 from './timeline2';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <main className="bgim">
      <SpeedInsights />
      <Analytics />

      {/* Navbar */}
      <div className="stickys bg-[#1b263b] py-3">
        <div className="header flex justify-center">
          <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-lg text-white">
            {[
              { name: "Home", link: "#Mids" },
              { name: "About", link: "#About" },
              { name: "Resume", link: "#Resume" },
              { name: "Projects", link: "#Projects" },
              { name: "Github", link: "https://github.com/joeulam" },
            ].map((item, index) => (
              <li key={index} className='hover:transition 2s'>
                <a href={item.link} className="hover:text-blue-400">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="w-1/2 mx-auto" />
      </div>

      {/* Hero Section */}
      <div id="Mids" className="flex flex-col items-center text-center pt-20 sm:pt-40 text-white">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl">Joey Lam</h1>
        <div className="flex flex-wrap justify-center gap-2 text-sm sm:text-lg mt-2">
          <span>Student</span>
          <span>Software Engineer</span>
          <span>Inventor</span>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-5">
          {[
            { href: 'https://www.instagram.com/joeulamb/', Icon: InstagramIcon },
            { href: 'https://www.linkedin.com/in/joey-lam-89057021b/', Icon: LinkedInIcon },
            { href: 'mailto:joey.lamm@outlook.com', Icon: EmailIcon },
          ].map(({ href, Icon }, index) => (
            <a key={index} href={href} className="hover:scale-110 transition-transform">
              <Icon sx={{ color: 'white', fontSize: '2rem' }} />
            </a>
          ))}
        </div>

        {/* Scroll Arrow */}
        <div className="mt-10">
          <a href="#About">
            <ExpandCircleDownIcon
              sx={{
                color: 'white',
                fontSize: '2.5rem',
                transition: 'transform 0.5s, color 0.5s',
                ':hover': { transform: 'scale(1.5)', color: '#F4A261' },
              }}
            />
          </a>
        </div>
      </div>

      {/* About Section */}
      <div id="About" className="bg-[#03071e] py-20 text-white text-center">
        <h1 className="text-2xl sm:text-3xl mb-10">About Me</h1>
        <div className="flex flex-col items-center">
          <Avatar src="/IMG_2811.jpg" sx={{ width: 100, height: 100 }} />
          <p className="max-w-sm text-sm sm:text-base mt-4 px-4">
            I'm a student at Boston University, majoring in Computer Science & Economics, class of 2027.
          </p>
        </div>

        {/* Profile & Skills */}
        <div className="mt-10 px-6 sm:px-12">
          <h2 className="text-xl">Skills</h2>
          <hr className="w-1/3 mx-auto mb-4" />
          {[
            { name: "Python", value: 88 },
            { name: "JS/TS/React", value: 77 },
            { name: "Java", value: 67 },
            { name: "Kotlin", value: 56 },
          ].map((skill, index) => (
            <div key={index} className="mt-4">
              <p>{skill.name}</p>
              <LinearProgress value={skill.value} variant="determinate" />
              <p>{skill.value}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Section */}
      <div id="Resume" className="bg-[#0A0F2B] text-white py-20 text-center">
        <h1 className="text-2xl sm:text-3xl mb-10">My Work Experience</h1>
        <Timelines />
        <h1 className="text-2xl sm:text-3xl mt-10">Educational History</h1>
        <Timelines2 />
      </div>

      {/* Projects Section */}
      <div id="Projects" className="py-20 text-white bg-[#1b263b] px-4 sm:px-12">
        <h1 className="text-2xl sm:text-3xl text-center mb-10">Projects</h1>
        <Grid container spacing={3}>
          {[
            { title: "Calico", img: "/IMG_6407.jpg", tech: "Next.js, Tailwind, MongoDB", desc: "A fiscal tracker with a cute twist." },
            { title: "BU Food Tracker", img: "/buftlogo.png", tech: "Next.js, Mantine UI", desc: "Hackathon project for Boston Hack 2024." },
            { title: "Personal Website", img: "/website.png", tech: "Next.js, Tailwind", desc: "Portfolio showcase." },
          ].map((project, index) => (
            <Grid xs={12} sm={6} md={4} key={index}>
              <Card className="p-4 bg-gray-800 rounded-lg shadow-lg">
                <Image src={project.img} width={600} height={400} alt="/" className="rounded-lg" />
                <h3 className="text-xl mt-4">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.tech}</p>
                <p className="text-sm">{project.desc}</p>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Footer */}
      <footer className="bg-[#1b263b] text-center py-4 text-gray-300">
        <p>© 2024 Joey Lam</p>
      </footer>
    </main>
  );
}
